import "./MyPage.scss";

// import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import DonationDetail from "../components/Mypage/DonationDetail";
import MypageComment from "../components/Mypage/MypageComment";
import MypageStamp from "../components/Mypage/MypageStamp";
import Approval from "../components/Mypage/Approval";

function MyPage() {
  const tag = "첫 기부자";
  const name = "이몽룡";
  return (
    <>
      <NavigationBar />
      <div className="mypage_container">
        <div className="mypage_header">
          <div className="header_tag">{tag}</div>
          <div className="header_name">{name}</div>
        </div>
        <DonationDetail />
        <MypageComment />
        <MypageStamp />
        <Approval />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default MyPage;
