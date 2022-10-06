import { useEffect, useState } from "react";
import MyPageAdminDonationItem from "./MyPageAdminDonationItem";
import "./MyPageAdminDonationList.scss";
import apiInstance from "../../api/Index";
import web3 from "../../smart-contract/vote-contract/web3";

function MyPageAdminDonationList() {
  const api = apiInstance();
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const userIdx = localStorage.getItem("idx");
    console.log("user", userIdx);
    api
      .get(`api/donation/readall`)
      .then((res) => {
        setInfos(res.data.data);
        console.log("내 기부", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="list_title">기부내역({infos.length}건)</div>

      <div className="list_box">
        {console.log("infos", infos)}

        {infos.map((item, key) => {
          return (
            <MyPageAdminDonationItem
              date={item.donationStartDate.substr(0, 10)}
              title={item.donationName}
              eth={web3.utils.fromWei(String(item.donationCurrentEth), "ether")}
              target={web3.utils.fromWei(
                String(item.donationTargetEth),
                "ether"
              )}
              end={item.donationEndDate}
              account={item.donationAccount}
            />
          );
        })}
      </div>
    </>
  );
}

export default MyPageAdminDonationList;
