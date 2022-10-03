import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  getETHPrice,
  getETHPriceInUSD,
} from "../smart-contract/donate-contract/lib/getETHPrice";
import web3 from "../smart-contract/donate-contract/web3";
import NavigationBar from "../components/NavigationBar";
import "./AdminForm.scss";
import FactoryList from "../components/FoundationAdmin/FactoryList";
import factory from "../smart-contract/donate-contract/factory";
import Campaign from "../smart-contract/donate-contract/campaign";

function Detail() {
  const [infos, setInfos] = useState([]);
  const [error, setError] = useState("");
  const [targetInUSD, setTargetInUSD] = useState();
  const [minContriInUSD, setMinContriInUSD] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amountInUSD, setAmountInUSD] = useState();
  const id = useParams();
  const campaignItem = Campaign(id);
  campaignItem.options.address = campaignItem.options.campaignid;

  const { handleSubmit, register, formState, reset, getValues } = useForm({
    mode: "onChange",
  });

  async function onSubmit(data) {
    console.log("hello ", web3.utils.toWei(data.donation, "ether"));
    try {
      const accounts = await web3.eth.getAccounts();
      const result = await campaignItem.methods.contribute().send({
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
  async function campaignInfo() {
    const summary = await campaignItem.methods.getSummary().call();
    console.log("---", summary);
    setInfos(summary);
  }
  useEffect(() => {
    campaignInfo();
  }, []);

  return (
    <>
      <NavigationBar />

      <div>
        <h1>helasdfjslkd</h1>
        <h3>기부 금액{infos[1]}</h3>
        <h3>d\{infos[5]}</h3>
      </div>

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
