import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1eA02ca4967415b9b56496C5Da64c6E92C1C6DBB"
);

console.log("instance", instance);

export default instance;
