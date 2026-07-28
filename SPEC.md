# SPEC — 작성 규약

347개 절을 여러 세션에 걸쳐 만들면서도 스타일과 깊이가 갈라지지 않게 하는 계약서.
**절 페이지를 만들기 전에 이 문서를 읽는다.**

---

## 1. 원칙

1. **빠지는 부분 없이.** 커리큘럼의 항목은 하나도 빼지 않는다. 기계로 검증한다(§9).
2. **자기완결.** 각 절은 그 절만 읽어도 이해되게. 선수지식은 링크로 연결한다.
3. **결론부터.** 도입·인사·"알아봅시다" 금지. 첫 문장이 곧 핵심.
4. **손으로 확인 가능하게.** 모든 수식에는 작은 숫자로 검산 가능한 예제가 따른다.
5. **조작해 볼 수 있게.** 정적인 그림보다 파라미터를 움직여 보는 편이 남는다.

---

## 2. 실행 환경 제약 (어기면 배포가 깨진다)

| 제약 | 상세 |
|---|---|
| 상대경로만 | Pages 는 `/ai-curriculum-web/` 하위에서 서빙. `/assets/…` 는 반드시 깨진다 |
| 소문자 파일명 | Pages 는 Linux, 대소문자 구분. `Ch02/` ≠ `ch02/` |
| 빌드 도구 없음 | HTML/CSS/JS 를 그대로 서빙. 트랜스파일·번들 없음 |
| classic script | `fetch()`, `<script type="module">` 금지. zip 다운로드 후 `file://` 로도 열려야 함 |
| 외부 리소스 0 | CDN·웹폰트·외부 이미지 금지. 필요한 것은 저장소에 넣는다 |
| 그림은 코드로 | 모든 도식·차트는 인라인 SVG 또는 Canvas. `<img src="...">` 금지 (data: URI 는 예외) |
| `.nojekyll` 유지 | 지우면 Jekyll 이 `_` 로 시작하는 경로를 삭제한다 |

**예외 하나:** `404.html` 은 존재하지 않는 임의 주소에서 렌더되므로 상대경로가 통하지 않는다.
그래서 CSS 를 인라인하고 링크를 스크립트로 계산한다. 이 파일만 규칙에서 제외된다.

---

## 3. 파일 명명

```
chapters/ch{장번호 2자리}/{절번호}-{영문슬러그}.html
```

- 예: `chapters/ch02/2.3-inner-product.html`, `chapters/ch12/12.3-self-attention.html`
- 슬러그는 소문자 영문 + 하이픈. 한글·대문자·공백 금지.
- 파일명은 반드시 `{절번호}-` 로 시작한다 (검사기가 확인한다).

`<body>` 필수 속성:

```html
<body data-root="../../" data-section="2.3">
```

- `data-root` — 저장소 루트까지의 상대경로. `chapters/chNN/` 깊이라면 항상 `../../`
  (템플릿은 `templates/` 에 있어 `../` 이므로 복사 후 반드시 고친다)
- `data-section` — 절 번호. 진도 저장·이전/다음·검사기가 이 값을 쓴다.

---

## 4. 페이지 구조 — 13개 파트 (0~12, 순서 고정)

내용이 없어도 파트를 지우지 않는다. "해당 없음"이라고 적는다.

| # | 파트 | 마크업 | 필수 |
|---|---|---|---|
| 0 | 헤더 (제목·학습시간·난이도·선수지식) | `.sechead` | ✔ |
| 1 | 다루는 항목 칩 | `.chips` | ✔ |
| 2 | 한 줄 요약 + 학습 목표 3개 | `#s-summary` | ✔ |
| 3 | 직관 (수식 없이, 그림으로) | `#s-intuition` | ✔ |
| 4 | 형식적 정의 | `#s-definition` | ✔ |
| 5 | 수식 + 기호표 | `#s-math` | ✔ |
| 6 | 유도 (줄마다 근거) | `#s-derivation` | ✔ |
| 7 | 손으로 푸는 수치 예제 | `#s-example` | ✔ |
| 8 | 인터랙티브 위젯 (3개 이상) | `#s-lab` | ✔ |
| 9 | 흔한 오해와 함정 (3개 이상) | `#s-traps` | ✔ |
| 10 | 코드 (선택, 20줄 이내, 접이식) | `#s-code` | ✔ |
| 11 | 자가 점검 (4~6문제) | `#s-quiz` | ✔ |
| 12 | 연결 + **출처** | `#s-links` | ✔ |

