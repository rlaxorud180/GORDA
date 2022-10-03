import MyPageDonationRequestList from "../components/Mypage/MyPageDonationRequestList";
import NavigationBar from "../components/NavigationBar";
import "./MyPageDonation.scss";

function MyPageDonationRequest() {
  return (
    <>
      <NavigationBar />
      <div className="list_container">
        <div className="list_header">
          <div className="list_header_tag">첫 기부자</div>
          <div className="list_header_name">이몽룡</div>
          <MyPageDonationRequestList />
        </div>
      </div>
    </>
  );
}

export default MyPageDonationRequest;
