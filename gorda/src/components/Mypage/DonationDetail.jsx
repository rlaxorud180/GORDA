import { useState } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import web3 from "../../smart-contract/donate-contract/web3";

import "./DonationDetail.scss";
import Campaign from "../../smart-contract/donate-contract/campaign";

function DonationDetail() {
  const campaign = Campaign("0xDE3Afec5017350210a7D1FBE280f8e355b79dD24");
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

  console.log("campaign", campaign);
  async function onSubmit(data) {
    console.log(data);

    //   function createRequest(string memory description, uint value, address recipient) public restricted {
    //     Request storage newRequest = requests.push();
    //     newRequest.description = description;
    //     newRequest.value = value;
    //     newRequest.recipient = recipient;
    //     newRequest.complete = false;
    //     newRequest.approvalCount = 0;
    // }

    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      data.date = new Date(data.date).getTime();

      const result = await campaign.methods
        .createRequest("안녕하세요. 돈 좀 주세요")
        .send({
          from: accounts[0],
        });
      console.log("result", result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  async function onApprove() {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);

      const result = await campaign.methods.approveRequest(0).send({
        from: accounts[0],
      });
      console.log("result", result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  async function onFinalize() {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);

      const result = await campaign.methods.finalizeRequest(0).send({
        from: accounts[0],
      });
      console.log("result", result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  return (
    <>
      <div className="donation_detail">
        <div className="detail_title">기부내역</div>
        <div className="total_container">
          <div>
            <div className="total_donation">총 기부금</div>
            <div className="total_eth">total_etheth</div>
          </div>
          <div className="total_detail_container">
            <div className="total_detail">
              <div>기부횟수</div>
              <span>0회</span>
            </div>
            <div className="total_detail">
              <div>직접기부</div>
              <span>0회</span>
            </div>
            <div className="total_detail">
              <div>참여기부</div>
              <span>0eth</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="titleinput"
            placeholder="이미지"
            {...register("imageUrl", { required: true })}
            isDisabled={isSubmitting}
            type="url"
          />
          <button type="submit">리퀘스트</button>
        </form>
        <button type="button" onClick={onApprove}>
          허가해주기
        </button>
        <button type="button" onClick={onFinalize}>
          파이널라이즈
        </button>
        <Link to="/mypage/donation" className="donation_list">
          기부내역
        </Link>
      </div>
    </>
  );
}
export default DonationDetail;
