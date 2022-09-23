import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x49e273fF6Cc7D0e40d028361F7604f8FA3a24Fb4"
);

export default instance;
