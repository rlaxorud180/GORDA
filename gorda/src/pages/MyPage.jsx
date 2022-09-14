import "./MyPage.scss";

import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import DonationDetail from "../components/DonationDetail";
import MypageComment from "../components/MypageComment";
import MypageStamp from "../components/MypageStamp";

function MyPage() {
    return (
        <>
            <NavigationBar />
            <div className="mypage_container">
                <div className="mypage_header">
                    <div className="header_tag">첫 기부자</div>
                    <div className="header_name">이몽룡</div>
                </div>
                <DonationDetail />
                <MypageComment />
                <MypageStamp />
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default MyPage;
