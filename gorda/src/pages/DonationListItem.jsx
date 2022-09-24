import NavigationBar from "../components/NavigationBar";
import ProposalsItem from "../components/Institution/ProposalsItem";
import "./InstitutionDetail.scss";

function InstitutionDetail() {
  const institution_name = "이몽룡 재단";
  const institution_intro =
    "‘이몽룡 재단’는 1997년에 창립하여 지금까지 1,700여 명의 회원과 함께 킹니셰프지역을 터전삼아 다양한 환경교육 및 환경현안을 해결하고 있습니다.";
  // const institution_mainp = ''
  const proposals = 8;
  return (
    <>
      <NavigationBar />
      <div className="institution_header">
        <div className="institution_image"></div>
        <div className="institution_title">
          <div className="institution_category">단체/기관</div>
          <div className="institution_name">{institution_name}</div>
        </div>
      </div>
      <div className="Institution_container">
        <div className="institution_intro">
          <div className="intro_p">{institution_intro}</div>
          <div className="main_course">주요 활동과 목적</div>
          <div className="main_p">
            {" "}
            킹니셰프 소재의 동물원 전시동물 전시환경 및 사육환경 개선을 위해
            캠페인과 모니터링을 진행하고 있습니다. 또한, 생태보전과 시민들과
            함께 킹니셰프 오염 모니터링, 절전소 운동을 진행하고 농촌 체험과
            환경캠프, 회원 참여 프로그램 등 미래세대를 위한 다양한 생태교육을
            통해 시민들의 생태적 감수성을 높이는 활동, 그리고 자연을 살리는
            먹을거리와 녹색생활 캠페인을 통해 생활 속의 환경운동을 펼치고
            있습니다.
          </div>
        </div>
        <div className="institution_profile">
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
        </div>
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
