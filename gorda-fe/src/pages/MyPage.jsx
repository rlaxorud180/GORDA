import "./MyPage.scss";

// import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import DonationDetail from "../components/Mypage/DonationDetail";
import MypageComment from "../components/Mypage/MypageComment";
import MypageStamp from "../components/Mypage/MypageStamp";
import Approval from "../components/Mypage/Approval";
import { useEffect, useState } from "react";
import { getUserInfo } from "../api/Users";

function MyPage() {
    const [userName, setUserName] = useState("");
    const tag = "첫 기부자";

    const getNickName = async() => {
        await getUserInfo({userIdx: localStorage.getItem("userIdx")},
        (response) => {
            setUserName(response.data.data.userNickname);
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
            <NavigationBar />
            <div className="mypage_container">
                <div className="mypage_header">
                    <div className="header_tag">{tag}</div>
                    <div className="header_name">{userName}</div>
                </div>
                <DonationDetail />
                <MypageComment />
                <MypageStamp />
                {/* <Approval /> */}
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default MyPage;
