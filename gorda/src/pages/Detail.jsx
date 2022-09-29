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
  const [error, setError] = useState("");
  const [targetInUSD, setTargetInUSD] = useState();
  const [minContriInUSD, setMinContriInUSD] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amountInUSD, setAmountInUSD] = useState();

  const { handleSubmit, register, formState, reset, getValues } = useForm({
    mode: "onChange",
  });

  async function onSubmit(data) {
    console.log(web3.utils.toWei(data.donation, "ether"));
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      const campaign = Campaign("0x653a365067eb7dd2Dd402a7AFBCf4f1dfDd7D4Dc");
      const result = await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(data.donation, "ether"),
      });
      console.log("result", result);
      setAmountInUSD(null);
      reset("", {
        keepValues: false,
      });
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  useEffect(() => {
    async function testlist() {
      if (campaigns[0] !== undefined) {
        for (let i = 0; i < campaigns.length; i++) {
          const tmp = await Campaign(campaigns[i]).methods.getSummary().call();
          console.log("tmp", tmp);
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
      console.log(tmp[0]);
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

      {infos.map((item, key) => {
        return (
          <div>
            <h3>기부 금액{item[0] + key}</h3>
            <h3>d\{item[5]}</h3>
          </div>
        );
      })}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="titleinput"
          placeholder="기부할 금액"
          type="number"
          step="any"
          {...register("donation", { required: true })}
          isDisabled={formState.isSubmitting}
          onChange={(e) => {
            setMinContriInUSD(Math.abs(e.target.value));
          }}
          min="0"
        />

        <button type="submit" className="createBtn">
          기부하기
        </button>
      </form>
    </>
  );
}

export default Detail;
