# AI 이론 중심 통합 커리큘럼 목차 (개정판)

> 범위: 수학 기초 → 전통 ML → 딥러닝 → 컴퓨터 비전·순차·그래프·오디오 → 생성 모델 → Transformer·LLM → 자기지도학습 → Foundation Model·VLM → 해석가능성·안전·인과 → Agent → 양자화·On-device → 강화학습·World Model·Embodied AI
>
> 학습 방식: 이론 중심
>
> 개정 메모: 신규 챕터로 그래프 신경망, 오디오·음성 딥러닝, 메타러닝과 지속학습, 모델 해석가능성, 견고성·안전·정렬, 인과추론을 추가했습니다. 기존 챕터에는 전통 ML(통계적 학습이론), 생성 모델(VQ·Score 기반·Flow Matching·Consistency), Transformer(State Space Model·대안 아키텍처), LLM(RAG), Foundation Model(Mixture-of-Experts) 섹션을 보강했습니다.

---

# 1. AI 개론

## 1.1 인공지능의 기본 개념

- 인공지능의 정의
- 머신러닝의 정의
- 딥러닝의 정의
- 생성형 AI의 정의
- 지능형 시스템의 구성
- 학습과 추론
- 모델과 알고리즘
- 데이터와 지식
- 규칙 기반 시스템과 학습 기반 시스템

## 1.2 머신러닝 패러다임

- 지도학습
- 비지도학습
- 반지도학습
- 자기지도학습
- 강화학습
- 전이학습
- 메타러닝
- 멀티태스크 학습
- 연속학습

## 1.3 AI 주요 분야

- 자연어처리
- 컴퓨터 비전
- 음성 인식
- 음성 합성
- 추천 시스템
- 시계열 예측
- 로보틱스
- 자율주행
- 멀티모달 AI
- 생성 모델
- Foundation Model
- Vision-Language Model
- World Model
- Embodied AI

## 1.4 머신러닝 시스템의 기본 구조

- 데이터 수집
- 데이터 전처리
- 특성 표현
- 모델 선택
- 학습
- 검증
- 평가
- 추론
- 배포
- 모니터링
- 재학습

## 1.5 데이터 분할과 평가

- 훈련 데이터
- 검증 데이터
- 테스트 데이터
- 교차검증
- 데이터 누출
- 분포 변화
- 과적합
- 과소적합
- 일반화
- 벤치마크
- 베이스라인
- 재현성

## 1.6 AI 연구의 기본 구조

- 연구 문제
- 관련 연구
- 방법론
- 실험 설계
- 비교 실험
- Ablation Study
- 한계
- 재현성
- 윤리적 고려
- 후속 연구

---

# 2. 선형대수

## 2.1 수와 공간의 기본 구조

- 스칼라
- 벡터
- 행렬
- 텐서
- 차원
- Shape
- 좌표계
- 기저
- 벡터 공간
- 부분공간

## 2.2 벡터 연산

- 벡터 덧셈
- 스칼라 곱
- 선형결합
- Span
- 선형독립
- 선형종속
- 벡터의 크기
- 단위벡터
- 거리
- 각도

## 2.3 내적과 유사도

- 내적
- 직교성
- 정사영
- 코사인 유사도
- 유클리드 거리
- 맨해튼 거리
- 거리 공간
- 유사도 공간
- 정규화
- 임베딩 공간

## 2.4 행렬 연산

- 행렬 덧셈
- 행렬 곱
- 전치행렬
- 단위행렬
- 역행렬
- 대칭행렬
- 대각행렬
- 직교행렬
- 블록행렬
- 희소행렬

## 2.5 선형변환

- 선형사상
- 회전
- 확대와 축소
- 전단
- 좌표 변환
- 합성 변환
- 행렬 표현
- Rank
- Null Space
- Column Space
- Row Space

## 2.6 연립방정식과 행렬 분해

- 연립선형방정식
- 가우스 소거법
- LU 분해
- QR 분해
- 정규방정식
- 최소제곱법
- 과결정 시스템
- 부족결정 시스템

## 2.7 고유값과 고유벡터

- 고유값
- 고유벡터
- 특성방정식
- 대각화
- 고유공간
- 스펙트럴 분해
- 반복 선형변환
- 안정성 분석

## 2.8 특이값 분해

- 특이값
- 특이벡터
- SVD
- 저랭크 근사
- 행렬 압축
- 노이즈 제거
- 잠재 공간
- 행렬 완성

## 2.9 차원 축소

- PCA
- 주성분
- 설명 분산
- 공분산 행렬
- Whitening
- 저차원 표현
- 차원 축소의 정보 손실
- 시각화

## 2.10 AI와 선형대수

- 신경망의 선형층
- 임베딩
- Attention의 행렬 연산
- 저랭크 적응
- 행렬 분해 기반 압축
- 그래프 표현
- 이미지 텐서
- 시퀀스 텐서
- 멀티모달 표현

---

# 3. 미적분과 최적화

## 3.1 함수의 기본

- 함수
- 정의역
- 공역
- 합성함수
- 역함수
- 다변수 함수
- 연속성
- 극한
- 국소 근사

## 3.2 미분

- 변화율
- 도함수
- 접선
- 고계도함수
- 미분 가능성
- 단조성
- 극값
- 곡률

## 3.3 다변수 미분

- 편미분
- 그래디언트
- 방향도함수
- Jacobian
- Hessian
- 다변수 연쇄법칙
- 벡터값 함수
- 행렬 미분

## 3.4 연쇄법칙과 계산 그래프

- 함수 합성
- 계산 그래프
- 순전파
- 역방향 미분
- 자동미분
- Reverse Mode
- Forward Mode
- 기울기 누적

## 3.5 최적화 기초

- 목적함수
- 손실함수
- 제약조건
- 전역 최적점
- 지역 최적점
- 안장점
- 볼록성
- 비볼록성
- 최적화 경로

## 3.6 경사하강법

- Batch Gradient Descent
- Stochastic Gradient Descent
- Mini-batch Gradient Descent
- 학습률
- 수렴
- 발산
- 초기값
- 조건수
- Plateau

## 3.7 최적화 알고리즘

- Momentum
- Nesterov Momentum
- AdaGrad
- RMSProp
- Adam
- AdamW
- LAMB
- Lion
- 1차 최적화
- 2차 최적화

## 3.8 학습률 전략

- 고정 학습률
- Step Decay
- Exponential Decay
- Cosine Decay
- Warmup
- Restart
- Cyclic Learning Rate
- One-Cycle Policy

## 3.9 제약과 정규화

- 라그랑주 승수
- 제약 최적화
- L1 정규화
- L2 정규화
- Weight Decay
- Sparsity
- 조기 종료
- 암묵적 정규화

## 3.10 딥러닝 최적화

- 기울기 소실
- 기울기 폭주
- Gradient Clipping
- Sharp Minimum
- Flat Minimum
- Batch Size
- 최적화와 일반화
- 손실 지형
- Scale Invariance

---

# 4. 확률과 통계

## 4.1 확률의 기본

- 표본공간
- 사건
- 확률
- 조건부 확률
- 독립
- 종속
- 전확률법칙
- 베이즈 정리

## 4.2 확률변수

- 이산 확률변수
- 연속 확률변수
- 확률질량함수
- 확률밀도함수
- 누적분포함수
- 결합분포
- 주변분포
- 조건부분포

## 4.3 기댓값과 분산

- 기댓값
- 분산
- 표준편차
- 공분산
- 상관계수
- 모멘트
- 중심극한정리
- 대수의 법칙

## 4.4 주요 확률분포

- Bernoulli 분포
- Binomial 분포
- Categorical 분포
- Multinomial 분포
- Uniform 분포
- Gaussian 분포
- Multivariate Gaussian
- Exponential 분포
- Poisson 분포
- Beta 분포
- Dirichlet 분포

## 4.5 통계적 추정

- 표본
- 모집단
- 추정량
- 점추정
- 구간추정
- 편향
- 분산
- 일치성
- 효율성
- 충분통계량

## 4.6 가능도 기반 추정

- Likelihood
- Log-likelihood
- 최대가능도추정
- 최대사후확률추정
- Prior
- Posterior
- Conjugate Prior
- 베이지안 추론

## 4.7 정보이론

- 정보량
- 엔트로피
- 교차엔트로피
- KL Divergence
- Mutual Information
- 조건부 엔트로피
- Jensen-Shannon Divergence
- 정보 병목

## 4.8 가설검정과 통계적 비교

- 귀무가설
- 대립가설
- p-value
- 유의수준
- 1종 오류
- 2종 오류
- 검정력
- 다중검정
- 효과크기
- 신뢰구간

## 4.9 불확실성

- Aleatoric Uncertainty
- Epistemic Uncertainty
- Predictive Uncertainty
- Calibration
- Confidence
- Entropy-based Uncertainty
- Ensemble
- Bayesian Neural Network

## 4.10 AI와 확률

- 확률적 분류
- 언어 모델 확률
- 생성 모델
- 잠재변수 모델
- 확률적 상태전이
- 불확실성 추정
- 샘플링
- 확률적 디코딩

---

# 5. 전통적 머신러닝

## 5.1 머신러닝 문제 정의

- 입력 공간
- 출력 공간
- 가설 공간
- 모델 클래스
- 경험적 위험
- 기대 위험
- 귀납적 편향
- 일반화 오차
- 표본 복잡도
- No Free Lunch

## 5.2 통계적 학습이론

