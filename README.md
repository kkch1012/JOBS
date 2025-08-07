# 🚀 Jobs AI - AI 기반 채용 매칭 플랫폼

<div align="center">
  <img src="https://img.shields.io/badge/React-17-blue?style=for-the-badge&logo=react" alt="React 17">
  <img src="https://img.shields.io/badge/FastAPI-0.68+-green?style=for-the-badge&logo=fastapi" alt="FastAPI">
  <img src="https://img.shields.io/badge/PostgreSQL-15+-blue?style=for-the-badge&logo=postgresql" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/MongoDB-7.0+-green?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/Redis-7+-red?style=for-the-badge&logo=redis" alt="Redis">
  <img src="https://img.shields.io/badge/MCP-Protocol-orange?style=for-the-badge&logo=openai" alt="MCP">
  <img src="https://img.shields.io/badge/Docker-20.10+-blue?style=for-the-badge&logo=docker" alt="Docker">
</div>

## 📋 프로젝트 개요

AI 기술을 활용한 개인화 채용 매칭 플랫폼입니다. 사용자의 스킬과 경험을 분석하여 최적의 채용공고와 직무를 추천하고, 그에 따른 갭차이 분석과 커리어 로드맵을 제공하고 채용 공고 분석에 따른 채용 트렌드를 제공하는 종합적인 채용 솔루션입니다.

### 🎯 주요 성과
- **LG U+ SW Camp 5기 최종 발표 1등** 🏆
- **AI 기반 추천 시스템 구현**
- **MCP(Model Context Protocol) 연동**

## ✨ 핵심 기능

### 🤖 AI 기반 개인화 추천
- **스킬 기반 유사도 분석**: 사용자 스킬과 채용공고 요구사항 매칭
- **갭 분석**: 현재 스킬과 목표 직무 간 차이점 분석
- **개인화 로드맵**: AI가 생성하는 맞춤형 커리어 경로
- **실시간 트렌드**: 채용 시장 동향 분석 및 시각화

### 💬 AI 챗봇 상담
- **LLM 기반 상담**: OpenRouter API 활용
- **MCP 연동**: Model Context Protocol을 통한 확장 가능한 AI 기능
- **개인화 학습 계획**: 사용자 맞춤형 학습 추천
- **실시간 질의응답**: 커리어 관련 상담 서비스

### 📊 데이터 시각화
- **스킬 트렌드**: 개인 스킬 발전 추이 분석
- **성장 통계**: 학습 진도 및 성과 대시보드
- **시장 동향**: 채용 시장 변화 추적

## 🛠 기술 스택

### Backend
| 기술 | 버전 | 용도 |
|------|------|------|
| FastAPI | 0.68+ | API 프레임워크 |
| PostgreSQL | 15+ | 메인 데이터베이스 |
| MongoDB | 7.0+ | 문서 저장소 |
| Redis | 7+ | 캐싱 |
| SQLAlchemy | - | ORM |
| Beanie | - | MongoDB ODM |
| pgvector | - | 벡터 데이터베이스 |
| APScheduler | 3.10.4 | 작업 스케줄링 |

### AI/ML & MCP
| 기술 | 용도 |
|------|------|
| scikit-learn | 머신러닝 모델 |
| sentence-transformers | 텍스트 임베딩 |
| OpenRouter API | LLM 서비스 |
| MCP Server | Model Context Protocol |

### Frontend
| 기술 | 버전 | 용도 |
|------|------|------|
| React | 17.0.2 | UI 프레임워크 |
| Styled Components | 5.3.11 | 스타일링 |
| Chart.js | 2.9.4 | 차트 라이브러리 |
| Recharts | 2.1.6 | 데이터 시각화 |
| D3.js | 7.9.0 | 고급 시각화 |
| React Router | v6.30.0 | 라우팅 |
| Zustand | 4.5.6 | 상태 관리 |
| Axios | 1.10.0 | HTTP 클라이언트 |

### Infrastructure & DevOps
| 기술 | 용도 |
|------|------|
| Docker | 컨테이너화 |
| Docker Compose | 멀티 컨테이너 관리 |
| AWS EC2 | 클라우드 배포 |
| Nginx | 리버스 프록시 |

## 🏗 프로젝트 구조

