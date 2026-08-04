/* 자동 생성 파일 — 손으로 편집하지 마세요.
   생성: node tools/build-curriculum.mjs
   출처: curriculum/ai_curriculum_v2.md
   규모: 28장 / 347절 / 2898항목 */
window.CURRICULUM = [
 {
  "n": 1,
  "title": "AI 개론",
  "sections": [
   {
    "id": "1.1",
    "title": "인공지능의 기본 개념",
    "bullets": [
     "인공지능의 정의",
     "머신러닝의 정의",
     "딥러닝의 정의",
     "생성형 AI의 정의",
     "지능형 시스템의 구성",
     "학습과 추론",
     "모델과 알고리즘",
     "데이터와 지식",
     "규칙 기반 시스템과 학습 기반 시스템"
    ]
   },
   {
    "id": "1.2",
    "title": "머신러닝 패러다임",
    "bullets": [
     "지도학습",
     "비지도학습",
     "반지도학습",
     "자기지도학습",
     "강화학습",
     "전이학습",
     "메타러닝",
     "멀티태스크 학습",
     "연속학습"
    ]
   },
   {
    "id": "1.3",
    "title": "AI 주요 분야",
    "bullets": [
     "자연어처리",
     "컴퓨터 비전",
     "음성 인식",
     "음성 합성",
     "추천 시스템",
     "시계열 예측",
     "로보틱스",
     "자율주행",
     "멀티모달 AI",
     "생성 모델",
     "Foundation Model",
     "Vision-Language Model",
     "World Model",
     "Embodied AI"
    ]
   },
   {
    "id": "1.4",
    "title": "머신러닝 시스템의 기본 구조",
    "bullets": [
     "데이터 수집",
     "데이터 전처리",
     "특성 표현",
     "모델 선택",
     "학습",
     "검증",
     "평가",
     "추론",
     "배포",
     "모니터링",
     "재학습"
    ]
   },
   {
    "id": "1.5",
    "title": "데이터 분할과 평가",
    "bullets": [
     "훈련 데이터",
     "검증 데이터",
     "테스트 데이터",
     "교차검증",
     "데이터 누출",
     "분포 변화",
     "과적합",
     "과소적합",
     "일반화",
     "벤치마크",
     "베이스라인",
     "재현성"
    ]
   },
   {
    "id": "1.6",
    "title": "AI 연구의 기본 구조",
    "bullets": [
     "연구 문제",
     "관련 연구",
     "방법론",
     "실험 설계",
     "비교 실험",
     "Ablation Study",
     "한계",
     "재현성",
     "윤리적 고려",
     "후속 연구"
    ]
   }
  ]
 },
 {
  "n": 2,
  "title": "선형대수",
  "sections": [
   {
    "id": "2.1",
    "title": "수와 공간의 기본 구조",
    "bullets": [
     "스칼라",
     "벡터",
     "행렬",
     "텐서",
     "차원",
     "Shape",
     "좌표계",
     "기저",
     "벡터 공간",
     "부분공간"
    ]
   },
   {
    "id": "2.2",
    "title": "벡터 연산",
    "bullets": [
     "벡터 덧셈",
     "스칼라 곱",
     "선형결합",
     "Span",
     "선형독립",
     "선형종속",
     "벡터의 크기",
     "단위벡터",
     "거리",
     "각도"
    ]
   },
   {
    "id": "2.3",
    "title": "내적과 유사도",
    "bullets": [
     "내적",
     "직교성",
     "정사영",
     "코사인 유사도",
     "유클리드 거리",
     "맨해튼 거리",
     "거리 공간",
     "유사도 공간",
     "정규화",
     "임베딩 공간"
    ]
   },
   {
    "id": "2.4",
    "title": "행렬 연산",
    "bullets": [
     "행렬 덧셈",
     "행렬 곱",
     "전치행렬",
     "단위행렬",
     "역행렬",
     "대칭행렬",
     "대각행렬",
     "직교행렬",
     "블록행렬",
     "희소행렬"
    ]
   },
   {
    "id": "2.5",
    "title": "선형변환",
    "bullets": [
     "선형사상",
     "회전",
     "확대와 축소",
     "전단",
     "좌표 변환",
     "합성 변환",
     "행렬 표현",
     "Rank",
     "Null Space",
     "Column Space",
     "Row Space"
    ]
   },
   {
    "id": "2.6",
    "title": "연립방정식과 행렬 분해",
    "bullets": [
     "연립선형방정식",
     "가우스 소거법",
     "LU 분해",
     "QR 분해",
     "정규방정식",
     "최소제곱법",
     "과결정 시스템",
     "부족결정 시스템"
    ]
   },
   {
    "id": "2.7",
    "title": "고유값과 고유벡터",
    "bullets": [
     "고유값",
     "고유벡터",
     "특성방정식",
     "대각화",
     "고유공간",
     "스펙트럴 분해",
     "반복 선형변환",
     "안정성 분석"
    ]
   },
   {
    "id": "2.8",
    "title": "특이값 분해",
    "bullets": [
     "특이값",
     "특이벡터",
     "SVD",
     "저랭크 근사",
     "행렬 압축",
     "노이즈 제거",
     "잠재 공간",
     "행렬 완성"
    ]
   },
   {
    "id": "2.9",
    "title": "차원 축소",
    "bullets": [
     "PCA",
     "주성분",
     "설명 분산",
     "공분산 행렬",
     "Whitening",
     "저차원 표현",
     "차원 축소의 정보 손실",
     "시각화"
    ]
   },
   {
    "id": "2.10",
    "title": "AI와 선형대수",
    "bullets": [
     "신경망의 선형층",
     "임베딩",
     "Attention의 행렬 연산",
     "저랭크 적응",
     "행렬 분해 기반 압축",
     "그래프 표현",
     "이미지 텐서",
     "시퀀스 텐서",
     "멀티모달 표현"
    ]
   }
  ]
 },
 {
  "n": 3,
  "title": "미적분과 최적화",
  "sections": [
   {
    "id": "3.1",
    "title": "함수의 기본",
    "bullets": [
     "함수",
     "정의역",
     "공역",
     "합성함수",
     "역함수",
     "다변수 함수",
     "연속성",
     "극한",
     "국소 근사"
    ]
   },
   {
    "id": "3.2",
    "title": "미분",
    "bullets": [
     "변화율",
     "도함수",
     "접선",
     "고계도함수",
     "미분 가능성",
     "단조성",
     "극값",
     "곡률"
    ]
   },
   {
    "id": "3.3",
    "title": "다변수 미분",
    "bullets": [
     "편미분",
     "그래디언트",
     "방향도함수",
     "Jacobian",
     "Hessian",
     "다변수 연쇄법칙",
     "벡터값 함수",
     "행렬 미분"
    ]
   },
   {
    "id": "3.4",
    "title": "연쇄법칙과 계산 그래프",
    "bullets": [
     "함수 합성",
     "계산 그래프",
     "순전파",
     "역방향 미분",
     "자동미분",
     "Reverse Mode",
     "Forward Mode",
     "기울기 누적"
    ]
   },
   {
    "id": "3.5",
    "title": "최적화 기초",
    "bullets": [
     "목적함수",
     "손실함수",
     "제약조건",
     "전역 최적점",
     "지역 최적점",
     "안장점",
     "볼록성",
     "비볼록성",
     "최적화 경로"
    ]
   },
   {
    "id": "3.6",
    "title": "경사하강법",
    "bullets": [
     "Batch Gradient Descent",
     "Stochastic Gradient Descent",
     "Mini-batch Gradient Descent",
     "학습률",
     "수렴",
     "발산",
     "초기값",
     "조건수",
     "Plateau"
    ]
   },
   {
    "id": "3.7",
    "title": "최적화 알고리즘",
    "bullets": [
     "Momentum",
     "Nesterov Momentum",
     "AdaGrad",
     "RMSProp",
     "Adam",
     "AdamW",
     "LAMB",
     "Lion",
     "1차 최적화",
     "2차 최적화"
    ]
   },
   {
    "id": "3.8",
    "title": "학습률 전략",
    "bullets": [
     "고정 학습률",
     "Step Decay",
     "Exponential Decay",
     "Cosine Decay",
     "Warmup",
     "Restart",
     "Cyclic Learning Rate",
     "One-Cycle Policy"
    ]
   },
   {
    "id": "3.9",
    "title": "제약과 정규화",
    "bullets": [
     "라그랑주 승수",
     "제약 최적화",
     "L1 정규화",
     "L2 정규화",
     "Weight Decay",
     "Sparsity",
     "조기 종료",
     "암묵적 정규화"
    ]
   },
   {
    "id": "3.10",
    "title": "딥러닝 최적화",
    "bullets": [
     "기울기 소실",
     "기울기 폭주",
     "Gradient Clipping",
     "Sharp Minimum",
     "Flat Minimum",
     "Batch Size",
     "최적화와 일반화",
     "손실 지형",
     "Scale Invariance"
    ]
   }
  ]
 },
 {
  "n": 4,
  "title": "확률과 통계",
  "sections": [
   {
    "id": "4.1",
    "title": "확률의 기본",
    "bullets": [
     "표본공간",
     "사건",
     "확률",
     "조건부 확률",
     "독립",
     "종속",
     "전확률법칙",
     "베이즈 정리"
    ]
   },
   {
    "id": "4.2",
    "title": "확률변수",
    "bullets": [
     "이산 확률변수",
     "연속 확률변수",
     "확률질량함수",
     "확률밀도함수",
     "누적분포함수",
     "결합분포",
     "주변분포",
     "조건부분포"
    ]
   },
   {
    "id": "4.3",
    "title": "기댓값과 분산",
    "bullets": [
     "기댓값",
     "분산",
     "표준편차",
     "공분산",
     "상관계수",
     "모멘트",
     "중심극한정리",
     "대수의 법칙"
    ]
   },
   {
    "id": "4.4",
    "title": "주요 확률분포",
    "bullets": [
     "Bernoulli 분포",
     "Binomial 분포",
     "Categorical 분포",
     "Multinomial 분포",
     "Uniform 분포",
     "Gaussian 분포",
     "Multivariate Gaussian",
     "Exponential 분포",
     "Poisson 분포",
     "Beta 분포",
     "Dirichlet 분포"
    ]
   },
   {
    "id": "4.5",
    "title": "통계적 추정",
    "bullets": [
     "표본",
     "모집단",
     "추정량",
     "점추정",
     "구간추정",
     "편향",
     "분산",
     "일치성",
     "효율성",
     "충분통계량"
    ]
   },
   {
    "id": "4.6",
    "title": "가능도 기반 추정",
    "bullets": [
     "Likelihood",
     "Log-likelihood",
     "최대가능도추정",
     "최대사후확률추정",
     "Prior",
     "Posterior",
     "Conjugate Prior",
     "베이지안 추론"
    ]
   },
   {
    "id": "4.7",
    "title": "정보이론",
    "bullets": [
     "정보량",
     "엔트로피",
     "교차엔트로피",
     "KL Divergence",
     "Mutual Information",
     "조건부 엔트로피",
     "Jensen-Shannon Divergence",
     "정보 병목"
    ]
   },
   {
    "id": "4.8",
    "title": "가설검정과 통계적 비교",
    "bullets": [
     "귀무가설",
     "대립가설",
     "p-value",
     "유의수준",
     "1종 오류",
     "2종 오류",
     "검정력",
     "다중검정",
     "효과크기",
     "신뢰구간"
    ]
   },
   {
    "id": "4.9",
    "title": "불확실성",
    "bullets": [
     "Aleatoric Uncertainty",
     "Epistemic Uncertainty",
     "Predictive Uncertainty",
     "Calibration",
     "Confidence",
     "Entropy-based Uncertainty",
     "Ensemble",
     "Bayesian Neural Network"
    ]
   },
   {
    "id": "4.10",
    "title": "AI와 확률",
    "bullets": [
     "확률적 분류",
     "언어 모델 확률",
     "생성 모델",
     "잠재변수 모델",
     "확률적 상태전이",
     "불확실성 추정",
     "샘플링",
     "확률적 디코딩"
    ]
   }
  ]
 },
 {
  "n": 5,
  "title": "전통적 머신러닝",
  "sections": [
   {
    "id": "5.1",
    "title": "머신러닝 문제 정의",
    "bullets": [
     "입력 공간",
     "출력 공간",
     "가설 공간",
     "모델 클래스",
     "경험적 위험",
     "기대 위험",
     "귀납적 편향",
     "일반화 오차",
     "표본 복잡도",
     "No Free Lunch"
    ]
   },
   {
    "id": "5.2",
    "title": "통계적 학습이론",
    "bullets": [
     "Bias-Variance Tradeoff",
     "Empirical Risk Minimization",
     "Structural Risk Minimization",
     "PAC Learning",
     "VC Dimension",
     "Rademacher Complexity",
     "Generalization Bound",
     "Uniform Convergence",
     "Margin Theory",
     "Sample Complexity"
    ]
   },
   {
    "id": "5.3",
    "title": "선형회귀",
    "bullets": [
     "단순선형회귀",
     "다중선형회귀",
     "최소제곱법",
     "잔차",
     "정규방정식",
     "다중공선성",
     "Ridge Regression",
     "Lasso Regression",
     "Elastic Net",
     "Robust Regression"
    ]
   },
   {
    "id": "5.4",
    "title": "로지스틱 회귀",
    "bullets": [
     "이진 분류",
     "Logit",
     "Sigmoid",
     "결정경계",
     "다중분류",
     "Softmax Regression",
     "확률적 해석",
     "정규화"
    ]
   },
   {
    "id": "5.5",
    "title": "거리 기반 학습",
    "bullets": [
     "K-Nearest Neighbors",
     "거리 함수",
     "특성 스케일링",
     "지역적 결정경계",
     "Curse of Dimensionality",
     "근사 최근접 탐색"
    ]
   },
   {
    "id": "5.6",
    "title": "결정트리",
    "bullets": [
     "재귀적 분할",
     "Entropy",
     "Gini Impurity",
     "Information Gain",
     "Tree Depth",
     "Leaf Node",
     "Pruning",
     "회귀트리",
     "분류트리"
    ]
   },
   {
    "id": "5.7",
    "title": "앙상블",
    "bullets": [
     "Voting",
     "Bagging",
     "Random Forest",
     "Extra Trees",
     "Boosting",
     "AdaBoost",
     "Gradient Boosting",
     "XGBoost",
     "LightGBM",
     "CatBoost",
     "Stacking"
    ]
   },
   {
    "id": "5.8",
    "title": "Support Vector Machine",
    "bullets": [
     "Margin",
     "Support Vector",
     "Hard Margin",
     "Soft Margin",
     "Hinge Loss",
     "Kernel Trick",
     "Linear Kernel",
     "Polynomial Kernel",
     "RBF Kernel",
     "One-Class SVM"
    ]
   },
   {
    "id": "5.9",
    "title": "확률적 생성 모델",
    "bullets": [
     "Naive Bayes",
     "Gaussian Discriminant Analysis",
     "Gaussian Mixture Model",
     "Latent Variable",
     "EM Algorithm",
     "Hidden Markov Model"
    ]
   },
   {
    "id": "5.10",
    "title": "군집화",
    "bullets": [
     "K-means",
     "K-medoids",
     "Hierarchical Clustering",
     "DBSCAN",
     "Spectral Clustering",
     "Gaussian Mixture Clustering",
     "군집 평가"
    ]
   },
   {
    "id": "5.11",
    "title": "차원 축소와 매니폴드 학습",
    "bullets": [
     "PCA",
     "Kernel PCA",
     "ICA",
     "MDS",
     "Isomap",
     "t-SNE",
     "UMAP",
     "비선형 차원 축소"
    ]
   },
   {
    "id": "5.12",
    "title": "이상치 탐지",
    "bullets": [
     "Statistical Outlier Detection",
     "Isolation Forest",
     "One-Class SVM",
     "Local Outlier Factor",
     "Reconstruction-based Detection"
    ]
   },
   {
    "id": "5.13",
    "title": "모델 평가",
    "bullets": [
     "Accuracy",
     "Precision",
     "Recall",
     "F1 Score",
     "Confusion Matrix",
     "ROC Curve",
     "ROC-AUC",
     "Precision-Recall Curve",
     "PR-AUC",
     "Log Loss",
     "Calibration",
     "회귀 평가 지표"
    ]
   },
   {
    "id": "5.14",
    "title": "모델 선택",
    "bullets": [
     "Train-Validation-Test Split",
     "K-Fold Cross Validation",
     "Stratified Sampling",
     "Hyperparameter Search",
     "Grid Search",
     "Random Search",
     "Bayesian Optimization",
     "Nested Cross Validation"
    ]
   }
  ]
 },
 {
  "n": 6,
  "title": "딥러닝 기초",
  "sections": [
   {
    "id": "6.1",
    "title": "퍼셉트론",
    "bullets": [
     "선형 분류기",
     "가중치",
     "Bias (편향항)",
     "활성화",
     "결정경계",
     "선형 분리 가능성",
     "XOR 문제"
    ]
   },
   {
    "id": "6.2",
    "title": "다층 퍼셉트론",
    "bullets": [
     "입력층",
     "은닉층",
     "출력층",
     "깊이",
     "너비",
     "표현력",
     "비선형성",
     "Universal Approximation",
     "Linear Region",
     "Depth Separation",
     "Approximation-Complexity Tradeoff"
    ]
   },
   {
    "id": "6.3",
    "title": "활성화 함수",
    "bullets": [
     "Sigmoid",
     "Tanh",
     "ReLU",
     "Leaky ReLU",
     "ELU",
     "SELU",
     "GELU",
     "Swish",
     "Softplus",
     "활성화 함수 선택"
    ]
   },
   {
    "id": "6.4",
    "title": "순전파와 역전파",
    "bullets": [
     "순전파",
     "손실 계산",
     "계산 그래프",
     "역전파",
     "기울기 계산",
     "파라미터 업데이트",
     "자동미분"
    ]
   },
   {
    "id": "6.5",
    "title": "손실함수",
    "bullets": [
     "Output Distribution",
     "Negative Log-Likelihood",
     "Softmax",
     "Logit",
     "Mean Squared Error",
     "Mean Absolute Error",
     "Binary Cross-Entropy",
     "Categorical Cross-Entropy",
     "Hinge Loss",
     "Focal Loss",
     "Contrastive Loss",
     "Triplet Loss",
     "Metric Learning Loss"
    ]
   },
   {
    "id": "6.6",
    "title": "가중치 초기화와 수치 안정성",
    "bullets": [
     "Zero Initialization",
     "Random Initialization",
     "Xavier Initialization",
     "He Initialization",
     "Orthogonal Initialization",
     "초기화와 신호 전파",
     "Overflow와 Underflow",
     "Log-Sum-Exp Trick",
     "기울기 소실·폭주"
    ]
   },
   {
    "id": "6.7",
    "title": "정규화 계층",
    "bullets": [
     "Batch Normalization",
     "Layer Normalization",
     "Instance Normalization",
     "Group Normalization",
     "RMSNorm",
     "Weight Normalization",
     "Pre-Norm",
     "Post-Norm"
    ]
   },
   {
    "id": "6.8",
    "title": "일반화 기법",
    "bullets": [
     "L1 Regularization",
     "L2 Regularization",
     "Weight Decay",
     "Dropout",
     "DropConnect",
     "Early Stopping",
     "Label Smoothing",
     "Mixup",
     "CutMix",
     "Data Augmentation"
    ]
   },
   {
    "id": "6.9",
    "title": "Residual Learning",
    "bullets": [
     "Skip Connection",
     "Residual Block",
     "Identity Mapping",
     "Highway Network",
     "Dense Connection",
     "Gradient Flow"
    ]
   },
   {
    "id": "6.10",
    "title": "딥러닝 학습 전략",
    "bullets": [
     "Mini-batch",
     "Shuffle",
     "Activation Memory",
     "연산량과 메모리 대역폭",
     "Gradient Accumulation",
     "Mixed Precision",
     "Gradient Checkpointing",
     "Learning Rate Warmup",
     "Scheduler",
     "Checkpointing"
    ]
   },
   {
    "id": "6.11",
    "title": "딥러닝 일반화",
    "bullets": [
     "Double Descent",
     "Overparameterization",
     "Implicit Bias",
     "Flatness",
     "Sharpness",
     "Lottery Ticket Hypothesis",
     "Neural Tangent Kernel",
     "Scaling Behavior"
    ]
   }
  ]
 },
 {
  "n": 7,
  "title": "컴퓨터 비전",
  "sections": [
   {
    "id": "7.1",
    "title": "이미지 표현",
    "bullets": [
     "픽셀",
     "채널",
     "해상도",
     "색 공간",
     "이미지 텐서",
     "공간 정보",
     "지역성",
     "계층적 특징"
    ]
   },
   {
    "id": "7.2",
    "title": "합성곱 신경망",
    "bullets": [
     "Convolution",
     "Kernel",
     "Feature Map",
     "Stride",
     "Padding",
     "Dilation",
     "Pooling",
     "Receptive Field",
     "Parameter Sharing",
     "Translation Equivariance"
    ]
   },
   {
    "id": "7.3",
    "title": "대표 CNN 구조",
    "bullets": [
     "LeNet",
     "AlexNet",
     "VGG",
     "GoogLeNet",
     "Inception",
     "ResNet",
     "DenseNet",
     "EfficientNet",
     "ConvNeXt"
    ]
   },
   {
    "id": "7.4",
    "title": "이미지 분류",
    "bullets": [
     "Backbone",
     "Feature Extractor",
     "Classification Head",
     "Global Average Pooling",
     "Transfer Learning",
     "Fine-tuning"
    ]
   },
   {
    "id": "7.5",
    "title": "객체 탐지",
    "bullets": [
     "Region Proposal",
     "Bounding Box",
     "Anchor",
     "IoU",
     "Non-Maximum Suppression",
     "R-CNN",
     "Fast R-CNN",
     "Faster R-CNN",
     "SSD",
     "YOLO",
     "DETR"
    ]
   },
   {
    "id": "7.6",
    "title": "이미지 분할",
    "bullets": [
     "Semantic Segmentation",
     "Instance Segmentation",
     "Panoptic Segmentation",
     "FCN",
     "U-Net",
     "DeepLab",
     "Mask R-CNN",
     "Segment Anything"
    ]
   },
   {
    "id": "7.7",
    "title": "Vision Transformer",
    "bullets": [
     "Patch Embedding",
     "Positional Embedding",
     "CLS Token",
     "Self-Attention",
     "MLP Block",
     "ViT",
     "DeiT",
     "Swin Transformer",
     "Hybrid Architecture"
    ]
   },
   {
    "id": "7.8",
    "title": "비전 표현학습",
    "bullets": [
     "Supervised Pretraining",
     "Contrastive Learning",
     "Masked Image Modeling",
     "Distillation",
     "Self-Distillation",
     "Image Representation",
     "Dense Representation"
    ]
   }
  ]
 },
 {
  "n": 8,
  "title": "순차 모델",
  "sections": [
   {
    "id": "8.1",
    "title": "시퀀스 데이터",
    "bullets": [
     "시간 순서",
     "가변 길이",
     "문맥",
     "의존성",
     "시계열",
     "텍스트",
     "음성",
     "비디오"
    ]
   },
   {
    "id": "8.2",
    "title": "Recurrent Neural Network",
    "bullets": [
     "Hidden State",
     "Recurrence",
     "Sequence Processing",
     "Many-to-One",
     "One-to-Many",
     "Many-to-Many",
     "Backpropagation Through Time"
    ]
   },
   {
    "id": "8.3",
    "title": "LSTM",
    "bullets": [
     "Cell State",
     "Forget Gate",
     "Input Gate",
     "Output Gate",
     "장기 의존성",
     "메모리 제어"
    ]
   },
   {
    "id": "8.4",
    "title": "GRU",
    "bullets": [
     "Update Gate",
     "Reset Gate",
     "Hidden State",
     "LSTM과 GRU 비교"
    ]
   },
   {
    "id": "8.5",
    "title": "Sequence-to-Sequence",
    "bullets": [
     "Encoder",
     "Decoder",
     "Context Vector",
     "Teacher Forcing",
     "Exposure Bias",
     "Beam Search"
    ]
   },
   {
    "id": "8.6",
    "title": "Transformer 이전의 Attention",
    "bullets": [
     "Bahdanau Attention",
     "Luong Attention",
     "Encoder-Decoder Attention",
     "Alignment",
     "Context Aggregation"
    ]
   },
   {
    "id": "8.7",
    "title": "시계열 모델링",
    "bullets": [
     "Autoregressive Model",
     "State Space Model",
     "Temporal Convolution",
     "Sequence Forecasting",
     "Temporal Representation"
    ]
   }
  ]
 },
 {
  "n": 9,
  "title": "그래프 신경망",
  "sections": [
   {
    "id": "9.1",
    "title": "그래프 표현",
    "bullets": [
     "노드",
     "엣지",
     "인접행렬",
     "차수행렬",
     "노드 특성",
     "방향 그래프",
     "무방향 그래프",
     "이종 그래프",
     "동적 그래프",
     "그래프 라플라시안"
    ]
   },
   {
    "id": "9.2",
    "title": "Message Passing",
    "bullets": [
     "이웃 집계",
     "Message Function",
     "Update Function",
     "Aggregation",
     "순열 불변성",
     "순열 등변성",
     "이웃 샘플링",
     "Receptive Field",
     "Readout"
    ]
   },
   {
    "id": "9.3",
    "title": "대표 GNN 구조",
    "bullets": [
     "Graph Convolutional Network",
     "GraphSAGE",
     "Graph Attention Network",
     "Graph Isomorphism Network",
     "Spectral GNN",
     "Spatial GNN",
     "ChebNet",
     "Relational GCN",
     "Message Passing Neural Network"
    ]
   },
   {
    "id": "9.4",
    "title": "그래프 표현학습",
    "bullets": [
     "Node Embedding",
     "Graph Embedding",
     "DeepWalk",
     "node2vec",
     "Graph Autoencoder",
     "Contrastive Graph Learning",
     "Self-supervised Graph Learning"
    ]
   },
   {
    "id": "9.5",
    "title": "그래프 수준 과제",
    "bullets": [
     "Node Classification",
     "Link Prediction",
     "Graph Classification",
     "Community Detection",
     "Subgraph Matching",
     "Graph Generation",
     "Knowledge Graph Embedding"
    ]
   },
   {
    "id": "9.6",
    "title": "그래프 Transformer",
    "bullets": [
     "Graph Transformer",
     "Structural Encoding",
     "Laplacian Positional Encoding",
     "Random Walk Encoding",
     "Graphormer",
     "Attention over Graph"
    ]
   },
   {
    "id": "9.7",
    "title": "GNN의 한계",
    "bullets": [
     "Over-smoothing",
     "Over-squashing",
     "표현력 한계",
     "Weisfeiler-Lehman Test",
     "Scalability",
     "Long-range Dependency",
     "Heterophily"
    ]
   }
  ]
 },
 {
  "n": 10,
  "title": "오디오·음성 딥러닝",
  "sections": [
   {
    "id": "10.1",
    "title": "오디오 표현",
    "bullets": [
     "파형",
     "샘플링 레이트",
     "STFT",
     "Spectrogram",
     "Mel-spectrogram",
     "MFCC",
     "Filter Bank",
     "위상 정보",
     "프레임과 홉",
     "Normalization"
    ]
   },
   {
    "id": "10.2",
    "title": "오디오 신경망 구조",
    "bullets": [
     "1D Convolution",
     "Dilated Convolution",
     "WaveNet",
     "Conformer",
     "Audio Transformer",
     "Time-domain Model",
     "Spectrogram Model",
     "Time-Frequency Model"
    ]
   },
   {
    "id": "10.3",
    "title": "음성 인식",
    "bullets": [
     "Acoustic Model",
     "Connectionist Temporal Classification",
     "Attention-based ASR",
     "RNN-Transducer",
     "End-to-End ASR",
     "Whisper",
     "Language Model Fusion",
     "Streaming Recognition"
    ]
   },
   {
    "id": "10.4",
    "title": "음성 자기지도학습",
    "bullets": [
     "wav2vec",
     "wav2vec 2.0",
     "HuBERT",
     "WavLM",
     "data2vec",
     "Contrastive Audio Learning",
     "Masked Audio Modeling",
     "Discrete Speech Unit"
    ]
   },
   {
    "id": "10.5",
    "title": "음성 합성",
    "bullets": [
     "Text-to-Speech",
     "Acoustic Feature Prediction",
     "Tacotron",
     "FastSpeech",
     "Neural Vocoder",
     "WaveNet Vocoder",
     "HiFi-GAN",
     "Diffusion TTS",
     "Zero-shot TTS"
    ]
   },
   {
    "id": "10.6",
    "title": "신경 오디오 코덱과 토큰화",
    "bullets": [
     "Audio Tokenization",
     "Neural Audio Codec",
     "EnCodec",
     "SoundStream",
     "Residual Vector Quantization",
     "Discrete Audio Token",
     "Neural Compression"
    ]
   },
   {
    "id": "10.7",
    "title": "오디오 언어모델과 멀티모달",
    "bullets": [
     "Audio Language Model",
     "Speech LLM",
     "Audio-Text Alignment",
     "Spoken Language Understanding",
     "Audio Captioning",
     "Music Generation",
     "Text-to-Audio Generation"
    ]
   },
   {
    "id": "10.8",
    "title": "음성 과제와 평가",
    "bullets": [
     "Keyword Spotting",
     "Speaker Recognition",
     "Voice Activity Detection",
     "Speech Enhancement",
     "Source Separation",
     "Word Error Rate",
     "Mean Opinion Score",
     "Diarization"
    ]
   }
  ]
 },
 {
  "n": 11,
  "title": "생성 모델",
  "sections": [
   {
    "id": "11.1",
    "title": "생성 모델 개론",
    "bullets": [
     "판별 모델",
     "생성 모델",
     "확률밀도 추정",
     "샘플 생성",
     "명시적 모델",
     "암묵적 모델",
     "조건부 생성",
     "잠재변수"
    ]
   },
   {
    "id": "11.2",
    "title": "Autoencoder",
    "bullets": [
     "Encoder",
     "Bottleneck",
     "Latent Space",
     "Decoder",
     "Reconstruction",
     "Denoising Autoencoder",
     "Sparse Autoencoder",
     "Contractive Autoencoder"
    ]
   },
   {
    "id": "11.3",
    "title": "Variational Autoencoder",
    "bullets": [
     "Variational Inference",
     "Prior",
     "Posterior",
     "Approximate Posterior",
     "Reparameterization",
     "ELBO",
     "KL Regularization",
     "Latent Interpolation",
     "Posterior Collapse"
    ]
   },
   {
    "id": "11.4",
    "title": "Generative Adversarial Network",
    "bullets": [
     "Generator",
     "Discriminator",
     "Adversarial Training",
     "Minimax Game",
     "Mode Collapse",
     "Training Instability",
     "DCGAN",
     "Conditional GAN",
     "WGAN",
     "StyleGAN"
    ]
   },
   {
    "id": "11.5",
    "title": "Autoregressive Generative Model",
    "bullets": [
     "PixelRNN",
     "PixelCNN",
     "WaveNet",
     "Token-by-Token Generation",
     "Likelihood",
     "Sampling Cost"
    ]
   },
   {
    "id": "11.6",
    "title": "Normalizing Flow",
    "bullets": [
     "Invertible Transformation",
     "Change of Variables",
     "Exact Likelihood",
     "Coupling Layer",
     "RealNVP",
     "Glow"
    ]
   },
   {
    "id": "11.7",
    "title": "Diffusion Model",
    "bullets": [
     "Forward Process",
     "Reverse Process",
     "Noise Schedule",
     "Denoising",
     "Score Matching",
     "Noise Prediction",
     "Sampling",
     "DDPM",
     "DDIM",
     "Classifier Guidance",
     "Classifier-Free Guidance"
    ]
   },
   {
    "id": "11.8",
    "title": "Latent Diffusion",
    "bullets": [
     "Latent Space",
     "Compression Model",
     "Conditional Generation",
     "Text Conditioning",
     "Cross-Attention",
     "Image Synthesis"
    ]
   },
   {
    "id": "11.9",
    "title": "이산 잠재 표현과 VQ",
    "bullets": [
     "Vector Quantization",
     "VQ-VAE",
     "Codebook",
     "Commitment Loss",
     "Straight-Through Estimator",
     "VQ-VAE-2",
     "VQGAN",
     "Discrete Latent Token",
     "Tokenizer for Generation",
     "Codebook Collapse"
    ]
   },
   {
    "id": "11.10",
    "title": "Score 기반·연속시간 생성",
    "bullets": [
     "Score Function",
     "Score Matching",
     "Denoising Score Matching",
     "Noise Conditional Score Network",
     "Stochastic Differential Equation",
     "Reverse-time SDE",
     "Probability Flow ODE",
     "Langevin Dynamics",
     "Markov Chain Monte Carlo"
    ]
   },
   {
    "id": "11.11",
    "title": "Flow Matching과 빠른 샘플링",
    "bullets": [
     "Continuous Normalizing Flow",
     "Flow Matching",
     "Rectified Flow",
     "Optimal Transport Path",
     "Consistency Model",
     "Progressive Distillation",
     "Diffusion Distillation",
     "Few-step Generation",
     "One-step Generation"
    ]
   },
   {
    "id": "11.12",
    "title": "생성 모델 비교",
    "bullets": [
     "학습 안정성",
     "샘플 품질",
     "다양성",
     "Likelihood",
     "잠재 공간",
     "추론 속도",
     "샘플링 비용",
     "조건 제어"
    ]
   }
  ]
 },
 {
  "n": 12,
  "title": "Transformer",
  "sections": [
   {
    "id": "12.1",
    "title": "토큰화",
    "bullets": [
     "Character Tokenization",
     "Word Tokenization",
     "Subword Tokenization",
     "BPE",
     "WordPiece",
     "Unigram",
     "Vocabulary",
     "Unknown Token",
     "Special Token",
     "Multilingual Tokenization"
    ]
   },
   {
    "id": "12.2",
    "title": "임베딩",
    "bullets": [
     "Token Embedding",
     "Position Embedding",
     "Segment Embedding",
     "Learned Embedding",
     "Relative Position",
     "Rotary Position Embedding",
     "ALiBi"
    ]
   },
   {
    "id": "12.3",
    "title": "Self-Attention",
    "bullets": [
     "Query",
     "Key",
     "Value",
     "Similarity Score",
     "Scaling",
     "Softmax",
     "Weighted Sum",
     "Attention Matrix",
     "Attention Pattern"
    ]
   },
   {
    "id": "12.4",
    "title": "Multi-Head Attention",
    "bullets": [
     "Attention Head",
     "Head Projection",
     "Head Concatenation",
     "Head Specialization",
     "Output Projection"
    ]
   },
   {
    "id": "12.5",
    "title": "Transformer Block",
    "bullets": [
     "Attention Sub-layer",
     "Feed-Forward Network",
     "Residual Connection",
     "Layer Normalization",
     "Dropout",
     "Pre-Norm",
     "Post-Norm"
    ]
   },
   {
    "id": "12.6",
    "title": "Transformer 구조",
    "bullets": [
     "Encoder-only",
     "Decoder-only",
     "Encoder-Decoder",
     "Bidirectional Attention",
     "Causal Attention",
     "Cross-Attention",
     "Masking"
    ]
   },
   {
    "id": "12.7",
    "title": "Transformer 계산 효율",
    "bullets": [
     "Sequence Length",
     "Quadratic Complexity",
     "Memory Complexity",
     "Sparse Attention",
     "Flash Attention",
     "Sliding Window",
     "Chunking",
     "KV Cache"
    ]
   },
   {
    "id": "12.8",
    "title": "State Space Model과 대안 아키텍처",
    "bullets": [
     "State Space Model",
     "S4",
     "S5",
     "Mamba",
     "Selective State Space",
     "Linear Recurrent Model",
     "RWKV",
     "RetNet",
     "Linear Attention",
     "Sub-quadratic Model",
     "Hybrid Architecture",
     "Recurrent-Attention Trade-off"
    ]
   },
   {
    "id": "12.9",
    "title": "대표 Transformer 모델",
    "bullets": [
     "Transformer",
     "BERT",
     "GPT",
     "T5",
     "BART",
     "XLNet",
     "DeBERTa",
     "Longformer",
     "Transformer-XL"
    ]
   }
  ]
 },
 {
  "n": 13,
  "title": "언어 모델과 LLM",
  "sections": [
   {
    "id": "13.1",
    "title": "언어 모델링",
    "bullets": [
     "다음 토큰 예측",
     "Masked Language Modeling",
     "Autoregressive Modeling",
     "Sequence Probability",
     "Context",
     "Perplexity",
     "Teacher Forcing"
    ]
   },
   {
    "id": "13.2",
    "title": "사전학습",
    "bullets": [
     "Corpus",
     "Data Mixture",
     "Deduplication",
     "Filtering",
     "Token Distribution",
     "Data Quality",
     "Curriculum",
     "Domain Balance"
    ]
   },
   {
    "id": "13.3",
    "title": "LLM 구조",
    "bullets": [
     "Decoder-only Transformer",
     "Embedding Layer",
     "Transformer Layers",
     "Language Modeling Head",
     "Weight Tying",
     "Vocabulary Projection"
    ]
   },
   {
    "id": "13.4",
    "title": "디코딩 전략",
    "bullets": [
     "Greedy Decoding",
     "Beam Search",
     "Temperature Sampling",
     "Top-k Sampling",
     "Top-p Sampling",
     "Typical Sampling",
     "Repetition Penalty",
     "Length Penalty"
    ]
   },
   {
    "id": "13.5",
    "title": "문맥학습",
    "bullets": [
     "Zero-shot",
     "One-shot",
     "Few-shot",
     "Demonstration",
     "Prompt Format",
     "Example Selection",
     "In-context Learning",
     "Prompt Sensitivity"
    ]
   },
   {
    "id": "13.6",
    "title": "긴 문맥",
    "bullets": [
     "Context Window",
     "Position Extrapolation",
     "Long-context Attention",
     "Retrieval",
     "Memory",
     "Context Compression",
     "Lost in the Middle",
     "Long-range Dependency"
    ]
   },
   {
    "id": "13.7",
    "title": "검색 증강 생성 (RAG)",
    "bullets": [
     "Retrieval-Augmented Generation",
     "Document Chunking",
     "Embedding Model",
     "Dense Retrieval",
     "Sparse Retrieval",
     "Hybrid Search",
     "Vector Index",
     "Reranking",
     "Query Rewriting",
     "Context Injection",
     "Grounding",
     "Retrieval Evaluation"
    ]
   },
   {
    "id": "13.8",
    "title": "LLM 추론",
    "bullets": [
     "Pattern Completion",
     "Step-by-Step Reasoning",
     "Tool Use",
     "Search",
     "Planning",
     "Verification",
     "Self-Consistency",
     "Test-time Compute"
    ]
   },
   {
    "id": "13.9",
    "title": "LLM 평가",
    "bullets": [
     "Language Modeling Evaluation",
     "Knowledge Evaluation",
     "Reasoning Evaluation",
     "Coding Evaluation",
     "Instruction Following",
     "Safety Evaluation",
     "Human Evaluation",
     "LLM-as-a-Judge",
     "Benchmark Contamination"
    ]
   },
   {
    "id": "13.10",
    "title": "LLM 한계",
    "bullets": [
     "Hallucination",
     "Memorization",
     "Bias",
     "Calibration",
     "Prompt Injection",
     "Jailbreak",
     "Context Failure",
     "Reasoning Error",
     "Evaluation Leakage"
    ]
   }
  ]
 },
 {
  "n": 14,
  "title": "자기지도학습과 표현학습",
  "sections": [
   {
    "id": "14.1",
    "title": "자기지도학습 개론",
    "bullets": [
     "Pretext Task",
     "Representation Learning",
     "Label-free Learning",
     "Transfer",
     "Invariance",
     "Equivariance"
    ]
   },
   {
    "id": "14.2",
    "title": "대조학습",
    "bullets": [
     "Positive Pair",
     "Negative Pair",
     "Data Augmentation",
     "Instance Discrimination",
     "InfoNCE",
     "Temperature",
     "Batch Negatives",
     "Hard Negatives"
    ]
   },
   {
    "id": "14.3",
    "title": "대표 대조학습 방법",
    "bullets": [
     "SimCLR",
     "MoCo",
     "CPC",
     "SupCon",
     "CLIP",
     "ALIGN"
    ]
   },
   {
    "id": "14.4",
    "title": "비대조 학습",
    "bullets": [
     "BYOL",
     "SimSiam",
     "Barlow Twins",
     "VICReg",
     "Collapse",
     "Stop-gradient",
     "Momentum Encoder"
    ]
   },
   {
    "id": "14.5",
    "title": "Masked Modeling",
    "bullets": [
     "Masked Language Modeling",
     "Masked Image Modeling",
     "Masked Autoencoder",
     "Masked Prediction",
     "Context Reconstruction"
    ]
   },
   {
    "id": "14.6",
    "title": "Predictive Representation Learning",
    "bullets": [
     "Context Representation",
     "Target Representation",
     "Predictor",
     "Latent Prediction",
     "Joint Embedding",
     "Semantic Prediction",
     "JEPA"
    ]
   },
   {
    "id": "14.7",
    "title": "표현 평가",
    "bullets": [
     "Linear Probing",
     "Fine-tuning",
     "Transfer Learning",
     "Retrieval",
     "Clustering",
     "Probing Task",
     "Representation Similarity"
    ]
   }
  ]
 },
 {
  "n": 15,
  "title": "메타러닝과 지속학습",
  "sections": [
   {
    "id": "15.1",
    "title": "메타러닝 개론",
    "bullets": [
     "Learning to Learn",
     "Task Distribution",
     "Meta-train",
     "Meta-test",
     "Support Set",
     "Query Set",
     "Fast Adaptation",
     "Inductive Bias Transfer"
    ]
   },
   {
    "id": "15.2",
    "title": "Few-shot Learning",
    "bullets": [
     "N-way K-shot",
     "Metric-based Meta-learning",
     "Prototypical Network",
     "Matching Network",
     "Relation Network",
     "Siamese Network",
     "Episode Training"
    ]
   },
   {
    "id": "15.3",
    "title": "최적화 기반 메타러닝",
    "bullets": [
     "MAML",
     "First-order MAML",
     "Reptile",
     "Learned Initialization",
     "Inner Loop",
     "Outer Loop",
     "Meta-optimizer",
     "Gradient-based Meta-learning"
    ]
   },
   {
    "id": "15.4",
    "title": "지속학습 개론",
    "bullets": [
     "Catastrophic Forgetting",
     "Stability-Plasticity Dilemma",
     "Task-incremental Learning",
     "Class-incremental Learning",
     "Domain-incremental Learning",
     "Task Boundary",
     "Online Continual Learning"
    ]
   },
   {
    "id": "15.5",
    "title": "지속학습 방법",
    "bullets": [
     "Regularization-based Method",
     "Elastic Weight Consolidation",
     "Synaptic Intelligence",
     "Replay-based Method",
     "Experience Replay",
     "Generative Replay",
     "Parameter Isolation",
     "Dynamic Architecture",
     "Knowledge Distillation"
    ]
   },
   {
    "id": "15.6",
    "title": "메타·지속학습 평가",
    "bullets": [
     "Average Accuracy",
     "Forgetting Measure",
     "Forward Transfer",
     "Backward Transfer",
     "Plasticity",
     "Memory Budget",
     "Adaptation Speed"
    ]
   }
  ]
 },
 {
  "n": 16,
  "title": "Foundation Model",
  "sections": [
   {
    "id": "16.1",
    "title": "Foundation Model 개론",
    "bullets": [
     "기반 모델",
     "대규모 사전학습",
     "범용 표현",
     "다운스트림 적응",
     "Emergent Capability",
     "Homogenization",
     "범용성",
     "재사용성"
    ]
   },
   {
    "id": "16.2",
    "title": "Foundation Model 유형",
    "bullets": [
     "Language Foundation Model",
     "Vision Foundation Model",
     "Audio Foundation Model",
     "Multimodal Foundation Model",
     "Scientific Foundation Model",
     "Robotics Foundation Model"
    ]
   },
   {
    "id": "16.3",
    "title": "사전학습 목적",
    "bullets": [
     "Autoregressive Learning",
     "Masked Modeling",
     "Contrastive Learning",
     "Denoising",
     "Predictive Representation",
     "Multi-task Pretraining"
    ]
   },
   {
    "id": "16.4",
    "title": "Scaling Law",
    "bullets": [
     "Model Scale",
     "Data Scale",
     "Compute Scale",
     "Parameter Count",
     "Token Count",
     "Training Compute",
     "Power Law",
     "Compute-optimal Training",
     "Data-optimal Training"
    ]
   },
   {
    "id": "16.5",
    "title": "Mixture-of-Experts",
    "bullets": [
     "Sparse Model",
     "Expert",
     "Router",
     "Top-k Gating",
     "Load Balancing",
     "Auxiliary Loss",
     "Expert Capacity",
     "Expert Parallelism",
     "Shared Expert",
     "Sparse Upcycling",
     "Fine-grained Expert",
     "Routing Instability"
    ]
   },
   {
    "id": "16.6",
    "title": "데이터 구성",
    "bullets": [
     "Data Collection",
     "Deduplication",
     "Filtering",
     "Quality Scoring",
     "Domain Mixture",
     "Language Balance",
     "Safety Filtering",
     "Synthetic Data",
     "Data Governance"
    ]
   },
   {
    "id": "16.7",
    "title": "전이학습과 적응",
    "bullets": [
     "Feature Extraction",
     "Linear Probing",
     "Full Fine-tuning",
     "Domain Adaptation",
     "Task Adaptation",
     "Multi-task Fine-tuning",
     "Continual Adaptation"
    ]
   },
   {
    "id": "16.8",
    "title": "Parameter-Efficient Fine-Tuning",
    "bullets": [
     "Adapter",
     "LoRA",
     "QLoRA",
     "Prefix Tuning",
     "Prompt Tuning",
     "IA3",
     "BitFit",
     "Low-rank Update",
     "Quantized Fine-tuning"
    ]
   },
   {
    "id": "16.9",
    "title": "Instruction Tuning",
    "bullets": [
     "Instruction Dataset",
     "Task Mixture",
     "Supervised Fine-tuning",
     "Response Formatting",
     "General Instruction Following",
     "Synthetic Instruction",
     "Multi-turn Instruction"
    ]
   },
   {
    "id": "16.10",
    "title": "Preference Alignment",
    "bullets": [
     "Preference Data",
     "Reward Model",
     "RLHF",
     "PPO",
     "DPO",
     "IPO",
     "KTO",
     "RLAIF",
     "Constitutional AI",
     "Reward Hacking"
    ]
   },
   {
    "id": "16.11",
    "title": "Foundation Model 평가",
    "bullets": [
     "Capability Evaluation",
     "Generalization",
     "Robustness",
     "Calibration",
     "Adaptability",
     "Few-shot Performance",
     "Safety",
     "Bias",
     "Privacy",
     "Memorization"
    ]
   },
   {
    "id": "16.12",
    "title": "Foundation Model 운영",
    "bullets": [
     "Pretraining Pipeline",
     "Distributed Training",
     "Data Parallelism",
     "Model Parallelism",
     "Pipeline Parallelism",
     "Tensor Parallelism",
     "Checkpointing",
     "Mixed Precision",
     "Inference Optimization"
    ]
   },
   {
    "id": "16.13",
    "title": "Foundation Model 거버넌스",
    "bullets": [
     "Model Card",
     "System Card",
     "Risk Assessment",
     "Data Documentation",
     "Access Control",
     "Red Teaming",
     "Monitoring",
     "Deployment Policy"
    ]
   },
   {
    "id": "16.14",
    "title": "Foundation Model 주요 연구 흐름",
    "bullets": [
     "BERT 계열",
     "GPT 계열",
     "T5 계열",
     "Vision Foundation Model",
     "Multimodal Foundation Model",
     "Open-weight Model",
     "Mixture-of-Experts",
     "Sparse Model",
     "Retrieval-Augmented Model"
    ]
   }
  ]
 },
 {
  "n": 17,
  "title": "Vision-Language Model",
  "sections": [
   {
    "id": "17.1",
    "title": "멀티모달 학습 개론",
    "bullets": [
     "Modality",
     "Cross-modal Learning",
     "Alignment",
     "Fusion",
     "Grounding",
     "Shared Representation",
     "Modality Gap",
     "Multimodal Token"
    ]
   },
   {
    "id": "17.2",
    "title": "시각 인코더",
    "bullets": [
     "CNN Backbone",
     "Vision Transformer",
     "Patch Representation",
     "Multi-scale Feature",
     "Global Feature",
     "Dense Feature",
     "Frozen Vision Encoder",
     "Trainable Vision Encoder"
    ]
   },
   {
    "id": "17.3",
    "title": "텍스트 인코더와 언어 모델",
    "bullets": [
     "Text Encoder",
     "Bidirectional Encoder",
     "Autoregressive Language Model",
     "Decoder LLM",
     "Token Embedding",
     "Language Representation"
    ]
   },
   {
    "id": "17.4",
    "title": "이미지-텍스트 대조학습",
    "bullets": [
     "Dual Encoder",
     "Shared Embedding Space",
     "Image-Text Pair",
     "Positive Pair",
     "In-batch Negative",
     "Temperature",
     "Zero-shot Classification",
     "Image-Text Retrieval"
    ]
   },
   {
    "id": "17.5",
    "title": "CLIP 계열",
    "bullets": [
     "CLIP",
     "ALIGN",
     "SigLIP",
     "OpenCLIP",
     "Prompt Ensemble",
     "Zero-shot Transfer",
     "Embedding Alignment"
    ]
   },
   {
    "id": "17.6",
    "title": "이미지-텍스트 매칭",
    "bullets": [
     "Image-Text Matching",
     "Fine-grained Alignment",
     "Cross-modal Matching",
     "Negative Mining",
     "Matching Head"
    ]
   },
   {
    "id": "17.7",
    "title": "이미지 캡셔닝",
    "bullets": [
     "Image Captioning",
     "Conditional Language Generation",
     "Visual Feature Conditioning",
     "Autoregressive Captioning",
     "Dense Captioning",
     "Region Captioning"
    ]
   },
   {
    "id": "17.8",
    "title": "Cross-Attention VLM",
    "bullets": [
     "Visual Query",
     "Visual Key",
     "Visual Value",
     "Cross-Attention Layer",
     "Gated Cross-Attention",
     "Interleaved Input",
     "Multi-image Context"
    ]
   },
   {
    "id": "17.9",
    "title": "Flamingo 계열",
    "bullets": [
     "Perceiver Resampler",
     "Frozen Language Model",
     "Gated Cross-Attention",
     "Few-shot Multimodal Learning",
     "Interleaved Image-Text Data"
    ]
   },
   {
    "id": "17.10",
    "title": "Connector 기반 VLM",
    "bullets": [
     "Linear Projector",
     "MLP Projector",
     "Query Transformer",
     "Adapter",
     "Visual Token Projection",
     "Modality Connector"
    ]
   },
   {
    "id": "17.11",
    "title": "BLIP 계열",
    "bullets": [
     "BLIP",
     "BLIP-2",
     "Q-Former",
     "Image-Text Contrastive Learning",
     "Image-Text Matching",
     "Caption Generation",
     "Frozen Encoder",
     "Frozen LLM"
    ]
   },
   {
    "id": "17.12",
    "title": "LLaVA 계열",
    "bullets": [
     "Vision Encoder",
     "Projector",
     "Language Model",
     "Visual Instruction Tuning",
     "Multimodal Conversation",
     "Synthetic Instruction Data",
     "Multi-turn Dialogue"
    ]
   },
   {
    "id": "17.13",
    "title": "멀티모달 토큰 통합",
    "bullets": [
     "Visual Token",
     "Text Token",
     "Unified Sequence",
     "Early Fusion",
     "Late Fusion",
     "Hybrid Fusion",
     "Token Compression",
     "Token Selection"
    ]
   },
   {
    "id": "17.14",
    "title": "고해상도 이미지 처리",
    "bullets": [
     "Image Tiling",
     "Dynamic Resolution",
     "Multi-scale Encoding",
     "Global-Local Feature",
     "Patch Compression",
     "Resolution Adaptation"
    ]
   },
   {
    "id": "17.15",
    "title": "문서 이해",
    "bullets": [
     "OCR",
     "Layout Analysis",
     "Document Layout",
     "Table Understanding",
     "Chart Understanding",
     "Form Understanding",
     "Diagram Understanding",
     "Document Question Answering"
    ]
   },
   {
    "id": "17.16",
    "title": "비디오 VLM",
    "bullets": [
     "Frame Sampling",
     "Temporal Encoding",
     "Video Token",
     "Temporal Aggregation",
     "Video Question Answering",
     "Video Captioning",
     "Long Video Understanding",
     "Event Localization"
    ]
   },
   {
    "id": "17.17",
    "title": "멀티이미지와 공간 추론",
    "bullets": [
     "Multi-image Context",
     "Image Comparison",
     "Spatial Relation",
     "Counting",
     "Object Tracking",
     "Referential Grounding",
     "Region Grounding"
    ]
   },
   {
    "id": "17.18",
    "title": "VLM 학습 데이터",
    "bullets": [
     "Image-Caption Pair",
     "Interleaved Document",
     "Visual Question Answering",
     "OCR Dataset",
     "Chart Dataset",
     "Video-Text Dataset",
     "Instruction Dataset",
     "Preference Dataset",
     "Synthetic Multimodal Data"
    ]
   },
   {
    "id": "17.19",
    "title": "VLM 학습 단계",
    "bullets": [
     "Vision Pretraining",
     "Modality Alignment",
     "Generative Pretraining",
     "Visual Instruction Tuning",
     "Multimodal Preference Tuning",
     "Safety Alignment"
    ]
   },
   {
    "id": "17.20",
    "title": "VLM 평가",
    "bullets": [
     "Image-Text Retrieval",
     "Zero-shot Classification",
     "Captioning",
     "VQA",
     "OCR",
     "Chart QA",
     "Document QA",
     "Spatial Reasoning",
     "Counting",
     "Grounding",
     "Multimodal Dialogue",
     "Video QA"
    ]
   },
   {
    "id": "17.21",
    "title": "VLM 한계",
    "bullets": [
     "Visual Hallucination",
     "Object Existence Error",
     "Counting Error",
     "Spatial Error",
     "OCR Failure",
     "Small Object Failure",
     "Language Prior Dominance",
     "Grounding Failure",
     "High-resolution Failure",
     "Multimodal Prompt Injection"
    ]
   },
   {
    "id": "17.22",
    "title": "VLM 주요 연구 흐름",
    "bullets": [
     "ViT",
     "CLIP",
     "ALIGN",
     "BLIP",
     "Flamingo",
     "BLIP-2",
     "LLaVA",
     "Unified Multimodal Model",
     "Video-Language Model",
     "Document VLM"
    ]
   }
  ]
 },
 {
  "n": 18,
  "title": "모델 해석가능성",
  "sections": [
   {
    "id": "18.1",
    "title": "해석가능성 개론",
    "bullets": [
     "Interpretability",
     "Explainability",
     "Transparency",
     "Post-hoc Explanation",
     "Intrinsic Interpretability",
     "Global Explanation",
     "Local Explanation",
     "Faithfulness"
    ]
   },
   {
    "id": "18.2",
    "title": "특성 귀인",
    "bullets": [
     "Feature Attribution",
     "Saliency Map",
     "Gradient-based Attribution",
     "Integrated Gradients",
     "SmoothGrad",
     "Grad-CAM",
     "Occlusion Analysis",
     "LIME",
     "SHAP",
     "Counterfactual Explanation"
    ]
   },
   {
    "id": "18.3",
    "title": "표현과 Attention 분석",
    "bullets": [
     "Representation Probing",
     "Probing Classifier",
     "Attention Analysis",
     "Attention Rollout",
     "Concept Activation Vector",
     "TCAV",
     "Representation Similarity",
     "CKA"
    ]
   },
   {
    "id": "18.4",
    "title": "기계적 해석가능성",
    "bullets": [
     "Mechanistic Interpretability",
     "Circuit",
     "Feature",
     "Neuron Analysis",
     "Superposition",
     "Polysemanticity",
     "Induction Head",
     "Activation Patching",
     "Causal Tracing"
    ]
   },
   {
    "id": "18.5",
    "title": "Sparse Autoencoder 해석",
    "bullets": [
     "Dictionary Learning",
     "Sparse Feature",
     "Monosemantic Feature",
     "Feature Disentanglement",
     "Concept Extraction",
     "Feature Steering"
    ]
   },
   {
    "id": "18.6",
    "title": "해석가능성 평가와 활용",
    "bullets": [
     "Explanation Faithfulness",
     "Explanation Robustness",
     "Human Interpretability",
     "Model Debugging",
     "Bias Detection",
     "Knowledge Localization",
     "Model Editing"
    ]
   }
  ]
 },
 {
  "n": 19,
  "title": "견고성·안전·정렬",
  "sections": [
   {
    "id": "19.1",
    "title": "적대적 견고성",
    "bullets": [
     "Adversarial Example",
     "Perturbation",
     "FGSM",
     "PGD",
     "White-box Attack",
     "Black-box Attack",
     "Transferability",
     "Adversarial Training",
     "Certified Robustness",
     "Randomized Smoothing"
    ]
   },
   {
    "id": "19.2",
    "title": "분포 변화와 견고성",
    "bullets": [
     "Distribution Shift",
     "Covariate Shift",
     "Domain Shift",
     "Out-of-Distribution",
     "OOD Detection",
     "Distributional Robustness",
     "Group Robustness",
     "Spurious Correlation"
    ]
   },
   {
    "id": "19.3",
    "title": "데이터·모델 공격",
    "bullets": [
     "Data Poisoning",
     "Backdoor Attack",
     "Trojan",
     "Model Extraction",
     "Membership Inference",
     "Model Inversion",
     "Watermarking"
    ]
   },
   {
    "id": "19.4",
    "title": "AI 정렬 이론",
    "bullets": [
     "Alignment Problem",
     "Outer Alignment",
     "Inner Alignment",
     "Reward Misspecification",
     "Reward Hacking",
     "Specification Gaming",
     "Goal Misgeneralization",
     "Scalable Oversight"
    ]
   },
   {
    "id": "19.5",
    "title": "정렬 기법",
    "bullets": [
     "RLHF",
     "RLAIF",
     "Reward Model",
     "DPO",
     "Constitutional AI",
     "Preference Modeling",
     "Red Teaming",
     "Refusal Training",
     "Weak-to-strong Generalization"
    ]
   },
   {
    "id": "19.6",
    "title": "공정성과 편향",
    "bullets": [
     "Bias",
     "Fairness Criteria",
     "Demographic Parity",
     "Equalized Odds",
     "Bias Measurement",
     "Bias Mitigation",
     "Representation Bias",
     "Allocation Harm",
     "Responsible AI"
    ]
   },
   {
    "id": "19.7",
    "title": "프라이버시와 안전 평가",
    "bullets": [
     "Differential Privacy",
     "Privacy Attack",
     "Robustness Evaluation",
     "Safety Benchmark",
     "Stress Testing",
     "Failure Mode Analysis",
     "Model Card"
    ]
   }
  ]
 },
 {
  "n": 20,
  "title": "인과추론",
  "sections": [
   {
    "id": "20.1",
    "title": "인과추론 개론",
    "bullets": [
     "Correlation vs Causation",
     "Causal Model",
     "Structural Causal Model",
     "Causal Graph",
     "Directed Acyclic Graph",
     "Conditional Independence",
     "Factorization",
     "d-separation",
     "Confounder",
     "Collider",
     "Mediator"
    ]
   },
   {
    "id": "20.2",
    "title": "개입과 반사실",
    "bullets": [
     "Intervention",
     "do-Calculus",
     "Counterfactual",
     "Potential Outcome",
     "Treatment Effect",
     "Average Treatment Effect",
     "Backdoor Criterion",
     "Frontdoor Criterion"
    ]
   },
   {
    "id": "20.3",
    "title": "인과 발견과 추정",
    "bullets": [
     "Causal Discovery",
     "Constraint-based Method",
     "Score-based Method",
     "Propensity Score",
     "Instrumental Variable",
     "Identifiability",
     "Randomized Experiment"
    ]
   },
   {
    "id": "20.4",
    "title": "인과와 머신러닝",
    "bullets": [
     "Invariant Prediction",
     "Causal Representation Learning",
     "Domain Generalization",
     "Causal Confusion",
     "Spurious Feature",
     "Counterfactual Data Augmentation"
    ]
   }
  ]
 },
 {
  "n": 21,
  "title": "Agent AI",
  "sections": [
   {
    "id": "21.1",
    "title": "Agent AI 개론",
    "bullets": [
     "Intelligent Agent",
     "Autonomous Agent",
     "Goal-directed Behavior",
     "Environment Interaction",
     "Observation",
     "Action",
     "Feedback",
     "Agent Loop",
     "Autonomy Level",
     "Agentic Workflow"
    ]
   },
   {
    "id": "21.2",
    "title": "Agent 구조",
    "bullets": [
     "Perception",
     "Reasoning",
     "Planning",
     "Memory",
     "Tool Use",
     "Action Execution",
     "Reflection",
     "Feedback Processing",
     "State Management",
     "Control Loop"
    ]
   },
   {
    "id": "21.3",
    "title": "LLM 기반 Agent",
    "bullets": [
     "LLM as Controller",
     "Prompt-based Agent",
     "Tool-augmented LLM",
     "Function Calling",
     "Structured Output",
     "Agent State",
     "Action Selection",
     "Response Generation",
     "Multi-turn Interaction"
    ]
   },
   {
    "id": "21.4",
    "title": "Agent Loop",
    "bullets": [
     "Observe",
     "Interpret",
     "Plan",
     "Act",
     "Evaluate",
     "Reflect",
     "Retry",
     "Termination",
     "Recovery",
     "Continuous Interaction"
    ]
   },
   {
    "id": "21.5",
    "title": "목표와 과업 관리",
    "bullets": [
     "Goal Representation",
     "Task Definition",
     "Task Decomposition",
     "Subtask",
     "Dependency",
     "Priority",
     "Constraint",
     "Completion Condition",
     "Progress Tracking",
     "Goal Revision"
    ]
   },
   {
    "id": "21.6",
    "title": "계획",
    "bullets": [
     "Plan Generation",
     "Sequential Planning",
     "Hierarchical Planning",
     "Dynamic Planning",
     "Contingency Planning",
     "Replanning",
     "Search-based Planning",
     "Constraint-aware Planning",
     "Long-horizon Planning",
     "Plan Validation"
    ]
   },
   {
    "id": "21.7",
    "title": "추론과 의사결정",
    "bullets": [
     "Deliberation",
     "Decision Policy",
     "Heuristic Reasoning",
     "Step-by-step Reasoning",
     "Self-consistency",
     "Verification",
     "Critique",
     "Confidence Estimation",
     "Uncertainty-aware Decision",
     "Decision Trace"
    ]
   },
   {
    "id": "21.8",
    "title": "도구 사용",
    "bullets": [
     "Tool Definition",
     "Tool Selection",
     "Tool Invocation",
     "Function Calling",
     "API Tool",
     "Search Tool",
     "Calculator Tool",
     "Code Execution Tool",
     "Database Tool",
     "External Service Integration"
    ]
   },
   {
    "id": "21.9",
    "title": "도구 오케스트레이션",
    "bullets": [
     "Tool Routing",
     "Sequential Tool Use",
     "Parallel Tool Use",
     "Tool Dependency",
     "Tool Result Parsing",
     "Error Handling",
     "Retry Policy",
     "Fallback Tool",
     "Tool Permission",
     "Tool Audit"
    ]
   },
   {
    "id": "21.10",
    "title": "메모리",
    "bullets": [
     "Working Memory",
     "Short-term Memory",
     "Long-term Memory",
     "Episodic Memory",
     "Semantic Memory",
     "Procedural Memory",
     "Conversation Memory",
     "User Memory",
     "Task Memory",
     "External Memory"
    ]
   },
   {
    "id": "21.11",
    "title": "메모리 저장과 검색",
    "bullets": [
     "Memory Write",
     "Memory Read",
     "Memory Indexing",
     "Memory Retrieval",
     "Relevance Scoring",
     "Recency",
     "Importance",
     "Memory Compression",
     "Memory Summarization",
     "Memory Forgetting"
    ]
   },
   {
    "id": "21.12",
    "title": "Retrieval-Augmented Agent",
    "bullets": [
     "Knowledge Retrieval",
     "Document Retrieval",
     "Vector Search",
     "Hybrid Search",
     "Query Rewriting",
     "Context Construction",
     "Retrieval Planning",
     "Evidence Selection",
     "Source Grounding",
     "Retrieval Feedback"
    ]
   },
   {
    "id": "21.13",
    "title": "Agent 상태 관리",
    "bullets": [
     "Session State",
     "Task State",
     "Environment State",
     "Tool State",
     "Persistent State",
     "Checkpoint",
     "State Transition",
     "State Serialization",
     "State Recovery",
     "State Consistency"
    ]
   },
   {
    "id": "21.14",
    "title": "반성 및 자기개선",
    "bullets": [
     "Self-reflection",
     "Self-critique",
     "Error Analysis",
     "Outcome Evaluation",
     "Plan Revision",
     "Prompt Revision",
     "Strategy Update",
     "Experience Reuse",
     "Feedback Learning",
     "Iterative Improvement"
    ]
   },
   {
    "id": "21.15",
    "title": "실행 제어",
    "bullets": [
     "Execution Policy",
     "Step Limit",
     "Time Limit",
     "Cost Limit",
     "Token Budget",
     "Tool Budget",
     "Stop Condition",
     "Human Approval",
     "Rollback",
     "Safe Termination"
    ]
   },
   {
    "id": "21.16",
    "title": "Human-in-the-loop Agent",
    "bullets": [
     "Human Approval",
     "Human Feedback",
     "Escalation",
     "Review Queue",
     "Clarification",
     "Intervention",
     "Shared Control",
     "Editable Plan",
     "Manual Override",
     "Audit Trail"
    ]
   },
   {
    "id": "21.17",
    "title": "멀티에이전트 시스템",
    "bullets": [
     "Multi-Agent System",
     "Agent Role",
     "Agent Specialization",
     "Cooperation",
     "Competition",
     "Communication",
     "Delegation",
     "Coordination",
     "Consensus",
     "Shared Memory"
    ]
   },
   {
    "id": "21.18",
    "title": "멀티에이전트 협업",
    "bullets": [
     "Manager-Worker",
     "Planner-Executor",
     "Critic-Reviewer",
     "Debate",
     "Voting",
     "Task Allocation",
     "Role Assignment",
     "Message Passing",
     "Conflict Resolution",
     "Collective Decision"
    ]
   },
   {
    "id": "21.19",
    "title": "Agent Communication",
    "bullets": [
     "Agent Message",
     "Communication Protocol",
     "Structured Message",
     "Shared Context",
     "Blackboard Architecture",
     "Event-driven Communication",
     "Asynchronous Communication",
     "Synchronous Communication",
     "Message Validation",
     "Communication Cost"
    ]
   },
   {
    "id": "21.20",
    "title": "Agent Workflow",
    "bullets": [
     "Workflow Graph",
     "Sequential Workflow",
     "Parallel Workflow",
     "Branching",
     "Conditional Routing",
     "Loop",
     "Event Trigger",
     "Human Gate",
     "State Machine",
     "DAG-based Workflow"
    ]
   },
   {
    "id": "21.21",
    "title": "Agent Architecture Patterns",
    "bullets": [
     "ReAct",
     "Plan-and-Execute",
     "Router Agent",
     "Supervisor Agent",
     "Worker Agent",
     "Critic Agent",
     "Reflection Agent",
     "Blackboard Agent",
     "Hierarchical Agent",
     "Event-driven Agent"
    ]
   },
   {
    "id": "21.22",
    "title": "Browser and Computer-use Agent",
    "bullets": [
     "Browser Navigation",
     "Web Interaction",
     "UI Perception",
     "Screen Understanding",
     "Click Action",
     "Text Input",
     "Form Completion",
     "File Handling",
     "Desktop Automation",
     "Computer-use Safety"
    ]
   },
   {
    "id": "21.23",
    "title": "Coding Agent",
    "bullets": [
     "Code Generation",
     "Code Search",
     "Repository Understanding",
     "Test Generation",
     "Code Execution",
     "Debugging",
     "Patch Generation",
     "Refactoring",
     "Dependency Analysis",
     "Software Workflow Automation"
    ]
   },
   {
    "id": "21.24",
    "title": "Data Agent",
    "bullets": [
     "Data Retrieval",
     "Data Cleaning",
     "Query Generation",
     "SQL Agent",
     "Spreadsheet Agent",
     "Data Analysis",
     "Visualization",
     "Report Generation",
     "Metric Monitoring",
     "Data Validation"
    ]
   },
   {
    "id": "21.25",
    "title": "Research Agent",
    "bullets": [
     "Query Planning",
     "Source Discovery",
     "Evidence Collection",
     "Source Evaluation",
     "Citation Management",
     "Claim Verification",
     "Information Synthesis",
     "Knowledge Gap Detection",
     "Research Memory",
     "Research Report Generation"
    ]
   },
   {
    "id": "21.26",
    "title": "Multimodal Agent",
    "bullets": [
     "Vision Input",
     "Audio Input",
     "Video Input",
     "Sensor Input",
     "Visual Grounding",
     "Multimodal Memory",
     "Cross-modal Planning",
     "Image-based Tool Use",
     "Video-based Reasoning",
     "Multimodal Action"
    ]
   },
   {
    "id": "21.27",
    "title": "Embodied Agent",
    "bullets": [
     "Perception-Action Loop",
     "Sensorimotor State",
     "Physical Action",
     "Spatial Reasoning",
     "Navigation",
     "Manipulation",
     "Environment Feedback",
     "Real-time Control",
     "Robot Agent",
     "Simulated Agent"
    ]
   },
   {
    "id": "21.28",
    "title": "Agent 학습",
    "bullets": [
     "Behavior Cloning",
     "Reinforcement Learning",
     "Preference Learning",
     "Offline Learning",
     "Online Learning",
     "Experience Replay",
     "Self-generated Data",
     "Tool-use Learning",
     "Planning Learning",
     "Memory Learning"
    ]
   },
   {
    "id": "21.29",
    "title": "Agent 평가",
    "bullets": [
     "Task Completion",
     "Success Rate",
     "Step Efficiency",
     "Tool Accuracy",
     "Planning Quality",
     "Recovery Ability",
     "Robustness",
     "Cost",
     "Latency",
     "Human Satisfaction"
    ]
   },
   {
    "id": "21.30",
    "title": "Agent 벤치마크",
    "bullets": [
     "Tool-use Benchmark",
     "Web Navigation Benchmark",
     "Coding Benchmark",
     "Long-horizon Task Benchmark",
     "Multi-agent Benchmark",
     "Memory Benchmark",
     "Planning Benchmark",
     "Safety Benchmark",
     "Embodied Agent Benchmark",
     "Real-world Evaluation"
    ]
   },
   {
    "id": "21.31",
    "title": "Agent 실패 유형",
    "bullets": [
     "Hallucinated Action",
     "Wrong Tool Selection",
     "Invalid Tool Call",
     "Infinite Loop",
     "Goal Drift",
     "Context Loss",
     "Memory Corruption",
     "Planning Failure",
     "Error Propagation",
     "Premature Termination"
    ]
   },
   {
    "id": "21.32",
    "title": "Agent 안전",
    "bullets": [
     "Permission Control",
     "Sandboxing",
     "Tool Restriction",
     "Data Access Control",
     "Human Approval",
     "Action Validation",
     "Policy Enforcement",
     "Rate Limiting",
     "Audit Logging",
     "Emergency Stop"
    ]
   },
   {
    "id": "21.33",
    "title": "Agent 보안",
    "bullets": [
     "Prompt Injection",
     "Indirect Prompt Injection",
     "Tool Injection",
     "Data Exfiltration",
     "Credential Leakage",
     "Malicious Tool Output",
     "Supply-chain Attack",
     "Memory Poisoning",
     "Agent Hijacking",
     "Privilege Escalation"
    ]
   },
   {
    "id": "21.34",
    "title": "Agent 신뢰성과 복구",
    "bullets": [
     "Retry",
     "Fallback",
     "Checkpoint",
     "Rollback",
     "Idempotency",
     "Transaction",
     "Error Isolation",
     "Circuit Breaker",
     "Partial Completion",
     "Recovery Workflow"
    ]
   },
   {
    "id": "21.35",
    "title": "Agent 시스템 운영",
    "bullets": [
     "Observability",
     "Trace",
     "Log",
     "Metric",
     "Cost Monitoring",
     "Latency Monitoring",
     "Tool Monitoring",
     "Memory Monitoring",
     "Quality Monitoring",
     "Incident Analysis"
    ]
   },
   {
    "id": "21.36",
    "title": "Agent 시스템 설계",
    "bullets": [
     "Use-case Definition",
     "Agent Boundary",
     "Tool Boundary",
     "Memory Design",
     "Workflow Design",
     "Safety Design",
     "Evaluation Design",
     "Deployment Architecture",
     "Human Role",
     "Failure Strategy"
    ]
   },
   {
    "id": "21.37",
    "title": "Agent 주요 응용",
    "bullets": [
     "Personal Assistant",
     "Enterprise Assistant",
     "Customer Support Agent",
     "Coding Agent",
     "Research Agent",
     "Data Agent",
     "Operations Agent",
     "Security Agent",
     "Healthcare Support Agent",
     "Robotics Agent"
    ]
   }
  ]
 },
 {
  "n": 22,
  "title": "양자화",
  "sections": [
   {
    "id": "22.1",
    "title": "양자화 개론",
    "bullets": [
     "수치 표현",
     "부동소수점",
     "정수 표현",
     "비트 폭",
     "동적 범위",
     "정밀도",
     "양자화 오차",
     "모델 크기",
     "메모리 대역폭",
     "연산 효율"
    ]
   },
   {
    "id": "22.2",
    "title": "데이터 타입",
    "bullets": [
     "FP32",
     "FP16",
     "BF16",
     "FP8",
     "INT16",
     "INT8",
     "INT4",
     "INT3",
     "INT2",
     "Binary",
     "Ternary",
     "혼합 정밀도"
    ]
   },
   {
    "id": "22.3",
    "title": "양자화 기본 구성",
    "bullets": [
     "Scale",
     "Zero Point",
     "Quantization Range",
     "Clipping",
     "Rounding",
     "Saturation",
     "Dequantization",
     "Quantization Grid",
     "Quantization Noise"
    ]
   },
   {
    "id": "22.4",
    "title": "대칭·비대칭 양자화",
    "bullets": [
     "Symmetric Quantization",
     "Asymmetric Quantization",
     "Signed Quantization",
     "Unsigned Quantization",
     "Zero Point 처리",
     "범위 활용",
     "하드웨어 호환성"
    ]
   },
   {
    "id": "22.5",
    "title": "균일·비균일 양자화",
    "bullets": [
     "Uniform Quantization",
     "Non-uniform Quantization",
     "Logarithmic Quantization",
     "Codebook Quantization",
     "K-means Quantization",
     "Distribution-aware Quantization"
    ]
   },
   {
    "id": "22.6",
    "title": "양자화 단위",
    "bullets": [
     "Per-tensor Quantization",
     "Per-channel Quantization",
     "Per-group Quantization",
     "Per-token Quantization",
     "Per-row Quantization",
     "Per-block Quantization",
     "Group Size",
     "Channel Axis"
    ]
   },
   {
    "id": "22.7",
    "title": "정적·동적 양자화",
    "bullets": [
     "Static Quantization",
     "Dynamic Quantization",
     "Activation Range Estimation",
     "Runtime Quantization",
     "Calibration",
     "Representative Dataset",
     "Observer"
    ]
   },
   {
    "id": "22.8",
    "title": "사후 학습 양자화",
    "bullets": [
     "Post-Training Quantization",
     "Weight-only Quantization",
     "Weight-Activation Quantization",
     "Calibration-based PTQ",
     "Data-free Quantization",
     "Low-bit PTQ",
     "Outlier-aware Quantization"
    ]
   },
   {
    "id": "22.9",
    "title": "양자화 인지 학습",
    "bullets": [
     "Quantization-Aware Training",
     "Fake Quantization",
     "Straight-Through Estimator",
     "Learned Scale",
     "Learned Clipping",
     "Gradient Approximation",
     "Low-bit Fine-tuning",
     "Quantized Training"
    ]
   },
   {
    "id": "22.10",
    "title": "가중치 양자화",
    "bullets": [
     "Weight Quantization",
     "Weight Distribution",
     "Per-channel Weight Quantization",
     "Group-wise Weight Quantization",
     "Weight Clipping",
     "Weight Reconstruction",
     "Weight Packing",
     "Sparse Weight"
    ]
   },
   {
    "id": "22.11",
    "title": "활성값 양자화",
    "bullets": [
     "Activation Quantization",
     "Activation Distribution",
     "Dynamic Activation Range",
     "Outlier Activation",
     "Per-token Activation Quantization",
     "Activation Smoothing",
     "Intermediate Tensor Quantization"
    ]
   },
   {
    "id": "22.12",
    "title": "편향과 누산기",
    "bullets": [
     "Bias Quantization",
     "Accumulator Precision",
     "Integer Accumulation",
     "Overflow",
     "Rescaling",
     "Requantization",
     "Mixed Accumulator",
     "Bias Correction"
    ]
   },
   {
    "id": "22.13",
    "title": "보정",
    "bullets": [
     "Calibration Dataset",
     "Min-Max Calibration",
     "Percentile Calibration",
     "Histogram Calibration",
     "KL Calibration",
     "MSE Calibration",
     "Entropy Calibration",
     "Range Optimization"
    ]
   },
   {
    "id": "22.14",
    "title": "이상치 처리",
    "bullets": [
     "Weight Outlier",
     "Activation Outlier",
     "Channel Outlier",
     "Outlier Splitting",
     "Outlier Suppression",
     "SmoothQuant",
     "Mixed-precision Outlier Handling",
     "Clipping Strategy"
    ]
   },
   {
    "id": "22.15",
    "title": "저비트 양자화",
    "bullets": [
     "INT8 Quantization",
     "INT6 Quantization",
     "INT4 Quantization",
     "INT3 Quantization",
     "INT2 Quantization",
     "Binary Quantization",
     "Ternary Quantization",
     "Ultra-low-bit Quantization"
    ]
   },
   {
    "id": "22.16",
    "title": "벡터 양자화",
    "bullets": [
     "Vector Quantization",
     "Codebook",
     "Code Assignment",
     "Product Quantization",
     "Residual Quantization",
     "Additive Quantization",
     "Lookup-based Inference",
     "Codebook Compression"
    ]
   },
   {
    "id": "22.17",
    "title": "LLM 양자화",
    "bullets": [
     "LLM Weight Quantization",
     "Weight-only LLM Quantization",
     "Activation-aware Quantization",
     "Group-wise Quantization",
     "KV Cache Quantization",
     "Embedding Quantization",
     "Attention Projection Quantization",
     "MLP Quantization",
     "Output Head Quantization"
    ]
   },
   {
    "id": "22.18",
    "title": "LLM 양자화 기법",
    "bullets": [
     "GPTQ",
     "AWQ",
     "SmoothQuant",
     "ZeroQuant",
     "LLM.int8",
     "SpQR",
     "HQQ",
     "NF4",
     "Double Quantization",
     "Quantization with LoRA"
    ]
   },
   {
    "id": "22.19",
    "title": "KV Cache 양자화",
    "bullets": [
     "Key Cache",
     "Value Cache",
     "Cache Memory",
     "Cache Precision",
     "Per-token Cache Quantization",
     "Per-channel Cache Quantization",
     "Long-context Memory Reduction",
     "Cache Reconstruction Error"
    ]
   },
   {
    "id": "22.20",
    "title": "비전 모델 양자화",
    "bullets": [
     "CNN Quantization",
     "Vision Transformer Quantization",
     "Patch Embedding Quantization",
     "Attention Quantization",
     "LayerNorm 처리",
     "Detection Model Quantization",
     "Segmentation Model Quantization"
    ]
   },
   {
    "id": "22.21",
    "title": "멀티모달 모델 양자화",
    "bullets": [
     "Vision Encoder Quantization",
     "Language Model Quantization",
     "Projector Quantization",
     "Cross-Attention Quantization",
     "Visual Token Precision",
     "Modality-specific Precision",
     "Mixed-precision Multimodal Inference"
    ]
   },
   {
    "id": "22.22",
    "title": "양자화와 미세조정",
    "bullets": [
     "Quantized Fine-tuning",
     "QLoRA",
     "Low-rank Adapter",
     "Frozen Quantized Backbone",
     "Adapter Precision",
     "Optimizer State Precision",
     "Gradient Precision"
    ]
   },
   {
    "id": "22.23",
    "title": "양자화와 희소화",
    "bullets": [
     "Quantization and Pruning",
     "Sparse Quantized Matrix",
     "Structured Sparsity",
     "Unstructured Sparsity",
     "N:M Sparsity",
     "Sparse Kernel",
     "Compression Composition"
    ]
   },
   {
    "id": "22.24",
    "title": "양자화 하드웨어",
    "bullets": [
     "Integer Arithmetic",
     "SIMD",
     "Vector Instruction",
     "Tensor Core",
     "NPU",
     "DSP",
     "MAC Unit",
     "Accumulator",
     "Memory Alignment",
     "Bit Packing"
    ]
   },
   {
    "id": "22.25",
    "title": "양자화 실행 커널",
    "bullets": [
     "Quantized Matrix Multiplication",
     "Quantized Convolution",
     "Fused Dequantization",
     "Fused Activation",
     "Kernel Fusion",
     "Tiling",
     "Packing Format",
     "Operator Support"
    ]
   },
   {
    "id": "22.26",
    "title": "양자화 평가",
    "bullets": [
     "Model Size",
     "Peak Memory",
     "Latency",
     "Throughput",
     "Energy Consumption",
     "Accuracy Drop",
     "Perplexity Change",
     "Task Performance",
     "Hardware Speedup",
     "End-to-end Performance"
    ]
   },
   {
    "id": "22.27",
    "title": "양자화 실패 유형",
    "bullets": [
     "Excessive Accuracy Loss",
     "Calibration Mismatch",
     "Outlier Sensitivity",
     "Operator Fallback",
     "Dequantization Overhead",
     "Hardware Mismatch",
     "LayerNorm Sensitivity",
     "Softmax Sensitivity",
     "Accumulator Overflow",
     "Long-context Degradation"
    ]
   },
   {
    "id": "22.28",
    "title": "양자화 배포",
    "bullets": [
     "Quantized Model Format",
     "Runtime Compatibility",
     "Operator Coverage",
     "Backend Selection",
     "Hardware-specific Export",
     "Accuracy Verification",
     "Latency Verification",
     "Memory Verification"
    ]
   }
  ]
 },
 {
  "n": 23,
  "title": "On-device AI",
  "sections": [
   {
    "id": "23.1",
    "title": "On-device AI 개론",
    "bullets": [
     "Edge AI",
     "On-device Inference",
     "Local Processing",
     "Cloud AI",
     "Hybrid AI",
     "Embedded AI",
     "Mobile AI",
     "TinyML",
     "Personal AI"
    ]
   },
   {
    "id": "23.2",
    "title": "On-device AI의 특성",
    "bullets": [
     "Low Latency",
     "Privacy",
     "Offline Availability",
     "Low Bandwidth",
     "Personalization",
     "Real-time Response",
     "Energy Constraint",
     "Memory Constraint",
     "Thermal Constraint",
     "Hardware Diversity"
    ]
   },
   {
    "id": "23.3",
    "title": "디바이스 하드웨어",
    "bullets": [
     "CPU",
     "GPU",
     "NPU",
     "DSP",
     "Microcontroller",
     "Neural Accelerator",
     "Unified Memory",
     "Shared Memory",
     "Cache",
     "Memory Bandwidth"
    ]
   },
   {
    "id": "23.4",
    "title": "모바일 SoC",
    "bullets": [
     "Application Processor",
     "CPU Cluster",
     "Mobile GPU",
     "NPU Block",
     "ISP",
     "DSP",
     "Memory Controller",
     "Power Management",
     "Heterogeneous Compute"
    ]
   },
   {
    "id": "23.5",
    "title": "임베디드 시스템",
    "bullets": [
     "MCU",
     "RTOS",
     "Bare-metal",
     "Embedded Linux",
     "Sensor Interface",
     "Real-time Constraint",
     "Static Memory",
     "Fixed-point Arithmetic",
     "Tiny Inference"
    ]
   },
   {
    "id": "23.6",
    "title": "모델 경량화",
    "bullets": [
     "Quantization",
     "Pruning",
     "Distillation",
     "Low-rank Decomposition",
     "Weight Sharing",
     "Compact Architecture",
     "Neural Architecture Search",
     "Dynamic Inference",
     "Early Exit"
    ]
   },
   {
    "id": "23.7",
    "title": "가지치기",
    "bullets": [
     "Unstructured Pruning",
     "Structured Pruning",
     "Channel Pruning",
     "Filter Pruning",
     "Head Pruning",
     "Layer Pruning",
     "N:M Sparsity",
     "Magnitude Pruning",
     "Movement Pruning"
    ]
   },
   {
    "id": "23.8",
    "title": "지식 증류",
    "bullets": [
     "Teacher Model",
     "Student Model",
     "Logit Distillation",
     "Feature Distillation",
     "Attention Distillation",
     "Self-Distillation",
     "Task-specific Distillation",
     "Multi-teacher Distillation"
    ]
   },
   {
    "id": "23.9",
    "title": "저랭크와 행렬 분해",
    "bullets": [
     "Low-rank Approximation",
     "SVD Compression",
     "Tensor Decomposition",
     "Factorized Layer",
     "Low-rank Attention",
     "Low-rank MLP",
     "Adapter-based Compression"
    ]
   },
   {
    "id": "23.10",
    "title": "경량 모델 구조",
    "bullets": [
     "MobileNet",
     "ShuffleNet",
     "SqueezeNet",
     "EfficientNet-Lite",
     "MobileViT",
     "EfficientFormer",
     "Tiny Transformer",
     "Compact CNN",
     "Hybrid CNN-Transformer"
    ]
   },
   {
    "id": "23.11",
    "title": "동적 추론",
    "bullets": [
     "Early Exit",
     "Conditional Computation",
     "Dynamic Depth",
     "Dynamic Width",
     "Token Pruning",
     "Token Merging",
     "Adaptive Resolution",
     "Adaptive Sampling",
     "Mixture-of-Experts Routing"
    ]
   },
   {
    "id": "23.12",
    "title": "메모리 최적화",
    "bullets": [
     "Model Memory",
     "Activation Memory",
     "Workspace Memory",
     "Memory Reuse",
     "In-place Operation",
     "Buffer Planning",
     "Tensor Lifetime",
     "Streaming Execution",
     "Memory Mapping",
     "Weight Paging"
    ]
   },
   {
    "id": "23.13",
    "title": "연산 최적화",
    "bullets": [
     "Operator Fusion",
     "Kernel Fusion",
     "Constant Folding",
     "Dead Code Elimination",
     "Graph Optimization",
     "Layout Optimization",
     "Tiling",
     "Vectorization",
     "Parallel Execution",
     "Heterogeneous Scheduling"
    ]
   },
   {
    "id": "23.14",
    "title": "모델 변환과 그래프 최적화",
    "bullets": [
     "Model Export",
     "Static Graph",
     "Dynamic Graph",
     "Operator Lowering",
     "Graph Partitioning",
     "Constant Propagation",
     "Shape Inference",
     "Backend Compilation",
     "Hardware-specific Optimization"
    ]
   },
   {
    "id": "23.15",
    "title": "On-device 런타임",
    "bullets": [
     "TensorFlow Lite",
     "LiteRT",
     "Core ML",
     "ONNX Runtime Mobile",
     "ExecuTorch",
     "TensorRT",
     "TensorRT-LLM",
     "OpenVINO",
     "NCNN",
     "MNN",
     "TVM",
     "TFLite Micro"
    ]
   },
   {
    "id": "23.16",
    "title": "모바일 AI 프레임워크",
    "bullets": [
     "Android NNAPI",
     "Core ML",
     "Metal Performance Shaders",
     "Qualcomm QNN",
     "Samsung Neural SDK",
     "MediaPipe",
     "Mobile GPU Backend",
     "NPU Backend"
    ]
   },
   {
    "id": "23.17",
    "title": "모델 포맷",
    "bullets": [
     "ONNX",
     "TensorFlow Lite",
     "Core ML Package",
     "TorchScript",
     "ExecuTorch Program",
     "GGUF",
     "Safetensors",
     "FlatBuffer",
     "Vendor-specific Binary"
    ]
   },
   {
    "id": "23.18",
    "title": "On-device 비전",
    "bullets": [
     "Image Classification",
     "Object Detection",
     "Face Detection",
     "Face Recognition",
     "Pose Estimation",
     "Hand Tracking",
     "Segmentation",
     "OCR",
     "Document Scanning",
     "Image Enhancement"
    ]
   },
   {
    "id": "23.19",
    "title": "On-device 음성",
    "bullets": [
     "Keyword Spotting",
     "Automatic Speech Recognition",
     "Speech Enhancement",
     "Noise Suppression",
     "Voice Activity Detection",
     "Speaker Recognition",
     "Text-to-Speech",
     "Audio Classification"
    ]
   },
   {
    "id": "23.20",
    "title": "On-device NLP",
    "bullets": [
     "Text Classification",
     "Intent Detection",
     "Named Entity Recognition",
     "Autocomplete",
     "Spell Correction",
     "Summarization",
     "Translation",
     "Semantic Search",
     "Local Embedding"
    ]
   },
   {
    "id": "23.21",
    "title": "On-device LLM",
    "bullets": [
     "Small Language Model",
     "Local LLM",
     "Decoder-only Inference",
     "Prompt Processing",
     "Token Generation",
     "KV Cache",
     "Context Window",
     "Sampling",
     "Conversation Memory",
     "Local Tool Use"
    ]
   },
   {
    "id": "23.22",
    "title": "On-device LLM 최적화",
    "bullets": [
     "Weight-only Quantization",
     "KV Cache Quantization",
     "Flash Attention",
     "Paged Attention",
     "Speculative Decoding",
     "Prompt Caching",
     "Prefix Caching",
     "Token Streaming",
     "Continuous Batching",
     "Partial Offloading"
    ]
   },
   {
    "id": "23.23",
    "title": "On-device VLM",
    "bullets": [
     "Mobile Vision Encoder",
     "Quantized Language Model",
     "Projector",
     "Image Token Compression",
     "Camera Input",
     "Visual Question Answering",
     "OCR-assisted VLM",
     "Local Multimodal Assistant"
    ]
   },
   {
    "id": "23.24",
    "title": "On-device 생성형 AI",
    "bullets": [
     "Local Text Generation",
     "Local Image Generation",
     "Latent Diffusion",
     "Image Editing",
     "Speech Generation",
     "Multimodal Generation",
     "Personal Content Generation"
    ]
   },
   {
    "id": "23.25",
    "title": "On-device RAG",
    "bullets": [
     "Local Embedding Model",
     "Local Vector Index",
     "Document Chunking",
     "Semantic Retrieval",
     "Hybrid Retrieval",
     "Local Knowledge Base",
     "Context Construction",
     "Private Document QA"
    ]
   },
   {
    "id": "23.26",
    "title": "개인화",
    "bullets": [
     "User Adaptation",
     "On-device Fine-tuning",
     "Personal Embedding",
     "Preference Learning",
     "Federated Personalization",
     "Adapter Personalization",
     "Local Memory",
     "Contextual Adaptation"
    ]
   },
   {
    "id": "23.27",
    "title": "연합학습",
    "bullets": [
     "Federated Learning",
     "Federated Averaging",
     "Client Update",
     "Server Aggregation",
     "Non-IID Data",
     "Communication Efficiency",
     "Secure Aggregation",
     "Federated Personalization"
    ]
   },
   {
    "id": "23.28",
    "title": "프라이버시 보호",
    "bullets": [
     "Local Data Processing",
     "Data Minimization",
     "Differential Privacy",
     "Secure Enclave",
     "Trusted Execution Environment",
     "Encrypted Storage",
     "Permission Control",
     "Privacy-preserving Analytics"
    ]
   },
   {
    "id": "23.29",
    "title": "보안",
    "bullets": [
     "Model Encryption",
     "Model Obfuscation",
     "Secure Boot",
     "Runtime Integrity",
     "Adversarial Input",
     "Model Extraction",
     "Tamper Resistance",
     "Supply-chain Security",
     "Update Verification"
    ]
   },
   {
    "id": "23.30",
    "title": "전력과 열 관리",
    "bullets": [
     "Power Consumption",
     "Energy per Inference",
     "Thermal Throttling",
     "Battery Impact",
     "Dynamic Voltage and Frequency Scaling",
     "Duty Cycling",
     "Workload Scheduling",
     "Thermal-aware Inference"
    ]
   },
   {
    "id": "23.31",
    "title": "실시간 추론",
    "bullets": [
     "Real-time Constraint",
     "Deadline",
     "Frame Rate",
     "Streaming Input",
     "Incremental Inference",
     "Pipeline Latency",
     "Jitter",
     "Worst-case Latency"
    ]
   },
   {
    "id": "23.32",
    "title": "센서 융합",
    "bullets": [
     "Camera",
     "Microphone",
     "IMU",
     "GPS",
     "Depth Sensor",
     "Radar",
     "LiDAR",
     "Multisensor Fusion",
     "Temporal Synchronization"
    ]
   },
   {
    "id": "23.33",
    "title": "하이브리드 AI",
    "bullets": [
     "Device-Cloud Split",
     "Model Partitioning",
     "Feature Offloading",
     "Conditional Offloading",
     "Edge-Cloud Collaboration",
     "Network-aware Inference",
     "Privacy-aware Routing",
     "Fallback Strategy"
    ]
   },
   {
    "id": "23.34",
    "title": "배포 파이프라인",
    "bullets": [
     "Model Conversion",
     "Quantization",
     "Validation",
     "Packaging",
     "Application Integration",
     "Device Testing",
     "Backend Selection",
     "Release Management",
     "Update Delivery"
    ]
   },
   {
    "id": "23.35",
    "title": "디바이스별 검증",
    "bullets": [
     "CPU-only Device",
     "Mobile GPU Device",
     "NPU Device",
     "Low-memory Device",
     "Thermal-constrained Device",
     "Offline Environment",
     "Multiple OS Version",
     "Multiple Hardware Generation"
    ]
   },
   {
    "id": "23.36",
    "title": "성능 측정",
    "bullets": [
     "Startup Time",
     "Model Load Time",
     "First-token Latency",
     "Token Generation Speed",
     "End-to-end Latency",
     "Throughput",
     "Peak Memory",
     "Average Memory",
     "Energy Usage",
     "Thermal Impact"
    ]
   },
   {
    "id": "23.37",
    "title": "품질 평가",
    "bullets": [
     "Accuracy",
     "Task Performance",
     "Quantization Degradation",
     "Device Consistency",
     "Robustness",
     "Offline Reliability",
     "Personalization Quality",
     "Privacy Compliance"
    ]
   },
   {
    "id": "23.38",
    "title": "On-device AI 실패 유형",
    "bullets": [
     "Unsupported Operator",
     "Runtime Fallback",
     "Memory Exhaustion",
     "Thermal Throttling",
     "Excessive Battery Drain",
     "Model Load Failure",
     "Hardware-specific Error",
     "Accuracy Drift",
     "Latency Spike",
     "Device Fragmentation"
    ]
   },
   {
    "id": "23.39",
    "title": "On-device AI 시스템 설계",
    "bullets": [
     "Use-case Definition",
     "Hardware Target",
     "Model Selection",
     "Compression Strategy",
     "Runtime Selection",
     "Memory Budget",
     "Latency Budget",
     "Energy Budget",
     "Privacy Requirement",
     "Update Strategy"
    ]
   },
   {
    "id": "23.40",
    "title": "On-device AI 주요 응용",
    "bullets": [
     "Mobile Assistant",
     "Wearable AI",
     "Smart Camera",
     "Automotive AI",
     "Home IoT",
     "Industrial Edge AI",
     "Healthcare Device",
     "AR/VR",
     "Robotics",
     "Personal Knowledge Assistant"
    ]
   }
  ]
 },
 {
  "n": 24,
  "title": "강화학습",
  "sections": [
   {
    "id": "24.1",
    "title": "강화학습 개론",
    "bullets": [
     "Agent",
     "Environment",
     "State",
     "Observation",
     "Action",
     "Reward",
     "Episode",
     "Trajectory",
     "Policy",
     "Return"
    ]
   },
   {
    "id": "24.2",
    "title": "Markov Decision Process",
    "bullets": [
     "State Space",
     "Action Space",
     "Transition",
     "Reward Function",
     "Discount Factor",
     "Markov Property",
     "Terminal State"
    ]
   },
   {
    "id": "24.3",
    "title": "가치함수",
    "bullets": [
     "State Value",
     "Action Value",
     "Advantage",
     "Return",
     "Bellman Expectation",
     "Bellman Optimality"
    ]
   },
   {
    "id": "24.4",
    "title": "Dynamic Programming",
    "bullets": [
     "Policy Evaluation",
     "Policy Improvement",
     "Policy Iteration",
     "Value Iteration",
     "Generalized Policy Iteration"
    ]
   },
   {
    "id": "24.5",
    "title": "Monte Carlo와 Temporal Difference",
    "bullets": [
     "Monte Carlo Learning",
     "Temporal Difference Learning",
     "Bootstrapping",
     "TD Error",
     "n-step Return",
     "Eligibility Trace"
    ]
   },
   {
    "id": "24.6",
    "title": "Value-based Learning",
    "bullets": [
     "Q-Learning",
     "SARSA",
     "DQN",
     "Experience Replay",
     "Target Network",
     "Double DQN",
     "Dueling Network",
     "Distributional RL"
    ]
   },
   {
    "id": "24.7",
    "title": "Policy-based Learning",
    "bullets": [
     "Policy Gradient",
     "REINFORCE",
     "Stochastic Policy",
     "Deterministic Policy",
     "Entropy Regularization"
    ]
   },
   {
    "id": "24.8",
    "title": "Actor-Critic",
    "bullets": [
     "Actor",
     "Critic",
     "Advantage Actor-Critic",
     "A2C",
     "A3C",
     "PPO",
     "DDPG",
     "TD3",
     "SAC"
    ]
   },
   {
    "id": "24.9",
    "title": "Exploration",
    "bullets": [
     "Epsilon-Greedy",
     "Entropy Bonus",
     "Upper Confidence Bound",
     "Intrinsic Motivation",
     "Curiosity",
     "Count-based Exploration",
     "Exploration Noise"
    ]
   },
   {
    "id": "24.10",
    "title": "Partial Observability",
    "bullets": [
     "POMDP",
     "Observation",
     "Hidden State",
     "Belief State",
     "Memory",
     "Recurrent Policy",
     "State Estimation"
    ]
   },
   {
    "id": "24.11",
    "title": "Offline Reinforcement Learning",
    "bullets": [
     "Behavior Policy",
     "Dataset Shift",
     "Extrapolation Error",
     "Conservative Learning",
     "Batch RL",
     "Offline Policy Evaluation"
    ]
   },
   {
    "id": "24.12",
    "title": "Imitation Learning",
    "bullets": [
     "Behavior Cloning",
     "Inverse Reinforcement Learning",
     "DAgger",
     "Demonstration",
     "Expert Policy"
    ]
   }
  ]
 },
 {
  "n": 25,
  "title": "모델 기반 강화학습",
  "sections": [
   {
    "id": "25.1",
    "title": "모델 기반 강화학습 개론",
    "bullets": [
     "Environment Model",
     "Transition Model",
     "Reward Model",
     "Planning",
     "Imagination",
     "Sample Efficiency",
     "Model Bias"
    ]
   },
   {
    "id": "25.2",
    "title": "모델 학습",
    "bullets": [
     "Dynamics Learning",
     "Reward Prediction",
     "Terminal Prediction",
     "Multi-step Prediction",
     "Uncertainty Estimation",
     "Ensemble Model"
    ]
   },
   {
    "id": "25.3",
    "title": "계획",
    "bullets": [
     "Random Shooting",
     "Cross-Entropy Method",
     "Model Predictive Control",
     "Tree Search",
     "Monte Carlo Tree Search",
     "Trajectory Optimization",
     "Receding Horizon"
    ]
   },
   {
    "id": "25.4",
    "title": "Dyna 계열",
    "bullets": [
     "Real Experience",
     "Simulated Experience",
     "Planning Update",
     "Model Learning",
     "Policy Learning"
    ]
   },
   {
    "id": "25.5",
    "title": "잠재 공간 계획",
    "bullets": [
     "Latent State",
     "Latent Dynamics",
     "Latent Rollout",
     "Latent Reward",
     "Latent Planner",
     "Goal-conditioned Planning"
    ]
   },
   {
    "id": "25.6",
    "title": "모델 편향",
    "bullets": [
     "One-step Error",
     "Multi-step Error",
     "Compounding Error",
     "Distribution Shift",
     "Planner Exploitation",
     "Model Uncertainty",
     "Conservative Planning"
    ]
   }
  ]
 },
 {
  "n": 26,
  "title": "World Model",
  "sections": [
   {
    "id": "26.1",
    "title": "World Model 개론",
    "bullets": [
     "World Representation",
     "State Representation",
     "Environment Dynamics",
     "Observation Model",
     "Reward Model",
     "Action-conditioned Prediction",
     "Imagination",
     "Planning",
     "Control"
    ]
   },
   {
    "id": "26.2",
    "title": "World Model 구성요소",
    "bullets": [
     "Representation Model",
     "Dynamics Model",
     "Observation Decoder",
     "Reward Predictor",
     "Continuation Predictor",
     "Policy",
     "Value Model",
     "Planner"
    ]
   },
   {
    "id": "26.3",
    "title": "잠재 상태",
    "bullets": [
     "Latent Variable",
     "Latent State",
     "Deterministic State",
     "Stochastic State",
     "Belief State",
     "Compact Representation",
     "Sufficient Representation",
     "Predictive State"
    ]
   },
   {
    "id": "26.4",
    "title": "상태공간 모델",
    "bullets": [
     "State Space Model",
     "Hidden Markov Model",
     "Kalman Filter",
     "Nonlinear State Space Model",
     "Neural State Space Model",
     "Sequential Latent Model"
    ]
   },
   {
    "id": "26.5",
    "title": "Recurrent State-Space Model",
    "bullets": [
     "Recurrent Hidden State",
     "Stochastic Latent State",
     "Prior",
     "Posterior",
     "Observation Encoder",
     "Observation Decoder",
     "Reward Model",
     "Continuation Model"
    ]
   },
   {
    "id": "26.6",
    "title": "관측 모델",
    "bullets": [
     "Pixel Reconstruction",
     "Feature Reconstruction",
     "Distributional Reconstruction",
     "Multi-modal Observation",
     "Sensor Fusion",
     "Observation Likelihood"
    ]
   },
   {
    "id": "26.7",
    "title": "Dynamics Model",
    "bullets": [
     "Deterministic Dynamics",
     "Stochastic Dynamics",
     "Action Conditioning",
     "One-step Transition",
     "Multi-step Transition",
     "Long-horizon Prediction",
     "Uncertainty-aware Dynamics"
    ]
   },
   {
    "id": "26.8",
    "title": "World Model 학습 목적",
    "bullets": [
     "Reconstruction Learning",
     "Dynamics Consistency",
     "Latent Regularization",
     "Reward Prediction",
     "Continuation Prediction",
     "Multi-step Prediction",
     "Contrastive Prediction",
     "Predictive Representation"
    ]
   },
   {
    "id": "26.9",
    "title": "Imagination Rollout",
    "bullets": [
     "Latent Rollout",
     "Imagined Trajectory",
     "Predicted Reward",
     "Predicted Continuation",
     "Actor Update",
     "Critic Update",
     "Policy Optimization in Imagination"
    ]
   },
   {
    "id": "26.10",
    "title": "PlaNet 계열",
    "bullets": [
     "Latent Dynamics",
     "RSSM",
     "Model Predictive Control",
     "CEM Planning",
     "Pixel-based Control",
     "Online Planning"
    ]
   },
   {
    "id": "26.11",
    "title": "Dreamer 계열",
    "bullets": [
     "Dreamer",
     "DreamerV2",
     "DreamerV3",
     "Latent Imagination",
     "Actor-Critic",
     "World Model Learning",
     "General-purpose Configuration",
     "Multi-domain Control"
    ]
   },
   {
    "id": "26.12",
    "title": "생성형 World Model",
    "bullets": [
     "Pixel Prediction",
     "Video Prediction",
     "Autoregressive Video",
     "Diffusion-based Prediction",
     "Action-conditioned Video",
     "Stochastic Future",
     "Multi-modal Future"
    ]
   },
   {
    "id": "26.13",
    "title": "표현 예측형 World Model",
    "bullets": [
     "Joint Embedding",
     "Context Encoder",
     "Target Encoder",
     "Predictor",
     "Masked Prediction",
     "Semantic Future",
     "Non-generative Prediction",
     "JEPA"
    ]
   },
   {
    "id": "26.14",
    "title": "Image JEPA",
    "bullets": [
     "Context Block",
     "Target Block",
     "Spatial Masking",
     "Target Representation",
     "Predictor",
     "Representation Learning",
     "Collapse Prevention"
    ]
   },
   {
    "id": "26.15",
    "title": "Video JEPA",
    "bullets": [
     "Temporal Masking",
     "Video Representation",
     "Motion Representation",
     "Future Representation",
     "Spatiotemporal Prediction",
     "Video Understanding"
    ]
   },
   {
    "id": "26.16",
    "title": "Object-centric World Model",
    "bullets": [
     "Object Representation",
     "Slot Attention",
     "Entity-centric State",
     "Object Interaction",
     "Relation Modeling",
     "Compositional Dynamics",
     "Object Permanence"
    ]
   },
   {
    "id": "26.17",
    "title": "물리 세계 모델링",
    "bullets": [
     "Motion",
     "Collision",
     "Contact",
     "Gravity",
     "Deformation",
     "Occlusion",
     "Object Permanence",
     "Physical Interaction"
    ]
   },
   {
    "id": "26.18",
    "title": "행동 조건부 비디오 모델",
    "bullets": [
     "Action Token",
     "Control Signal",
     "Camera Motion",
     "Agent Motion",
     "Conditional Future",
     "Robot Action",
     "Trajectory Prediction"
    ]
   },
   {
    "id": "26.19",
    "title": "계획과 제어",
    "bullets": [
     "Goal-conditioned Planning",
     "Latent Planning",
     "Trajectory Optimization",
     "Model Predictive Control",
     "Policy Learning",
     "Hierarchical Planning",
     "Long-horizon Planning"
    ]
   },
   {
    "id": "26.20",
    "title": "World Model 불확실성",
    "bullets": [
     "Stochastic Transition",
     "Multi-modal Future",
     "Ensemble",
     "Calibration",
     "Model Uncertainty",
     "Risk-sensitive Planning",
     "Uncertainty-aware Control"
    ]
   },
   {
    "id": "26.21",
    "title": "World Model 실패 유형",
    "bullets": [
     "Compounding Error",
     "Model Bias",
     "Distribution Shift",
     "Mode Averaging",
     "Over-compression",
     "Missing Object Permanence",
     "Causal Confusion",
     "Reward Hacking",
     "Planner Exploitation",
     "Long-horizon Instability"
    ]
   },
   {
    "id": "26.22",
    "title": "World Model 평가",
    "bullets": [
     "One-step Prediction",
     "Multi-step Prediction",
     "Reconstruction Quality",
     "Latent Consistency",
     "Reward Prediction",
     "Planning Success",
     "Control Performance",
     "Generalization",
     "Robustness",
     "Calibration",
     "Counterfactual Prediction"
    ]
   },
   {
    "id": "26.23",
    "title": "World Model 주요 연구 흐름",
    "bullets": [
     "World Models",
     "PlaNet",
     "Dreamer",
     "DreamerV2",
     "DreamerV3",
     "MuZero",
     "JEPA",
     "Video JEPA",
     "Generative World Model",
     "Robotics World Model",
     "Autonomous Driving World Model"
    ]
   }
  ]
 },
 {
  "n": 27,
  "title": "Embodied AI",
  "sections": [
   {
    "id": "27.1",
    "title": "Embodied AI 개론",
    "bullets": [
     "Embodiment",
     "Agent",
     "Sensor",
     "Actuator",
     "Perception",
     "Action",
     "Environment Interaction",
     "Closed-loop Control"
    ]
   },
   {
    "id": "27.2",
    "title": "인식과 상태 추정",
    "bullets": [
     "Visual Perception",
     "Depth Estimation",
     "Pose Estimation",
     "Object Detection",
     "Segmentation",
     "Tracking",
     "Mapping",
     "State Estimation"
    ]
   },
   {
    "id": "27.3",
    "title": "언어와 행동 연결",
    "bullets": [
     "Language Instruction",
     "Goal Representation",
     "Visual Grounding",
     "Language Grounding",
     "Action Grounding",
     "Instruction Following",
     "Task Decomposition"
    ]
   },
   {
    "id": "27.4",
    "title": "Vision-Language-Action Model",
    "bullets": [
     "Vision Encoder",
     "Language Encoder",
     "Action Decoder",
     "Unified Tokenization",
     "Action Token",
     "Trajectory Token",
     "Behavior Cloning",
     "Generalist Policy"
    ]
   },
   {
    "id": "27.5",
    "title": "로봇 학습",
    "bullets": [
     "Demonstration Learning",
     "Imitation Learning",
     "Offline RL",
     "Online RL",
     "Sim-to-Real",
     "Domain Randomization",
     "Robot Foundation Model",
     "Generalist Robot Policy"
    ]
   },
   {
    "id": "27.6",
    "title": "메모리와 장기 과제",
    "bullets": [
     "Episodic Memory",
     "Semantic Memory",
     "Working Memory",
     "Long-horizon Task",
     "Hierarchical Planning",
     "Subgoal",
     "Skill Library"
    ]
   },
   {
    "id": "27.7",
    "title": "안전과 제약",
    "bullets": [
     "Safety Constraint",
     "Collision Avoidance",
     "Human Oversight",
     "Fail-safe",
     "Uncertainty-aware Action",
     "Safe Exploration",
     "Policy Monitoring"
    ]
   }
  ]
 },
 {
  "n": 28,
  "title": "Foundation Model, VLM, World Model 통합",
  "sections": [
   {
    "id": "28.1",
    "title": "공통 기반",
    "bullets": [
     "대규모 사전학습",
     "표현학습",
     "자기지도학습",
     "멀티모달 데이터",
     "전이학습",
     "적응",
     "일반화"
    ]
   },
   {
    "id": "28.2",
    "title": "Foundation Model과 VLM",
    "bullets": [
     "Vision Foundation Model",
     "Language Foundation Model",
     "Multimodal Foundation Model",
     "Cross-modal Alignment",
     "Instruction Tuning",
     "Multimodal Reasoning"
    ]
   },
   {
    "id": "28.3",
    "title": "VLM과 World Model",
    "bullets": [
     "Visual State Representation",
     "Temporal Representation",
     "Action-conditioned Prediction",
     "Language-conditioned Planning",
     "Goal Grounding",
     "Scene Understanding",
     "Future Prediction"
    ]
   },
   {
    "id": "28.4",
    "title": "Foundation Model과 World Model",
    "bullets": [
     "General-purpose Representation",
     "Scalable Pretraining",
     "Multi-domain Dynamics",
     "Transferable World Model",
     "Foundation World Model",
     "Generalist Agent"
    ]
   },
   {
    "id": "28.5",
    "title": "통합 에이전트 구조",
    "bullets": [
     "Perception",
     "Multimodal Encoding",
     "State Estimation",
     "Memory",
     "World Model",
     "Planner",
     "Policy",
     "Tool Use",
     "Feedback",
     "Safety Layer"
    ]
   },
   {
    "id": "28.6",
    "title": "통합 연구 주제",
    "bullets": [
     "Multimodal Agent",
     "Video Foundation Model",
     "Robotics Foundation Model",
     "Vision-Language-Action Model",
     "Interactive World Model",
     "Generative Simulation",
     "Embodied Foundation Model",
     "Autonomous Agent"
    ]
   }
  ]
 }
];
window.CURRICULUM_TOTALS = {"chapters":28,"sections":347,"bullets":2898};
