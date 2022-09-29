import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x653a365067eb7dd2Dd402a7AFBCf4f1dfDd7D4Dc"
);

console.log("instance", instance);

export default instance;
