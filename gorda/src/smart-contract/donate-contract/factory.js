import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "npm "
);

console.log("instance", instance);

export default instance;
//첫 배포 시 배포된 컨트랙트를 어떻게든 하는애. 전체 배포 시 필요