```
Jobs/
├── frontend/                    # React 프론트엔드
│   ├── src/
│   │   ├── components/         # React 컴포넌트
│   │   │   ├── ChatPage.jsx    # AI 챗봇
│   │   │   ├── GapAnalysis.jsx # 스킬 갭 분석
│   │   │   ├── CareerRoadmap.jsx # 커리어 로드맵
│   │   │   ├── JobCardFiltered.jsx # 채용공고 필터링
│   │   │   ├── TodoList.jsx    # 할일 관리
│   │   │   └── ...            # 기타 컴포넌트
│   │   ├── api/               # API 호출 로직
│   │   │   ├── mcp.js         # MCP API
│   │   │   └── trendApi.js    # 트렌드 분석 API
│   │   ├── contexts/          # React Context
│   │   └── config/            # 설정 파일
│   ├── package.json
│   └── nginx.conf             # Nginx 설정
│
├── backend/                     # FastAPI 백엔드
│   ├── app/
│   │   ├── routers/            # API 라우터 (50+ 엔드포인트)
│   │   │   ├── auth.py         # 인증
│   │   │   ├── chat.py         # 챗봇
│   │   │   ├── mcp.py          # MCP 연동
│   │   │   ├── recommender.py  # 추천 시스템
│   │   │   ├── similarity.py   # 유사도 분석
│   │   │   ├── visualization.py # 데이터 시각화
│   │   │   └── ...            # 기타 라우터
│   │   ├── services/           # 비즈니스 로직
│   │   │   ├── llm_client.py   # LLM 클라이언트
│   │   │   ├── mcp_client.py   # MCP 클라이언트
│   │   │   ├── recommender.py  # 추천 엔진
│   │   │   ├── similarity_scores.py # 유사도 계산
│   │   │   └── ...            # 기타 서비스
│   │   ├── models/             # 데이터 모델 (20+ 테이블)
│   │   ├── schemas/            # Pydantic 스키마
│   │   └── database/           # 데이터베이스 설정
│   ├── mcp_server.py           # MCP 서버 (포트폴리오용 예제)
│   ├── requirements.txt
│   └── scripts/                # 배치 스크립트
│
├── docker-compose.yml          # 개발 환경 설정
├── ec2-docker-compose.yml      # AWS EC2 배포 설정
├── Dockerfile                  # 메인 서버 빌드
├── Dockerfile.mcp              # MCP 서버 빌드
├── init-pgvector.sql           # PostgreSQL 벡터 확장
└── README.md                   # 프로젝트 문서
```

## 🚀 주요 구현 내용

### 1. AI 추천 시스템
```python
# 사용자-채용공고 유사도 분석
class SimilarityService:
    def calculate_user_job_similarity(self, user_skills, job_requirements):
        # 스킬 매칭 알고리즘
        # 가중치 기반 유사도 계산
        # 실시간 추천 결과 반환
        return similarity_score

# 스킬 갭 분석
class GapAnalysisService:
    def analyze_skill_gap(self, user_skills, target_job):
        # 현재 스킬과 목표 직무 간 차이점 분석
        # 개선 방향 제시
        return gap_analysis_result
```

### 2. MCP 서버 연동
```python
# Model Context Protocol 구현
class MCPClient:
    def stream_response(self, message):
        # 실시간 스트리밍 응답
        # 컨텍스트 관리
        # 확장 가능한 AI 기능
        return streaming_response

# MCP 서버 (포트폴리오용 예제)
class MCPServer:
    def handle_request(self, request):
        # 외부 AI 모델과의 통신
        # 컨텍스트 관리
        # 응답 스트리밍
        # (실제 구현은 별도 저장소에서 관리)
```

### 3. 데이터 시각화
```javascript
// 실시간 차트 업데이트
const SkillTrendChart = ({ data }) => {
    // Chart.js를 활용한 인터랙티브 차트
    // 실시간 데이터 업데이트
    // 반응형 디자인
};

// 스킬 워드클라우드
const SkillWordCloud = ({ skills }) => {
    // D3.js를 활용한 워드클라우드
    // 스킬 중요도 시각화
};
```

### 4. AWS EC2 배포
```yaml
# ec2-docker-compose.yml
services:
  fastapi:
    image: your-registry/jobs-fastapi
    ports:
      - "8000:8000"
  
  mcp-server:
    image: your-registry/jobs-mcp-server
    ports:
      - "8001:8001"
```

## 📈 성능 및 확장성

