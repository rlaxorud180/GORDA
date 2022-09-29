import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xaf48B44B254Adb56Fe785af9e52C379a4bD73Ab8"
);

console.log("instance", instance);

export default instance;
