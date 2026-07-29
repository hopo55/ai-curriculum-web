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
  },

  "3.1": {
    href: "chapters/ch03/3.1-functions-basics.html",
    updated: "2026-07-29",
    summary: "neural network는 층을 합성해 만든 함수 하나이고, domain·합성·연속성·국소 근사가 3장 전체의 문법이다.",
    tags: [
      "function", "domain", "codomain", "image", "composite function", "inverse function",
      "bijective", "injective", "surjective", "multivariable", "scalar field",
      "limit", "epsilon delta", "continuity", "local approximation", "little-o",
      "logit", "sigmoid", "정의역", "공역", "합성함수", "역함수", "연속성", "극한", "국소 근사"
    ]
  },
  "3.2": {
    href: "chapters/ch03/3.2-derivatives.html",
    updated: "2026-07-29",
    summary: "할선을 좁히면 접선이 되고, 그 기울기가 derivative다. 부호는 방향을, 크기는 급함을, f″는 휘는 정도를 알려 준다.",
    tags: [
      "derivative", "rate of change", "tangent line", "second derivative",
      "differentiability", "monotonicity", "extremum", "critical point", "curvature",
      "Taylor", "sigmoid derivative", "ReLU", "dying ReLU", "saturation",
      "변화율", "도함수", "접선", "고계도함수", "단조성", "극값", "곡률", "포화"
    ]
  },
  "3.3": {
    href: "chapters/ch03/3.3-multivariable-derivatives.html",
    updated: "2026-07-29",
    summary: "gradient는 가장 가파른 오르막을 가리키고 등고선에 수직이다. Jacobian은 (출력, 입력), Hessian의 eigenvalue가 곡률이다.",
    tags: [
      "partial derivative", "gradient", "directional derivative", "Jacobian", "Hessian",
      "chain rule", "vector-valued", "matrix calculus", "layout convention",
      "condition number", "saddle point", "positive definite", "Schwarz",
      "편미분", "그래디언트", "방향도함수", "헤시안", "행렬 미분", "조건수", "등고선"
    ]
  },
  "3.4": {
    href: "chapters/ch03/3.4-chain-rule-computation-graph.html",
    updated: "2026-07-29",
    summary: "chain rule은 Jacobian의 곱이고, 곱하는 순서가 forward mode와 reverse mode를 가른다. loss가 하나라 뒤에서부터가 싸다.",
    tags: [
      "chain rule", "computation graph", "forward pass", "backpropagation",
      "automatic differentiation", "autodiff", "reverse mode", "forward mode",
      "VJP", "JVP", "adjoint", "gradient accumulation", "micrograd", "dual number",
      "checkpointing", "residual", "zero_grad", "계산 그래프", "순전파", "역전파", "자동미분", "기울기 누적"
    ]
  },
  "3.5": {
    href: "chapters/ch03/3.5-optimization-basics.html",
    updated: "2026-07-29",
    summary: "볼록하면 지역 최적점이 곧 전역 최적점이고, 딥러닝의 진짜 방해물은 나쁜 지역 최소가 아니라 안장점이다.",
    tags: [
      "objective function", "loss function", "constraint", "feasible set",
      "global optimum", "local optimum", "saddle point", "convexity", "non-convexity",
      "optimization path", "argmin", "empirical risk", "surrogate loss",
      "permutation symmetry", "목적함수", "손실함수", "제약조건", "안장점", "볼록성", "최적화 경로"
    ]
  },
  "3.6": {
    href: "chapters/ch03/3.6-gradient-descent.html",
    updated: "2026-07-29",
    summary: "θ ← θ − η∇L 한 줄이 전부다. 세 변종은 gradient 추정 방식의 차이이고, η의 상한은 2/λmax가 정한다.",
    tags: [
      "batch gradient descent", "SGD", "mini-batch", "learning rate", "convergence",
      "divergence", "initialization", "condition number", "plateau", "epoch", "step",
      "linear scaling rule", "LR range test", "Xavier", "He", "noise floor",
      "경사하강법", "학습률", "수렴", "발산", "초기값", "조건수", "고원", "지그재그"
    ]
  },
  "3.7": {
    href: "chapters/ch03/3.7-optimization-algorithms.html",
    updated: "2026-07-29",
    summary: "관성(momentum)과 축별 스케일(adaptive) 두 아이디어뿐이다. Adam은 둘을 합친 것, AdamW는 weight decay를 떼어낸 것.",
    tags: [
      "momentum", "Nesterov", "AdaGrad", "RMSProp", "Adam", "AdamW", "LAMB", "Lion",
      "bias correction", "first-order", "second-order", "Newton", "L-BFGS", "K-FAC",
      "trust ratio", "decoupled weight decay", "optimizer memory",
      "모멘텀", "적응적 학습률", "1차 최적화", "2차 최적화", "헤시안 근사"
    ]
  },
  "3.8": {
    href: "chapters/ch03/3.8-learning-rate-schedules.html",
    updated: "2026-07-29",
    summary: "학습률은 숫자가 아니라 시간의 함수다. 초반엔 크게, 후반엔 작게 — 오늘날의 표준은 linear warmup + cosine decay.",
    tags: [
      "learning rate schedule", "constant", "step decay", "exponential decay",
      "cosine decay", "warmup", "warm restart", "SGDR", "cyclic learning rate",
      "one-cycle", "super-convergence", "annealing", "noise floor",
      "고정 학습률", "코사인 감쇠", "예열", "재시작", "순환 학습률", "원사이클", "담금질"
    ]
  },
  "3.9": {
    href: "chapters/ch03/3.9-constraints-regularization.html",
    updated: "2026-07-29",
    summary: "제약과 벌점은 같은 것의 두 얼굴이다. L1은 마름모의 모서리에서 접해 파라미터를 정확히 0으로 만든다.",
    tags: [
      "Lagrange multiplier", "constrained optimization", "KKT", "L1", "L2",
      "ridge", "lasso", "weight decay", "sparsity", "soft thresholding",
      "early stopping", "implicit regularization", "min-norm", "double descent",
      "라그랑주 승수", "제약 최적화", "정규화", "희소성", "조기 종료", "암묵적 정규화"
    ]
  },
  "3.10": {
    href: "chapters/ch03/3.10-deep-learning-optimization.html",
    updated: "2026-07-29",
    summary: "Jacobian이 L번 곱해져 gradient가 지수적으로 죽거나 터진다. 도달한 최소점의 모양이 일반화를 좌우한다.",
    tags: [
      "vanishing gradient", "exploding gradient", "gradient clipping", "sharp minimum",
      "flat minimum", "batch size", "generalization", "loss landscape", "scale invariance",
      "residual", "spectral radius", "filter normalization", "critical batch size",
      "BatchNorm", "effective learning rate", "mode connectivity",
      "기울기 소실", "기울기 폭주", "손실 지형", "일반화", "스케일 불변성"
    ]
  },

  "4.1": {
    href: "chapters/ch04/4.1-probability-basics.html",
    updated: "2026-07-29",
    summary: "확률은 집합에 붙는 넓이이고, 조건부확률은 표본공간을 줄여 다시 재는 것이며, Bayes' theorem은 그 방향을 뒤집는다.",
    tags: [
      "sample space", "event", "probability", "Kolmogorov axioms",
      "conditional probability", "chain rule", "independence", "dependence",
      "mutually exclusive", "law of total probability", "Bayes theorem",
      "prior", "likelihood", "evidence", "posterior", "base rate fallacy",
      "odds", "likelihood ratio", "Monty Hall",
      "표본공간", "사건", "조건부확률", "독립", "종속", "전확률법칙", "베이즈 정리", "기저율"
    ]
  },
  "4.2": {
    href: "chapters/ch04/4.2-random-variables.html",
    updated: "2026-07-29",
    summary: "확률변수는 변수가 아니라 Ω에서 실수로 가는 함수다. PMF·PDF·CDF는 그 함수가 만든 확률을 적는 세 문법.",
    tags: [
      "random variable", "discrete", "continuous", "PMF", "PDF", "CDF",
      "joint distribution", "marginal", "conditional", "marginalize",
      "support", "quantile", "inverse transform sampling", "Jacobian",
      "확률변수", "확률질량함수", "확률밀도함수", "누적분포함수",
      "결합분포", "주변분포", "조건부분포", "역변환 샘플링"
    ]
  },
  "4.3": {
    href: "chapters/ch04/4.3-expectation-variance.html",
    updated: "2026-07-29",
    summary: "기댓값은 무게중심, 분산은 관성모멘트. 기댓값은 언제나 선형이지만 분산은 무상관일 때만 더해진다.",
    tags: [
      "expectation", "variance", "standard deviation", "covariance", "correlation",
      "moment", "skewness", "kurtosis", "MGF", "law of large numbers",
      "central limit theorem", "standard error", "LOTUS", "Jensen", "Chebyshev",
      "기댓값", "분산", "표준편차", "공분산", "상관계수", "모멘트",
      "중심극한정리", "대수의 법칙", "표준오차", "왜도", "첨도"
    ]
  },
  "4.4": {
    href: "chapters/ch04/4.4-common-distributions.html",
    updated: "2026-07-29",
    summary: "열한 개 분포는 하나의 계보다. Bernoulli에서 셋이 갈라지고, Poisson·Gaussian은 극한, Beta·Dirichlet은 확률 위의 분포.",
    tags: [
      "Bernoulli", "Binomial", "Categorical", "Multinomial", "Uniform",
      "Gaussian", "normal", "multivariate Gaussian", "Exponential", "Poisson",
      "Beta", "Dirichlet", "conjugate prior", "exponential family",
      "memoryless", "Mahalanobis", "overdispersion", "68-95-99.7",
      "베르누이", "이항분포", "범주분포", "다항분포", "균등분포", "정규분포",
      "지수분포", "푸아송", "켤레사전분포", "지수족"
    ]
  },
  "4.5": {
    href: "chapters/ch04/4.5-statistical-estimation.html",
    updated: "2026-07-29",
    summary: "추정량은 숫자가 아니라 확률변수다. MSE = 편향² + 분산 한 줄이 네 가지 평가 기준을 잇는다.",
    tags: [
      "sample", "population", "estimator", "estimate", "point estimation",
      "interval estimation", "confidence interval", "bias", "variance",
      "consistency", "efficiency", "sufficient statistic", "Fisher information",
      "Cramer-Rao", "MSE", "degrees of freedom", "ddof", "bootstrap",
      "표본", "모집단", "추정량", "점추정", "구간추정", "편향", "일치성",
      "효율성", "충분통계량", "신뢰구간", "자유도", "피셔 정보량"
    ]
  },
  "4.6": {
    href: "chapters/ch04/4.6-likelihood-estimation.html",
    updated: "2026-07-29",
    summary: "likelihood는 data를 고정하고 parameter를 움직인 함수다. MAP에 더해진 log prior가 곧 L2·L1 정규화 항이다.",
    tags: [
      "likelihood", "log-likelihood", "maximum likelihood", "MLE", "MAP",
      "prior", "posterior", "evidence", "conjugate prior", "Bayesian inference",
      "posterior predictive", "NLL", "cross-entropy", "ridge", "lasso",
      "pseudo-count", "smoothing", "credible interval",
      "가능도", "로그가능도", "최대가능도추정", "최대사후확률", "사전분포",
      "사후분포", "켤레사전분포", "베이지안 추론", "정규화"
    ]
  },
  "4.7": {
    href: "chapters/ch04/4.7-information-theory.html",
    updated: "2026-07-29",
    summary: "정보량은 −log p 하나에서 나온다. cross-entropy는 틀린 코드북의 평균 길이, KL은 그 낭비분, MI는 독립에서 벗어난 정도.",
    tags: [
      "information content", "surprisal", "entropy", "cross-entropy",
      "KL divergence", "relative entropy", "mutual information",
      "conditional entropy", "Jensen-Shannon", "information bottleneck",
      "Shannon", "bit", "nat", "perplexity", "source coding", "Gibbs inequality",
      "data processing inequality", "mode covering", "mode seeking",
      "정보량", "엔트로피", "교차엔트로피", "상호정보량", "조건부 엔트로피", "정보 병목"
    ]
  },
  "4.8": {
    href: "chapters/ch04/4.8-hypothesis-testing.html",
    updated: "2026-07-29",
    summary: "p-value는 귀무가설이 참일 확률이 아니다. 검정력과 효과크기 없이 p만 보면 model 비교가 잡음을 좇는다.",
    tags: [
      "null hypothesis", "alternative hypothesis", "p-value", "significance level",
      "type I error", "type II error", "power", "multiple testing", "effect size",
      "confidence interval", "Bonferroni", "Benjamini-Hochberg", "FDR", "FWER",
      "McNemar", "paired test", "p-hacking", "winner's curse", "Cohen's d",
      "귀무가설", "대립가설", "유의수준", "1종 오류", "2종 오류", "검정력",
      "다중검정", "효과크기", "신뢰구간", "사전등록"
    ]
  },
  "4.9": {
    href: "chapters/ch04/4.9-uncertainty.html",
    updated: "2026-07-29",
    summary: "data로 줄일 수 있는 불확실성과 없는 불확실성은 처방이 다르다. softmax 확률은 그 자체로 확신의 척도가 아니다.",
    tags: [
      "aleatoric", "epistemic", "predictive uncertainty", "calibration",
      "confidence", "ECE", "reliability diagram", "temperature scaling",
      "entropy-based uncertainty", "BALD", "ensemble", "deep ensemble",
      "Bayesian neural network", "MC dropout", "variational inference",
      "OOD", "heteroscedastic", "Brier score", "abstention",
      "불확실성", "보정", "앙상블", "베이지안 신경망", "분포 이동"
    ]
  },
  "4.10": {
    href: "chapters/ch04/4.10-ai-and-probability.html",
    updated: "2026-07-29",
    summary: "AI는 확률분포를 다루는 기계다. 분류는 p(y|x), 언어 모델은 chain rule, 잠재변수 모델은 적분, 디코딩은 뽑기 규칙.",
    tags: [
      "probabilistic classification", "language model", "perplexity",
      "generative model", "latent variable model", "ELBO", "VAE", "diffusion",
      "Markov chain", "HMM", "MDP", "stationary distribution",
      "uncertainty estimation", "sampling", "ancestral sampling",
      "reparameterization", "rejection sampling", "MCMC", "Gumbel-max",
      "decoding", "greedy", "beam search", "temperature", "top-k", "top-p",
      "nucleus sampling", "self-consistency",
      "확률적 분류", "언어 모델 확률", "생성 모델", "잠재변수 모델",
      "확률적 상태전이", "샘플링", "확률적 디코딩", "정상분포"
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
