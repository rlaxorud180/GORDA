import "./ProposalsItem.scss";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import { Link } from "react-router-dom";
function ProposalsItem(props) {
    const title = "철창 안에 갇혀버린 동물들에게 자유를!";
    const name = "이몽룡 재단";
    const [eth, setEth] = useState(100000);
    const goal_eth = eth.toLocaleString("ko-KR");
    const [progress, setProgress] = useState(20);
    return (
        <>
            <div className="proposal_container">
                <Link to={`/detail/${props.donationIdx}`}>
                    <div className="proposal_image" style={{ backgroundImage: `url(${props.donationLogo})` }}></div>
                </Link>
                <div className="proposal_title">{props.donationName}</div>
            </div>
        </>
    );
}

export default ProposalsItem;