### 파트 1 — 칩 (커버리지 보증 장치)

이 프로젝트에서 가장 중요한 규약이다.

```html
<nav class="chips" aria-label="이 절에서 다루는 항목">
  <a class="chip" href="#c-inner">Inner Product</a>
  <a class="chip" href="#c-ortho">Orthogonality</a>
  ...
</nav>
```

- 커리큘럼 해당 절의 항목을 **순서 그대로, 하나도 빠짐없이** 넣는다.
- 각 칩의 `href` 는 그 개념을 **실제로 설명하는 위치**의 앵커를 가리킨다.
- 앵커는 설명 바로 앞에 둔다: `<span class="anchor" id="c-inner"></span>`
- 검사기가 `칩 개수 == 커리큘럼 항목 개수` 와 `앵커 존재 여부`를 확인한다.
- **칩만 늘려 숫자를 맞추는 것은 규약 위반.** 가리키는 곳에 설명이 있어야 한다.

### 파트 5 — 기호표

수식에 등장하는 **모든** 기호를 표로 설명한다. 하나라도 빠뜨리지 않는다.

```html
<div class="tablewrap">
  <table class="symtab">
    <thead><tr><th>기호</th><th>읽는 법</th><th>의미</th><th>타입 / shape</th><th>범위</th></tr></thead>
    <tbody>
      <tr><td>$\mathbf{w}$</td><td>bold w</td><td>weight vector</td><td>vector $(d,)$</td><td>실수</td></tr>
      <tr><td>$\nabla$</td><td>nabla 나블라</td><td>gradient 연산자</td><td>연산자</td><td>—</td></tr>
      <tr><td>$\odot$</td><td>Hadamard product 아다마르 곱</td><td>원소별 곱</td><td>연산자</td><td>—</td></tr>
    </tbody>
  </table>
</div>
```

**읽는 법 칸을 반드시 채운다.** 그리스 문자·연산 기호를 소리 내어 읽지 못하면 논문을 읽을 수 없다.

### 파트 6 — 유도

한 줄 변형마다 "왜 이게 가능한가"를 오른쪽에 병기한다.

```html
<div class="derive">
  <div class="derive__row">
    <div class="derive__math">$$ \|\mathbf{a}\|^2 = \mathbf{a}^\top\mathbf{a} $$</div>
    <div class="derive__why">노름의 정의를 내적으로 다시 쓴 것</div>
  </div>
</div>
```

무거운 증명은 `<details>` 로 접고 스케치 + 출처를 남긴다.

### 파트 7 — 수치 예제

- 2×2 행렬, 3차원 벡터 같은 **작은 숫자**로.
- 중간 계산을 **하나도** 생략하지 않는다. `3 - 2 = 1` 까지 쓴다.
- 독자가 종이에 따라 계산해 같은 값이 나와야 한다.

### 파트 11 — 자가 점검

문제 4~6개, 구성은 계산 2 / 개념 2 / 함정 1 을 기본으로.

```html
<div class="q">
  <p class="q__stem"><span class="q__tag">계산</span>문제 문장</p>
  <div class="opts">
    <button class="opt" type="button" data-correct="true">
      <span class="opt__mark">가</span><span>선택지</span>
    </button>
    <button class="opt" type="button"><span class="opt__mark">나</span><span>선택지</span></button>
  </div>
  <div class="q__explain"><strong>풀이 ·</strong> 설명</div>
</div>
```

`data-correct="true"` 가 정답. 클릭하면 core.js 가 정오 표시와 풀이를 펼친다.

### 파트 12 — 출처

**모든 절은 출처를 남긴다.** 자세한 규칙과 수집 경로는 [`SOURCES.md`](SOURCES.md) 에 있다.
여기서는 지켜야 할 최소선만 적는다.

| 기준 | 값 |
|---|---|
| 출처 개수 | 4개 이상 |
| 유형 다양성 | 3종 이상 (논문 · 교재 · 강의 · 영상 · 웹문서) |
| 1차 출처 | 개념을 제안한 원논문을 반드시 포함 (있는 경우) |
| 등록 | 모든 출처는 `references/registry.json` 에 등록 |

