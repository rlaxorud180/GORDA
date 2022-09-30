pragma solidity ^0.8.0;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(address[] memory Destination, uint[] memory Amounts, uint minimum, address creator, string memory name, string memory category, uint date, string memory description, string memory image, uint target) public {
        address newCampaign = address(new Campaign(Destination, Amounts, minimum, msg.sender, name, category, date, description, image, target));
        deployedCampaigns.push(newCampaign);
    }
    
    function finishCampaign(address[] memory Destination, uint[] memory Amounts, uint minimum, address creator, string memory name, string memory category, uint date, string memory description, string memory image, uint target) public {
        address doneCampaign = address(new Campaign(Destination, Amounts, minimum, msg.sender, name, category, date, description, image, target));
        require(block.timestamp > date);
        
           for (uint i = 0; i < deployedCampaigns.length; i++){
            if (deployedCampaigns[i] == doneCampaign) {
                delete deployedCampaigns[i];
            }
        }
        deployedCampaigns.push(doneCampaign);
    }
    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}


contract Campaign {
  struct Request {
      string description;
      uint value;
      address recipient;
      bool complete;
      uint approvalCount;
      mapping(address => bool) approvals;
  }

  Request[] public requests;
  uint[] public amounts_;
  address[] public destination_;
  address public manager;
  uint public minimumContribution;
  string public CampaignName;
  uint public Deadline;
  string public CategoryName;
  string public CampaignDescription;
  string public imageUrl;
  uint public targetToAchieve;
  address[] public contributers;
  address payable[] public clients;
  address[] public amounts;
  mapping(address => bool) public approvers;
  uint public approversCount;


  modifier restricted() {
      require(msg.sender == manager);
      _;
  }

  constructor (address[] memory destination, uint256[] memory amounts, uint minimum, address creator, string memory name, string memory category, uint date, string memory description, string memory image, uint target) public {
      destination_ = destination;
      amounts = amounts;
      manager = creator;
      minimumContribution = minimum;
      CampaignName=name;
      CategoryName=category;
      Deadline=date;
      CampaignDescription=description;
      imageUrl=image;
      targetToAchieve=target;
  }

  function contribute() public payable {
      require(msg.value > minimumContribution );

      contributers.push(msg.sender);
      approvers[msg.sender] = true;
      approversCount++;
  }

  function createRequest(string memory description, uint value, address recipient) public restricted {
      Request storage newRequest = requests.push();
      newRequest.description = description;
      newRequest.value = value;
      newRequest.recipient = recipient;
      newRequest.complete = false;
      newRequest.approvalCount = 0;
  }

  function approveRequest(uint index) public {
      require(approvers[msg.sender]);
      require(!requests[index].approvals[msg.sender]);

      requests[index].approvals[msg.sender] = true;
      requests[index].approvalCount++;
  }

  function finalizeRequest(uint index) public restricted{
      require(requests[index].approvalCount > (approversCount / 2));
      require(!requests[index].complete);

      payable(requests[index].recipient).transfer(requests[index].value);
      requests[index].complete = true;

  }


    function getSummary() public view returns (uint, uint, uint, uint, address, string memory, uint, string memory, address[] memory,string memory, string memory, uint) {
        return(
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager,
            CampaignName,
            Deadline,
            CategoryName,
            contributers,
            CampaignDescription,
            imageUrl,
            targetToAchieve
          );
    }

    function getRequestsCount() public view returns (uint){
        return requests.length;
    }
}
