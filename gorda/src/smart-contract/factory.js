import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x2B8c666015fc450B582E868171a297a8c8330EBE"
);

console.log("instance", instance);

export default instance;