```html
<h3>출처</h3>
<ol class="refs">
  <li class="ref" id="ref-vaswani2017-attention-is-all" data-ref="vaswani2017-attention-is-all">
    <span class="ref__type" data-type="paper">논문</span>
    <span class="ref__cite">Vaswani et al. (2017). <em>Attention Is All You Need</em>. NeurIPS.</span>
    <span class="ref__where">스케일드 닷프로덕트 어텐션의 정의와 $1/\sqrt{d_k}$ 의 근거 (§3.2.1)</span>
    <a class="ref__link" href="https://arxiv.org/abs/1706.03762">arXiv:1706.03762</a>
  </li>
</ol>
```

- `data-ref` 는 레지스트리의 id 와 **정확히 일치**해야 한다 (`check.mjs` 가 검사).
- `ref__where` 가 핵심이다. "이 책을 봤다"가 아니라 **"이 책의 어디가 이 절의 무엇을 뒷받침하는지"** 를 쓴다.
- `data-type` 은 `paper | book | course | video | web | doc | code` 중 하나. 라벨과 색이 자동으로 붙는다.
- 본문 안에서 특정 주장의 근거를 짚을 때는 인라인 인용을 쓴다:
  `<a class="cite" href="#ref-…" data-ref="…">1</a>`

**출처 링크는 외부 URL 을 써도 된다** — 이 프로젝트에서 외부 주소가 허용되는 유일한 곳이다
(외부 *리소스 로드*는 여전히 금지: `src=`, `<link href=>`).

받을 수 있는 원문은 받아서 보관한다.

```bash
node tools/refs.mjs arxiv 1706.03762   # 등록
node tools/refs.mjs fetch              # 내려받기 (references/library/, gitignore 대상)
node tools/refs.mjs scan               # 페이지의 data-ref → cited_by 갱신
```

---

## 5. 서술 규칙

### 5.1 용어는 영어로 쓴다 (핵심 규칙)

문장은 한국어, **핵심 용어는 영어**다. 논문·문서·코드에서 만나는 표기와 같아야
읽은 것이 그대로 쓰인다. 한국어 번역어를 기본형으로 쓰지 않는다.

- 각 절에서 **처음 나올 때만** `inner product(내적)` 로 한글을 병기하고, 이후에는 영어만 쓴다.
  같은 절 안에서 두 번 이상 병기하지 않는다.
- 적용 범위는 **페이지 전체**다 — 다루는 항목 칩 · 소제목 · 본문 · 표 · 기호표 ·
  함정 · 퀴즈 · 위젯 제목과 라벨 · `.watch` 안내.

| 자리 | 형식 | 예 |
|---|---|---|
| 칩 (`.chips`) | 영어만, Title Case | `Inner Product` `Null Space` |
| 소제목 (`h3`) | `English 한글` | `Inner Product 내적` |
| 본문 첫 등장 | `english(한글)` | `inner product(내적)는 …` |
| 본문 이후 | 영어만 | `inner product 가 0 이면 …` |
| 기호표 '읽는 법' | `english 한글음차` | `nabla 나블라`, `transpose 트랜스포즈` |
| 위젯 제목 | `English — 한 줄 설명` | `Orthogonal Projection — v 가 u 위에 드리우는 그림자` |

**칩은 커리큘럼 항목의 영어 표기다.** 개수와 순서는 커리큘럼 그대로 두고 이름만 영어로 쓴다
(`check.mjs` 는 개수를 세므로 이름을 바꿔도 통과하지만, 항목 대응이 흐트러지면 안 된다).

**절 제목(`h1`)과 `<title>`, 헤더(`.sechead`)는 한국어를 유지한다.** 이것들은
`curriculum/ai_curriculum_v2.md` 의 절 이름이고, `index.html` 목차·검색과 글자까지 같아야 하기 때문이다.
소제목(`h3`)부터가 영어 표기 대상이다.

### 5.2 조사와 띄어쓰기

조사는 **영어 단어를 한글로 옮겼을 때의 끝소리**에 맞춘다. 대부분의 영어 단어는
한글 음차에서 모음으로 끝나므로 `는/가/를/와` 가 기본이다.

