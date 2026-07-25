#!/usr/bin/env node
/**
 * refs.mjs — 출처 레지스트리 관리 · 원문 내려받기 · 무결성 검증
 *
 * 왜 필요한가:
 *   각 절 끝에 "어디서 가져왔는지"를 남기려면 인용 키가 흔들리지 않아야 하고,
 *   링크는 언젠가 죽으므로 받을 수 있는 것은 받아서 보관해 두어야 한다.
 *
 * 어디에 보관하는가:
 *   references/library/{type}/{id}.{ext}  ← .gitignore 대상. 공개 저장소에 올라가지 않는다.
 *   저장소에는 메타데이터(해시·크기·받은 날짜)만 남는다.
 *   ⚠ 이 저장소는 public 이다. 저작권 있는 PDF 를 커밋하면 재배포가 되어 문제가 된다.
 *
 * 명령:
 *   node tools/refs.mjs list [type]        등록된 출처 목록
 *   node tools/refs.mjs arxiv <id...>      arXiv 메타데이터 조회 → 등록 → PDF 보관
 *   node tools/refs.mjs fetch [id...]      archivable 항목 내려받아 보관 (생략 시 미보관 전체)
 *   node tools/refs.mjs verify             보관본 재해시 · 링크 생존 확인
 *   node tools/refs.mjs scan               절 페이지의 data-ref 를 훑어 cited_by 갱신
 *   node tools/refs.mjs report             절별 출처 수 · 유형 다양성 · 미사용 항목
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const REG_PATH = join(ROOT, 'references', 'registry.json');
const LIB = join(ROOT, 'references', 'library');
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36';

const TYPE_LABEL = { paper: '논문', book: '교재', course: '강의', video: '영상', web: '웹문서', doc: '문서', code: '코드' };

function loadReg() { return JSON.parse(readFileSync(REG_PATH, 'utf8')); }
function saveReg(reg) { writeFileSync(REG_PATH, JSON.stringify(reg, null, 2) + '\n', 'utf8'); }

function sha256(buf) { return createHash('sha256').update(buf).digest('hex'); }

function extFor(contentType, url) {
  const ct = (contentType || '').toLowerCase();
  if (ct.includes('pdf')) return 'pdf';
  if (ct.includes('html')) return 'html';
  if (ct.includes('json')) return 'json';
  if (ct.includes('epub')) return 'epub';
  const m = /\.([a-z0-9]{2,5})(?:$|\?)/i.exec(url);
  return m ? m[1].toLowerCase() : 'bin';
}

async function download(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  return { buf, contentType: res.headers.get('content-type') || '', finalUrl: res.url };
}

/* PDF 인지 실제로 확인한다 — 랜딩 페이지 HTML 을 PDF 로 착각해 보관하는 사고를 막는다 */
function looksLikePdf(buf) { return buf.length > 4 && buf.subarray(0, 4).toString('latin1') === '%PDF'; }

function pageCount(path) {
  try {
    const out = execSync(`pdfinfo ${JSON.stringify(path)} 2>/dev/null`, { encoding: 'utf8' });
    const m = /Pages:\s+(\d+)/.exec(out);
    return m ? Number(m[1]) : null;
  } catch { return null; }
}

/* ------------------------------------------------------------------ list */
function cmdList(typeFilter) {
  const reg = loadReg();
  const rows = Object.entries(reg.refs).filter(([, r]) => !typeFilter || r.type === typeFilter);
  const byType = {};
  for (const [id, r] of rows) (byType[r.type] = byType[r.type] || []).push([id, r]);

  for (const t of Object.keys(byType).sort()) {
    console.log(`\n[${TYPE_LABEL[t] || t}]  ${byType[t].length}건`);
    for (const [id, r] of byType[t]) {
      const arc = r.archived ? '보관됨' : (r.archivable ? '미보관' : '보관불가');
      const cites = r.cited_by?.length ? ` ←${r.cited_by.length}절` : '';
      console.log(`  ${id.padEnd(26)} ${arc.padEnd(7)}${cites}  ${r.title.slice(0, 52)}`);
    }
  }
  console.log(`\n합계 ${rows.length}건`);
}

