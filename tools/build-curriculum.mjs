#!/usr/bin/env node
/**
 * curriculum/ai_curriculum_v2.md 를 파싱해 assets/js/curriculum-data.js 를 생성한다.
 *
 * 이 파일은 "커리큘럼 목차의 유일한 진실 공급원(single source of truth)"이다.
 * - index.html 의 전체 목차 렌더링
 * - 각 절 페이지의 '다루는 항목' 칩 개수 검증 (tools/check.mjs)
 * 두 곳 모두 여기서 생성된 데이터를 사용한다.
 *
 * 사용법:  node tools/build-curriculum.mjs
 * 주의:    assets/js/curriculum-data.js 는 절대 손으로 편집하지 말 것 (매번 덮어씀).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'curriculum', 'ai_curriculum_v2.md');
const OUT = join(ROOT, 'assets', 'js', 'curriculum-data.js');

const RE_CHAPTER = /^#\s+(\d+)\.\s+(.+?)\s*$/;
const RE_SECTION = /^##\s+(\d+\.\d+)\s+(.+?)\s*$/;
const RE_BULLET = /^-\s+(.+?)\s*$/;

function parse(markdown) {
  const chapters = [];
  let chapter = null;
  let section = null;

  for (const raw of markdown.split(/\r?\n/)) {
    const line = raw.trimEnd();

    const mChapter = RE_CHAPTER.exec(line);
    if (mChapter) {
      chapter = { n: Number(mChapter[1]), title: mChapter[2], sections: [] };
      chapters.push(chapter);
      section = null;
      continue;
    }

    const mSection = RE_SECTION.exec(line);
    if (mSection) {
      if (!chapter) throw new Error(`장 없이 절이 등장했습니다: ${line}`);
      section = { id: mSection[1], title: mSection[2], bullets: [] };
      chapter.sections.push(section);
      continue;
    }

    // 불릿은 절 안에서만 의미가 있다. 문서 상단 머리말의 불릿은 무시한다.
    const mBullet = RE_BULLET.exec(line);
    if (mBullet && section) section.bullets.push(mBullet[1]);
  }
  return chapters;
}

const chapters = parse(readFileSync(SRC, 'utf8'));

const totals = chapters.reduce(
  (acc, c) => {
    acc.sections += c.sections.length;
    acc.bullets += c.sections.reduce((s, x) => s + x.bullets.length, 0);
    return acc;
  },
  { chapters: chapters.length, sections: 0, bullets: 0 }
);

// 파싱 정합성 검사 — 조용히 잘못된 데이터를 내보내는 것보다 실패하는 편이 낫다.
if (totals.chapters === 0) throw new Error('장을 하나도 찾지 못했습니다.');
for (const c of chapters) {
  if (c.sections.length === 0) throw new Error(`${c.n}장에 절이 없습니다: ${c.title}`);
  for (const s of c.sections) {
    if (s.bullets.length === 0) throw new Error(`${s.id} 절에 항목이 없습니다: ${s.title}`);
    if (!s.id.startsWith(`${c.n}.`)) throw new Error(`절 번호가 장과 어긋납니다: ${s.id} (${c.n}장)`);
  }
}

const banner =
  `/* 자동 생성 파일 — 손으로 편집하지 마세요.\n` +
  `   생성: node tools/build-curriculum.mjs\n` +
  `   출처: curriculum/ai_curriculum_v2.md\n` +
  `   규모: ${totals.chapters}장 / ${totals.sections}절 / ${totals.bullets}항목 */\n`;

writeFileSync(
  OUT,
  `${banner}window.CURRICULUM = ${JSON.stringify(chapters, null, 1)};\n` +
    `window.CURRICULUM_TOTALS = ${JSON.stringify(totals)};\n`,
  'utf8'
);

console.log(`생성 완료: assets/js/curriculum-data.js`);
console.log(`  ${totals.chapters}장 / ${totals.sections}절 / ${totals.bullets}항목`);
