# CLAUDE.md

AI 이론 커리큘럼(28장 / 347절 / 2,884개 개념)을 인터랙티브 학습 사이트로 만드는 프로젝트.
**한 번에 전부 만들지 않는다.** 사용자가 요청한 절만 하나씩 추가한다.

배포: GitHub Pages — <https://hopo55.github.io/ai-curriculum-web/>

---

## 작업 방식 — main 에서 바로 한다

**브랜치·PR 을 만들지 않는다.** 이 저장소는 개인 학습 자료이고 리뷰어가 없다.
절 하나마다 브랜치 → PR → 머지를 도는 것은 비용만 크고 얻는 것이 없다.

```
main 에서 편집  →  검사 통과  →  커밋  →  push  →  1분 뒤 자동 배포
```

- **워크트리를 만들지 않는다.** `.claude/settings.json` 의 `worktree.bgIsolation: "none"` 이
  백그라운드 작업에서도 main 체크아웃을 바로 편집하게 해준다.
- **PR 을 만들지 않는다.** 이미 열려 있는 PR 이 있으면 정리하고, 새로 만들지 않는다.
- **작업이 끝나면 묻지 말고 push 한다.** "머지할까요?"라고 되묻지 않는다.
- 단, **push 전에 `node tools/check.mjs` 가 오류 0 이어야 한다.** 이것은 예외 없다.
- **force-push 는 하지 않는다.** 되돌릴 일이 있으면 revert 커밋을 쌓는다.

> 예외적으로 큰 구조 변경(디자인 시스템 교체, 도구 재작성처럼 되돌리기 어려운 것)을
> 할 때만 브랜치를 쓴다. 절을 추가·수정하는 평소 작업은 전부 main 에서 한다.

---

## 작업 전에 반드시

1. **`SPEC.md` 를 읽는다.** 페이지 구조·서술 규칙·위젯 카탈로그가 전부 거기 있다.
2. **`SOURCES.md` 를 읽는다.** 출처를 어디서 모으고 어떻게 인용·보관하는지.
3. **`templates/section.html` 을 복사해서 시작한다.** 백지에서 쓰지 않는다.
4. 커리큘럼 원본은 `curriculum/ai_curriculum_v2.md`. 항목을 임의로 더하거나 빼지 않는다.

---

## 절대 규칙 (어기면 배포가 깨진다)

| 규칙 | 이유 |
|---|---|
| **절대경로 금지** — `/assets/…` ✗, `../../assets/…` ✓ | Pages 는 `/ai-curriculum-web/` 하위에서 서빙된다. 절대경로는 100% 깨진다 |
| **파일·폴더명은 소문자만** | Pages 는 Linux. 로컬(macOS/Windows)에선 되는데 배포 후 404 난다 |
| **외부 CDN·외부 이미지 금지** | 오프라인 동작 원칙. 그림은 전부 인라인 SVG/Canvas 로 직접 그린다<br>단 **출처 링크(`<a href="https://…">`)는 허용** — 인용에 필요하다 |
| **원문 파일을 커밋하지 않는다** | public 저장소다. 저작권 있는 PDF 를 올리면 재배포가 된다.<br>`references/library/` 는 gitignore 대상이고, 메타데이터만 `registry.json` 에 남는다 |
| **`fetch()` · `<script type="module">` 금지** | zip 으로 받아 `file://` 로 열어도 동작해야 한다. classic `<script src>` 만 |
| **`.nojekyll` 삭제 금지** | 지우면 Jekyll 이 `_` 로 시작하는 파일을 먹는다 |
| **`assets/js/curriculum-data.js` 손으로 편집 금지** | 자동 생성 파일. `node tools/build-curriculum.mjs` 로만 갱신 |

---

## 절 하나를 추가하는 순서

```bash
# 1. 출처부터 모은다 — 원논문 1~2 · 교재 1~2 · 강의 1 · 영상/웹 1 (유형 3종 이상)
#    /survey-search 스킬로 논문 검색, registry.json 의 topics 로 해당 교재 확인
node tools/refs.mjs arxiv 1706.03762     # arXiv 논문 등록
node tools/refs.mjs fetch                # 원문 내려받아 보관 후 실제로 읽는다

# 2. 템플릿 복사  (chapters/ch{2자리}/{절번호}-{영문슬러그}.html)
cp templates/section.html chapters/ch02/2.3-inner-product.html

# 3. 내용 작성 — SPEC.md 의 13개 파트(0~12)를 순서대로, 하나도 빼지 않고
#    ※ data-root 를 "../" → "../../" 로 바꾸는 것을 잊지 말 것
#    ※ 파트 12 에 출처 4개 이상, ref__where 에 "어느 부분을 썼는지" 명시

# 4. assets/js/pages.js 에 등록  (등록 안 하면 목차·검색에 안 나온다)

# 5. 출처 반영 + 검사 — 반드시 통과시킬 것 (오류 0)
node tools/refs.mjs scan
node tools/check.mjs 2.3
node tools/check-visual.mjs      # 글자 겹침·그림 이탈 (jsdom 필요)

# 6. 진행 현황 갱신 (자동 생성 — 손으로 표를 고치지 않는다)
node tools/build-progress.mjs

# 7. main 에 커밋 & 푸시 → 1분 뒤 자동 배포 (브랜치·PR 없음, 묻지 말고 바로)
git add -A && git commit -m "2.3 내적과 유사도 추가" && git push
```

### 로컬에서 확인

```bash
python3 -m http.server 8000     # → http://localhost:8000
```