/* ----------------------------------------------------------------- arxiv */
async function cmdArxiv(ids) {
  if (!ids.length) return console.log('사용법: node tools/refs.mjs arxiv 1706.03762 [...]');
  const reg = loadReg();

  for (const raw of ids) {
    const aid = raw.replace(/^arxiv:/i, '').trim();
    process.stdout.write(`arXiv:${aid} … `);
    try {
      const res = await fetch(`http://export.arxiv.org/api/query?id_list=${encodeURIComponent(aid)}`,
        { headers: { 'User-Agent': UA } });
      const xml = await res.text();
      /* 피드 전체가 아니라 <entry> 안에서만 뽑는다.
         (피드 최상단의 <title>은 "ArXiv Query: ..." 라서 논문 제목이 아니다) */
      const entry = /<entry>([\s\S]*?)<\/entry>/.exec(xml)?.[1];
      if (!entry) { console.log('메타데이터 없음'); continue; }
      const pick = (tag) => {
        const m = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`).exec(entry);
        return m ? m[1].replace(/\s+/g, ' ').trim() : null;
      };
      const title = pick('title');
      if (!title) { console.log('제목 없음'); continue; }
      const authors = [...entry.matchAll(/<name>([\s\S]*?)<\/name>/g)].map((m) => m[1].trim());
      const published = pick('published');
      const year = published ? Number(published.slice(0, 4)) : null;
      const first = authors[0]?.split(/\s+/).pop()?.toLowerCase().replace(/[^a-z]/g, '') || 'anon';
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').split('-').filter(Boolean).slice(0, 3).join('-');
      const id = `${first}${year || ''}-${slug}`;

      reg.refs[id] = {
        type: 'paper',
        title,
        authors,
        year,
        venue: pick('arxiv:journal_ref') || 'arXiv preprint',
        url: `https://arxiv.org/abs/${aid}`,
        file_url: `https://arxiv.org/pdf/${aid}`,
        arxiv: aid,
        doi: pick('arxiv:doi'),
        access: 'open',
        archivable: true,
        license: 'arXiv 공개. 개인 학습용 보관 — 저장소에 커밋하지 않는다.',
        checked: new Date().toISOString().slice(0, 10),
        ...(reg.refs[id] || {})
      };
      console.log(`등록: ${id}`);
    } catch (e) { console.log(`실패 — ${e.message}`); }
  }
  saveReg(reg);
  console.log('\nregistry.json 갱신 완료. 원문을 받으려면: node tools/refs.mjs fetch');
}

/* ----------------------------------------------------------------- fetch */
async function cmdFetch(ids) {
  const reg = loadReg();
  let targets = Object.entries(reg.refs).filter(([, r]) => r.archivable !== false);
  if (ids.length) targets = targets.filter(([id]) => ids.includes(id));
  else targets = targets.filter(([, r]) => !r.archived);

  if (!targets.length) return console.log('내려받을 항목이 없습니다.');
  console.log(`${targets.length}건 내려받습니다.\n`);

  let ok = 0, fail = 0;
  for (const [id, r] of targets) {
    const url = r.file_url || r.url;
    process.stdout.write(`  ${id.padEnd(26)} `);
    try {
      const { buf, contentType, finalUrl } = await download(url);
      const ext = extFor(contentType, finalUrl);
      const dir = join(LIB, r.type);
      mkdirSync(dir, { recursive: true });
      const path = join(dir, `${id}.${ext}`);
      writeFileSync(path, buf);

      const isPdf = looksLikePdf(buf);
      const pages = isPdf ? pageCount(path) : null;

      r.archived = {
        path: relative(ROOT, path),
        sha256: sha256(buf),
        bytes: buf.length,
        content_type: contentType.split(';')[0] || null,
        pages,
        fetched: new Date().toISOString().slice(0, 10),
        source_url: finalUrl
      };
      /* 랜딩 페이지를 받은 경우 알려준다 — PDF 직링크를 file_url 에 넣어야 한다 */
      if (ext === 'html' && r.type !== 'web' && r.type !== 'course') {
        r.archived.warning = 'HTML 랜딩 페이지를 받았습니다. PDF 직접 주소를 file_url 에 지정하세요.';
      }
      console.log(`${(buf.length / 1024).toFixed(0).padStart(6)} KB  ${ext}${pages ? `  ${pages}p` : ''}` +
        (r.archived.warning ? '  ⚠ 랜딩페이지' : ''));
      ok++;
    } catch (e) { console.log(`실패 — ${e.message}`); fail++; }
  }
  saveReg(reg);
  console.log(`\n완료: 성공 ${ok} · 실패 ${fail}`);
  console.log(`보관 위치: references/library/  (.gitignore 대상 — 저장소에 올라가지 않습니다)`);
}

/* ---------------------------------------------------------------- verify */
async function cmdVerify() {
  const reg = loadReg();
  let bad = 0, checked = 0;

  console.log('=== 보관본 무결성 ===');
  for (const [id, r] of Object.entries(reg.refs)) {
    if (!r.archived) continue;
    checked++;
    const p = join(ROOT, r.archived.path);
    if (!existsSync(p)) { console.log(`  ✗ ${id}: 파일 없음 (${r.archived.path})`); bad++; continue; }
    const cur = sha256(readFileSync(p));
    if (cur !== r.archived.sha256) { console.log(`  ✗ ${id}: 해시 불일치 — 파일이 바뀌었습니다`); bad++; continue; }
    const kb = (statSync(p).size / 1024).toFixed(0);
    console.log(`  ✓ ${id.padEnd(26)} ${kb.padStart(6)} KB`);
  }
  console.log(checked ? `\n${checked}건 중 ${bad}건 문제` : '  보관된 항목이 없습니다.');

  console.log('\n=== 링크 생존 확인 ===');
  for (const [id, r] of Object.entries(reg.refs)) {
    if (!r.url) continue;
    try {
      const res = await fetch(r.url, { method: 'HEAD', headers: { 'User-Agent': UA }, redirect: 'follow' });
      const mark = res.ok ? '✓' : (res.status === 403 || res.status === 405 ? '~' : '✗');
      if (!res.ok) bad += res.status >= 400 && res.status !== 403 && res.status !== 405 ? 1 : 0;
      console.log(`  ${mark} ${String(res.status).padEnd(4)} ${id}`);
    } catch (e) { console.log(`  ✗ ---  ${id} (${e.message})`); bad++; }
  }
  console.log('\n~ 는 자동 요청 차단(403/405)으로, 브라우저에서는 대개 정상입니다.');
  process.exit(bad ? 1 : 0);
}

