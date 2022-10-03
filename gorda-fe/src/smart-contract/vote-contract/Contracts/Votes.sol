pragma solidity >=0.7.0 <0.9.0;


contract VoteFactory {
    address[] public deployedVotes;

    function createVote(address[] memory _account, string[] memory _name, uint256 [] memory _idx, uint256 _date) public {
        address newVote = address(new Vote(_account, _name, _idx, _date));
        deployedVotes.push(newVote);
    }

    function getDeployedVotes() public view returns (address[] memory) {
        return deployedVotes;
    }
}




contract Vote {
    
    struct Candidate {
        address Candidate_account;
        string Candidate_name;
        uint256 Candidate_idx;
        uint256 Candidate_voteCnt;
    }
   
    Candidate[] public candidates;

    mapping(address => Candidate) candidate;
    mapping(address => bool) voter;

    address owner;
    uint256 private voteEndDate;

    constructor(address[] memory _account, string[] memory _name, uint256 [] memory _idx, uint256 _date) {
        
        voteEndDate = block.timestamp + _date;
        for(uint256 i = 0; i<_account.length; i++){
            candidates.push(
                Candidate(
                    _account[i], 
                    _name[i], 
                    _idx[i],
                    0
                )
            );
        }
        owner = msg.sender;
    }

    function show() public
        view
        returns(address[] memory, string[] memory,uint256[] memory, uint256[] memory){
        
        uint n = candidates.length;
        address[] memory ad = new address[](n);
        string[]  memory name = new string[](n);
        uint256[] memory idx = new uint256[](n);
        uint256[] memory vote = new uint256[](n);
        for (uint i = 0; i < n; i++) {
            ad[i] = candidates[i].Candidate_account;
            name[i] = candidates[i].Candidate_name;
            idx[i] = candidates[i].Candidate_idx;
            vote[i] = candidates[i].Candidate_voteCnt;
        }
        return (ad, name, idx, vote);
    }

    function vote(address candidateAddress) public {
        require(!voter[msg.sender], "Already vote");
        
        for(uint256 i = 0; i<candidates.length; i++){
            if(candidates[i].Candidate_account == candidateAddress){
                candidates[i].Candidate_voteCnt++;
                voter[msg.sender] = true;
                break;
            }
        }
    }

    function isVote() public view returns(bool) {
        //투표를 했으면(투표했냐 값이 트루면) 트루 리턴
        if(voter[msg.sender]) return true;
        else return false;
    }


    
}