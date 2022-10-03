import web3 from "./web3";
import VoteFactory from "./build/VoteFactory.json";

const instance = new web3.eth.Contract(
  VoteFactory.abi,
  "0x9f79313F1E5776Cd554195FC3D7ba46b3F84aF91"
);

console.log("instance", instance);

export default instance;
//첫 배포 시 배포된 컨트랙트를 어떻게든 하는애. 전체 배포 시 필요
