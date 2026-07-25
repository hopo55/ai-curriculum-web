# SOURCES — 출처 수집 · 인용 · 보관 지침

각 절의 내용이 **어디서 왔는지** 추적 가능하게 만들고, 받을 수 있는 원문은 받아서 보관한다.

목적은 세 가지다.
1. **검증 가능성** — 내가 쓴 설명이 맞는지 원문으로 되짚을 수 있어야 한다.
2. **깊이** — 논문 하나만 보고 쓴 글과 교재·강의·영상을 교차해 쓴 글은 다르다.
3. **링크 부패 대비** — 강의 페이지는 학기마다 갈아엎히고 블로그는 사라진다. 받아둔 것만 남는다.

---

## 1. 최소 기준

| 항목 | 기준 |
|---|---|
| 절당 출처 개수 | **4개 이상** |
| 출처 유형 | **3종 이상** (논문 · 교재 · 강의 · 영상 · 웹문서 중) |
| 1차 출처 | 개념을 제안한 **원논문을 반드시 포함** (있는 경우) |
| 인용 위치 | 각 출처에 "이 절의 어디에 썼는지" 한 줄 명시 |
| 등록 | 모든 출처는 `references/registry.json` 에 등록 (`check.mjs` 가 검사) |

**유형을 섞으라는 이유**: 논문은 정확하지만 불친절하고, 교재는 체계적이지만 최신이 아니며,
강의는 직관을 주지만 엄밀하지 않고, 영상은 그림이 좋지만 깊이가 얕다. 서로의 약점을 메운다.

Wikipedia·블로그·LLM 출력은 **1차 출처가 아니다.** 개념 확인용으로 쓰되 인용 목록에는
반드시 원논문이나 교재를 함께 넣는다.

---

## 2. 인용 표기 방법

### 본문 안 (선택)

특정 주장·수식·수치가 어느 출처에서 왔는지 짚을 때:

```html
스케일링 인자 $1/\sqrt{d_k}$ 는 내적의 분산이 $d_k$ 에 비례해 커지는 것을 상쇄한다<a class="cite" href="#ref-vaswani2017-attention-is-all" data-ref="vaswani2017-attention-is-all">1</a>.
```

### 절 끝 (필수) — 파트 12 `#s-links`

```html
<h3>출처</h3>
<ol class="refs">
  <li class="ref" id="ref-vaswani2017-attention-is-all" data-ref="vaswani2017-attention-is-all">
    <span class="ref__type" data-type="paper">논문</span>
    <span class="ref__cite">
      Vaswani et al. (2017). <em>Attention Is All You Need</em>. NeurIPS.
    </span>
    <span class="ref__where">스케일드 닷프로덕트 어텐션의 정의와 $1/\sqrt{d_k}$ 의 근거 (§3.2.1)</span>
    <a class="ref__link" href="https://arxiv.org/abs/1706.03762">arXiv:1706.03762</a>
  </li>
</ol>
```

- `data-ref` 값은 `references/registry.json` 의 id 와 **정확히 일치**해야 한다.
- `ref__where` 가 이 지침의 핵심이다. "이 책을 참고했다"가 아니라
  **"이 책의 어느 부분이 이 절의 어느 주장을 뒷받침하는지"** 를 적는다.
- 출처 유형은 `data-type` 으로 표시한다 — 색과 라벨이 자동으로 붙고, 다양성 검사에도 쓰인다.

---

## 3. 어디서 찾는가

### 3.1 논문

이미 워크스페이스에 **통합 검색 스킬**이 있다. 직접 API를 두드리기 전에 이걸 쓴다.

```
/survey-search    DBLP · Semantic Scholar · OpenAlex · Crossref · arXiv · OpenReview 통합 검색
                  → ~/.claude/skills/survey-search/data/papers.db 에 저장, 전문(full-text) 검증 지원
/survey-local     이미 받아둔 논문을 키워드로 재검색
/paper-review     받은 PDF 를 읽고 기여·방법론 정리
```

레지스트리에 바로 넣을 때는 arXiv ID 만 있으면 된다.

```bash
node tools/refs.mjs arxiv 1706.03762 2103.00020   # 메타데이터 조회 → 등록
node tools/refs.mjs fetch                          # PDF 내려받아 보관
```

직접 찾을 때 쓰는 곳:

