import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
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
  const id = useParams();

  // const tmp = await helle.methods.getSummary().call();
  // console.log(helle, "====================", tmp);
  const { handleSubmit, register, formState, reset, getValues } = useForm({
    mode: "onChange",
  });

  async function onSubmit(data) {
    console.log("hello ", web3.utils.toWei(data.donation, "ether"));
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts===", accounts[0]);
      const campaign = Campaign(id);
      console.log("campaign", campaign);
      console.log("크기", data.donation);
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(data.donation, "ether"),
      });
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
    const helle = Campaign(id);
    console.log("id", id, helle);
    async function test() {
      const testvalue = await helle.methods.getSummary().call();
      console.log("testvalue", testvalue);
    }
    test();
    console.log("---", helle, id);
  }, []);

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
