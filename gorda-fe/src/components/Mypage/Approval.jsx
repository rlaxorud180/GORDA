import { Link } from "react-router-dom";
import "./Approval.scss";

function Approval() {
  const total_eth = 1000;
  return (
    <>
      <div className="donation_detail">
        <div className="detail_title">기부내역</div>
        <div className="total_container">
          <div>
            <div className="total_donation">총 기부금</div>
            <div className="total_eth">{total_eth}eth</div>
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
        <Link to="/mypage/donation" className="donation_list">
          기부내역
        </Link>
      </div>
    </>
  );
}
export default Approval;