- Bias-Variance Tradeoff
- Empirical Risk Minimization
- Structural Risk Minimization
- PAC Learning
- VC Dimension
- Rademacher Complexity
- Generalization Bound
- Uniform Convergence
- Margin Theory
- Sample Complexity

## 5.3 선형회귀

- 단순선형회귀
- 다중선형회귀
- 최소제곱법
- 잔차
- 정규방정식
- 다중공선성
- Ridge Regression
- Lasso Regression
- Elastic Net
- Robust Regression

## 5.4 로지스틱 회귀

- 이진 분류
- Logit
- Sigmoid
- 결정경계
- 다중분류
- Softmax Regression
- 확률적 해석
- 정규화

## 5.5 거리 기반 학습

- K-Nearest Neighbors
- 거리 함수
- 특성 스케일링
- 지역적 결정경계
- Curse of Dimensionality
- 근사 최근접 탐색

## 5.6 결정트리

- 재귀적 분할
- Entropy
- Gini Impurity
- Information Gain
- Tree Depth
- Leaf Node
- Pruning
- 회귀트리
- 분류트리

## 5.7 앙상블

- Voting
- Bagging
- Random Forest
- Extra Trees
- Boosting
- AdaBoost
- Gradient Boosting
- XGBoost
- LightGBM
- CatBoost
- Stacking

## 5.8 Support Vector Machine

- Margin
- Support Vector
- Hard Margin
- Soft Margin
- Hinge Loss
- Kernel Trick
- Linear Kernel
- Polynomial Kernel
- RBF Kernel
- One-Class SVM

## 5.9 확률적 생성 모델

- Naive Bayes
- Gaussian Discriminant Analysis
- Gaussian Mixture Model
- Latent Variable
- EM Algorithm
- Hidden Markov Model

## 5.10 군집화

- K-means
- K-medoids
- Hierarchical Clustering
- DBSCAN
- Spectral Clustering
- Gaussian Mixture Clustering
- 군집 평가

## 5.11 차원 축소와 매니폴드 학습

- PCA
- Kernel PCA
- ICA
- MDS
- Isomap
- t-SNE
- UMAP
- 비선형 차원 축소

## 5.12 이상치 탐지

- Statistical Outlier Detection
- Isolation Forest
- One-Class SVM
- Local Outlier Factor
- Reconstruction-based Detection

## 5.13 모델 평가

- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix
- ROC Curve
- ROC-AUC
- Precision-Recall Curve
- PR-AUC
- Log Loss
- Calibration
- 회귀 평가 지표

## 5.14 모델 선택

- Train-Validation-Test Split
- K-Fold Cross Validation
- Stratified Sampling
- Hyperparameter Search
- Grid Search
- Random Search
- Bayesian Optimization
- Nested Cross Validation

---

# 6. 딥러닝 기초

## 6.1 퍼셉트론

- 선형 분류기
- 가중치
- 편향
- 활성화
- 결정경계
- 선형 분리 가능성
- XOR 문제

## 6.2 다층 퍼셉트론

- 입력층
- 은닉층
- 출력층
- 깊이
- 너비
- 표현력
- 비선형성
- Universal Approximation

## 6.3 활성화 함수

- Sigmoid
- Tanh
- ReLU
- Leaky ReLU
- ELU
- SELU
- GELU
- Swish
- Softplus
- 활성화 함수 선택

## 6.4 순전파와 역전파

- 순전파
- 손실 계산
- 계산 그래프
- 역전파
- 기울기 계산
- 파라미터 업데이트
- 자동미분

## 6.5 손실함수

- Mean Squared Error
- Mean Absolute Error
- Binary Cross-Entropy
- Categorical Cross-Entropy
- Hinge Loss
- Focal Loss
- Contrastive Loss
- Triplet Loss
- Metric Learning Loss

## 6.6 가중치 초기화

- Zero Initialization
- Random Initialization
- Xavier Initialization
- He Initialization
- Orthogonal Initialization
- 초기화와 신호 전파

## 6.7 정규화 계층

- Batch Normalization
- Layer Normalization
- Instance Normalization
- Group Normalization
- RMSNorm
- Weight Normalization
- Pre-Norm
- Post-Norm

## 6.8 일반화 기법

- L1 Regularization
- L2 Regularization
- Weight Decay
- Dropout
- DropConnect
- Early Stopping
- Label Smoothing
- Mixup
- CutMix
- Data Augmentation

## 6.9 Residual Learning

- Skip Connection
- Residual Block
- Identity Mapping
- Highway Network
- Dense Connection
- Gradient Flow

## 6.10 딥러닝 학습 전략

- Mini-batch
- Shuffle
- Gradient Accumulation
- Mixed Precision
- Gradient Checkpointing
- Learning Rate Warmup
- Scheduler
- Checkpointing
- Early Stopping

## 6.11 딥러닝 일반화

- Double Descent
- Overparameterization
- Implicit Bias
- Flatness
- Sharpness
- Lottery Ticket Hypothesis
- Neural Tangent Kernel
- Scaling Behavior

---

# 7. 컴퓨터 비전

## 7.1 이미지 표현

- 픽셀
- 채널
- 해상도
- 색 공간
- 이미지 텐서
- 공간 정보
- 지역성
- 계층적 특징

## 7.2 합성곱 신경망

- Convolution
- Kernel
- Feature Map
- Stride
- Padding
- Dilation
- Pooling
- Receptive Field
- Parameter Sharing
- Translation Equivariance

## 7.3 대표 CNN 구조

- LeNet
- AlexNet
- VGG
- GoogLeNet
- Inception
- ResNet
- DenseNet
- EfficientNet
- ConvNeXt

## 7.4 이미지 분류

- Backbone
- Feature Extractor
- Classification Head
- Global Average Pooling
- Transfer Learning
- Fine-tuning

## 7.5 객체 탐지

- Region Proposal
- Bounding Box
- Anchor
- IoU
- Non-Maximum Suppression
- R-CNN
- Fast R-CNN
- Faster R-CNN
- SSD
- YOLO
- DETR

## 7.6 이미지 분할

- Semantic Segmentation
- Instance Segmentation
- Panoptic Segmentation
- FCN
- U-Net
- DeepLab
- Mask R-CNN
- Segment Anything

## 7.7 Vision Transformer

- Patch Embedding
- Positional Embedding
- CLS Token
- Self-Attention
- MLP Block
- ViT
- DeiT
- Swin Transformer
- Hybrid Architecture

## 7.8 비전 표현학습

- Supervised Pretraining
- Contrastive Learning
- Masked Image Modeling
- Distillation
- Self-Distillation
- Image Representation
- Dense Representation

---

# 8. 순차 모델

## 8.1 시퀀스 데이터

- 시간 순서
- 가변 길이
- 문맥
- 의존성
- 시계열
- 텍스트
- 음성
- 비디오

## 8.2 Recurrent Neural Network

- Hidden State
- Recurrence
- Sequence Processing
- Many-to-One
- One-to-Many
- Many-to-Many
- Backpropagation Through Time

## 8.3 LSTM

- Cell State
- Forget Gate
- Input Gate
- Output Gate
- 장기 의존성
- 메모리 제어

## 8.4 GRU

- Update Gate
- Reset Gate
- Hidden State
- LSTM과 GRU 비교

## 8.5 Sequence-to-Sequence

- Encoder
- Decoder
- Context Vector
- Teacher Forcing
- Exposure Bias
- Beam Search

## 8.6 Attention 이전의 순차 모델

- Bahdanau Attention
- Luong Attention
- Encoder-Decoder Attention
- Alignment
- Context Aggregation

## 8.7 시계열 모델링

- Autoregressive Model
- State Space Model
- Temporal Convolution
- Sequence Forecasting
- Temporal Representation

---

# 9. 그래프 신경망

## 9.1 그래프 표현

- 노드
- 엣지
- 인접행렬
- 차수행렬
- 노드 특성
- 방향 그래프
- 무방향 그래프
- 이종 그래프
- 동적 그래프
- 그래프 라플라시안

## 9.2 Message Passing

- 이웃 집계
- Message Function
- Update Function
- Aggregation
- 순열 불변성
- 순열 등변성
- 이웃 샘플링
- Receptive Field
- Readout

## 9.3 대표 GNN 구조

- Graph Convolutional Network
- GraphSAGE
- Graph Attention Network
- Graph Isomorphism Network
- Spectral GNN
- Spatial GNN
- ChebNet
- Relational GCN
- Message Passing Neural Network

## 9.4 그래프 표현학습

- Node Embedding
- Graph Embedding
- DeepWalk
- node2vec
- Graph Autoencoder
- Contrastive Graph Learning
- Self-supervised Graph Learning

## 9.5 그래프 수준 과제

- Node Classification
- Link Prediction
- Graph Classification
- Community Detection
- Subgraph Matching
- Graph Generation
- Knowledge Graph Embedding

## 9.6 그래프 Transformer

- Graph Transformer
- Structural Encoding
- Laplacian Positional Encoding
- Random Walk Encoding
- Graphormer
- Attention over Graph

## 9.7 GNN의 한계

- Over-smoothing
- Over-squashing
- 표현력 한계
- Weisfeiler-Lehman Test
- Scalability
- Long-range Dependency
- Heterophily

---

# 10. 오디오·음성 딥러닝

## 10.1 오디오 표현

- 파형
- 샘플링 레이트
- STFT
- Spectrogram
- Mel-spectrogram
- MFCC
- Filter Bank
- 위상 정보
- 프레임과 홉
- 정규화

## 10.2 오디오 신경망 구조

