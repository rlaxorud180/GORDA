import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getETHPrice,
  getETHPriceInUSD,
} from "../smart-contract/donate-contract/lib/getETHPrice";
import factory from "../smart-contract/vote-contract/factory";
import web3 from "../smart-contract/vote-contract/web3";
import NavigationBar from "../components/NavigationBar";
import "./AdminForm.scss";
import FactoryList from "../components/FoundationAdmin/FactoryList";
import axios from "axios";

function VoteCreation() {
  const [voteData, setVotedata] = useState();
  const [voteday1, setvoteday1] = useState();
  const [voteday2, setvoteday2] = useState();
  const voteAccount = [];
  const voteName = [];
  const voteIdx = [];

  // const [voteName, setVoteName] = useState([]);
  // const [voteIdx, setVoteIdx] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    axios({
      headers: {},
      url: "http://localhost:8080/api/foundation",
      method: "GET",
    })
      .then((res) => {
        setVotedata(res.data.data);
        console.log("기관 리스트업", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
  });

  const handleOnClick = async (e) => {
    const time = (new Date(voteday2) - new Date(voteday1)) / 1000;
    console.log(time);
    e.preventDefault();
    for (let i = 0; i < voteData.length; i++) {
      voteAccount.push(voteData[i].foundationAccount);
      voteIdx.push(i);
      voteName.push(voteData[i].foundationName);
    }
    console.log([voteAccount, voteIdx, voteName]);

    try {
      const accounts = await web3.eth.getAccounts();
      const result = await factory.methods
        .createVote(voteAccount, voteName, voteIdx)
        .send({
          from: accounts[0],
        });
      console.log("result", result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <>
      <NavigationBar />

      <form>
        <input type="string" onChange={(e) => setvoteday1(e.target.value)} />
        <input type="string" onChange={(e) => setvoteday2(e.target.value)} />
        <input type="submit" onClick={handleOnClick} />
      </form>
      <p>1</p>
    </>
  );
}

export default VoteCreation;