| 끝소리 | 조사 | 예 |
|---|---|---|
| 모음 (대다수) | 는 · 가 · 를 · 와 | `matrix는`(매트릭스) · `rank가`(랭크) · `vector를`(벡터) |
| `n` `m` `l` `ng` `-ion` `-ic` | 은 · 이 · 을 · 과 | `span은`(스팬) · `norm이`(놈) · `attention을`(어텐션) |

- 영어 단어와 조사는 **붙여 쓴다**: `matrix는` (○) / `matrix 는` (✗).
- 영어 단어와 한국어 용언 사이는 띄운다: `orthogonal 하다`, `diagonalize 할 수 있다`.

### 5.3 영어로 바꾸지 않는 것

굳어진 일상어까지 영어로 바꾸면 오히려 읽기 어려워진다. 다음은 한국어로 둔다.

- 기본 명사: 행 · 열 · 크기 · 길이 · 넓이 · 방향 · 합 · 곱 · 점 · 직선 · 평면 · 축
- 서술어와 접속: 이다 · 된다 · 따라서 · 그러므로
- 이미 한국어가 표준인 것: 검산 · 유도 · 예제 · 함정
- 단, 이들이 **전문용어의 일부**이면 영어로 간다: `row space`, `column space`, `unit vector`

### 5.4 형식으로 뛰기 전에 '쉬운 말로' 한 칸

정의·공식이 나온 직후, 그것을 <strong>일상어 비유</strong>로 다시 말하는 상자를 둔다.
Khan Academy 식으로 "같은 것을 두 번, 다른 언어로" 말해 주는 장치다.

```html
<div class="note note--tip">
  <span class="note__label">쉬운 말로</span>
  <p>분자는 "둘이 얼마나 같이 가는가", 분모는 "각자 얼마나 긴가"를 잽니다.</p>
  <p>그래서 화살표를 길게 늘여도 값이 안 변합니다 — 분자도 분모도 같이 커지니까요.</p>
</div>
```

- 위치: 그 절에서 **가장 가파른 지점** 하나. 절마다 1~2개면 충분하다.
- 문장: 기호를 쓰지 않는다. 그림·물건·동작으로 바꿔 말한다
  (모눈종이 · 그림자 · 악수 · 재료와 배합 비율).
- 형식 정의를 <em>대체</em>하지 않는다. 정의는 그대로 두고 옆에 덧붙인다.
- 문제 풀이 과정을 여기에 넣지 않는다. 계산은 파트 7(손으로 푸는 예제)의 몫이다.

### 5.4-b 핵심은 형광펜으로 짚는다

훑어보기만 해도 절의 뼈대가 보이도록, **그 절이 사라져도 이것만은 남아야 하는 주장**에
형광펜을 칠한다.

```html
<span class="hl"><strong>matrix의 j 번째 열 = e_j 가 도착한 곳</strong></span>
```

- **절당 5개 안팎.** 열 개가 넘으면 칠하지 않은 것과 같아진다.
- 이미 `<strong>` 으로 짚은 핵심 주장에만 덧씌운다. 새 문장을 만들지 않는다.
- 정의문·공식 자체가 아니라 **그 뜻을 한 줄로 말한 문장**에 칠한다.
- `.note` · `.tldr` 안에서는 배경 대신 밑줄로 바뀐다(CSS가 알아서 한다) — 색이 겹치지 않게 하기 위해서다.
- 수식 `$…$` 를 가운데서 자르지 않는다. 잘리면 KaTeX 가 렌더하지 못한다.
- **`<mark>` 을 쓰지 않는다.** `<mark>` 은 브라우저 기본 배경이 밝은 노랑이라,
  스타일시트가 아직 안 왔거나 캐시가 오래된 순간에 다크 모드에서 글자가 보이지 않는다.
  `<span class="hl">` 은 스타일이 없으면 그냥 평범한 글자가 된다.
- 형광펜은 **호박색(amber) 계열**이다. `.note--key`(핵심 정리)와 같은 계열이라
  "핵심"이라는 뜻이 일관된다. 주묵(`--seal`)은 완료·채점에 남겨 둔다.
- 형광펜 색은 반투명(`--hl-band`)이다. 배경 위에 얹히는 방식이라
  라이트·다크 어느 쪽에서도 대비가 무너지지 않는다.
