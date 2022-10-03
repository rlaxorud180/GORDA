import { useState } from "react";
import axios from "axios";
import DonationListCard from "../components/Donation/DonationListCard";
import DonatorRanking from "../components/Donation/DonatorRanking";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ShopBanner from "../components/Donation/ShopBanner";
import UnicefBanner from "../components/Donation/UnicefBanner";
import "./DonationList.scss";
import { Link } from "react-router-dom";
import factory from "../smart-contract/donate-contract/factory";
import Campaign from "../smart-contract/donate-contract/campaign";
import { useEffect } from "react";

function ApiTest() {
  const MYAPIKEY = "E7JIIPCEQ6GRF1TS8VM34Q3FZ671CHCYMM";
  const address = "0x0Acf429A6e827797B3DA25872CDedC458C614047";
  axios
    .get(
      `https:///api-ropsten.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${MYAPIKEY}`
    )
    .then(console.dir)
    .catch(console.error);

  return <></>;
}

export default ApiTest;