- 1D Convolution
- Dilated Convolution
- WaveNet
- Conformer
- Audio Transformer
- Time-domain Model
- Spectrogram Model
- Time-Frequency Model

## 10.3 음성 인식

- Acoustic Model
- Connectionist Temporal Classification
- Attention-based ASR
- RNN-Transducer
- End-to-End ASR
- Whisper
- Language Model Fusion
- Streaming Recognition

## 10.4 음성 자기지도학습

- wav2vec
- wav2vec 2.0
- HuBERT
- WavLM
- data2vec
- Contrastive Audio Learning
- Masked Audio Modeling
- Discrete Speech Unit

## 10.5 음성 합성

- Text-to-Speech
- Acoustic Feature Prediction
- Tacotron
- FastSpeech
- Neural Vocoder
- WaveNet Vocoder
- HiFi-GAN
- Diffusion TTS
- Zero-shot TTS

## 10.6 신경 오디오 코덱과 토큰화

- Audio Tokenization
- Neural Audio Codec
- EnCodec
- SoundStream
- Residual Vector Quantization
- Discrete Audio Token
- Neural Compression

## 10.7 오디오 언어모델과 멀티모달

- Audio Language Model
- Speech LLM
- Audio-Text Alignment
- Spoken Language Understanding
- Audio Captioning
- Music Generation
- Text-to-Audio Generation

## 10.8 음성 과제와 평가

- Keyword Spotting
- Speaker Recognition
- Voice Activity Detection
- Speech Enhancement
- Source Separation
- Word Error Rate
- Mean Opinion Score
- Diarization

---

# 11. 생성 모델

## 11.1 생성 모델 개론

- 판별 모델
- 생성 모델
- 확률밀도 추정
- 샘플 생성
- 명시적 모델
- 암묵적 모델
- 조건부 생성
- 잠재변수

## 11.2 Autoencoder

- Encoder
- Bottleneck
- Latent Space
- Decoder
- Reconstruction
- Denoising Autoencoder
- Sparse Autoencoder
- Contractive Autoencoder

## 11.3 Variational Autoencoder

- Variational Inference
- Prior
- Posterior
- Approximate Posterior
- Reparameterization
- ELBO
- KL Regularization
- Latent Interpolation
- Posterior Collapse

## 11.4 Generative Adversarial Network

- Generator
- Discriminator
- Adversarial Training
- Minimax Game
- Mode Collapse
- Training Instability
- DCGAN
- Conditional GAN
- WGAN
- StyleGAN

## 11.5 Autoregressive Generative Model

- PixelRNN
- PixelCNN
- WaveNet
- Token-by-Token Generation
- Likelihood
- Sampling Cost

## 11.6 Normalizing Flow

- Invertible Transformation
- Change of Variables
- Exact Likelihood
- Coupling Layer
- RealNVP
- Glow

## 11.7 Diffusion Model

- Forward Process
- Reverse Process
- Noise Schedule
- Denoising
- Score Matching
- Noise Prediction
- Sampling
- DDPM
- DDIM
- Classifier Guidance
- Classifier-Free Guidance

## 11.8 Latent Diffusion

- Latent Space
- Compression Model
- Conditional Generation
- Text Conditioning
- Cross-Attention
- Image Synthesis

## 11.9 이산 잠재 표현과 VQ

- Vector Quantization
- VQ-VAE
- Codebook
- Commitment Loss
- Straight-Through Estimator
- VQ-VAE-2
- VQGAN
- Discrete Latent Token
- Tokenizer for Generation
- Codebook Collapse

## 11.10 Score 기반·연속시간 생성

- Score Function
- Score Matching
- Denoising Score Matching
- Noise Conditional Score Network
- Stochastic Differential Equation
- Reverse-time SDE
- Probability Flow ODE
- Langevin Dynamics

## 11.11 Flow Matching과 빠른 샘플링

- Continuous Normalizing Flow
- Flow Matching
- Rectified Flow
- Optimal Transport Path
- Consistency Model
- Progressive Distillation
- Diffusion Distillation
- Few-step Generation
- One-step Generation

## 11.12 생성 모델 비교

- 학습 안정성
- 샘플 품질
- 다양성
- Likelihood
- 잠재 공간
- 추론 속도
- 샘플링 비용
- 조건 제어

---

# 12. Transformer

## 12.1 토큰화

- Character Tokenization
- Word Tokenization
- Subword Tokenization
- BPE
- WordPiece
- Unigram
- Vocabulary
- Unknown Token
- Special Token
- Multilingual Tokenization

## 12.2 임베딩

- Token Embedding
- Position Embedding
- Segment Embedding
- Learned Embedding
- Relative Position
- Rotary Position Embedding
- ALiBi

## 12.3 Self-Attention

- Query
- Key
- Value
- Similarity Score
- Scaling
- Softmax
- Weighted Sum
- Attention Matrix
- Attention Pattern

## 12.4 Multi-Head Attention

- Attention Head
- Head Projection
- Head Concatenation
- Head Specialization
- Output Projection

## 12.5 Transformer Block

- Attention Sub-layer
- Feed-Forward Network
- Residual Connection
- Layer Normalization
- Dropout
- Pre-Norm
- Post-Norm

## 12.6 Transformer 구조

- Encoder-only
- Decoder-only
- Encoder-Decoder
- Bidirectional Attention
- Causal Attention
- Cross-Attention
- Masking

## 12.7 Transformer 계산 효율

- Sequence Length
- Quadratic Complexity
- Memory Complexity
- Sparse Attention
- Linear Attention
- Flash Attention
- Sliding Window
- Chunking
- KV Cache

## 12.8 State Space Model과 대안 아키텍처

- State Space Model
- S4
- S5
- Mamba
- Selective State Space
- Linear Recurrent Model
- RWKV
- RetNet
- Linear Attention
- Sub-quadratic Model
- Hybrid Architecture
- Recurrent-Attention Trade-off

## 12.9 대표 Transformer 모델

- Transformer
- BERT
- GPT
- T5
- BART
- XLNet
- DeBERTa
- Longformer
- Transformer-XL

---

# 13. 언어 모델과 LLM

## 13.1 언어 모델링

- 다음 토큰 예측
- Masked Language Modeling
- Autoregressive Modeling
- Sequence Probability
- Context
- Perplexity
- Teacher Forcing

## 13.2 사전학습

- Corpus
- Data Mixture
- Deduplication
- Filtering
- Token Distribution
- Data Quality
- Curriculum
- Domain Balance

## 13.3 LLM 구조

- Decoder-only Transformer
- Embedding Layer
- Transformer Layers
- Language Modeling Head
- Weight Tying
- Vocabulary Projection

## 13.4 디코딩 전략

- Greedy Decoding
- Beam Search
- Temperature Sampling
- Top-k Sampling
- Top-p Sampling
- Typical Sampling
- Repetition Penalty
- Length Penalty

## 13.5 문맥학습

- Zero-shot
- One-shot
- Few-shot
- Demonstration
- Prompt Format
- Example Selection
- In-context Learning
- Prompt Sensitivity

## 13.6 긴 문맥

- Context Window
- Position Extrapolation
- Long-context Attention
- Retrieval
- Memory
- Context Compression
- Lost in the Middle
- Long-range Dependency

## 13.7 검색 증강 생성 (RAG)

- Retrieval-Augmented Generation
- Document Chunking
- Embedding Model
- Dense Retrieval
- Sparse Retrieval
- Hybrid Search
- Vector Index
- Reranking
- Query Rewriting
- Context Injection
- Grounding
- Retrieval Evaluation

## 13.8 LLM 추론

- Pattern Completion
- Step-by-Step Reasoning
- Tool Use
- Search
- Planning
- Verification
- Self-Consistency
- Test-time Compute

## 13.9 LLM 평가

- Language Modeling Evaluation
- Knowledge Evaluation
- Reasoning Evaluation
- Coding Evaluation
- Instruction Following
- Safety Evaluation
- Human Evaluation
- LLM-as-a-Judge
- Benchmark Contamination

## 13.10 LLM 한계

- Hallucination
- Memorization
- Bias
- Calibration
- Prompt Injection
- Jailbreak
- Context Failure
- Reasoning Error
- Evaluation Leakage

---

# 14. 자기지도학습과 표현학습

## 14.1 자기지도학습 개론

- Pretext Task
- Representation Learning
- Label-free Learning
- Transfer
- Invariance
- Equivariance

## 14.2 대조학습

- Positive Pair
- Negative Pair
- Data Augmentation
- Instance Discrimination
- InfoNCE
- Temperature
- Batch Negatives
- Hard Negatives

## 14.3 대표 대조학습 방법

- SimCLR
- MoCo
- CPC
- SupCon
- CLIP
- ALIGN

## 14.4 비대조 학습

- BYOL
- SimSiam
- Barlow Twins
- VICReg
- Collapse
- Stop-gradient
- Momentum Encoder

## 14.5 Masked Modeling

- Masked Language Modeling
- Masked Image Modeling
- Masked Autoencoder
- Masked Prediction
- Context Reconstruction

## 14.6 Predictive Representation Learning

- Context Representation
- Target Representation
- Predictor
- Latent Prediction
- Joint Embedding
- Semantic Prediction
- JEPA

## 14.7 표현 평가

- Linear Probing
- Fine-tuning
- Transfer Learning
- Retrieval
- Clustering
- Probing Task
- Representation Similarity

---

# 15. 메타러닝과 지속학습

## 15.1 메타러닝 개론

- Learning to Learn
- Task Distribution
- Meta-train
- Meta-test
- Support Set
- Query Set
- Fast Adaptation
- Inductive Bias Transfer

