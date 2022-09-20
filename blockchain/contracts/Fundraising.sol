pragma solidity ^0.8.0; // 스마트 컨트랙트 버전 명시

// Fundraising 함수 생성
contract Fundraising {
    uint256 public targetAmount;
    address public owner; // 돈을 받을 사람의 주소

    /**
    * mapping은 해쉬 테이블
    * key : 기부한 사람의 주소
    * value: 기부한 금액
    **/ 
    mapping(address => uint256) public donations;
    
    uint256 public raisedAmount = 0;

    // block은 사전에 정의되지 않은 객체. 컨트랙 배포 시 EVM에 의해 정의됨.
    uint256 public finishTime = block.timestamp + 2 weeks;

    /**
    * 프로젝트 소유자가 모금하고자 하는 금액을 명시할 수 있도록 한다.
    * When? 컨트랙이 배포될 때!
    **/
    constructor(uint256 _targetAmount) {
        targetAmount = _targetAmount;

        // 계약 소유자 설정. msg개체는 block과 유사하게 EVM안에서 코드 실행 시 정의됨
        // Fundraising 컨트랙을 작성하는 행위자의 주소
        owner = msg.sender;
    }


    /**
    * 외부에서 참조하는 함수라는 external
    * payable은 돈을 받을 수 있음을 나타냄
    **/
    receive() external payable {
        require(block.timestamp < finishTime, "This campaign is over");
        donations[msg.sender] += msg.value;
        raisedAmount += msg.value;
    }

    /**
    * 함수를 호출한 사람과 컨트랙 생성한 사람이 같은지 체크
    **/
    function withdrawDonations() external {
        require(msg.sender == owner, "Funds will only be released to the owner");
        require(raisedAmount >= targetAmount, "The project did not reach the goal");
        require(block.timestamp > finishTime, "The campaign is not over yet.");
        payable(owner).transfer(raisedAmount); // transfer은 raisedAmount 변수 값을 전송함
    }

    /**
    * 환불 조건에 대한 함수
    **/
    function refund() external {
        require(block.timestamp > finishTime, "The campaign is not over yet.");
        require(raisedAmount <targetAmount, "The campaign reached the goal.");
        require(donations[msg.sender] > 0, "You did not donate to this campaign.");
        uint256 toRefund = donations[msg.sender]; // 환불할 금액 저장
        donations[msg.sender] = 0; // 기부금 0원으로 만들기
        payable(msg.sender).transfer(toRefund);
    }
}