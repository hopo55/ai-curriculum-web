#!/usr/bin/env node
/**
 * check.mjs — 절 페이지가 SPEC.md 규약을 지켰는지 검사한다.
 *
 * "빠지는 부분 없이"를 사람 눈이 아니라 기계가 보증하게 만드는 장치.
 * 가장 중요한 검사는 (3) '칩 개수 == 커리큘럼 항목 개수' 다.
 *
 * 사용법:
 *   node tools/check.mjs            전체 검사
 *   node tools/check.mjs 2.3 12.3   특정 절만
 *
 * 종료 코드: 오류가 하나라도 있으면 1
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative, posix } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/* ---------- 브라우저용 classic script 를 Node 에서 읽어오기 ---------- */
function loadGlobals(relPath) {
  const sandbox = {};
  const src = readFileSync(join(ROOT, relPath), 'utf8');
  new Function('window', src)(sandbox);
  return sandbox;
}

const { CURRICULUM } = loadGlobals('assets/js/curriculum-data.js');
const { PAGES } = loadGlobals('assets/js/pages.js');

/* 출처 레지스트리 — 인용 키가 실재하는지 검사하는 데 쓴다 */
let REFS = {};
try {
  REFS = JSON.parse(readFileSync(join(ROOT, 'references/registry.json'), 'utf8')).refs || {};
} catch {
  console.warn('! references/registry.json 을 읽지 못했습니다. 출처 검사를 건너뜁니다.');
}

const SECTION = {};
for (const ch of CURRICULUM) for (const s of ch.sections) SECTION[s.id] = s;

/* ---------- 규약 상수 ---------- */
const REQUIRED_SECS = [
  ['s-summary',    '한 줄 요약 + 학습 목표'],
  ['s-intuition',  '직관'],
  ['s-definition', '형식적 정의'],
  ['s-math',       '수식과 기호표'],
  ['s-derivation', '유도'],
  ['s-example',    '손으로 푸는 수치 예제'],
  ['s-lab',        '인터랙티브 위젯'],
  ['s-traps',      '흔한 오해와 함정'],
  ['s-code',       '코드'],
  ['s-quiz',       '자가 점검'],
  ['s-links',      '연결·참고']
];
const MIN_WIDGETS = 3;
const MIN_TRAPS = 3;
const MIN_QUIZ = 4;
const MIN_REFS = 4;        // 절당 최소 출처 개수
const MIN_REF_TYPES = 3;   // 최소 유형 종류 (논문·교재·강의·영상·웹문서)
const MIN_HL = 3;          // 절당 최소 형광펜 (SPEC §5.4-b, 권장 5~10)

/* ---------- 결과 수집 ---------- */
let errors = 0, warns = 0;
const log = [];
function err(file, msg) { errors++; log.push(`  ✗ ${msg}`); }
function warn(file, msg) { warns++; log.push(`  ! ${msg}`); }

/* ---------- 대상 파일 모으기 ---------- */
function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

const only = process.argv.slice(2);
let files = walk(join(ROOT, 'chapters'));
if (only.length) {
  files = files.filter(f => only.some(id => f.includes(`${id}-`) || f.includes(`/${id}.`)));
}

/* ---------- 페이지별 검사 ---------- */
const seenIds = new Set();