## 15.2 Few-shot Learning

- N-way K-shot
- Metric-based Meta-learning
- Prototypical Network
- Matching Network
- Relation Network
- Siamese Network
- Episode Training

## 15.3 최적화 기반 메타러닝

- MAML
- First-order MAML
- Reptile
- Learned Initialization
- Inner Loop
- Outer Loop
- Meta-optimizer
- Gradient-based Meta-learning

## 15.4 지속학습 개론

- Catastrophic Forgetting
- Stability-Plasticity Dilemma
- Task-incremental Learning
- Class-incremental Learning
- Domain-incremental Learning
- Task Boundary
- Online Continual Learning

## 15.5 지속학습 방법

- Regularization-based Method
- Elastic Weight Consolidation
- Synaptic Intelligence
- Replay-based Method
- Experience Replay
- Generative Replay
- Parameter Isolation
- Dynamic Architecture
- Knowledge Distillation

## 15.6 메타·지속학습 평가

- Average Accuracy
- Forgetting Measure
- Forward Transfer
- Backward Transfer
- Plasticity
- Memory Budget
- Adaptation Speed

---

# 16. Foundation Model

## 16.1 Foundation Model 개론

- 기반 모델
- 대규모 사전학습
- 범용 표현
- 다운스트림 적응
- Emergent Capability
- Homogenization
- 범용성
- 재사용성

## 16.2 Foundation Model 유형

- Language Foundation Model
- Vision Foundation Model
- Audio Foundation Model
- Multimodal Foundation Model
- Scientific Foundation Model
- Robotics Foundation Model

## 16.3 사전학습 목적

- Autoregressive Learning
- Masked Modeling
- Contrastive Learning
- Denoising
- Predictive Representation
- Multi-task Pretraining

## 16.4 Scaling Law

- Model Scale
- Data Scale
- Compute Scale
- Parameter Count
- Token Count
- Training Compute
- Power Law
- Compute-optimal Training
- Data-optimal Training

## 16.5 Mixture-of-Experts

- Sparse Model
- Expert
- Router
- Top-k Gating
- Load Balancing
- Auxiliary Loss
- Expert Capacity
- Expert Parallelism
- Shared Expert
- Sparse Upcycling
- Fine-grained Expert
- Routing Instability

## 16.6 데이터 구성

- Data Collection
- Deduplication
- Filtering
- Quality Scoring
- Domain Mixture
- Language Balance
- Safety Filtering
- Synthetic Data
- Data Governance

## 16.7 전이학습과 적응

- Feature Extraction
- Linear Probing
- Full Fine-tuning
- Domain Adaptation
- Task Adaptation
- Multi-task Fine-tuning
- Continual Adaptation

## 16.8 Parameter-Efficient Fine-Tuning

- Adapter
- LoRA
- QLoRA
- Prefix Tuning
- Prompt Tuning
- IA3
- BitFit
- Low-rank Update
- Quantized Fine-tuning

## 16.9 Instruction Tuning

- Instruction Dataset
- Task Mixture
- Supervised Fine-tuning
- Response Formatting
- General Instruction Following
- Synthetic Instruction
- Multi-turn Instruction

## 16.10 Preference Alignment

- Preference Data
- Reward Model
- RLHF
- PPO
- DPO
- IPO
- KTO
- RLAIF
- Constitutional AI
- Reward Hacking

## 16.11 Foundation Model 평가

- Capability Evaluation
- Generalization
- Robustness
- Calibration
- Adaptability
- Few-shot Performance
- Safety
- Bias
- Privacy
- Memorization

## 16.12 Foundation Model 운영

- Pretraining Pipeline
- Distributed Training
- Data Parallelism
- Model Parallelism
- Pipeline Parallelism
- Tensor Parallelism
- Checkpointing
- Mixed Precision
- Inference Optimization

## 16.13 Foundation Model 거버넌스

- Model Card
- System Card
- Risk Assessment
- Data Documentation
- Access Control
- Red Teaming
- Monitoring
- Deployment Policy

## 16.14 Foundation Model 주요 연구 흐름

- BERT 계열
- GPT 계열
- T5 계열
- Vision Foundation Model
- Multimodal Foundation Model
- Open-weight Model
- Mixture-of-Experts
- Sparse Model
- Retrieval-Augmented Model

---

# 17. Vision-Language Model

## 17.1 멀티모달 학습 개론

- Modality
- Cross-modal Learning
- Alignment
- Fusion
- Grounding
- Shared Representation
- Modality Gap
- Multimodal Token

## 17.2 시각 인코더

- CNN Backbone
- Vision Transformer
- Patch Representation
- Multi-scale Feature
- Global Feature
- Dense Feature
- Frozen Vision Encoder
- Trainable Vision Encoder

## 17.3 텍스트 인코더와 언어 모델

- Text Encoder
- Bidirectional Encoder
- Autoregressive Language Model
- Decoder LLM
- Token Embedding
- Language Representation

## 17.4 이미지-텍스트 대조학습

- Dual Encoder
- Shared Embedding Space
- Image-Text Pair
- Positive Pair
- In-batch Negative
- Temperature
- Zero-shot Classification
- Image-Text Retrieval

## 17.5 CLIP 계열

- CLIP
- ALIGN
- SigLIP
- OpenCLIP
- Prompt Ensemble
- Zero-shot Transfer
- Embedding Alignment

## 17.6 이미지-텍스트 매칭

- Image-Text Matching
- Fine-grained Alignment
- Cross-modal Matching
- Negative Mining
- Matching Head

## 17.7 이미지 캡셔닝

- Image Captioning
- Conditional Language Generation
- Visual Feature Conditioning
- Autoregressive Captioning
- Dense Captioning
- Region Captioning

## 17.8 Cross-Attention VLM

- Visual Query
- Visual Key
- Visual Value
- Cross-Attention Layer
- Gated Cross-Attention
- Interleaved Input
- Multi-image Context

## 17.9 Flamingo 계열

- Perceiver Resampler
- Frozen Language Model
- Gated Cross-Attention
- Few-shot Multimodal Learning
- Interleaved Image-Text Data

## 17.10 Connector 기반 VLM

- Linear Projector
- MLP Projector
- Query Transformer
- Adapter
- Visual Token Projection
- Modality Connector

## 17.11 BLIP 계열

- BLIP
- BLIP-2
- Q-Former
- Image-Text Contrastive Learning
- Image-Text Matching
- Caption Generation
- Frozen Encoder
- Frozen LLM

## 17.12 LLaVA 계열

- Vision Encoder
- Projector
- Language Model
- Visual Instruction Tuning
- Multimodal Conversation
- Synthetic Instruction Data
- Multi-turn Dialogue

## 17.13 멀티모달 토큰 통합

- Visual Token
- Text Token
- Unified Sequence
- Early Fusion
- Late Fusion
- Hybrid Fusion
- Token Compression
- Token Selection

## 17.14 고해상도 이미지 처리

- Image Tiling
- Dynamic Resolution
- Multi-scale Encoding
- Global-Local Feature
- Patch Compression
- Resolution Adaptation

## 17.15 문서 이해

- OCR
- Layout Analysis
- Document Layout
- Table Understanding
- Chart Understanding
- Form Understanding
- Diagram Understanding
- Document Question Answering

## 17.16 비디오 VLM

- Frame Sampling
- Temporal Encoding
- Video Token
- Temporal Aggregation
- Video Question Answering
- Video Captioning
- Long Video Understanding
- Event Localization

## 17.17 멀티이미지와 공간 추론

- Multi-image Context
- Image Comparison
- Spatial Relation
- Counting
- Object Tracking
- Referential Grounding
- Region Grounding

## 17.18 VLM 학습 데이터

- Image-Caption Pair
- Interleaved Document
- Visual Question Answering
- OCR Dataset
- Chart Dataset
- Video-Text Dataset
- Instruction Dataset
- Preference Dataset
- Synthetic Multimodal Data

## 17.19 VLM 학습 단계

- Vision Pretraining
- Modality Alignment
- Generative Pretraining
- Visual Instruction Tuning
- Multimodal Preference Tuning
- Safety Alignment

## 17.20 VLM 평가

- Image-Text Retrieval
- Zero-shot Classification
- Captioning
- VQA
- OCR
- Chart QA
- Document QA
- Spatial Reasoning
- Counting
- Grounding
- Multimodal Dialogue
- Video QA

## 17.21 VLM 한계

- Visual Hallucination
- Object Existence Error
- Counting Error
- Spatial Error
- OCR Failure
- Small Object Failure
- Language Prior Dominance
- Grounding Failure
- High-resolution Failure
- Multimodal Prompt Injection

## 17.22 VLM 주요 연구 흐름

- ViT
- CLIP
- ALIGN
- BLIP
- Flamingo
- BLIP-2
- LLaVA
- Unified Multimodal Model
- Video-Language Model
- Document VLM

---

# 18. 모델 해석가능성

## 18.1 해석가능성 개론

- Interpretability
- Explainability
- Transparency
- Post-hoc Explanation
- Intrinsic Interpretability
- Global Explanation
- Local Explanation
- Faithfulness

## 18.2 특성 귀인

- Feature Attribution
- Saliency Map
- Gradient-based Attribution
- Integrated Gradients
- SmoothGrad
- Grad-CAM
- Occlusion Analysis
- LIME
- SHAP
- Counterfactual Explanation

## 18.3 표현과 Attention 분석

- Representation Probing
- Probing Classifier
- Attention Analysis
- Attention Rollout
- Concept Activation Vector
- TCAV
- Representation Similarity
- CKA

