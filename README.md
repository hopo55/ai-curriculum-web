<div align="center">

# AI 이론 학습 커리큘럼

**수학 기초부터 Foundation Model · World Model 까지, AI 이론을 수식과 인터랙티브 시각화로 공부하는 사이트**

[**→ 학습 사이트 열기**](https://hopo55.github.io/ai-curriculum-web/)

`28장` · `347절` · `2,884개 개념 항목`

</div>

---

## 무엇인가

AI 이론을 "읽고 끝나는 글"이 아니라 **직접 조작해 보며 익히는 페이지**로 만든 학습 자료입니다.
한 번에 전부 만들지 않고, 공부하는 순서대로 한 절씩 채워 나갑니다.

각 절은 **같은 순서**로 구성됩니다.

| | |
|---|---|
| **직관** | 수식 없이 비유와 그림으로 먼저 |
| **정의** | 형식적 정의 |
| **수식 + 기호표** | 등장하는 **모든** 기호를 읽는 법·타입·범위까지 표로 |
| **유도** | 한 줄마다 "왜 이 변형이 가능한가"를 병기 |
| **수치 예제** | 손으로 검산 가능한 작은 숫자, 중간 계산 생략 없이 |
| **인터랙티브 실험** | 슬라이더·드래그·단계 재생으로 직접 조작 (절마다 3개 이상) |
| **함정** | "이렇게 착각하기 쉽다 → 실제로는" |
| **자가 점검** | 정답과 풀이가 붙은 문제 |
| **출처** | 원논문·교재·강의·영상을 4개 이상, **어느 부분을 참고했는지까지** 명시 |

## 특징

- **수식이 제대로 나온다** — KaTeX 를 저장소에 포함. 인터넷 없이도 렌더됩니다.
- **그림이 살아 있다** — 모든 도식은 외부 이미지가 아니라 SVG/Canvas 로 직접 그려서, 값을 바꾸면 즉시 반응합니다.
- **슬라이드 모드** — 같은 페이지를 발표 슬라이드처럼 한 장씩 넘기며 복습할 수 있습니다.
- **진도 기록** — 완료한 절이 빨간 도장으로 표시됩니다 (브라우저에만 저장, 서버 전송 없음).
- **다크모드 · 모바일 · 인쇄(PDF)** 대응.
- **빠지는 항목이 없음을 기계가 검증** — 목차의 개념 항목과 페이지 내용이 1:1로 대응하는지 자동 검사합니다.
- **출처를 끝까지 추적** — 모든 인용은 `references/registry.json` 에 등록되고, 받을 수 있는 원문은
  해시와 함께 로컬에 보관됩니다. 링크가 죽어도 무엇을 봤는지 남습니다.

## 로컬에서 보기

```bash
git clone https://github.com/hopo55/ai-curriculum-web.git
cd ai-curriculum-web
python3 -m http.server 8000
# → http://localhost:8000
```

`index.html` 을 더블클릭해도 대부분 동작하지만, 브라우저에 따라 수식 글꼴이 차단될 수 있어
위 방법을 권장합니다.

## 진행 현황

[`PROGRESS.md`](PROGRESS.md) 에서 장별 진행률을 볼 수 있습니다.

## 직접 이어서 만들려면

이 저장소는 [Claude Code](https://claude.com/claude-code) 로 절을 하나씩 추가하도록 구성돼 있습니다.

```bash
cd ai-curriculum-web
claude
```

```
2.3 절 만들어줘.
```

`CLAUDE.md` 와 `SPEC.md` 에 작성 규약이 들어 있어, 짧은 요청만으로 일관된 형식의 페이지가 만들어집니다.
자주 쓰는 요청 문구는 [`PROMPTS.md`](PROMPTS.md) 에 정리해 두었습니다.

```bash
node tools/check.mjs        # 규약 검사 (누락된 개념 항목·출처 부족이면 실패)
node tools/refs.mjs fetch   # 인용한 원문 내려받기 (교재·논문 PDF)
node tools/refs.mjs verify  # 보관본 해시 · 링크 생존 확인
```

## 구조

```
index.html                       전체 목차 · 진도 · 검색
chapters/chNN/N.M-slug.html      절 페이지
curriculum/ai_curriculum_v2.md   목차 원본
templates/section.html           절 템플릿
references/registry.json         출처 레지스트리 (무료 교재·강의 30여 종 등록됨)
references/library/              내려받은 원문 — gitignore 대상
assets/                          디자인 시스템 · 공용 스크립트
vendor/katex/                    KaTeX 0.18.1 (608K)
tools/                           목차 빌드 · 규약 검사 · 출처 관리
```

작성 규약은 [`SPEC.md`](SPEC.md), 출처 수집·인용·보관 지침은 [`SOURCES.md`](SOURCES.md) 에 있습니다.

## 라이선스

학습용 개인 저장소입니다. 본문은 자유롭게 참고하시되, 인용된 논문·교재의 권리는 각 저작자에게 있습니다.