for (const file of files) {
  const rel = relative(ROOT, file).split('\\').join('/');
  const html = readFileSync(file, 'utf8');
  const before = errors + warns;
  log.push(`\n${rel}`);

  /* 파일명 규칙: 소문자만 (GitHub Pages 는 대소문자를 구분한다) */
  if (/[A-Z]/.test(rel)) {
    err(rel, `경로에 대문자가 있습니다. GitHub Pages 는 대소문자를 구분하므로 소문자로 바꾸세요: ${rel}`);
  }

  /* data-section */
  const mSec = /<body[^>]*\bdata-section="([^"]+)"/.exec(html);
  if (!mSec) {
    err(rel, 'body 에 data-section 속성이 없습니다.');
    continue;
  }
  const id = mSec[1];
  seenIds.add(id);

  const cur = SECTION[id];
  if (!cur) {
    err(rel, `커리큘럼에 없는 절 번호입니다: ${id}`);
    continue;
  }

  /* 파일명과 절 번호가 일치하는지 */
  const base = posix.basename(rel);
  if (!base.startsWith(`${id}-`)) {
    err(rel, `파일명이 절 번호로 시작해야 합니다: "${id}-슬러그.html" (현재: ${base})`);
  }

  /* data-root 깊이 */
  const depth = rel.split('/').length - 1;
  const expectRoot = '../'.repeat(depth);
  const mRoot = /<body[^>]*\bdata-root="([^"]*)"/.exec(html);
  if (!mRoot) err(rel, 'body 에 data-root 속성이 없습니다.');
  else if (mRoot[1] !== expectRoot) {
    err(rel, `data-root 가 깊이와 맞지 않습니다. 기대: "${expectRoot}", 실제: "${mRoot[1]}"`);
  }

  /* (1) 필수 섹션 11개 + 헤더 + 칩 */
  if (!/class="sechead"/.test(html)) err(rel, '.sechead (0. 헤더) 가 없습니다.');
  if (!/class="chips"/.test(html)) err(rel, '.chips (1. 다루는 항목) 가 없습니다.');
  for (const [secId, label] of REQUIRED_SECS) {
    if (!new RegExp(`id="${secId}"`).test(html)) {
      err(rel, `필수 섹션 누락: #${secId} (${label})`);
    }
  }

  /* (2) 칩 개수 == 커리큘럼 항목 개수  ← 커버리지 보증의 핵심 */
  const chipsBlock = /<nav class="chips"[\s\S]*?<\/nav>/.exec(html);
  if (!chipsBlock) {
    err(rel, '.chips 블록을 찾지 못했습니다.');
  } else {
    const chips = chipsBlock[0].match(/class="chip"/g) || [];
    if (chips.length !== cur.bullets.length) {
      err(rel, `다루는 항목 칩이 ${chips.length}개인데 커리큘럼 항목은 ${cur.bullets.length}개입니다. ` +
        `빠진 항목이 없는지 확인하세요.\n      커리큘럼 항목: ${cur.bullets.join(', ')}`);
    }
    /* 칩이 가리키는 앵커가 실제로 있는지 */
    const hrefs = [...chipsBlock[0].matchAll(/href="#([^"]+)"/g)].map(m => m[1]);
    for (const h of hrefs) {
      if (!new RegExp(`id="${h}"`).test(html)) {
        err(rel, `칩이 가리키는 앵커 #${h} 가 페이지에 없습니다.`);
      }
    }
    if (hrefs.length !== chips.length) {
      warn(rel, `칩 ${chips.length}개 중 ${hrefs.length}개만 앵커를 갖고 있습니다. 모든 칩에 href 를 주세요.`);
    }
  }

  /* (3) 기호표 */
  if (!/class="symtab"/.test(html)) {
    err(rel, '기호표(.symtab)가 없습니다. 수식에 쓰인 모든 기호를 표로 설명해야 합니다.');
  }

  /* (4) 위젯 최소 개수 */
  const widgets = html.match(/data-widget="/g) || [];
  if (widgets.length < MIN_WIDGETS) {
    err(rel, `인터랙티브 위젯이 ${widgets.length}개입니다. 최소 ${MIN_WIDGETS}개가 필요합니다.`);
  }
  /* 위젯마다 관찰 포인트 안내 */
  const watches = html.match(/class="watch"/g) || [];
  if (watches.length < widgets.length) {
    warn(rel, `위젯 ${widgets.length}개 중 ${watches.length}개만 .watch 안내가 있습니다.`);
  }
  /* 등록된 위젯 이름과 사용된 이름이 맞는지 */
  const used = new Set([...html.matchAll(/data-widget="([^"]+)"/g)].map(m => m[1]));
  const registered = new Set([...html.matchAll(/WIDGETS\.register\(\s*['"]([^'"]+)['"]/g)].map(m => m[1]));
  for (const u of used) {
    if (!registered.has(u)) err(rel, `위젯 "${u}" 가 HTML에 있는데 WIDGETS.register 로 등록되지 않았습니다.`);
  }
  for (const r of registered) {
    if (!used.has(r)) warn(rel, `위젯 "${r}" 를 등록했지만 HTML에서 쓰지 않았습니다.`);
  }

  /* (5) 함정 / 퀴즈 최소 개수 */
  const traps = html.match(/note--trap/g) || [];
  if (traps.length < MIN_TRAPS) {
    warn(rel, `'흔한 오해와 함정'이 ${traps.length}개입니다. ${MIN_TRAPS}개 이상 권장.`);
  }
  const quizzes = html.match(/class="q"/g) || [];
  if (quizzes.length < MIN_QUIZ) {
    warn(rel, `자가 점검 문제가 ${quizzes.length}개입니다. ${MIN_QUIZ}개 이상 권장.`);
  }
  /* 정답이 지정되지 않은 문제 */
  const qBlocks = html.match(/<div class="q">[\s\S]*?<\/div>\s*<\/div>/g) || [];
  qBlocks.forEach((q, i) => {
    if (!/data-correct="true"/.test(q)) warn(rel, `${i + 1}번 문제에 data-correct="true" 선택지가 없습니다.`);
  });

  /* (5-b) 형광펜과 핵심 수식 — SPEC §5.4-b
         정의·성질에 <span class="hl">, 절의 뼈대가 되는 식에 .eq--key 를 단다.
         훑어보기만 해도 절의 뼈대가 보이게 하는 장치라 빠지면 절의 값이 크게 떨어진다. */
  const hls = html.match(/<span class="hl">/g) || [];
  if (hls.length < MIN_HL) {
    warn(rel, `형광펜(<span class="hl">)이 ${hls.length}개입니다. 정의·성질에 ${MIN_HL}개 이상 다세요 ` +
      `(SPEC §5.4-b, 커리큘럼 항목 수에 맞춰 보통 5~10개).`);
  }
  if (/<mark[\s>]/.test(html)) {
    err(rel, '<mark> 을 쓰지 마세요. 브라우저 기본 배경이 밝은 노랑이라 스타일이 늦게 오면 ' +
      '다크 모드에서 글자가 보이지 않습니다. <span class="hl"> 을 쓰세요 (SPEC §5.4-b).');
  }
  if (!/class="eq eq--key"/.test(html) && /class="eq"/.test(html)) {
    warn(rel, '핵심 수식 표시(.eq--key)가 없습니다. 절의 뼈대가 되는 식 한둘에 다세요 (SPEC §5.4-b).');
  }

  /* (6) 출처 — SOURCES.md 규약 */
  const refsBlock = /<ol class="refs"[\s\S]*?<\/ol>/.exec(html);
  if (!refsBlock) {
    err(rel, '출처 목록(<ol class="refs">)이 없습니다. 파트 12 에 출처를 4개 이상 남겨야 합니다.');
  } else {
    const items = [...refsBlock[0].matchAll(/<li[^>]*\bdata-ref="([^"]+)"/g)].map((m) => m[1]);
    if (items.length < MIN_REFS) {
      err(rel, `출처가 ${items.length}개입니다. 최소 ${MIN_REFS}개가 필요합니다 (SOURCES.md §1).`);
    }
    /* 유형 다양성 — 논문만 잔뜩 거는 것을 막는다 */
    const types = new Set([...refsBlock[0].matchAll(/data-type="([^"]+)"/g)].map((m) => m[1]));
    if (types.size < MIN_REF_TYPES) {
      err(rel, `출처 유형이 ${types.size}종입니다(${[...types].join(', ') || '없음'}). ` +
        `최소 ${MIN_REF_TYPES}종을 섞으세요 — 논문·교재·강의·영상·웹문서.`);
    }
    /* 레지스트리 등록 확인 */
    if (Object.keys(REFS).length) {
      for (const id of items) {
        if (!REFS[id]) err(rel, `출처 "${id}" 가 references/registry.json 에 없습니다. 먼저 등록하세요.`);
      }
    }
    /* 어느 부분을 인용했는지 */
    const wheres = (refsBlock[0].match(/class="ref__where"/g) || []).length;
    if (wheres < items.length) {
      err(rel, `출처 ${items.length}개 중 ${wheres}개만 ref__where 가 있습니다. ` +
        `"이 출처의 어느 부분이 이 절의 무엇을 뒷받침하는지"를 모두 적으세요.`);
    }
    /* 앵커 id 규칙 */
    for (const id of items) {
      if (!new RegExp(`id="ref-${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(refsBlock[0])) {
        warn(rel, `출처 "${id}" 의 id 가 "ref-${id}" 형식이 아닙니다. 인라인 인용 링크가 깨집니다.`);
      }
    }
  }
  /* 본문 인라인 인용도 레지스트리에 있어야 한다 */
  if (Object.keys(REFS).length) {
    for (const m of html.matchAll(/class="cite"[^>]*\bdata-ref="([^"]+)"/g)) {
      if (!REFS[m[1]]) err(rel, `인라인 인용 "${m[1]}" 가 registry.json 에 없습니다.`);
    }
  }

  /* (7) 절대경로 금지 — GitHub Pages 는 /<repo>/ 하위에서 서빙된다 */
  for (const m of html.matchAll(/\b(?:src|href)="(\/[^/][^"]*)"/g)) {
    err(rel, `절대경로는 GitHub Pages 에서 깨집니다: ${m[1]} → 상대경로로 바꾸세요.`);
  }

  /* (8) 외부 '리소스 로드' 금지 (오프라인 동작 원칙).
         단순 하이퍼링크(<a href>)는 출처 인용에 필요하므로 허용한다. */
  for (const m of html.matchAll(/\bsrc="(https?:\/\/[^"]+)"/g)) {
    err(rel, `외부 리소스를 불러오고 있습니다: ${m[1]} → 저장소 안에 포함시키세요.`);
  }
  for (const m of html.matchAll(/<link\b[^>]*\bhref="(https?:\/\/[^"]+)"/g)) {
    err(rel, `외부 스타일시트/리소스를 참조합니다: ${m[1]} → vendor/ 에 넣으세요.`);
  }
  if (/<img[^>]+src="(?!data:)/.test(html)) {
    err(rel, '<img> 로 외부 이미지 파일을 참조했습니다. 그림은 인라인 SVG/Canvas 로 그려야 합니다.');
  }

  /* (9) 내부 링크가 실제로 존재하는지 */
  for (const m of html.matchAll(/\bhref="((?!#|https?:|data:|mailto:)[^"]+)"/g)) {
    const target = m[1].split('#')[0];
    if (!target) continue;
    const abs = join(dirname(file), target);
    if (!existsSync(abs)) err(rel, `링크가 가리키는 파일이 없습니다: ${m[1]}`);
  }

  /* (10) pages.js 등록 여부 */
  if (!PAGES[id]) {
    err(rel, `assets/js/pages.js 에 "${id}" 가 등록되지 않았습니다. 등록해야 목차와 검색에 나타납니다.`);
  } else {
    const wantHref = rel;
    if (PAGES[id].href !== wantHref) {
      err(rel, `pages.js 의 href 가 실제 경로와 다릅니다. 기대: "${wantHref}", 등록됨: "${PAGES[id].href}"`);
    }
  }

  /* (11) 접근성·품질 소소한 것들 */
  if (!/<html lang="ko"/.test(html)) warn(rel, '<html lang="ko"> 가 아닙니다.');
  if (!/name="viewport"/.test(html)) err(rel, 'viewport 메타 태그가 없습니다. 모바일에서 깨집니다.');
  if (!/data-act="done"/.test(html)) warn(rel, '학습 완료 버튼이 없습니다.');
  if (!/class="pager"/.test(html)) warn(rel, '이전/다음 네비게이션(.pager)이 없습니다.');

  if (errors + warns === before) log.push('  ✓ 통과');
}

/* ---------- 레지스트리 역방향 검사 ---------- */
log.push('\n[pages.js 레지스트리]');
let regProblem = false;
for (const [id, meta] of Object.entries(PAGES)) {
  if (!SECTION[id]) { err('pages.js', `커리큘럼에 없는 절이 등록되어 있습니다: ${id}`); regProblem = true; }
  else if (!existsSync(join(ROOT, meta.href))) {
    err('pages.js', `등록된 파일이 존재하지 않습니다: ${id} → ${meta.href}`); regProblem = true;
  }
  if (!meta.summary) { warn('pages.js', `${id} 에 summary 가 없습니다 (검색 결과에 표시됩니다).`); regProblem = true; }
}
if (!regProblem) log.push('  ✓ 통과');

/* ---------- 출력 ---------- */
console.log(log.join('\n'));

const total = Object.keys(SECTION).length;
console.log(
  `\n검사한 페이지: ${files.length}개` +
  `   등록된 절: ${Object.keys(PAGES).length} / ${total}` +
  `   오류: ${errors}   경고: ${warns}`
);

if (errors > 0) {
  console.log('\n오류를 고쳐야 합니다. (경고는 권장 사항이라 통과를 막지 않습니다.)');
  process.exit(1);
}
console.log('\n모든 필수 검사를 통과했습니다.');