| 출처 | 쓸모 |
|---|---|
| [arXiv](https://arxiv.org/) · [ar5iv](https://ar5iv.labs.arxiv.org/) | 프리프린트 원문. ar5iv 는 같은 논문의 HTML 판이라 인용문 복사가 쉽다 |
| [Semantic Scholar](https://www.semanticscholar.org/) | 인용 관계, TL;DR, 영향력 높은 인용 필터 |
| [OpenReview](https://openreview.net/) | ICLR·NeurIPS **리뷰와 저자 반박까지** — 논문의 약점을 알려주는 유일한 공개 자료 |
| [Papers with Code](https://paperswithcode.com/) | 구현체와 벤치마크 순위 |
| [Connected Papers](https://www.connectedpapers.com/) | 어떤 논문의 앞뒤 계보를 그래프로 |
| [DBLP](https://dblp.org/) | 정확한 서지정보(학회명·연도) 확인용 |

**원논문을 찾는 요령**: 교재나 강의 슬라이드의 참고문헌을 먼저 본다. 그 분야에서
반복 인용되는 논문이 곧 1차 출처다.

### 3.2 교재 — 전문이 무료 공개된 것들

`references/registry.json` 에 이미 등록해 두었다. 장별 대응은 각 항목의 `topics` 참고.

| 주제 | 교재 |
|---|---|
| 선형대수·미적분·확률 (2~4장) | Mathematics for Machine Learning (Deisenroth) · MacKay ITILA |
| 전통 ML (5장) | ESL (Hastie) · PRML (Bishop) · Probabilistic ML (Murphy) |
| 딥러닝 (6장) | Deep Learning (Goodfellow) · Understanding Deep Learning (Prince) · Dive into DL · Nielsen |
| 최적화 (3장) | Convex Optimization (Boyd) |
| 비전 (7장) | Computer Vision (Szeliski) |
| 그래프 (9장) | Graph Representation Learning (Hamilton) |
| 오디오·NLP (10·12·13장) | Speech and Language Processing (Jurafsky & Martin) |
| 해석가능성 (18장) | Interpretable ML (Molnar) |
| 인과추론 (20장) | Causal Inference: What If (Hernán & Robins) · Elements of Causal Inference (Peters) |
| 강화학습 (24·25장) | Reinforcement Learning: An Introduction (Sutton & Barto) |

새 교재를 추가할 때는 **저자가 직접 공개한 것인지** 확인한다. 무단 업로드본은 쓰지 않는다.

### 3.3 강의

| 강의 | 범위 |
|---|---|
| Stanford CS231n | 컴퓨터 비전, CNN |
| Stanford CS224n | NLP, Transformer |
| Stanford CS336 | LLM 밑바닥부터 구현 |
| Berkeley CS285 | 심층 강화학습 |
| MIT 6.S191 | 딥러닝 입문 |
| MIT 18.06 (Strang) | 선형대수 |
| Hugging Face Courses | NLP · Audio · Diffusion · Deep RL 실습 |
| Karpathy, Neural Networks: Zero to Hero | 역전파부터 GPT 구현까지 |

강의는 **슬라이드 PDF 와 강의노트를 보관**한다 (학기가 지나면 URL 이 바뀐다).
영상 자체는 받지 않는다.

### 3.4 영상

인용 가치가 있는 것만. 링크와 **타임스탬프**를 남긴다.

- **3Blue1Brown** — 선형대수·미적분·신경망·Transformer의 시각적 직관. 이 프로젝트의 위젯 설계에도 참고가 된다.
- **StatQuest** — 통계·전통 ML 개념을 쉽게
- **Yannic Kilcher** — 논문 단위 해설
- **Umar Jamil** — 구현 수준 심층 해설

영상 파일은 저작권상 받지 않는다. 근거로 삼은 구간이 있으면
`ref__where` 에 `12:30–18:40` 식으로 남긴다. 자막이 필요하면 로컬에만 보관한다.

### 3.5 웹 문서

- [Distill.pub](https://distill.pub/) — 인터랙티브 해설의 원형. CC BY 4.0 이라 **그림 재사용이 가능**하다 (출처 표기 필수)
- [Transformer Circuits](https://transformer-circuits.pub/) — 기계적 해석가능성
- [Lil'Log](https://lilianweng.github.io/) — 분야별 정리가 정확하다
- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) — 그림 설명
- 공식 문서 (PyTorch · Hugging Face) — API 동작 확인용

---

## 4. 보관 규칙

### 어디에 저장되는가

```
references/library/{type}/{id}.{ext}     ← 실제 파일. .gitignore 대상.
references/registry.json                 ← 메타데이터만. 저장소에 커밋됨.
```

**이 저장소는 public 이다.** 그래서 원문 파일은 커밋하지 않는다. 이유 두 가지:

1. **저작권** — 무료로 *읽을 수* 있는 것과 *재배포할 수* 있는 것은 다르다.
   저자가 PDF를 공개했더라도 대개 개인 학습용 열람 허가일 뿐, 제3자 재배포 권리는 주지 않는다.
   public 저장소에 올리면 재배포가 된다.
2. **용량** — GitHub Pages 는 사이트 1GB 제한이다. 교재 PDF 몇 권이면 금방 찬다
   (Sutton & Barto 한 권이 70MB).

대신 `registry.json` 에 **sha256 해시·크기·쪽수·받은 날짜·최종 URL** 이 남는다.
다른 기기에서는 `node tools/refs.mjs fetch` 한 번이면 같은 파일을 복원할 수 있고,
해시로 동일본인지 확인할 수 있다.

### 재배포까지 가능한 경우

라이선스가 CC BY / CC BY-SA / MIT 등으로 **명시**된 자료(Distill, MIT OCW, Dive into Deep Learning 등)는
그림 인용이나 일부 재사용이 가능하다. 이때도 출처를 반드시 표기한다.
`registry.json` 의 `license` 필드에 근거를 적어 둔다.

### 받지 않는 것

- 유료 교재의 무단 업로드본
- 페이월 논문 PDF (초록·서지정보만 등록하고 링크로 인용)
- 동영상 파일
- 로그인이 필요한 자료

페이월 논문은 대개 arXiv 프리프린트가 있다. 그쪽을 우선 찾는다.

---

## 5. 도구 사용법

```bash
# 목록
node tools/refs.mjs list            # 전체
node tools/refs.mjs list book       # 유형별 (paper|book|course|video|web)

# arXiv 논문 등록 (메타데이터 자동 조회)
node tools/refs.mjs arxiv 1706.03762 2103.00020

# 원문 내려받아 보관 — 해시·쪽수까지 기록
node tools/refs.mjs fetch                    # 아직 안 받은 것 전부
node tools/refs.mjs fetch deisenroth2020-mml # 특정 항목만

# 보관본 무결성 + 링크 생존 확인
node tools/refs.mjs verify

# 절 페이지의 data-ref 를 훑어 cited_by 갱신
node tools/refs.mjs scan

# 절별 출처 개수 · 유형 다양성 · 미사용 항목
node tools/refs.mjs report
```

`fetch` 가 `⚠ 랜딩페이지` 를 표시하면 HTML 을 받은 것이다.
그 자료의 **PDF 직접 주소**를 찾아 `file_url` 필드에 넣고 다시 받는다.

---

## 6. 절을 쓸 때의 순서

1. **먼저 모은다** — 이 절의 개념에 대해 원논문 1~2편, 교재 1~2권, 강의 1개, 영상/웹 1개.
   `/survey-search` 로 논문을 찾고, `registry.json` 의 교재 `topics` 로 해당 장을 확인한다.
2. **받는다** — `node tools/refs.mjs arxiv <id>` → `fetch`. 교재는 이미 등록돼 있으면 `fetch` 만.
3. **읽고 쓴다** — 수식 유도와 수치 예제는 원문과 대조한다. 기호 표기가 출처마다 다르면
   이 사이트의 표기를 하나로 정하고, 다른 표기를 쓰는 출처는 `ref__where` 에 적어 둔다.
4. **인용을 단다** — 파트 12 에 출처 목록, 필요하면 본문에 인라인 인용.
5. **검사한다**

```bash
node tools/refs.mjs scan     # cited_by 갱신 + 미등록 인용 탐지
node tools/check.mjs 2.3     # 출처 개수·유형 다양성 포함 규약 검사
node tools/refs.mjs report   # 절별 현황 확인
```

---

## 7. 인용할 때 흔한 실수

| 실수 | 바로잡기 |
|---|---|
| "Attention Is All You Need 참고" 로 끝냄 | 어느 절(§3.2.1)의 무엇을 가져왔는지 `ref__where` 에 적는다 |
| 2차 출처(블로그)만 인용 | 블로그가 인용한 **원논문**을 찾아 함께 넣는다 |
| 교재 판본·쪽수 누락 | 판(edition)이 다르면 내용이 다르다. 판과 장·절을 적는다 |
| 강의 URL 만 남김 | 학기마다 바뀐다. 슬라이드를 받아 보관하고 연도를 적는다 |
| 링크가 죽었는지 모름 | `node tools/refs.mjs verify` 를 주기적으로 돌린다 |
| 읽지 않고 인용 | 받아서 해당 부분을 실제로 확인한다. 이 지침의 목적이 그것이다 |
