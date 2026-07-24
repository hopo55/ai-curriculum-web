#!/usr/bin/env node
/**
 * PROGRESS.md 를 커리큘럼 데이터 + 페이지 레지스트리로부터 다시 만든다.
 * 손으로 표를 고치면 어긋나므로, 절을 추가한 뒤에는 이 스크립트를 돌린다.
 *
 * 사용법: node tools/build-progress.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function loadGlobals(relPath) {
  const sandbox = {};
  new Function('window', readFileSync(join(ROOT, relPath), 'utf8'))(sandbox);
  return sandbox;
}

const { CURRICULUM, CURRICULUM_TOTALS } = loadGlobals('assets/js/curriculum-data.js');
const { PAGES } = loadGlobals('assets/js/pages.js');

const madeTotal = Object.keys(PAGES).length;
const pct = (a, b) => (b === 0 ? 0 : Math.round((a / b) * 100));

let out = `# PROGRESS — 진행 현황

> 이 파일은 자동 생성됩니다. 손으로 고치지 말고 \`node tools/build-progress.mjs\` 를 실행하세요.

**전체: ${madeTotal} / ${CURRICULUM_TOTALS.sections} 절 (${pct(madeTotal, CURRICULUM_TOTALS.sections)}%)**
· ${CURRICULUM_TOTALS.chapters}장 · ${CURRICULUM_TOTALS.bullets}개 개념 항목

| 장 | 제목 | 절 | 작성됨 | 진행 |
|---:|---|---:|---:|---|
`;

for (const ch of CURRICULUM) {
  const total = ch.sections.length;
  const made = ch.sections.filter((s) => PAGES[s.id]).length;
  const p = pct(made, total);
  const bar = '█'.repeat(Math.round(p / 10)) + '░'.repeat(10 - Math.round(p / 10));
  out += `| ${ch.n} | ${ch.title} | ${total} | ${made} | \`${bar}\` ${p}% |\n`;
}

/* 작성된 절 목록 */
const made = [];
for (const ch of CURRICULUM) {
  for (const s of ch.sections) {
    if (PAGES[s.id]) made.push({ id: s.id, title: s.title, meta: PAGES[s.id] });
  }
}

out += `\n## 작성된 절\n\n`;
if (made.length === 0) {
  out += `아직 없습니다. \`PROMPTS.md\` 를 참고해 첫 절을 만들어 보세요.\n\n`;
  out += `권장 시작점: **2.3 내적과 유사도** — 위젯 카탈로그 A/C/D/E 를 모두 자연스럽게 쓸 수 있고,\n`;
  out += `수식이 짧아 형식을 검토하기 좋습니다.\n`;
} else {
  out += `| 절 | 제목 | 갱신 | 요약 |\n|---|---|---|---|\n`;
  for (const m of made) {
    out += `| [${m.id}](${m.meta.href}) | ${m.title} | ${m.meta.updated || '—'} | ${m.meta.summary || '—'} |\n`;
  }
}

out += `\n## 권장 진행 순서\n\n`;
out += `의존성 순서대로 쌓는 편이 이해가 빠릅니다.\n\n`;
out += `1. **2장 선형대수** — 이후 모든 장의 언어\n`;
out += `2. **3장 미적분과 최적화** — 학습이 어떻게 일어나는가\n`;
out += `3. **4장 확률과 통계** — 손실함수와 생성 모델의 근거\n`;
out += `4. **6장 딥러닝 기초** — 여기까지가 토대\n`;
out += `5. 이후는 관심 주제 우선 (7장 비전 · 12장 Transformer · 13장 LLM …)\n`;

writeFileSync(join(ROOT, 'PROGRESS.md'), out, 'utf8');
console.log(`PROGRESS.md 생성 완료 — ${madeTotal} / ${CURRICULUM_TOTALS.sections} 절`);
