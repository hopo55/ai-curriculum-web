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
    summary: "규칙을 사람이 쓰는 대신 data에서 찾아내는 것 — AI·ML·DL·generative AI의 구분과 training·inference의 형식화.",
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
    summary: "아홉 패러다임은 '감독 신호가 어디서 오는가'와 '지식을 어떻게 옮기는가'라는 서로 orthogonal 한 두 축이다.",
    tags: [
      "supervised", "unsupervised", "semi-supervised", "self-supervised", "reinforcement",
      "transfer learning", "meta-learning", "multi-task", "continual learning",
      "pretext task", "구실 과제", "catastrophic forgetting", "파국적 망각",
      "MAML", "EWC", "SimCLR", "negative transfer", "부정적 전이", "사전학습"
    ]
  },
  "1.3": {
    href: "chapters/ch01/1.3-ai-fields.html",
    updated: "2026-07-25",
    summary: "분야는 이름이 아니라 (입력공간, 출력공간, loss) 삼중항으로 특정된다.",
    tags: [
      "NLP", "computer vision", "ASR", "TTS", "recommender", "time series",
      "robotics", "autonomous driving", "multimodal", "generative",
      "foundation model", "VLM", "world model", "embodied AI",
      "cosine similarity", "코사인 유사도", "모달리티", "서명"
    ]
  },
  "1.4": {
    href: "chapters/ch01/1.4-ml-system-structure.html",
    updated: "2026-07-25",
    summary: "training은 11단계 중 하나일 뿐이고, pipeline은 직선이 아니라 retraining으로 돌아오는 고리다.",
    tags: [
      "pipeline", "MLOps", "preprocessing", "feature", "deployment",
      "monitoring", "retraining", "training-serving skew", "학습 서빙 왜곡",
      "technical debt", "재학습 주기", "함수 합성"
    ]
  },
  "1.5": {
    href: "chapters/ch01/1.5-data-split-evaluation.html",
    updated: "2026-07-25",
    summary: "본 적 없는 data의 성능을 알기 위해 나눈다. overfitting·data leakage·benchmark overfitting까지.",
    tags: [
      "train validation test", "cross validation", "k-fold", "data leakage",
      "distribution shift", "overfitting", "underfitting", "generalization",
      "benchmark", "baseline", "reproducibility", "표준오차", "경험적 위험"
    ]
  },
  "1.6": {
    href: "chapters/ch01/1.6-research-structure.html",
    updated: "2026-07-25",
    summary: "논문 구조는 형식이 아니라 예상 반론을 하나씩 막는 장치다. 차이가 노이즈보다 큰지 계산한다.",
    tags: [
      "research question", "related work", "ablation", "reproducibility",
      "significance", "seed variance", "시드 분산", "표준오차", "신뢰구간",
      "hyperparameter budget", "ethics", "윤리적 고려", "후속 연구"
    ]
  },

  "2.1": {
    href: "chapters/ch02/2.1-numbers-and-spaces.html",
    updated: "2026-07-28",
    summary: "scalar·vector·matrix·tensor는 축의 개수만 다른 같은 물건이고, basis를 정해야 비로소 숫자로 적힌다.",
    tags: [
      "scalar", "vector", "matrix", "tensor", "shape", "ndim", "axis",
      "basis", "coordinate", "vector space", "subspace",
      "표준기저", "좌표계", "row-major", "broadcasting", "affine"
    ]
  },
  "2.2": {
    href: "chapters/ch02/2.2-vector-operations.html",
    updated: "2026-07-28",
    summary: "vector로 할 수 있는 일은 더하기와 상수배뿐이고, 그 둘을 섞은 linear combination이 linear algebra 전체의 씨앗이다.",
    tags: [
      "vector addition", "scalar multiplication", "linear combination", "span",
      "linear independence", "linear dependence", "norm", "L1", "L2", "L-infinity",
      "unit vector", "distance", "angle", "cosine", "determinant", "평행사변형", "단위공"
    ]
  },
  "2.3": {
    href: "chapters/ch02/2.3-inner-product.html",
    updated: "2026-07-28",
    summary: "두 vector가 얼마나 같은 방향인지를 하나의 수로 요약하는 연산 — 길이·각도·거리·similarity가 모두 여기서 나온다.",
    tags: [
      "dot product", "inner product", "orthogonality", "projection",
      "cosine similarity", "euclidean distance", "manhattan distance",
      "metric space", "triangle inequality", "normalization", "embedding",
      "Cauchy-Schwarz", "코시 슈바르츠", "그람 행렬", "잔차", "직교"
    ]
  },
  "2.4": {
    href: "chapters/ch02/2.4-matrix-operations.html",
    updated: "2026-07-28",
    summary: "matrix multiplication은 여러 linear combination을 한꺼번에 처리하는 장치이고, 나머지 연산은 그 곱을 다루기 쉽게 만드는 도구다.",
    tags: [
      "matrix multiplication", "transpose", "identity", "inverse", "determinant",
      "symmetric", "diagonal", "orthogonal", "block matrix", "sparse", "CSR",
      "outer product", "외적", "비가환", "정규직교", "그람"
    ]
  },
  "2.5": {
    href: "chapters/ch02/2.5-linear-transformation.html",
    updated: "2026-07-28",
    summary: "matrix는 격자를 통째로 움직이는 함수이고, 그 함수는 basis vector가 어디로 가는지만으로 전부 결정된다.",
    tags: [
      "linear map", "affine", "rotation", "scaling", "shear", "reflection",
      "composition", "change of basis", "similarity", "rank", "null space",
      "column space", "row space", "rank-nullity", "선형사상", "전단", "닮음", "영공간"
    ]
  },
  "2.6": {
    href: "chapters/ch02/2.6-linear-systems.html",
    updated: "2026-07-28",
    summary: "Ax=b 는 b 를 A 의 열로 만드는 배합을 찾는 일이고, 만들 수 없으면 가장 가까운 것으로 대신한다.",
    tags: [
      "gaussian elimination", "LU", "QR", "Gram-Schmidt", "normal equation",
      "least squares", "pseudoinverse", "overdetermined", "underdetermined",
      "condition number", "pivot", "자유변수", "후진대입", "최소노름해", "조건수"
    ]
  },
  "2.7": {
    href: "chapters/ch02/2.7-eigenvalues.html",
    updated: "2026-07-28",
    summary: "변환해도 방향이 바뀌지 않는 축을 찾으면, 복잡한 matrix가 diagonal matrix 하나로 단순해진다.",
    tags: [
      "eigenvalue", "eigenvector", "characteristic polynomial", "diagonalization",
      "eigenspace", "spectral decomposition", "power iteration", "spectral radius",
      "PageRank", "defective", "결손행렬", "중복도", "기울기 소실", "기울기 폭발"
    ]
  },
  "2.8": {
    href: "chapters/ch02/2.8-svd.html",
    updated: "2026-07-28",
    summary: "모든 matrix는 rotation → 축별 확대 → rotation으로 쪼개진다. 큰 singular value 몇 개만 남기면 최적의 근사가 된다.",
    tags: [
      "SVD", "singular value", "singular vector", "low-rank approximation",
      "Eckart-Young", "compression", "denoising", "latent space", "matrix completion",
      "nuclear norm", "Frobenius", "spectral norm", "핵 노름", "저랭크", "잠재 요인"
    ]
  },
  "2.9": {
    href: "chapters/ch02/2.9-dimensionality-reduction.html",
    updated: "2026-07-28",
    summary: "dimensionality reduction은 어느 방향을 버릴지 고르는 일이고, PCA 는 variance가 가장 작은 방향부터 버린다.",
    tags: [
      "PCA", "principal component", "explained variance", "covariance",
      "whitening", "scree plot", "reconstruction error", "t-SNE", "UMAP",
      "표준화", "중심화", "설명 분산", "주성분", "시각화", "정보 손실"
    ]
  },
  "2.10": {
    href: "chapters/ch02/2.10-linear-algebra-in-ai.html",
    updated: "2026-07-28",
    summary: "deep learning 연산의 대부분은 matrix multiplication 하나이고, 구조의 차이는 무엇을 무엇에 곱하는가의 차이다.",
    tags: [
      "linear layer", "embedding", "attention", "QK^T", "softmax", "LoRA",
      "low-rank adaptation", "matrix factorization", "pruning", "graph", "adjacency",
      "GNN", "im2col", "GEMM", "CLIP", "multimodal", "FLOPs", "어텐션 맵", "저랭크 적응"
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
