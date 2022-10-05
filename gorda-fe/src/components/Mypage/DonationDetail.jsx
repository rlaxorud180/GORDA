import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DonationDetail.scss";
import { getUserInfo } from "../../api/Users";

function DonationDetail() {
  const [donateAmount, setDonateAmount] = useState("");
  const [donateCnt, setDonateCnt] = useState(0);

  const getNickName = async() => {
    await getUserInfo({userIdx: localStorage.getItem("userIdx")},
    (response) => {
        let donAmount = response.data.data.userAmount;
        donAmount = donAmount / 1000000000000000000;
        setDonateAmount(donAmount);
        setDonateCnt(response.data.data.userScore);
    },
    (err) => {
        console.log(err);
    })
  };

  useEffect(() => {
    getNickName();
  }, [])


  return (
    <>
      <div className="donation_detail">
        <div className="detail_title">기부내역</div>
        <div className="total_container">
          <div>
            <div className="total_donation">총 기부금</div>
            <div className="total_eth">{donateAmount} eth</div>
          </div>
          <div className="total_detail_container">
            <div className="total_detail">
              <div>기부횟수</div>
              <span>{donateCnt} 회</span>
            </div>
            <div className="total_detail">
              <div>댓글 수</div>
              <span>0회</span>
            </div>
            <div className="total_detail">
              <div>투표횟수</div>
              <span>0eth</span>
            </div>
          </div>
        </div>
        <Link to="/mypage/donation" className="donation_list">
          기부내역
        </Link>
      </div>
    </>
  );
}
export default DonationDetail;
