/* 페이지 레지스트리 — 실제로 작성이 끝난 절만 여기에 등록한다.
 *
 * 절 페이지를 새로 만들 때마다 이 파일에 항목을 추가해야 한다.
 * (등록하지 않으면 index.html 목차에서 '준비 중'으로 남고 검색에도 잡히지 않는다.)
 *
 * 형식:
 *   "절번호": {
 *     href:    루트 기준 상대경로,
 *     updated: "YYYY-MM-DD",
 *     summary: 한 줄 요약 — 검색 결과에 표시된다,
 *     tags:    검색에 걸리게 할 추가 키워드 (커리큘럼 항목명은 자동 색인되므로 제외)
 *   }
 *
 * 절 번호 순서는 상관없다. 정렬은 curriculum-data.js 기준으로 자동 처리된다.
 */
window.PAGES = {
  "1.1": {
    href: "chapters/ch01/1.1-ai-fundamentals.html",
    updated: "2026-07-25",
    summary: "규칙을 사람이 쓰는 대신 데이터에서 찾아내는 것 — AI·ML·DL·생성형 AI의 구분과 학습·추론의 형식화.",
    tags: [
      "artificial intelligence", "machine learning", "deep learning", "generative AI",
      "Mitchell", "E T P", "Turing test", "imitation game", "argmin", "loss",
      "discriminative", "generative", "inference", "training", "least squares",
      "rule-based", "bitter lesson", "표현학습"
    ]
  },
  "1.2": {
    href: "chapters/ch01/1.2-ml-paradigms.html",
    updated: "2026-07-25",
    summary: "아홉 패러다임은 '감독 신호가 어디서 오는가'와 '지식을 어떻게 옮기는가'라는 서로 직교하는 두 축이다.",
    tags: [
      "supervised", "unsupervised", "semi-supervised", "self-supervised", "reinforcement",
      "transfer learning", "meta-learning", "multi-task", "continual learning",
      "pretext task", "구실 과제", "catastrophic forgetting", "파국적 망각",
      "MAML", "EWC", "SimCLR", "negative transfer", "부정적 전이", "사전학습"
    ]
  }

  // 새 절을 만들면 이 형태로 추가한다 (등록해야 목차·검색에 나타난다):
  // "2.3": {
  //   href: "chapters/ch02/2.3-inner-product.html",
  //   updated: "YYYY-MM-DD",
  //   summary: "한 줄 요약 — 검색 결과에 표시된다.",
  //   tags: ["dot product", "cosine similarity"]
  // }
};
