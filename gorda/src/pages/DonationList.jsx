import { useState } from "react";
import DonationListCard from "../components/DonationListCard";
import DonatorRanking from "../components/DonatorRanking";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ShopBanner from "../components/ShopBanner";
import UnicefBanner from "../components/UnicefBanner";
import "./DonationList.scss";

function DonationList() {
    const [count, setCount] = useState("47,398,495");
    return (
        <>
            <NavigationBar />
            <div className="donationlist_container">
                <div className="page_header">
                    <div className="header_p">
                        <div>당신의 착한 마음을</div>
                        <div>
                            Gorda가 응원합니다{" "}
                            <span>
                                <i className="bx bxs-heart"></i>
                            </span>
                        </div>
                    </div>
                    <div className="donationCount">
                        <i className="bx bxs-heart-circle"></i>
                        <div className="countbox">기부 {count}건</div>
                    </div>
                </div>
                <div className="test">
                    <div className="page_card">
                        <DonationListCard />
                        <DonationListCard />
                        <DonationListCard />
                        <DonationListCard />
                        <DonationListCard />
                        <DonationListCard />
                        <DonationListCard />
                    </div>
                    <div className="banner_card">
                        <UnicefBanner />
                        <ShopBanner />
                        <DonatorRanking />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DonationList;