`file://` 로 직접 열어도 대부분 동작하지만, 브라우저에 따라 KaTeX 폰트가 차단되어
수식이 깨져 보일 수 있다. 확인은 위 로컬 서버로 하는 것을 권장.

---

## 커버리지 — 이 프로젝트의 핵심 제약

사용자의 요구는 **"빠지는 부분 없이"** 다. 이를 기계가 검증할 수 있게 만든 장치:

각 절 페이지 상단의 `.chips` 에 **커리큘럼 해당 절의 항목을 하나도 빠짐없이** 칩으로 넣고,
각 칩의 `href`는 그 개념을 실제로 설명하는 위치의 앵커를 가리켜야 한다.

`tools/check.mjs` 가 **칩 개수 == 커리큘럼 항목 개수** 를 검사한다. 불일치하면 실패한다.
칩만 늘려 숫자를 맞추는 것은 규약 위반이다 — 칩이 가리키는 곳에 실제 설명이 있어야 한다.

---

## 파일 구조

```
index.html                    전체 목차 · 진도 대시보드 · 검색
404.html                      자체 완결형 (임의 주소에서 렌더되므로 CSS 인라인)
CLAUDE.md                     이 파일
SPEC.md                       작성 규약 — 작업 전 필독
SOURCES.md                    출처 수집·인용·보관 지침 — 작업 전 필독
PROMPTS.md                    사용자가 복사해 쓰는 요청 문구
PROGRESS.md                   절별 진행 현황
references/registry.json      출처 레지스트리 (인용 키의 단일 원천)
references/library/           ⚠ 내려받은 원문 — gitignore 대상
curriculum/ai_curriculum_v2.md   목차 원본 (유일한 진실 공급원)
templates/section.html        절 페이지 템플릿
chapters/chNN/N.M-slug.html   절 페이지
assets/css/base.css           디자인 시스템
assets/js/curriculum-data.js  ⚠ 자동 생성
assets/js/pages.js            페이지 레지스트리 — 절 추가 시 직접 등록
assets/js/core.js             네비·진도·검색·슬라이드·테마
assets/js/viz.js              SVG 그리기 헬퍼
assets/js/widgets.js          위젯 부품 (슬라이더/재생기/행렬입력/토글/판독값)
vendor/katex/                 KaTeX 0.18.1 (woff2 만, 608K)
tools/build-curriculum.mjs    목차 md → curriculum-data.js
tools/build-progress.mjs      PROGRESS.md 재생성
tools/check.mjs               규약 검사기
tools/check-visual.mjs        그림 레이아웃 검사 (겹침·이탈)
tools/refs.mjs                출처 등록·다운로드·무결성 검증
```

`PROGRESS.md` 와 `assets/js/curriculum-data.js` 는 둘 다 자동 생성 파일이다. 손으로 고치지 않는다.

---

## 서술 규칙 요약 (자세한 것은 SPEC.md)

- **문장은 한국어, 핵심 용어는 영어.** 각 절에서 처음 나올 때만 `inner product(내적)` 로
  한글을 병기하고 이후에는 영어만 쓴다. 칩·소제목·본문·표·기호표·퀴즈·위젯 라벨 전부 해당.
  - 칩은 영어만 (`Inner Product`), 소제목은 `Inner Product 내적`, 기호표 읽는 법은 `nabla 나블라`.
  - 조사는 한글 음차의 끝소리에 맞춰 붙여 쓴다 — `matrix는`, `rank가`, `span은`, `attention을`.
  - 행·열·크기·넓이·방향처럼 굳어진 일상어는 한국어로 둔다.
- **결론부터.** "~에 대해 알아봅시다" 같은 도입 문구 금지.
- 수식에 등장하는 **모든** 기호를 기호표에 넣는다. 읽는 법(나블라, 아다마르 곱 …) 필수.
- 수치 예제는 **손으로 검산 가능한 작은 숫자**로, 중간 계산을 하나도 생략하지 않는다.
- 위젯은 절마다 3개 이상, 각각 "무엇을 관찰해야 하는지" 한 줄 안내를 붙인다.
- **형식으로 뛰기 전에 '쉬운 말로' 상자**를 절마다 1~2개 둔다 (기호 없이 비유로, SPEC §5.4).
- 핵심 공식은 `WIDGETS.terms` 로 **항 ↔ 그림**을 색으로 잇고, 그림에는 `p.callout` 으로 주석을 단다.
- 절의 뼈대가 되는 주장에는 `<mark class="hl">` 형광펜을 **절당 5개 안팎**으로 (SPEC §5.4-b).

## 색의 의미 (섞어 쓰지 말 것)

- **주묵 빨강 `--seal`** = 완료·채점 표시 전용
- **청자 초록 `--jade`** = 조작 가능한 인터랙티브 요소 전용
- **호박색 `--amber`** = 핵심 표시 — 핵심 정리 콜아웃(`.note--key`)과 형광펜(`.hl`)

색만 보고 기능을 알 수 있어야 한다.

---

## 하지 말아야 할 것

- 한 번에 여러 장을 몰아서 만들기 (사용자가 명시적으로 요청하지 않는 한)
- 커리큘럼에 없는 항목을 임의로 추가하거나, 있는 항목을 "중요도가 낮아서" 빼기
- `check.mjs` 오류를 남긴 채 커밋
- **브랜치·PR 만들기** — 위 '작업 방식' 참고. main 에서 바로 작업한다
- **"머지할까요?" 하고 되묻기** — 검사만 통과하면 바로 push 한다
- force-push (되돌릴 때는 revert 커밋을 쌓는다)
