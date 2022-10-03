import { useState } from "react";
import DonationListCard from "../components/Donation/DonationListCard";
import DonatorRanking from "../components/Donation/DonatorRanking";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import ShopBanner from "../components/Donation/ShopBanner";
import UnicefBanner from "../components/Donation/UnicefBanner";
import "./DonationList.scss";
import { Link } from "react-router-dom";
import factory from "../smart-contract/donate-contract/factory";
import Campaign from "../smart-contract/donate-contract/campaign";
import { useEffect } from "react";

function DonationList() {
  const [count, setCount] = useState(47398495);
  const [campaigns, setCampaigns] = useState([]);
  const [infos, setInfos] = useState([]);

  const pointCount = count.toLocaleString("ko-KR");

  useEffect(() => {
    async function testlist() {
      if (campaigns[0] != undefined) {
        for (let i = 0; i < campaigns.length; i++) {
          const tmp = await Campaign(campaigns[i]).methods.getSummary().call();
          setInfos((infos) => [...infos, tmp]);
        }
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

            {infos.map((item, key) => {
              return (
                <Link to={`/detail/${campaigns[key]}`}>
                  <DonationListCard
                    category={item[7]}
                    imgURL={item[10]}
                    title={item[5]}
                    description={item[9]}
                    target={item[11]}
                  />
                </Link>
              );
            })}
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
