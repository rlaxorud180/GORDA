import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and meta mask is installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server *OR* meta mask is not running
  // creating our own provider
  const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/8e04c068e6e943dd8eee91c4cb7c2a8f"
  );

  web3 = new Web3(provider);
}

export default web3;
