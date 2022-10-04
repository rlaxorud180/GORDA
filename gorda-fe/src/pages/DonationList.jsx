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
import axios from "axios";

function DonationList() {
  const [count, setCount] = useState(47398495);
  const [campaigns, setCampaigns] = useState([]);
  const [infos, setInfos] = useState([]);

  const pointCount = count.toLocaleString("ko-KR");
  console.log("인포스", infos);

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

  useEffect(() => {
    axios({
      headers: {},
      url: "http://j7a307.p.ssafy.io:8080/api/donation/readall",
      method: "GET",
    })
      .then((res) => {
        console.log("기부 목록", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="donationlist_container">
        <div className="page_header">
          <div className="header_p">
            <div>당신의 착한 마음을</div>
            <div>
              Gorda가 응원합니다
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
