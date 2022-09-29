import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xC93e4F5BAF013d8820029EEfa52163b89E287297"
);

console.log("instance", instance);

export default instance;
