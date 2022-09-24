import React, { useState } from "react";
// import { useAsync } from "react-use";
import { useForm } from "react-hook-form";
import { getETHPrice, getETHPriceInUSD } from "../lib/getETHPrice";

import factory from "../smart-contract/factory";
import web3 from "../smart-contract/web3";

function Creation() {
  //   const wallet = useWallet();
  const [error, setError] = useState("");
  const [targetInUSD, setTargetInUSD] = useState();
  const [minContriInUSD, setMinContriInUSD] = useState();

  const [ETHPrice, setETHPrice] = useState(0);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
  });

  async function onSubmit(data) {
    console.log(
      data.minimumContribution,
      data.campaignName,
      data.description,
      data.imageUrl,
      data.target
    );
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("----", accounts);
      await factory.methods
        .createCampaign(
          web3.utils.toWei(data.minimumContribution, "ether"),
          data.campaignName,
          data.description,
          data.imageUrl,
          web3.utils.toWei(data.target, "ether")
        )
        .send({
          from: accounts[0],
        });
      console.log("11111111111111111111111111111111111");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          step="any"
          {...register("minimumContribution", { required: true })}
          isDisabled={isSubmitting}
          onChange={(e) => {
            setMinContriInUSD(Math.abs(e.target.value));
          }}
        />
        <input
          {...register("campaignName", { required: true })}
          isDisabled={isSubmitting}
        />
        <textarea
          {...register("description", { required: true })}
          isDisabled={isSubmitting}
        />
        <input
          {...register("imageUrl", { required: true })}
          isDisabled={isSubmitting}
          type="url"
        />
        <input
          type="number"
          step="any"
          {...register("target", { required: true })}
          isDisabled={isSubmitting}
          onChange={(e) => {
            setTargetInUSD(Math.abs(e.target.value));
          }}
        />
        <button type="submit">create</button>
        {error ? <h1>wrong </h1> : null}
      </form>
    </div>
  );
}

export default Creation;
