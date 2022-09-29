import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getETHPrice,
  getETHPriceInUSD,
} from "../smart-contract/lib/getETHPrice";
import web3 from "../smart-contract/web3";
import NavigationBar from "../components/NavigationBar";
import "./AdminForm.scss";
import FactoryList from "../components/FoundationAdmin/FactoryList";
import factory from "../smart-contract/factory";
import Campaign from "../smart-contract/campaign";

function Detail() {
  const [campaigns, setCampaigns] = useState([]);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function testlist() {
      if (campaigns[0] !== undefined) {
        for (let i = 0; i < campaigns.length; i++) {
          const tmp = await Campaign(campaigns[i]).methods.getSummary().call();
          if (!infos.includes(tmp)) {
            setInfos((infos) => [...infos, tmp]);
          }
        }
      }
    }

    testlist();
  }, [campaigns]);

  useEffect(() => {
    async function dnlist() {
      const tmp = await factory.methods.getDeployedCampaigns().call();
      setCampaigns(tmp);
    }
    dnlist();
  }, []);
  //   const wallet = useWallet();

  // const handlePrevent = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  // };

  return (
    <>
      <NavigationBar />

      {infos.map((item) => {
        return <h3>기부 금액{item[0]}</h3>;
      })}
    </>
  );
}

export default Detail;