- 두 가지 대비를 함께 본다 — **글자 대비**(읽히는가)와 **종이 대비**(눈에 띄는가).
  종이 대비가 1.5:1 아래면 배경에 묻혀 칠한 의미가 없다. 현재 값은 다음과 같다.

  | | 띠 | 아래쪽 | 글자 대비 | 종이 대비 |
  |---|---|---|---|---|
  | 라이트 | `rgb(224,160,19)` | `rgb(212,145,12)` | 7.83:1 | 2.15:1 |
  | 다크 | `rgb(109,95,16)` | `rgb(133,114,14)` | 5.14:1 | 2.84:1 |

  노랑은 크림색 종이와 밝기가 비슷해 옅게 쓰면 묻힌다.
  순수 형광노랑(`#FFD600`)은 종이 대비가 1.2:1 뿐이라 쓰지 않고, 진한 황금노랑을 쓴다.

- **정지점을 같은 위치에 두 번 쓰지 않는다.** `var(--a) 74%, var(--b) 74%` 처럼 쓰면
  그 자리에 또렷한 가로선이 생겨 하이라이트가 둘로 갈라져 보인다.
  아래로 갈수록 아주 조금 진해지게만 두면(밝기차 0.07 이하) 잉크가 고인 느낌이 난다.
- **콜아웃·요약 상자(`.note`·`.tldr`) 안에는 칠하지 않는다.** 이미 강조된 자리라
  형광펜을 겹치면 표시가 두 겹이 되고, 예외 스타일을 만들면 형광펜이 자리마다 달라 보인다.

- 띠는 줄 높이의 **26%~82%** 를 덮는다. 아래쪽만 칠하면 밑줄처럼 보여 눈에 들어오지 않고,
  100% 를 덮으면 윗줄·아랫줄과 뭉쳐 한 덩어리가 된다.

### 5.5 그 밖의 서술 규칙

- 수식 기호는 원 표기 유지 — 번역하지 않는다.
- 문장은 짧게. 한 문단은 3~5문장.
- 영문 용어·절 번호·숫자에는 `.tex` / `.num` 클래스를 써서 Computer Modern 으로 조판한다.
- 과장·홍보 표현 금지. "놀랍게도", "매우 강력한" 같은 수식어를 빼도 뜻이 통하면 뺀다.

### 분량 기준

절 하나당 A4 6~10쪽 상당. 항목 수가 많은 절(12개 이상)은 그에 비례해 늘린다.
짧게 끝내려고 항목 설명을 뭉뚱그리지 않는다.

---

## 6. 수식

KaTeX 0.18.1 이 `$…$`(인라인)과 `$$…$$`(디스플레이)를 자동 렌더한다.
`\(…\)` `\[…\]` 도 동작한다.

번호가 필요한 식:

```html
<div class="eq">
  <div class="eq__body">$$ \mathbf{a}\cdot\mathbf{b} = \sum_{i=1}^{n} a_i b_i $$</div>
  <span class="eq__tag num">(1)</span>
</div>
```

주의:
- `<code>`, `<pre>` 안의 `$` 는 렌더되지 않는다 (의도된 동작).
- KaTeX 가 지원하지 않는 LaTeX 매크로가 있다. 렌더 실패 시 콘솔에 경고가 뜬다 — 반드시 확인.
- 긴 수식은 가로 스크롤된다(`.katex-display`). 모바일에서 잘리지 않는지 확인할 것.

---

## 7. 인터랙티브 위젯

### 마크업 (고정)

```html
<figure class="widget" data-widget="dot-product">
  <figcaption class="widget__bar">벡터 내적 실험실</figcaption>
  <div class="widget__body">
    <div class="widget__stage" data-stage></div>
    <div class="controls" data-controls></div>
    <div class="readout" data-readout></div>
    <p class="watch">각도가 90°를 지날 때 내적의 부호가 바뀌는 것을 보세요.</p>
  </div>
</figure>
```

### 등록 (core.js 로드 **전에**)

```html
<script>
WIDGETS.register('dot-product', function (root, ctx) {
  // ctx.stage / ctx.controls / ctx.readout
});
</script>
<script src="../../assets/js/core.js"></script>
```

이름은 HTML 의 `data-widget` 과 정확히 일치해야 한다 (검사기가 확인).

### 카탈로그 — 주제에 맞는 것을 3개 이상 고른다

