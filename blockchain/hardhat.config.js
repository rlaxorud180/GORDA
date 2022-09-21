/** @type import('hardhat/config').HardhatUserConfig */
// url : all that node에서 링크 가져온 후, api 키를 넣어준다.

// accounts : 내 메타마스크 지갑에서 비공개 키 값 넣기. env 파일로 변환해서 넣기!
require("@nomiclabs/hardhat-waffle");

// 환불 부분, 배포자 계좌와 컨트랙트 계좌 필요. abi 값은 artifacts/contracts/Fundrasing.json에서 가져오기
// ABI란, 서버와 작업하기 위함. BinaryContract와 작업하기 위함
// ABI는 단순히 컨트랙에 대한 JSON 설명
task("check", "Check contract amounts", async () => {
  const [deployer] = await ethers.getSigners();
  const contract = "0x03338B463598613d79Dde706F6b1A37ef9E28896"; // 배포된 컨트랙 주소
  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_targetAmount",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "donations",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "finishTime",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "raisedAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "refund",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "targetAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "withdrawDonations",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ];
  // 컨트랙트 주소, ABI, 상호작용하는 계좌를 보내기. 컨트랙에 있는 메소드 호출 가능해짐
  const fundraising = new ethers.Contract(contract, abi, deployer);
  console.log(
    "하이",
    await fundraising.targetAmount(),
    await fundraising.raisedAmount()
  );
});

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://ethereum-ropsten-rpc.allthatnode.com/jWzCsFo1hwRnxPI2KxHuI9WEDDG62Fz1",
      accounts: [
        "53a93863859ff0588829690d151ee4d5022a8dd4942e1f50568c7d9452ecc96f",
      ],
    },
  },
};
