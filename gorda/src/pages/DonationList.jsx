import { useState } from "react";
import DonationListCard from "../components/Donation/DonationListCard";
import DonatorRanking from "../components/Donation/DonatorRanking";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ShopBanner from "../components/Donation/ShopBanner";
import UnicefBanner from "../components/Donation/UnicefBanner";
import "./DonationList.scss";
import { Link } from "react-router-dom";

function DonationList() {
    const [count, setCount] = useState(47398495);
    const pointCount = count.toLocaleString("ko-KR");

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
                        <div className="countbox">기부 {pointCount}건</div>
                    </div>
                </div>
                <div className="test">
                    <div className="page_card">
                        <Link to="/dndetail">
                            <DonationListCard />
                        </Link>
                        <Link to="/dndetail">
                            <DonationListCard />
                        </Link>
                        <Link to="/dndetail">
                            <DonationListCard />
                        </Link>
                        <Link to="/dndetail">
                            <DonationListCard />
                        </Link>
                    </div>
                    <div className="banner_card">
                        <UnicefBanner />
                        <ShopBanner />
                        <DonatorRanking />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default DonationList;