| | 종류 | 적합한 주제 |
|---|---|---|
| A | 파라미터 슬라이더 → 그래프 실시간 갱신 | 활성화 함수, 학습률, 정규화 계수 |
| B | 단계별 재생 (▶/⏸/◀▶) | 경사하강 궤적, 역전파 스텝, diffusion 과정 |
| C | 값 직접 편집 → 결과 즉시 계산 | 행렬 원소 편집 → 선형변환, 고유벡터 |
| D | 드래그 가능한 점·벡터 | 내적과 각도, 결정경계, KNN |
| E | 히트맵 hover → 값 툴팁 | attention matrix, 공분산, 혼동행렬 |
| F | A/B 토글 비교 | Pre-Norm vs Post-Norm, L1 vs L2, 편향-분산 |
| G | 수식 항 ↔ 그림 부분 하이라이트 연결 (`WIDGETS.terms`) | 코사인 유사도, SVD, 어텐션 |
| H | 즉답 퀴즈 | 어디에나 |

각 위젯에는 `.watch` 로 **무엇을 관찰해야 하는지** 한 줄을 반드시 붙인다.

### 사용 가능한 부품

```js
// 슬라이더
WIDGETS.slider({ host, label, min, max, step, value, unit, digits, onInput })

// 판독값 패널 (항상 같은 자리·같은 자릿수)
var out = WIDGETS.readout(ctx.readout, [{ key:'dot', label:'내적', digits:3 }]);
out.set('dot', 1.234);

// 단계별 재생기 (화면 밖으로 나가면 자동 정지)
WIDGETS.player({ host, steps, labels, fps, onStep })

// 행렬 입력기
WIDGETS.matrix({ host, rows, cols, values, label, onChange })

// A/B 토글
WIDGETS.toggle({ host, label, options:[{value,label}], value, onChange })

// 수식 항 ↔ 그림 연결 — 칩에 마우스를 올리면 그림의 해당 부분이 밝아지고
// 아래에 '쉬운 말' 설명이 뜬다. tone 은 jade|seal|amber (§8 의 색 규칙을 따른다)
WIDGETS.terms({
  host, label,
  items: [{ k:'num', label:'uᵀv (분자)', tone:'jade', say:'두 화살표가 같이 가는 정도' }],
  onFocus: function (k) { /* 그림 쪽 강조 */ }
})
```

```js
// SVG 그림판
var p = VIZ.plot({ w, h, xmin, xmax, ymin, ymax });
p.grid(1, 0.5).axes('x', 'y').ticks(1, 0.5);
p.curve(x => Math.sin(x));            // 함수 곡선
p.line([[0,0],[1,1]]);                // 점 잇기
p.dot(x, y, r);                       // 점
p.vector(x, y, { label: 'a' });       // 원점에서의 화살표
p.text(x, y, '라벨');
p.callout(x, y, '여기가 가장 긴 반지름', { dx: 26, dy: -20, tone: 'var(--seal-ink)' });
                                      // 지시선 + 라벨. viewBox 밖으로 나가면 스스로 접어 넣는다
p.clear();                            // 다시 그리기 전에

VIZ.draggable(node, p, onMove, { label });  // 드래그 + 화살표키
VIZ.heatmap({ data, rowLabels, colLabels }); // 히트맵 (hover 툴팁 포함)
VIZ.fmt(value, digits);
```

**색을 하드코딩하지 않는다.** `viz-curve`, `viz-point`, `viz-label` 같은 클래스나
`var(--jade)` / `var(--seal)` 을 쓴다. 하드코딩하면 다크모드에서 안 보인다.

---

## 8. 디자인 시스템

### 색의 역할 (섞지 말 것)

- `--seal` 주묵 빨강 — **완료·채점·강조 표시 전용**
- `--jade` 청자 초록 — **조작 가능한 인터랙티브 요소 전용**
- `--amber` — 보조 강조 (핵심 정리 콜아웃)

사용자가 색만 보고 "이건 만질 수 있는 것", "이건 내가 끝낸 것"을 알 수 있어야 한다.

### 자주 쓰는 클래스