## 18.4 기계적 해석가능성

- Mechanistic Interpretability
- Circuit
- Feature
- Neuron Analysis
- Superposition
- Polysemanticity
- Induction Head
- Activation Patching
- Causal Tracing

## 18.5 Sparse Autoencoder 해석

- Dictionary Learning
- Sparse Feature
- Monosemantic Feature
- Feature Disentanglement
- Concept Extraction
- Feature Steering

## 18.6 해석가능성 평가와 활용

- Explanation Faithfulness
- Explanation Robustness
- Human Interpretability
- Model Debugging
- Bias Detection
- Knowledge Localization
- Model Editing

---

# 19. 견고성·안전·정렬

## 19.1 적대적 견고성

- Adversarial Example
- Perturbation
- FGSM
- PGD
- White-box Attack
- Black-box Attack
- Transferability
- Adversarial Training
- Certified Robustness
- Randomized Smoothing

## 19.2 분포 변화와 견고성

- Distribution Shift
- Covariate Shift
- Domain Shift
- Out-of-Distribution
- OOD Detection
- Distributional Robustness
- Group Robustness
- Spurious Correlation

## 19.3 데이터·모델 공격

- Data Poisoning
- Backdoor Attack
- Trojan
- Model Extraction
- Membership Inference
- Model Inversion
- Watermarking

## 19.4 AI 정렬 이론

- Alignment Problem
- Outer Alignment
- Inner Alignment
- Reward Misspecification
- Reward Hacking
- Specification Gaming
- Goal Misgeneralization
- Scalable Oversight

## 19.5 정렬 기법

- RLHF
- RLAIF
- Reward Model
- DPO
- Constitutional AI
- Preference Modeling
- Red Teaming
- Refusal Training
- Weak-to-strong Generalization

## 19.6 공정성과 편향

- Bias
- Fairness Criteria
- Demographic Parity
- Equalized Odds
- Bias Measurement
- Bias Mitigation
- Representation Bias
- Allocation Harm
- Responsible AI

## 19.7 프라이버시와 안전 평가

- Differential Privacy
- Privacy Attack
- Robustness Evaluation
- Safety Benchmark
- Stress Testing
- Failure Mode Analysis
- Model Card

---

# 20. 인과추론

## 20.1 인과추론 개론

- Correlation vs Causation
- Causal Model
- Structural Causal Model
- Causal Graph
- Directed Acyclic Graph
- Confounder
- Collider
- Mediator

## 20.2 개입과 반사실

- Intervention
- do-Calculus
- Counterfactual
- Potential Outcome
- Treatment Effect
- Average Treatment Effect
- Backdoor Criterion
- Frontdoor Criterion

## 20.3 인과 발견과 추정

- Causal Discovery
- Constraint-based Method
- Score-based Method
- Propensity Score
- Instrumental Variable
- Identifiability
- Randomized Experiment

## 20.4 인과와 머신러닝

- Invariant Prediction
- Causal Representation Learning
- Domain Generalization
- Causal Confusion
- Spurious Feature
- Counterfactual Data Augmentation

---

# 21. Agent AI

## 21.1 Agent AI 개론

- Intelligent Agent
- Autonomous Agent
- Goal-directed Behavior
- Environment Interaction
- Observation
- Action
- Feedback
- Agent Loop
- Autonomy Level
- Agentic Workflow

## 21.2 Agent 구조

- Perception
- Reasoning
- Planning
- Memory
- Tool Use
- Action Execution
- Reflection
- Feedback Processing
- State Management
- Control Loop

## 21.3 LLM 기반 Agent

- LLM as Controller
- Prompt-based Agent
- Tool-augmented LLM
- Function Calling
- Structured Output
- Agent State
- Action Selection
- Response Generation
- Multi-turn Interaction

## 21.4 Agent Loop

- Observe
- Interpret
- Plan
- Act
- Evaluate
- Reflect
- Retry
- Termination
- Recovery
- Continuous Interaction

## 21.5 목표와 과업 관리

- Goal Representation
- Task Definition
- Task Decomposition
- Subtask
- Dependency
- Priority
- Constraint
- Completion Condition
- Progress Tracking
- Goal Revision

## 21.6 계획

- Plan Generation
- Sequential Planning
- Hierarchical Planning
- Dynamic Planning
- Contingency Planning
- Replanning
- Search-based Planning
- Constraint-aware Planning
- Long-horizon Planning
- Plan Validation

## 21.7 추론과 의사결정

- Deliberation
- Decision Policy
- Heuristic Reasoning
- Step-by-step Reasoning
- Self-consistency
- Verification
- Critique
- Confidence Estimation
- Uncertainty-aware Decision
- Decision Trace

## 21.8 도구 사용

- Tool Definition
- Tool Selection
- Tool Invocation
- Function Calling
- API Tool
- Search Tool
- Calculator Tool
- Code Execution Tool
- Database Tool
- External Service Integration

## 21.9 도구 오케스트레이션

- Tool Routing
- Sequential Tool Use
- Parallel Tool Use
- Tool Dependency
- Tool Result Parsing
- Error Handling
- Retry Policy
- Fallback Tool
- Tool Permission
- Tool Audit

## 21.10 메모리

- Working Memory
- Short-term Memory
- Long-term Memory
- Episodic Memory
- Semantic Memory
- Procedural Memory
- Conversation Memory
- User Memory
- Task Memory
- External Memory

## 21.11 메모리 저장과 검색

- Memory Write
- Memory Read
- Memory Indexing
- Memory Retrieval
- Relevance Scoring
- Recency
- Importance
- Memory Compression
- Memory Summarization
- Memory Forgetting

## 21.12 Retrieval-Augmented Agent

- Knowledge Retrieval
- Document Retrieval
- Vector Search
- Hybrid Search
- Query Rewriting
- Context Construction
- Retrieval Planning
- Evidence Selection
- Source Grounding
- Retrieval Feedback

## 21.13 Agent 상태 관리

- Session State
- Task State
- Environment State
- Tool State
- Persistent State
- Checkpoint
- State Transition
- State Serialization
- State Recovery
- State Consistency

## 21.14 반성 및 자기개선

- Self-reflection
- Self-critique
- Error Analysis
- Outcome Evaluation
- Plan Revision
- Prompt Revision
- Strategy Update
- Experience Reuse
- Feedback Learning
- Iterative Improvement

## 21.15 실행 제어

- Execution Policy
- Step Limit
- Time Limit
- Cost Limit
- Token Budget
- Tool Budget
- Stop Condition
- Human Approval
- Rollback
- Safe Termination

## 21.16 Human-in-the-loop Agent

- Human Approval
- Human Feedback
- Escalation
- Review Queue
- Clarification
- Intervention
- Shared Control
- Editable Plan
- Manual Override
- Audit Trail

## 21.17 멀티에이전트 시스템

- Multi-Agent System
- Agent Role
- Agent Specialization
- Cooperation
- Competition
- Communication
- Delegation
- Coordination
- Consensus
- Shared Memory

## 21.18 멀티에이전트 협업

- Manager-Worker
- Planner-Executor
- Critic-Reviewer
- Debate
- Voting
- Task Allocation
- Role Assignment
- Message Passing
- Conflict Resolution
- Collective Decision

## 21.19 Agent Communication

- Agent Message
- Communication Protocol
- Structured Message
- Shared Context
- Blackboard Architecture
- Event-driven Communication
- Asynchronous Communication
- Synchronous Communication
- Message Validation
- Communication Cost

## 21.20 Agent Workflow

- Workflow Graph
- Sequential Workflow
- Parallel Workflow
- Branching
- Conditional Routing
- Loop
- Event Trigger
- Human Gate
- State Machine
- DAG-based Workflow

## 21.21 Agent Architecture Patterns

- ReAct
- Plan-and-Execute
- Router Agent
- Supervisor Agent
- Worker Agent
- Critic Agent
- Reflection Agent
- Blackboard Agent
- Hierarchical Agent
- Event-driven Agent

## 21.22 Browser and Computer-use Agent

- Browser Navigation
- Web Interaction
- UI Perception
- Screen Understanding
- Click Action
- Text Input
- Form Completion
- File Handling
- Desktop Automation
- Computer-use Safety

## 21.23 Coding Agent

- Code Generation
- Code Search
- Repository Understanding
- Test Generation
- Code Execution
- Debugging
- Patch Generation
- Refactoring
- Dependency Analysis
- Software Workflow Automation

## 21.24 Data Agent

- Data Retrieval
- Data Cleaning
- Query Generation
- SQL Agent
- Spreadsheet Agent
- Data Analysis
- Visualization
- Report Generation
- Metric Monitoring
- Data Validation

## 21.25 Research Agent

- Query Planning
- Source Discovery
- Evidence Collection
- Source Evaluation
- Citation Management
- Claim Verification
- Information Synthesis
- Knowledge Gap Detection
- Research Memory
- Research Report Generation

## 21.26 Multimodal Agent

- Vision Input
- Audio Input
- Video Input
- Sensor Input
- Visual Grounding
- Multimodal Memory
- Cross-modal Planning
- Image-based Tool Use
- Video-based Reasoning
- Multimodal Action

## 21.27 Embodied Agent

- Perception-Action Loop
- Sensorimotor State
- Physical Action
- Spatial Reasoning
- Navigation
- Manipulation
- Environment Feedback
- Real-time Control
- Robot Agent
- Simulated Agent

## 21.28 Agent 학습

