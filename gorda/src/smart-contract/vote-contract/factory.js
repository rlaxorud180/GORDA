import web3 from "./web3";
import VoteFactory from "./build/VoteFactory.json";

const instance = new web3.eth.Contract(
  VoteFactory.abi,
  "0x42C08BFA423E324F088A1AC51Ea435770Db05846"
);

console.log("instance", instance);

export default instance;
//첫 배포 시 배포된 컨트랙트를 어떻게든 하는애. 전체 배포 시 필요