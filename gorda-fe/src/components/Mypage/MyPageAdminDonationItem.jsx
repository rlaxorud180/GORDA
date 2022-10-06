import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import web3 from "../../smart-contract/vote-contract/web3";
import Campaign from "../../smart-contract/donate-contract/campaign";
import "./MyPageAdminDonationItem.scss";

function MyPageAdminDonationItem(props) {
  const [expired, setExpired] = useState(false);
  const [error, setError] = useState("");
  const [requested, setRequested] = useState(false);
  const navigate = useNavigate();

  async function onSubmitRequest() {
    const campaign = Campaign(props.account);

    try {
      const accounts = await web3.eth.getAccounts();

      const result = await campaign.methods
        .createRequest("안녕하세요. 출금 요청합니다.")
        .send({
          from: accounts[0],
        });
      console.log("완료", result);
      alert("성공적으로 요청했습니다.");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  async function onFinalize() {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      const campaign = Campaign(props.account);

      const result = await campaign.methods.finalizeRequest(0).send({
        from: accounts[0],
      });
      console.log("result", result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }

    navigate("/dnlist");
  }

  useEffect(() => {
    const now = new Date();
    const deadline = new Date(props.end);
    if (deadline <= now) {
      if (props.eth >= props.target) {
        setExpired(true);
      }
    }

    async function getInfoSummary() {
      try {
        const accounts = await web3.eth.getAccounts();
        console.log("accounts", accounts);
        const campaign = Campaign(props.account);

        const result = await campaign.methods.getRequestsCount().call();
        if (result >= 1) {
          setRequested(true);
        }
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
    }
    getInfoSummary();
  }, []);

  return (
    <>
      <div className="item_date">{props.date}</div>
      <div className="item_title">{props.title}</div>
      <div className="block">
        <div className="item_eth">
          {props.eth} / {props.target} eth
        </div>
        <div className="item_donation">
          &nbsp; {((props.eth / props.target) * 100).toFixed(1)}%&nbsp;참여
        </div>
      </div>

      {expired && !requested ? (
        <div>
          <button onClick={onSubmitRequest} type="submit">
            출금 요청
          </button>
          <button type="button" onClick={onFinalize}>
            파이널라이즈
          </button>
        </div>
      ) : null}
      {requested ? (
        <div>
          <button type="button" onClick={onFinalize}>
            파이널라이즈
          </button>
        </div>
      ) : null}
      <hr className="dashedhr" />
    </>
  );
}

export default MyPageAdminDonationItem;
