import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x999Ae37e10F4a63d5Cec1789ef6103b4A4d0e55e"
);

export default instance;
