import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import "./DonationDetailPage.scss";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

function DonationDetailPage() {
    const detail_title = "청소년에게 공연예술은 선택이 아닌 필수입니다!";
    const post_foundation = "청소년을 위한 공연예술 사회적협동조합";
    const notion_top = "참여하면 한국문화예술위원회가 참여기부금을 2배로 기부!";
    const notion_bottom = "응원, 댓글, 공유할 때마다 2배씩 기부됩니다.";
    const p_title = "청소년에게 경쟁사회에서 살아남는 기술만 알려주면 되는 걸까요?";
    const image_description = "사진 설명";
    const eth = 10000;
    const goaleth = 20000;
    const team = "프로젝트팀";
    const foundation_name = "킹니셰프한국위원회";

    const [progress, setProgress] = useState(50);
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
        },
    }));

    const [openTap, setOpenTap] = useState(false);
    const handleTap = () => {
        setOpenTap((present) => !present);
    };
    console.log(openTap);
    return (
        <>
            <NavigationBar />
            <div className="detail_header">
                <div className="header_title">{detail_title}</div>
                <div className="header_foundation">by {post_foundation}</div>
            </div>
            <div className="detail_container">
                <div className="box_notion">
                    <div className="notion_top">{notion_top}</div>
                    <div className="notion_bottom">{notion_bottom}</div>
                </div>
                <p className="p_title">{p_title}</p>
                <p className="p_content">
                    대한민국의 미래인 청소년들에게 무한경쟁사회에서 살아남는 기술만 알려주면 되는 걸까요? <br />
                    개인주의와 물질만능주의를 장착하고 성공을 위해 폭주하는 무분별한 미디어 중독 + 게임 중독 + SNS 중독의 위험 속에서 살아가는 청소년에겐 어떤 교육이 필요할까요?
                </p>
                <div className="p_image"></div>
                <div className="image_description">{image_description}</div>
                <p className="p_content">
                    더욱더 커져가는 부의 불균형으로 미래에 대한 불안함이 가득한 우리 청소년들에게 청소년을 위한 공연예술 사회적 협동조합에서는 문화예술을 통해 소통하고 공감하며 더불어 살아가는 세상을
                    만들기 위해 2016년부터 "청소년을 위한 공연예술축제"를 개최하고 지속적으로 문화예술의 힘으로 세상을 변화하기 위해 노력하고 있습니다. <br />
                    <br />
                    <br />
                    '청소년을 위한 공연예술 사회적 협동조합'의 작은 날갯짓이 큰 변화를 만들어 낼 수 있으리라 믿습니다!
                </p>
                <div className="circle_box">
                    <div className="cl"></div>
                    <div className="cl"></div>
                    <div className="cl"></div>
                </div>
                <div className="related_links">
                    <div className="links_header">관련 링크</div>

                    <li className="libox">예술활동이 청소년 비행 줄여준다(연구)</li>
                    <li className="libox">청소년을 위한 공연예술축제</li>
                </div>
                <div className="eth_box">
                    <div className="now_eth">{eth.toLocaleString("ko-KR")} eth</div>
                    <div className="goal_eth">{goaleth.toLocaleString("ko-KR")} eth 목표</div>
                    <div className="goal_progress">
                        <Box sx={{ flexGrow: 1 }}>
                            <div className="testPro">
                                <div className="pro_gress">{progress}%</div>
                                <BorderLinearProgress variant="determinate" value={progress} />
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="foundation">
                    <div className="foundation_image"></div>
                    <div className="foundation_profile">
                        <div className="team">{team}</div>
                        <div className="foundation_name">{foundation_name}</div>
                    </div>
                </div>
                <div className="period">모금기간: 2022.08.31 ~ 2022.11.30</div>
                <div className="found_data" onClick={handleTap}>
                    <i className="bx bxs-down-arrow"></i>
                    {foundation_name}는?
                    {openTap ? (
                        <>
                            <div>ㅎㅇ</div>
                        </>
                    ) : (
                        ""
                    )}
                </div>
                <div className="comment_section">
                    <div className="section_title">마음을 나누는 댓글</div>
                    <hr />
                    <br />
                    <div className="my_comment">
                        <div className="my_badge"></div>
                        <textarea className="my_comment_box" maxlength="500" placeholder="댓글만 써도 마음이 전해집니다." />
                    </div>
                    <div className="comment_info">
                        <div className="comment_count">0/500</div>
                        <button className="registBtn" type="submit">
                            등록
                        </button>
                    </div>
                    <hr />
                    <br />
                </div>
            </div>
        </>
    );
}

export default DonationDetailPage;