- Behavior Cloning
- Reinforcement Learning
- Preference Learning
- Offline Learning
- Online Learning
- Experience Replay
- Self-generated Data
- Tool-use Learning
- Planning Learning
- Memory Learning

## 21.29 Agent 평가

- Task Completion
- Success Rate
- Step Efficiency
- Tool Accuracy
- Planning Quality
- Recovery Ability
- Robustness
- Cost
- Latency
- Human Satisfaction

## 21.30 Agent 벤치마크

- Tool-use Benchmark
- Web Navigation Benchmark
- Coding Benchmark
- Long-horizon Task Benchmark
- Multi-agent Benchmark
- Memory Benchmark
- Planning Benchmark
- Safety Benchmark
- Embodied Agent Benchmark
- Real-world Evaluation

## 21.31 Agent 실패 유형

- Hallucinated Action
- Wrong Tool Selection
- Invalid Tool Call
- Infinite Loop
- Goal Drift
- Context Loss
- Memory Corruption
- Planning Failure
- Error Propagation
- Premature Termination

## 21.32 Agent 안전

- Permission Control
- Sandboxing
- Tool Restriction
- Data Access Control
- Human Approval
- Action Validation
- Policy Enforcement
- Rate Limiting
- Audit Logging
- Emergency Stop

## 21.33 Agent 보안

- Prompt Injection
- Indirect Prompt Injection
- Tool Injection
- Data Exfiltration
- Credential Leakage
- Malicious Tool Output
- Supply-chain Attack
- Memory Poisoning
- Agent Hijacking
- Privilege Escalation

## 21.34 Agent 신뢰성과 복구

- Retry
- Fallback
- Checkpoint
- Rollback
- Idempotency
- Transaction
- Error Isolation
- Circuit Breaker
- Partial Completion
- Recovery Workflow

## 21.35 Agent 시스템 운영

- Observability
- Trace
- Log
- Metric
- Cost Monitoring
- Latency Monitoring
- Tool Monitoring
- Memory Monitoring
- Quality Monitoring
- Incident Analysis

## 21.36 Agent 시스템 설계

- Use-case Definition
- Agent Boundary
- Tool Boundary
- Memory Design
- Workflow Design
- Safety Design
- Evaluation Design
- Deployment Architecture
- Human Role
- Failure Strategy

## 21.37 Agent 주요 응용

- Personal Assistant
- Enterprise Assistant
- Customer Support Agent
- Coding Agent
- Research Agent
- Data Agent
- Operations Agent
- Security Agent
- Healthcare Support Agent
- Robotics Agent

---

# 22. 양자화

## 22.1 양자화 개론

- 수치 표현
- 부동소수점
- 정수 표현
- 비트 폭
- 동적 범위
- 정밀도
- 양자화 오차
- 모델 크기
- 메모리 대역폭
- 연산 효율

## 22.2 데이터 타입

- FP32
- FP16
- BF16
- FP8
- INT16
- INT8
- INT4
- INT3
- INT2
- Binary
- Ternary
- 혼합 정밀도

## 22.3 양자화 기본 구성

- Scale
- Zero Point
- Quantization Range
- Clipping
- Rounding
- Saturation
- Dequantization
- Quantization Grid
- Quantization Noise

## 22.4 대칭·비대칭 양자화

- Symmetric Quantization
- Asymmetric Quantization
- Signed Quantization
- Unsigned Quantization
- Zero Point 처리
- 범위 활용
- 하드웨어 호환성

## 22.5 균일·비균일 양자화

- Uniform Quantization
- Non-uniform Quantization
- Logarithmic Quantization
- Codebook Quantization
- K-means Quantization
- Distribution-aware Quantization

## 22.6 양자화 단위

- Per-tensor Quantization
- Per-channel Quantization
- Per-group Quantization
- Per-token Quantization
- Per-row Quantization
- Per-block Quantization
- Group Size
- Channel Axis

## 22.7 정적·동적 양자화

- Static Quantization
- Dynamic Quantization
- Activation Range Estimation
- Runtime Quantization
- Calibration
- Representative Dataset
- Observer

## 22.8 사후 학습 양자화

- Post-Training Quantization
- Weight-only Quantization
- Weight-Activation Quantization
- Calibration-based PTQ
- Data-free Quantization
- Low-bit PTQ
- Outlier-aware Quantization

## 22.9 양자화 인지 학습

- Quantization-Aware Training
- Fake Quantization
- Straight-Through Estimator
- Learned Scale
- Learned Clipping
- Gradient Approximation
- Low-bit Fine-tuning
- Quantized Training

## 22.10 가중치 양자화

- Weight Quantization
- Weight Distribution
- Per-channel Weight Quantization
- Group-wise Weight Quantization
- Weight Clipping
- Weight Reconstruction
- Weight Packing
- Sparse Weight

## 22.11 활성값 양자화

- Activation Quantization
- Activation Distribution
- Dynamic Activation Range
- Outlier Activation
- Per-token Activation Quantization
- Activation Smoothing
- Intermediate Tensor Quantization

## 22.12 편향과 누산기

- Bias Quantization
- Accumulator Precision
- Integer Accumulation
- Overflow
- Rescaling
- Requantization
- Mixed Accumulator
- Bias Correction

## 22.13 보정

- Calibration Dataset
- Min-Max Calibration
- Percentile Calibration
- Histogram Calibration
- KL Calibration
- MSE Calibration
- Entropy Calibration
- Range Optimization

## 22.14 이상치 처리

- Weight Outlier
- Activation Outlier
- Channel Outlier
- Outlier Splitting
- Outlier Suppression
- SmoothQuant
- Mixed-precision Outlier Handling
- Clipping Strategy

## 22.15 저비트 양자화

- INT8 Quantization
- INT6 Quantization
- INT4 Quantization
- INT3 Quantization
- INT2 Quantization
- Binary Quantization
- Ternary Quantization
- Ultra-low-bit Quantization

## 22.16 벡터 양자화

- Vector Quantization
- Codebook
- Code Assignment
- Product Quantization
- Residual Quantization
- Additive Quantization
- Lookup-based Inference
- Codebook Compression

## 22.17 LLM 양자화

- LLM Weight Quantization
- Weight-only LLM Quantization
- Activation-aware Quantization
- Group-wise Quantization
- KV Cache Quantization
- Embedding Quantization
- Attention Projection Quantization
- MLP Quantization
- Output Head Quantization

## 22.18 LLM 양자화 기법

- GPTQ
- AWQ
- SmoothQuant
- ZeroQuant
- LLM.int8
- SpQR
- HQQ
- NF4
- Double Quantization
- Quantization with LoRA

## 22.19 KV Cache 양자화

- Key Cache
- Value Cache
- Cache Memory
- Cache Precision
- Per-token Cache Quantization
- Per-channel Cache Quantization
- Long-context Memory Reduction
- Cache Reconstruction Error

## 22.20 비전 모델 양자화

- CNN Quantization
- Vision Transformer Quantization
- Patch Embedding Quantization
- Attention Quantization
- LayerNorm 처리
- Detection Model Quantization
- Segmentation Model Quantization

## 22.21 멀티모달 모델 양자화

- Vision Encoder Quantization
- Language Model Quantization
- Projector Quantization
- Cross-Attention Quantization
- Visual Token Precision
- Modality-specific Precision
- Mixed-precision Multimodal Inference

## 22.22 양자화와 미세조정

- Quantized Fine-tuning
- QLoRA
- Low-rank Adapter
- Frozen Quantized Backbone
- Adapter Precision
- Optimizer State Precision
- Gradient Precision

## 22.23 양자화와 희소화

- Quantization and Pruning
- Sparse Quantized Matrix
- Structured Sparsity
- Unstructured Sparsity
- N:M Sparsity
- Sparse Kernel
- Compression Composition

## 22.24 양자화 하드웨어

- Integer Arithmetic
- SIMD
- Vector Instruction
- Tensor Core
- NPU
- DSP
- MAC Unit
- Accumulator
- Memory Alignment
- Bit Packing

## 22.25 양자화 실행 커널

- Quantized Matrix Multiplication
- Quantized Convolution
- Fused Dequantization
- Fused Activation
- Kernel Fusion
- Tiling
- Packing Format
- Operator Support

## 22.26 양자화 평가

- Model Size
- Peak Memory
- Latency
- Throughput
- Energy Consumption
- Accuracy Drop
- Perplexity Change
- Task Performance
- Hardware Speedup
- End-to-end Performance

## 22.27 양자화 실패 유형

- Excessive Accuracy Loss
- Calibration Mismatch
- Outlier Sensitivity
- Operator Fallback
- Dequantization Overhead
- Hardware Mismatch
- LayerNorm Sensitivity
- Softmax Sensitivity
- Accumulator Overflow
- Long-context Degradation

## 22.28 양자화 배포

- Quantized Model Format
- Runtime Compatibility
- Operator Coverage
- Backend Selection
- Hardware-specific Export
- Accuracy Verification
- Latency Verification
- Memory Verification

---

# 23. On-device AI

## 23.1 On-device AI 개론

- Edge AI
- On-device Inference
- Local Processing
- Cloud AI
- Hybrid AI
- Embedded AI
- Mobile AI
- TinyML
- Personal AI

## 23.2 On-device AI의 특성

- Low Latency
- Privacy
- Offline Availability
- Low Bandwidth
- Personalization
- Real-time Response
- Energy Constraint
- Memory Constraint
- Thermal Constraint
- Hardware Diversity

## 23.3 디바이스 하드웨어

- CPU
- GPU
- NPU
- DSP
- Microcontroller
- Neural Accelerator
- Unified Memory
- Shared Memory
- Cache
- Memory Bandwidth

