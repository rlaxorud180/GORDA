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

  const handleOnClick = async () => {
    console.log("나는 빡빡이다.");
    for (let i = 0; i < voteData.length; i++) {
      voteAccount.push(voteData[i].foundationAccount);
      voteIdx.push(i);
      voteName.push(voteData[i].foundationName);
    }
    console.log(voteAccount, voteIdx, voteName);

    try {
      const accounts = await web3.eth.getAccounts();
      const result = await factory.methods.createVote(voteAccount, voteName, voteIdx).send({
        from: accounts[0],
      });
      console.log('result', result);
      
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <>
      <NavigationBar />
      {console.log("하이하이")}
      <button onClick={handleOnClick}>하이하이</button>
      <p>1</p>
    </>
  );
}

export default VoteCreation;