/* ------------------------------------------------------------------ scan */
function htmlFiles(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) htmlFiles(p, out);
    else if (n.endsWith('.html')) out.push(p);
  }
  return out;
}

function collectCitations() {
  const used = {};                       // refId -> Set(절번호)
  for (const f of htmlFiles(join(ROOT, 'chapters'))) {
    const html = readFileSync(f, 'utf8');
    const sec = /<body[^>]*\bdata-section="([^"]+)"/.exec(html)?.[1];
    if (!sec) continue;
    for (const m of html.matchAll(/data-ref="([^"]+)"/g)) {
      (used[m[1]] = used[m[1]] || new Set()).add(sec);
    }
  }
  return used;
}

function cmdScan() {
  const reg = loadReg();
  const used = collectCitations();
  let unknown = 0;

  for (const [id, r] of Object.entries(reg.refs)) {
    const s = used[id];
    if (s) r.cited_by = [...s].sort();
    else delete r.cited_by;
  }
  for (const id of Object.keys(used)) {
    if (!reg.refs[id]) {
      console.log(`  ✗ 페이지가 인용한 "${id}" 가 registry.json 에 없습니다 → ${[...used[id]].join(', ')}`);
      unknown++;
    }
  }
  saveReg(reg);
  console.log(`cited_by 갱신 완료 — 인용된 출처 ${Object.keys(used).length}종` +
    (unknown ? `, 미등록 ${unknown}건` : ''));
  if (unknown) process.exit(1);
}

/* ---------------------------------------------------------------- report */
function cmdReport() {
  const reg = loadReg();
  const used = collectCitations();

  /* 절별 출처 수와 유형 다양성 */
  const perSection = {};
  for (const [id, secs] of Object.entries(used)) {
    const t = reg.refs[id]?.type || '?';
    for (const s of secs) {
      const e = (perSection[s] = perSection[s] || { n: 0, types: new Set() });
      e.n++; e.types.add(t);
    }
  }

  console.log('=== 절별 출처 현황 ===');
  const secs = Object.keys(perSection).sort((a, b) => parseFloat(a) - parseFloat(b));
  if (!secs.length) console.log('  아직 인용이 있는 절이 없습니다.');
  for (const s of secs) {
    const e = perSection[s];
    const flag = e.n < 4 ? '  ← 출처 4개 미만' : (e.types.size < 3 ? '  ← 유형 3종 미만' : '');
    console.log(`  ${s.padEnd(6)} 출처 ${String(e.n).padStart(2)}개 · 유형 ${e.types.size}종 (${[...e.types].map(t => TYPE_LABEL[t] || t).join('/')})${flag}`);
  }

  console.log('\n=== 레지스트리 요약 ===');
  const all = Object.entries(reg.refs);
  const byType = {};
  for (const [, r] of all) byType[r.type] = (byType[r.type] || 0) + 1;
  console.log('  유형별: ' + Object.entries(byType).map(([t, n]) => `${TYPE_LABEL[t] || t} ${n}`).join(' · '));
  console.log(`  보관됨: ${all.filter(([, r]) => r.archived).length} / 보관가능 ${all.filter(([, r]) => r.archivable !== false).length}`);
  const unused = all.filter(([id]) => !used[id]).map(([id]) => id);
  console.log(`  아직 인용되지 않음: ${unused.length}건`);
  if (unused.length && unused.length <= 40) console.log('    ' + unused.join(', '));
}

/* ------------------------------------------------------------------ main */
const [cmd, ...args] = process.argv.slice(2);
const run = {
  list: () => cmdList(args[0]),
  arxiv: () => cmdArxiv(args),
  fetch: () => cmdFetch(args),
  verify: () => cmdVerify(),
  scan: () => cmdScan(),
  report: () => cmdReport()
}[cmd];

if (!run) {
  console.log(`사용법:
  node tools/refs.mjs list [type]      등록된 출처 목록 (type: paper|book|course|video|web)
  node tools/refs.mjs arxiv <id...>    arXiv 메타데이터 조회 → 등록
  node tools/refs.mjs fetch [id...]    원문 내려받아 references/library/ 에 보관
  node tools/refs.mjs verify           보관본 해시 재검증 · 링크 생존 확인
  node tools/refs.mjs scan             절 페이지의 data-ref → cited_by 갱신
  node tools/refs.mjs report           절별 출처 수 · 유형 다양성 · 미사용 항목`);
  process.exit(1);
}
await run();
