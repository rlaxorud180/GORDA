import NavigationBar from "../components/NavigationBar";
import ProposalsItem from "../components/Institution/ProposalsItem";
import "./InstitutionDetail.scss";
import apiInstance from "../api/Index";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function InstitutionDetail() {
  const proposals = 8;
  const id = useParams();
  const [infos, setinfos] = useState({
    foundationLogo: "1",
    foundationContent: "1",
    foundationName: "1",
  });
  const api = apiInstance();
  const [donainfos, setdonainfos] = useState([]);

  useEffect(() => {
    console.log("11111111111111111");
    api
      .get(`api/foundation/${id.foundationIdx}`)
      .then((res) => {
        console.log("기관 세부 정보", res.data.data);
        setinfos(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });

    api
      .get(`api/donation/foundation/${id.foundationIdx}`)
      .then((res) => {
        console.log("기관 기부들 세부 정보");
        setdonainfos(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log("infos", infos);
  console.log("dona", donainfos);
  return (
    <>
      <NavigationBar />
      <div className="institution_header">
        <div
          className="institution_image"
          style={{ backgroundImage: `url(${infos.foundationLogo})` }}
        ></div>
        <div className="institution_title">
          <div className="institution_category">단체/기관</div>
          <div className="institution_name">{infos.foundationName}</div>
        </div>
      </div>
      <div className="Institution_container">
        <div className="institution_intro">
          <div className="main_course">주요 활동과 목적</div>
          <div className="main_p">{infos.foundationContent}</div>
        </div>

        <div className="proposals">
          제안내역 <span>{donainfos.length}</span>
        </div>
        <div className="proposal_fx">
          {donainfos &&
            donainfos.map((item, key) => {
              return (
                <ProposalsItem
                  donationName={item.donationName}
                  donationSubject={item.donationSubject}
                  donationLogo={item.donationLogo}
                  donationIdx={item.donationIdx}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default InstitutionDetail;