## 23.4 모바일 SoC

- Application Processor
- CPU Cluster
- Mobile GPU
- NPU Block
- ISP
- DSP
- Memory Controller
- Power Management
- Heterogeneous Compute

## 23.5 임베디드 시스템

- MCU
- RTOS
- Bare-metal
- Embedded Linux
- Sensor Interface
- Real-time Constraint
- Static Memory
- Fixed-point Arithmetic
- Tiny Inference

## 23.6 모델 경량화

- Quantization
- Pruning
- Distillation
- Low-rank Decomposition
- Weight Sharing
- Compact Architecture
- Neural Architecture Search
- Dynamic Inference
- Early Exit

## 23.7 가지치기

- Unstructured Pruning
- Structured Pruning
- Channel Pruning
- Filter Pruning
- Head Pruning
- Layer Pruning
- N:M Sparsity
- Magnitude Pruning
- Movement Pruning

## 23.8 지식 증류

- Teacher Model
- Student Model
- Logit Distillation
- Feature Distillation
- Attention Distillation
- Self-Distillation
- Task-specific Distillation
- Multi-teacher Distillation

## 23.9 저랭크와 행렬 분해

- Low-rank Approximation
- SVD Compression
- Tensor Decomposition
- Factorized Layer
- Low-rank Attention
- Low-rank MLP
- Adapter-based Compression

## 23.10 경량 모델 구조

- MobileNet
- ShuffleNet
- SqueezeNet
- EfficientNet-Lite
- MobileViT
- EfficientFormer
- Tiny Transformer
- Compact CNN
- Hybrid CNN-Transformer

## 23.11 동적 추론

- Early Exit
- Conditional Computation
- Dynamic Depth
- Dynamic Width
- Token Pruning
- Token Merging
- Adaptive Resolution
- Adaptive Sampling
- Mixture-of-Experts Routing

## 23.12 메모리 최적화

- Model Memory
- Activation Memory
- Workspace Memory
- Memory Reuse
- In-place Operation
- Buffer Planning
- Tensor Lifetime
- Streaming Execution
- Memory Mapping
- Weight Paging

## 23.13 연산 최적화

- Operator Fusion
- Kernel Fusion
- Constant Folding
- Dead Code Elimination
- Graph Optimization
- Layout Optimization
- Tiling
- Vectorization
- Parallel Execution
- Heterogeneous Scheduling

## 23.14 모델 변환과 그래프 최적화

- Model Export
- Static Graph
- Dynamic Graph
- Operator Lowering
- Graph Partitioning
- Constant Propagation
- Shape Inference
- Backend Compilation
- Hardware-specific Optimization

## 23.15 On-device 런타임

- TensorFlow Lite
- LiteRT
- Core ML
- ONNX Runtime Mobile
- ExecuTorch
- TensorRT
- TensorRT-LLM
- OpenVINO
- NCNN
- MNN
- TVM
- TFLite Micro

## 23.16 모바일 AI 프레임워크

- Android NNAPI
- Core ML
- Metal Performance Shaders
- Qualcomm QNN
- Samsung Neural SDK
- MediaPipe
- Mobile GPU Backend
- NPU Backend

## 23.17 모델 포맷

- ONNX
- TensorFlow Lite
- Core ML Package
- TorchScript
- ExecuTorch Program
- GGUF
- Safetensors
- FlatBuffer
- Vendor-specific Binary

## 23.18 On-device 비전

- Image Classification
- Object Detection
- Face Detection
- Face Recognition
- Pose Estimation
- Hand Tracking
- Segmentation
- OCR
- Document Scanning
- Image Enhancement

## 23.19 On-device 음성

- Keyword Spotting
- Automatic Speech Recognition
- Speech Enhancement
- Noise Suppression
- Voice Activity Detection
- Speaker Recognition
- Text-to-Speech
- Audio Classification

## 23.20 On-device NLP

- Text Classification
- Intent Detection
- Named Entity Recognition
- Autocomplete
- Spell Correction
- Summarization
- Translation
- Semantic Search
- Local Embedding

## 23.21 On-device LLM

- Small Language Model
- Local LLM
- Decoder-only Inference
- Prompt Processing
- Token Generation
- KV Cache
- Context Window
- Sampling
- Conversation Memory
- Local Tool Use

## 23.22 On-device LLM 최적화

- Weight-only Quantization
- KV Cache Quantization
- Flash Attention
- Paged Attention
- Speculative Decoding
- Prompt Caching
- Prefix Caching
- Token Streaming
- Continuous Batching
- Partial Offloading

## 23.23 On-device VLM

- Mobile Vision Encoder
- Quantized Language Model
- Projector
- Image Token Compression
- Camera Input
- Visual Question Answering
- OCR-assisted VLM
- Local Multimodal Assistant

## 23.24 On-device 생성형 AI

- Local Text Generation
- Local Image Generation
- Latent Diffusion
- Image Editing
- Speech Generation
- Multimodal Generation
- Personal Content Generation

## 23.25 On-device RAG

- Local Embedding Model
- Local Vector Index
- Document Chunking
- Semantic Retrieval
- Hybrid Retrieval
- Local Knowledge Base
- Context Construction
- Private Document QA

## 23.26 개인화

- User Adaptation
- On-device Fine-tuning
- Personal Embedding
- Preference Learning
- Federated Personalization
- Adapter Personalization
- Local Memory
- Contextual Adaptation

## 23.27 연합학습

- Federated Learning
- Federated Averaging
- Client Update
- Server Aggregation
- Non-IID Data
- Communication Efficiency
- Secure Aggregation
- Federated Personalization

## 23.28 프라이버시 보호

- Local Data Processing
- Data Minimization
- Differential Privacy
- Secure Enclave
- Trusted Execution Environment
- Encrypted Storage
- Permission Control
- Privacy-preserving Analytics

## 23.29 보안

- Model Encryption
- Model Obfuscation
- Secure Boot
- Runtime Integrity
- Adversarial Input
- Model Extraction
- Tamper Resistance
- Supply-chain Security
- Update Verification

## 23.30 전력과 열 관리

- Power Consumption
- Energy per Inference
- Thermal Throttling
- Battery Impact
- Dynamic Voltage and Frequency Scaling
- Duty Cycling
- Workload Scheduling
- Thermal-aware Inference

## 23.31 실시간 추론

- Real-time Constraint
- Deadline
- Frame Rate
- Streaming Input
- Incremental Inference
- Pipeline Latency
- Jitter
- Worst-case Latency

## 23.32 센서 융합

- Camera
- Microphone
- IMU
- GPS
- Depth Sensor
- Radar
- LiDAR
- Multisensor Fusion
- Temporal Synchronization

## 23.33 하이브리드 AI

- Device-Cloud Split
- Model Partitioning
- Feature Offloading
- Conditional Offloading
- Edge-Cloud Collaboration
- Network-aware Inference
- Privacy-aware Routing
- Fallback Strategy

## 23.34 배포 파이프라인

- Model Conversion
- Quantization
- Validation
- Packaging
- Application Integration
- Device Testing
- Backend Selection
- Release Management
- Update Delivery

## 23.35 디바이스별 검증

- CPU-only Device
- Mobile GPU Device
- NPU Device
- Low-memory Device
- Thermal-constrained Device
- Offline Environment
- Multiple OS Version
- Multiple Hardware Generation

## 23.36 성능 측정

- Startup Time
- Model Load Time
- First-token Latency
- Token Generation Speed
- End-to-end Latency
- Throughput
- Peak Memory
- Average Memory
- Energy Usage
- Thermal Impact

## 23.37 품질 평가

- Accuracy
- Task Performance
- Quantization Degradation
- Device Consistency
- Robustness
- Offline Reliability
- Personalization Quality
- Privacy Compliance

## 23.38 On-device AI 실패 유형

- Unsupported Operator
- Runtime Fallback
- Memory Exhaustion
- Thermal Throttling
- Excessive Battery Drain
- Model Load Failure
- Hardware-specific Error
- Accuracy Drift
- Latency Spike
- Device Fragmentation

## 23.39 On-device AI 시스템 설계

- Use-case Definition
- Hardware Target
- Model Selection
- Compression Strategy
- Runtime Selection
- Memory Budget
- Latency Budget
- Energy Budget
- Privacy Requirement
- Update Strategy

## 23.40 On-device AI 주요 응용

- Mobile Assistant
- Wearable AI
- Smart Camera
- Automotive AI
- Home IoT
- Industrial Edge AI
- Healthcare Device
- AR/VR
- Robotics
- Personal Knowledge Assistant

---

# 24. 강화학습

## 24.1 강화학습 개론

- Agent
- Environment
- State
- Observation
- Action
- Reward
- Episode
- Trajectory
- Policy
- Return

## 24.2 Markov Decision Process

- State Space
- Action Space
- Transition
- Reward Function
- Discount Factor
- Markov Property
- Terminal State

## 24.3 가치함수

- State Value
- Action Value
- Advantage
- Return
- Bellman Expectation
- Bellman Optimality

## 24.4 Dynamic Programming

- Policy Evaluation
- Policy Improvement
- Policy Iteration
- Value Iteration
- Generalized Policy Iteration

## 24.5 Monte Carlo와 Temporal Difference

- Monte Carlo Learning
- Temporal Difference Learning
- Bootstrapping
- TD Error
- n-step Return
- Eligibility Trace

## 24.6 Value-based Learning

- Q-Learning
- SARSA
- DQN
- Experience Replay
- Target Network
- Double DQN
- Dueling Network
- Distributional RL

