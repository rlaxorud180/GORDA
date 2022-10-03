import web3 from "./web3";
import Vote from "./build/Vote.json";

export default (address) => {
  return new web3.eth.Contract(Vote.abi, address);
};
//전체 배포 시 필요