| 클래스 | 용도 |
|---|---|
| `.tldr` | 한 줄 요약 상자 |
| `.goals` | 번호 매겨진 학습 목표 |
| `.note .note--trap` | 함정 (빨강) |
| `.note .note--tip` | 팁 (초록) |
| `.note .note--key` | 핵심 정리 (호박색) |
| `.eq` + `.eq__tag` | 번호 붙은 수식 |
| `.derive` / `.derive__row` | 유도 (수식 + 근거) |
| `.symtab` | 기호표 |
| `.tablewrap` | 표 감싸기 (가로 스크롤) |
| `.tex` / `.num` | Computer Modern 조판 |
| `<span class="hl">` | 핵심 문장 형광펜 (아래 규칙) |
| `<details>` | 증명·코드 접기 |

---

## 9. 품질 기준과 검사

### 자동 검사

```bash
node tools/check.mjs          # 전체
node tools/check.mjs 2.3      # 특정 절
```

**오류(✗)가 0 이어야 커밋한다.** 경고(!)는 권장 사항.

검사 항목:
1. 필수 섹션 11개 + `.sechead` + `.chips` 존재
2. **칩 개수 == 커리큘럼 항목 개수**, 칩이 가리키는 앵커 존재
3. 기호표(`.symtab`) 존재
4. 위젯 3개 이상 / 등록 이름 일치 / `.watch` 안내
5. 함정 3개 이상, 자가 점검 4문제 이상, 각 문제에 정답 지정
6. **출처 4개 이상, 유형 3종 이상, 모든 `data-ref` 가 레지스트리에 등록됨, `ref__where` 존재**
7. 절대경로 0, 외부 리소스 로드 0(`src`/`<link>`), 외부 `<img>` 0
8. 내부 링크가 실제 파일을 가리키는지
9. `pages.js` 등록 여부와 경로 일치
10. `data-root` 깊이, `data-section` 값, 파일명 규칙, 소문자
11. viewport 메타, `lang="ko"`

### 그림 레이아웃 검사

```bash
node tools/check-visual.mjs      # jsdom 필요: npm i -D jsdom
```

위젯 SVG 의 좌표를 계산해 **글자 겹침 · viewBox 이탈 · 칸 넘침**을 잡는다.
브라우저 없이 확인할 수 있는 유일한 방법이라, 그림을 고칠 때마다 돌린다.

그림을 그릴 때 지킬 것:

- **화살촉은 밑변보다 길게** (길이 9 / 밑변 7 정도). 밑변이 더 넓으면
  화살표가 아니라 납작한 삼각형으로 보인다.
- **화살촉의 첫 점(`M`)이 끝점**이라는 규약을 지킨다. 방향 검사가 이 규약에 기댄다.
- 한글 라벨은 **글자수가 아니라 폭**으로 자른다. 한글은 글자당 폭이 글꼴 크기와 거의 같다.
- 캡션은 플롯 좌상단에 둔다. y축 이름은 `axes()` 가 플롯 <em>위쪽 여백</em>에 두므로 겹치지 않는다.

### 사람이 확인할 것 (자동화 불가)

- 브라우저 콘솔 에러 0, 렌더 실패한 수식 0
- 모바일 폭 375px 에서 레이아웃 안 깨짐
- 라이트/다크 양쪽에서 그림과 글자가 모두 읽힘
- 키보드만으로 모든 위젯 조작 가능 (Tab → 화살표)
- 슬라이드 모드에서 각 섹션이 한 화면에 적절히 들어감

---

## 10. 절을 추가한 뒤

1. `assets/js/pages.js` 에 등록

```js
"2.3": {
  href: "chapters/ch02/2.3-inner-product.html",
  updated: "2026-07-24",
  summary: "두 벡터가 얼마나 같은 방향인지를 하나의 수로 요약하는 연산.",
  tags: ["dot product", "cosine similarity", "projection"]
}
```

2. 출처 반영 — `node tools/refs.mjs scan` (cited_by 갱신 + 미등록 인용 탐지)
3. `PROGRESS.md` 갱신 — `node tools/build-progress.mjs`
4. `node tools/check.mjs` 통과 확인
5. 커밋 & 푸시 → 약 1분 뒤 배포 반영

---

## 11. 커리큘럼 목차를 고쳤다면

`curriculum/ai_curriculum_v2.md` 를 수정한 경우:

```bash
node tools/build-curriculum.mjs   # curriculum-data.js 재생성
node tools/check.mjs              # 항목 수가 바뀐 절이 있으면 여기서 걸린다
```

`assets/js/curriculum-data.js` 를 직접 편집하면 다음 빌드에서 덮어써진다.
