import { useState, useEffect } from "react";
import apiInstance from "../../api/Index";
import "./MyPageDonationItem.scss";
import web3 from "../../smart-contract/vote-contract/web3";
import Campaign from "../../smart-contract/donate-contract/campaign";

function MyPageDonationItem(props) {
  const api = apiInstance();
  const [error, setError] = useState("");
  const [myDonationIdx, setMyDonationIdx] = useState(0);
  const [myDonationTitle, setMyDonationTitle] = useState("");
  const [requested, setRequested] = useState(false);

  async function onApprove() {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      const campaign = Campaign(myDonationIdx);

      const result = await campaign.methods.approveRequest(0).send({
        from: accounts[0],
      });
      console.log("result", result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  useEffect(() => {
    const userIdx = localStorage.getItem("idx");
    api
      .get(`api/donation/${props.idx}`)
      .then((res) => {
        setMyDonationIdx(res.data.data.donationAccount);
        setMyDonationTitle(res.data.data.donationName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    async function getRequests(id) {
      try {
        const campaign = Campaign(id);
        const result = await campaign.methods.getRequestsCount().call();
        if (result >= 1) {
          setRequested(true);
        }
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
    }
    if (myDonationIdx) {
      getRequests(myDonationIdx);
    }
  }, [myDonationIdx]);

  return (
    <>
      {console.log(requested)}
      <div className="item_date">{props.date}</div>
      <div className="item_title">{myDonationTitle}</div>
      <div className="block">
        <div className="item_eth">{props.eth} eth</div>
        <div className="item_donation">참여 기부</div>
      </div>
      {requested ? (
        <button type="button" onClick={onApprove}>
          허가해주기
        </button>
      ) : null}

      <hr className="dashedhr" />
    </>
  );
}

export default MyPageDonationItem;
