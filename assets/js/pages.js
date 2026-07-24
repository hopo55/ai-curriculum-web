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
  // 예시 (실제 페이지 생성 시 이 형태로 추가):
  // "2.3": {
  //   href: "chapters/ch02/2.3-inner-product.html",
  //   updated: "2026-07-24",
  //   summary: "두 벡터가 얼마나 같은 방향인지를 하나의 수로 요약하는 연산.",
  //   tags: ["dot product", "cosine similarity", "projection"]
  // }
};