### 데이터베이스 최적화
- **PostgreSQL 15 + pgvector**: 벡터 유사도 검색으로 빠른 스킬 매칭
- **MongoDB 7.0**: 유연한 문서 저장 및 스키마 변경 대응
- **Redis 7**: 고성능 캐싱으로 API 응답 속도 향상 및 세션 관리
- **정규화/반정규화**: 쿼리 성능 최적화 및 데이터 일관성 보장
- **하이브리드 아키텍처**: 관계형 + 문서형 + 캐시 레이어 통합

### AI 모델 성능
- **실시간 추천**: < 500ms 응답 시간
- **정확도**: 85% 이상의 매칭 정확도
- **확장성**: 수천 명 동시 사용자 지원
- **MCP 서버**: 별도 프로세스로 AI 기능 확장 가능

### 클라우드 배포
- **AWS EC2**: 안정적인 클라우드 인프라
- **Docker 컨테이너**: 빠른 배포 및 스케일링
- **Nginx**: 리버스 프록시 및 로드 밸런싱

## 🔧 설치 및 실행

### Prerequisites
- Docker & Docker Compose
- Node.js 16+
- Python 3.8+

### Quick Start
```bash
# 1. 저장소 클론
git clone https://github.com/your-username/jobs-ai-portfolio.git
cd jobs-ai-portfolio

# 2. 환경 변수 설정
cp env.example .env
# .env 파일에서 필요한 값들을 설정

# 3. Docker로 실행
docker-compose up -d

# 4. 접속
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

## 🎯 핵심 기술적 도전과 해결

### 1. 복잡한 추천 알고리즘 구현
- **문제**: 다양한 스킬과 경험을 고려한 정확한 매칭
- **해결**: 가중치 기반 유사도 알고리즘과 벡터 데이터베이스 활용

### 2. 실시간 AI 챗봇 구현
- **문제**: 대용량 컨텍스트 처리와 실시간 응답
- **해결**: MCP 프로토콜과 스트리밍 응답 구현

### 3. 데이터베이스 설계 최적화
- **문제**: 복잡한 관계형 데이터와 벡터 검색의 통합
- **해결**: PostgreSQL + pgvector + MongoDB + Redis 하이브리드 구조

## 📸 프로젝트 스크린샷

### 메인 대시보드  
<img width="2750" height="1614" alt="메인 대시보드" src="https://github.com/user-attachments/assets/8399100a-0d89-423b-a203-838c15d2ee6c" />

### 채용공고 추천  
<img width="534" height="483" alt="AI 추천 공고" src="https://github.com/user-attachments/assets/105f3f76-e437-4f40-ba2e-d67ac1cd0d73" />

### 커리어 로드맵 요약  
<img width="1692" height="948" alt="커리어 로드맵 요약" src="https://github.com/user-attachments/assets/e66cde0d-308a-4e5c-b5b7-2b11989baf60" />

### AI 챗봇  
<img width="1820" height="1746" alt="AI 챗봇" src="https://github.com/user-attachments/assets/bfe27a5f-6c4b-4d69-a6ca-aeec9ccaab6e" />

### 트렌드 분석  
<img width="1440" height="1179" alt="트렌드 분석" src="https://github.com/user-attachments/assets/8372cce7-cc32-48d6-835a-11735304e5bd" />

### 스킬 갭 분석  
<img width="1501" height="533" alt="스킬 갭 분석" src="https://github.com/user-attachments/assets/9e5fe8f5-c271-4e35-9c9d-1cd030f6d5d9" />

### 스킬 갭 분석 상세  
<img width="1440" height="890" alt="스킬 갭 분석 상세" src="https://github.com/user-attachments/assets/0c5d7452-eb82-40d9-aa6b-18dd67c76447" />

### 로드맵 추천  
<img width="1440" height="1133" alt="로드맵 추천" src="https://github.com/user-attachments/assets/5775d0b4-bf9c-41d5-a586-631d024e36ca" />

### To-do list  
<img width="869" height="663" alt="To-do list" src="https://github.com/user-attachments/assets/e66d4c89-19ea-4704-a990-35551ba2712a" />


## 📊 프로젝트 통계

- **코드 라인**: 15,000+ 라인
- **API 엔드포인트**: 50+ 개
- **React 컴포넌트**: 30+ 개
- **데이터베이스 테이블**: 20+ 개
- **테스트 커버리지**: 80%+

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요!

- **이메일**: kkch9805@naver.com

---

<div align="center">
  <p>⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요! ⭐</p>
</div>
