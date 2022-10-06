import NavigationBar from "../components/NavigationBar";
import ProposalsItem from "../components/Institution/ProposalsItem";
import "./InstitutionDetail.scss";
import apiInstance from "../api/Index";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function InstitutionDetail() {
  const institution_name = "이몽룡 재단";
  const institution_intro =
    "‘이몽룡 재단’는 1997년에 창립하여 지금까지 1,700여 명의 회원과 함께 킹니셰프지역을 터전삼아 다양한 환경교육 및 환경현안을 해결하고 있습니다.";
  // const institution_mainp = ''
  const proposals = 8;
  const id = useParams();
  const [infos, setinfos] = useState({
    foundationLogo: "1",
    foundationContent: "1",
    foundationName: "1",
  });
  const api = apiInstance();

  console.log(`api/foundation/${id.foundationIdx}`);
  useEffect(() => {
    api
      .get(`api/foundation/${id.foundationIdx}`)
      .then((res) => {
        console.log("기관 세부 정보", res.data.data);
        setinfos(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(infos);
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
        {/* <div className="institution_profile">
          <div className="left_side">
            <div className="left">사업자 등록번호</div>
            <div className="left">기관 분류</div>
            <div className="left">소재지 주소</div>
            <div className="left">전화번호</div>
          </div>
          <div className="right_side">
            <div className="right">123-45-67890</div>
            <div className="right">비영리법인/비영리민간단체</div>
            <div className="right">태경이형 집</div>
            <div className="right">태경이형 번호</div>
          </div>
        </div> */}
        <div className="proposals">
          제안내역 <span>{proposals}</span>
        </div>
        <div className="proposal_fx">
          <ProposalsItem />
          <ProposalsItem />
          <ProposalsItem />
          <ProposalsItem />
          <ProposalsItem />
          <ProposalsItem />
          <ProposalsItem />
          <ProposalsItem />
        </div>
      </div>
    </>
  );
}

export default InstitutionDetail;
