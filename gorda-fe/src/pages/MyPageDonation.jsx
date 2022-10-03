import MyPageDonationList from "../components/Mypage/MyPageDonationList";
import NavigationBar from "../components/NavigationBar";
import "./MyPageDonation.scss";

function MyPageDonation() {
  return (
    <>
      <NavigationBar />
      <div className="list_container">
        <div className="list_header">
          <div className="list_header_tag">첫 기부자</div>
          <div className="list_header_name">이몽룡</div>
          <MyPageDonationList />
        </div>
      </div>
    </>
  );
}

export default MyPageDonation;