## 24.7 Policy-based Learning

- Policy Gradient
- REINFORCE
- Stochastic Policy
- Deterministic Policy
- Entropy Regularization

## 24.8 Actor-Critic

- Actor
- Critic
- Advantage Actor-Critic
- A2C
- A3C
- PPO
- DDPG
- TD3
- SAC

## 24.9 Exploration

- Epsilon-Greedy
- Entropy Bonus
- Upper Confidence Bound
- Intrinsic Motivation
- Curiosity
- Count-based Exploration
- Exploration Noise

## 24.10 Partial Observability

- POMDP
- Observation
- Hidden State
- Belief State
- Memory
- Recurrent Policy
- State Estimation

## 24.11 Offline Reinforcement Learning

- Behavior Policy
- Dataset Shift
- Extrapolation Error
- Conservative Learning
- Batch RL
- Offline Policy Evaluation

## 24.12 Imitation Learning

- Behavior Cloning
- Inverse Reinforcement Learning
- DAgger
- Demonstration
- Expert Policy

---

# 25. 모델 기반 강화학습

## 25.1 모델 기반 강화학습 개론

- Environment Model
- Transition Model
- Reward Model
- Planning
- Imagination
- Sample Efficiency
- Model Bias

## 25.2 모델 학습

- Dynamics Learning
- Reward Prediction
- Terminal Prediction
- Multi-step Prediction
- Uncertainty Estimation
- Ensemble Model

## 25.3 계획

- Random Shooting
- Cross-Entropy Method
- Model Predictive Control
- Tree Search
- Monte Carlo Tree Search
- Trajectory Optimization
- Receding Horizon

## 25.4 Dyna 계열

- Real Experience
- Simulated Experience
- Planning Update
- Model Learning
- Policy Learning

## 25.5 잠재 공간 계획

- Latent State
- Latent Dynamics
- Latent Rollout
- Latent Reward
- Latent Planner
- Goal-conditioned Planning

## 25.6 모델 편향

- One-step Error
- Multi-step Error
- Compounding Error
- Distribution Shift
- Planner Exploitation
- Model Uncertainty
- Conservative Planning

---

# 26. World Model

## 26.1 World Model 개론

- World Representation
- State Representation
- Environment Dynamics
- Observation Model
- Reward Model
- Action-conditioned Prediction
- Imagination
- Planning
- Control

## 26.2 World Model 구성요소

- Representation Model
- Dynamics Model
- Observation Decoder
- Reward Predictor
- Continuation Predictor
- Policy
- Value Model
- Planner

## 26.3 잠재 상태

- Latent Variable
- Latent State
- Deterministic State
- Stochastic State
- Belief State
- Compact Representation
- Sufficient Representation
- Predictive State

## 26.4 상태공간 모델

- State Space Model
- Hidden Markov Model
- Kalman Filter
- Nonlinear State Space Model
- Neural State Space Model
- Sequential Latent Model

## 26.5 Recurrent State-Space Model

- Recurrent Hidden State
- Stochastic Latent State
- Prior
- Posterior
- Observation Encoder
- Observation Decoder
- Reward Model
- Continuation Model

## 26.6 관측 모델

- Pixel Reconstruction
- Feature Reconstruction
- Distributional Reconstruction
- Multi-modal Observation
- Sensor Fusion
- Observation Likelihood

## 26.7 Dynamics Model

- Deterministic Dynamics
- Stochastic Dynamics
- Action Conditioning
- One-step Transition
- Multi-step Transition
- Long-horizon Prediction
- Uncertainty-aware Dynamics

## 26.8 World Model 학습 목적

- Reconstruction Learning
- Dynamics Consistency
- Latent Regularization
- Reward Prediction
- Continuation Prediction
- Multi-step Prediction
- Contrastive Prediction
- Predictive Representation

## 26.9 Imagination Rollout

- Latent Rollout
- Imagined Trajectory
- Predicted Reward
- Predicted Continuation
- Actor Update
- Critic Update
- Policy Optimization in Imagination

## 26.10 PlaNet 계열

- Latent Dynamics
- RSSM
- Model Predictive Control
- CEM Planning
- Pixel-based Control
- Online Planning

## 26.11 Dreamer 계열

- Dreamer
- DreamerV2
- DreamerV3
- Latent Imagination
- Actor-Critic
- World Model Learning
- General-purpose Configuration
- Multi-domain Control

## 26.12 생성형 World Model

- Pixel Prediction
- Video Prediction
- Autoregressive Video
- Diffusion-based Prediction
- Action-conditioned Video
- Stochastic Future
- Multi-modal Future

## 26.13 표현 예측형 World Model

- Joint Embedding
- Context Encoder
- Target Encoder
- Predictor
- Masked Prediction
- Semantic Future
- Non-generative Prediction
- JEPA

## 26.14 Image JEPA

- Context Block
- Target Block
- Spatial Masking
- Target Representation
- Predictor
- Representation Learning
- Collapse Prevention

## 26.15 Video JEPA

- Temporal Masking
- Video Representation
- Motion Representation
- Future Representation
- Spatiotemporal Prediction
- Video Understanding

## 26.16 Object-centric World Model

- Object Representation
- Slot Attention
- Entity-centric State
- Object Interaction
- Relation Modeling
- Compositional Dynamics
- Object Permanence

## 26.17 물리 세계 모델링

- Motion
- Collision
- Contact
- Gravity
- Deformation
- Occlusion
- Object Permanence
- Physical Interaction

## 26.18 행동 조건부 비디오 모델

- Action Token
- Control Signal
- Camera Motion
- Agent Motion
- Conditional Future
- Robot Action
- Trajectory Prediction

## 26.19 계획과 제어

- Goal-conditioned Planning
- Latent Planning
- Trajectory Optimization
- Model Predictive Control
- Policy Learning
- Hierarchical Planning
- Long-horizon Planning

## 26.20 World Model 불확실성

- Stochastic Transition
- Multi-modal Future
- Ensemble
- Calibration
- Model Uncertainty
- Risk-sensitive Planning
- Uncertainty-aware Control

## 26.21 World Model 실패 유형

- Compounding Error
- Model Bias
- Distribution Shift
- Mode Averaging
- Over-compression
- Missing Object Permanence
- Causal Confusion
- Reward Hacking
- Planner Exploitation
- Long-horizon Instability

## 26.22 World Model 평가

- One-step Prediction
- Multi-step Prediction
- Reconstruction Quality
- Latent Consistency
- Reward Prediction
- Planning Success
- Control Performance
- Generalization
- Robustness
- Calibration
- Counterfactual Prediction

## 26.23 World Model 주요 연구 흐름

- World Models
- PlaNet
- Dreamer
- DreamerV2
- DreamerV3
- MuZero
- JEPA
- Video JEPA
- Generative World Model
- Robotics World Model
- Autonomous Driving World Model

---

# 27. Embodied AI

## 27.1 Embodied AI 개론

- Embodiment
- Agent
- Sensor
- Actuator
- Perception
- Action
- Environment Interaction
- Closed-loop Control

## 27.2 인식과 상태 추정

- Visual Perception
- Depth Estimation
- Pose Estimation
- Object Detection
- Segmentation
- Tracking
- Mapping
- State Estimation

## 27.3 언어와 행동 연결

- Language Instruction
- Goal Representation
- Visual Grounding
- Language Grounding
- Action Grounding
- Instruction Following
- Task Decomposition

## 27.4 Vision-Language-Action Model

- Vision Encoder
- Language Encoder
- Action Decoder
- Unified Tokenization
- Action Token
- Trajectory Token
- Behavior Cloning
- Generalist Policy

## 27.5 로봇 학습

- Demonstration Learning
- Imitation Learning
- Offline RL
- Online RL
- Sim-to-Real
- Domain Randomization
- Robot Foundation Model
- Generalist Robot Policy

## 27.6 메모리와 장기 과제

- Episodic Memory
- Semantic Memory
- Working Memory
- Long-horizon Task
- Hierarchical Planning
- Subgoal
- Skill Library

## 27.7 안전과 제약

- Safety Constraint
- Collision Avoidance
- Human Oversight
- Fail-safe
- Uncertainty-aware Action
- Safe Exploration
- Policy Monitoring

---

# 28. Foundation Model, VLM, World Model 통합

## 28.1 공통 기반

- 대규모 사전학습
- 표현학습
- 자기지도학습
- 멀티모달 데이터
- 전이학습
- 적응
- 일반화

## 28.2 Foundation Model과 VLM

- Vision Foundation Model
- Language Foundation Model
- Multimodal Foundation Model
- Cross-modal Alignment
- Instruction Tuning
- Multimodal Reasoning

## 28.3 VLM과 World Model

- Visual State Representation
- Temporal Representation
- Action-conditioned Prediction
- Language-conditioned Planning
- Goal Grounding
- Scene Understanding
- Future Prediction

## 28.4 Foundation Model과 World Model

- General-purpose Representation
- Scalable Pretraining
- Multi-domain Dynamics
- Transferable World Model
- Foundation World Model
- Generalist Agent

## 28.5 통합 에이전트 구조

- Perception
- Multimodal Encoding
- State Estimation
- Memory
- World Model
- Planner
- Policy
- Tool Use
- Feedback
- Safety Layer

## 28.6 통합 연구 주제

- Multimodal Agent
- Video Foundation Model
- Robotics Foundation Model
- Vision-Language-Action Model
- Interactive World Model
- Generative Simulation
- Embodied Foundation Model
- Autonomous Agent
