import { useState } from "react";
import DonationListCard from "../components/Donation/DonationListCard";
import DonatorRanking from "../components/Donation/DonatorRanking";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ShopBanner from "../components/Donation/ShopBanner";
import UnicefBanner from "../components/Donation/UnicefBanner";
import "./DonationList.scss";
import { Link } from "react-router-dom";
import factory from "../smart-contract/factory";
import Campaign from "../smart-contract/campaign";

import { useEffect } from "react";

function DonationList() {
  const [count, setCount] = useState(47398495);
  const [campaigns, setCampaigns] = useState([]);
  const [infos, setInfos] = useState([]);

  const pointCount = count.toLocaleString("ko-KR");

  useEffect(() => {
    async function testlist() {
      if (campaigns[0] != undefined) {
        console.log("111111111111111111111", campaigns[0]);
        const tmp = await Campaign(campaigns[0]).methods.getSummary().call();
        setInfos(tmp);
      }
    }

    testlist();
  }, [campaigns]);

  useEffect(() => {
    async function dnlist() {
      const tmp = await factory.methods.getDeployedCampaigns().call();
      setCampaigns(tmp);
    }
    dnlist();
  }, []);

  return (
    <>
      <NavigationBar />
      {console.log("campaigns===========", campaigns)}
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
             <DonationListCard
              imgURL={infos[10]}
              title={infos[5]}
              description={infos[9]}
              target={infos[11]}
            />
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
