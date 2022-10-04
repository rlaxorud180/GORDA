import web3 from "./web3";
import VoteFactory from "./build/VoteFactory.json";

const instance = new web3.eth.Contract(
  VoteFactory.abi,
  "0x064aE8E8e2E60769b0e1557Bb24A026379fb285A"
);

console.log("instance", instance);

export default instance;
//첫 배포 시 배포된 컨트랙트를 어떻게든 하는애. 전체 배포 시 필요
