<div align="center">
<h1> 고르다(Gorda)에 오신걸 환영합니다.</h1>
</div>

## 목차

1. [**서비스 소개**](#1)
2. [**기술 스택**](#2)
3. [**협업 관리**](#6)
4. [**개발 멤버 소개**](#7)
5. [**프로젝트 기간**](#8)
6. [**프로젝트 관련 문서**](#9)
7. exec 포함 문서(덤프파일, ERD,  Sequence_diagram, 기능정의서, 배포_시스템구성도, 화면기능서)

<div id="1"> </div>

## 💡서비스 소개
### 고르다(Gorda) 는 기부의 투명성을 위한 블록체인 기부 프로젝트입니다.

1. 여러 기부 리스트에 따라 암호화폐를 기부할 수 있습니다.<br>
2. 기부한 내 화폐의 흐름을 블록체인의 트랜잭션 조회로 투명하게 볼 수 있습니다.<br>
3. 이달의 운영 기관을 선정해 보상을 부여함으로 기관의 투명한 운영에 동기부여를 할 수 있습니다.


<div id="2"></div>

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/Java-FF7800?style=for-the-badge&logo=Java&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<br>
<img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=NGINX&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Node.js-339939?style=for-the-badge&logo=Node.js&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br>
<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/GitLab-FCA121?style=for-the-badge&logo=GitLab&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br>
<img src="https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=Solidity&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br/>


<div id="3"> </div>




## 기획 배경

1. 최종 사용처 및 목적 파악 불가
    - 사용자는 재단 전체에 기부를 하는 것이지, 특정 목적이나 사용처를 직접 선택할 수 없어 수동적인 기부가 되고 있음. 가끔씩 주는 소식지나 결연아동 편지 외에는 내가 기부하는 금액이 어디로 가 어떻게 쓰이는지 알 수 없음
2. 주목 받는 일부에만 기부금이 쏠림
    - 많은 단체들이 기부금을 더 많이 끌어모으기 위해 자극적으로 일부(수재민)만 강조해서 일시적으로 반짝 기부금이 모임. 평소에 계속 후원이 필요한 곳에는 돈이 고르게 분배되지 못함. (가난 포르노)
3. 중간 커미션 추적 불가
    - 중간에서 얼마나 떼먹는지 알 수 없음. 한 자선단체 직원들이 비즈니스석 탑승 및 월급 이슈. 기부자가 보기에 불필요하거나 과한 지출을 감시할 필요가 있음.
4. 기부에 대한 동기 부여 부족
    - 단순히 동정심 유발로 기부에 대한 관심을 끌기에 역부족. 재미, 투명성, 접근 기회 증가를 통해 사용자들을 끌어모을 필요가 있음.
    

## 해결 방안

1. 최종 사용처를 직접 선택할 수 있도록 함
    - 블록체인으로 내가 기부한 금액이 어떻게 흘러가는지를 기록하도록 한다.(transaction 추적)
    - 블록체인 투표 기능을 통해서 다양한 선택지를 직접 고를 수 있도록 함(아동에게 옷을 선물할지, 필기구를 선물할지 등)
2. 중간 거래 내역 확인 및 거래 중단이 가능하도록 함
    - 블록체인으로 내가 기부한 금액이 어떻게 흘러가는지를 기록하도록 한다.
    - 만일 부당한 커미션이 반복된다고 판단할 경우 기부자가 회수할 수 있도록 함(smart contract → 방법 찾아봄 / 회수가 아닌 방법으로 대응 가능한지 고민)
3. 복권, 경품 등 재미 요소 제공
    - 기부할 때마다 코인을 발행하고, 해당 코인은 자동으로 Lottery 계좌에 쌓임. 정기적으로 해당 코인들을 랜덤으로 추첨하여 해당 사용자에게 돌려주거나, 해당 사용자가 원하는 곳에 기부할 수 있도록 함. 추첨하는 과정부터 당첨금을 주는 과정 모두가 블록체인으로 관리되기 때문에 로또와 같은 주작 논란에서 자유로움.
4. 사용자의 기부 현황, 기부 목표액 표시 등
    - 사용자가 기부를 할 때마다 성취감을 얻어 기부에 대한 동기부여를 얻기 위해 기부 정도에 따른 레벨, 티어 표시 등
    - 각 기부 목록별로 목표액이 설정되어 있으면 % 표시로 얼만큼의 목표액이 모였는지 표시해 내 기부액이 얼만큼의 도움이 되었는지 수치로 표현해줌
    

## 추가 사항

## 1.보완점

- 기부 사이트 이용을 위한 유인책
- 경품 및 복권에 대한 재정의 필요
- 코인 채굴시 해당 코인 지급
- 결제 시 현금 ↔ 코인 (실제로 결제 구현이 가능한가?)
- 누구한테 기부를 할것인가? (해결을 하지 못한다면 중간에 돈 빼먹는 것을 방지 한다는 가정하에 단체에 기부)
- 댓글기능?

## [FE]

<aside>
👉 FE - CODE CONVENTION

**JavaScript**

- 세미콜론 필수 사용

**CSS**

- id, class명은 component, page 약어 + 부분 + 기능
- (ex. 메인페이지 상위 배너의 클릭 버튼일 경우 → mp-upperbanner-btn)
- style 사용 금지

****



## [BE]

<aside>
👉 BE - CODE CONVENTION
**Java**

- 객체 시작은 대문자로
- 합성어는 camel 표기법 ex) UserController
- 아키텍쳐 구분
- 같은 기능을 하는 메소드는 이름 통일
- 가능하면 주석 작성

**DB**

- PK는 테이블명 + idx (varchar)
- 합성어는 snake 표기법  ex) user_controller </aside>





# 프로젝트 디자인

https://www.figma.com/file/hbTk2ngvOrDZza6Yd77ITF/Design?node-id=0%3A1





# 레퍼런스 사이트

- 메타마스크 서명

https://dev-joo.tistory.com/108

- web3 모달 지갑 연결

https://codesandbox.io/s/j43b10?file=/src/App.js

- React Metamask 로그인

- https://github.com/ishan-is-me/React-metamask-auth/blob/main/src/reportWebVitals.js

- https://medium.com/coinmonks/signing-messages-in-ethereum-5517040c2ff1

- 업비트 로그인

- https://upbitcs.zendesk.com/hc/ko/articles/6565207397785-메타마스크를-통해-서명-시-유의해야하는-사항이-있나요-

- 기부 코드 참고용

  - 미리내 깃 선배들거

    - https://github.com/wizard9582/Mirinae/blob/master/smart-contract/FundingContract.sol

  - BetterFund

    - https://github.com/harsh242/betterfund-crowdfunding-in-blockchain

  - 투표 참고

    - https://github.com/GeekyAnts/sample-e-voting-system-ethereum

    



# 폴더 구조 트리

[FE]─api
├─build
├─components
│  ├─Donation
│  ├─FoundationAdmin
│  ├─HomePage
│  ├─Institution
│  ├─Mypage
│  └─Vote
├─funcional
├─hooks
├─images
├─lib
├─pages
└─smart-contract
    ├─donate-contract
    │  ├─build
    │  ├─Contracts
    │  └─lib
    └─vote-contract
        ├─build
        └─Contracts



[BE]

─main
│  ├─java
│  │  └─com
│  │      └─ssafy
│  │          └─gorda
│  │              ├─config
│  │              ├─controller
│  │              ├─domain
│  │              ├─dto
│  │              │  └─controllerdto
│  │              │      ├─request
│  │              │      └─response
│  │              ├─exception
│  │              ├─repository
│  │              ├─service
│  │              └─util
│  └─resources
└─test
    └─java
        └─com
            └─ssafy
                └─gorda



