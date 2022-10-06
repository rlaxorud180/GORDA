import { useEffect, useState } from "react";
import "./Stamp.scss";
import testImg from "../../images/test.jpg";

function Stamp(data) {
    const [stampData, setStampData] = useState([]);
    console.log(data.data.myBadgeLogo);
    const [hover, setHover] = useState(false);
    const hoverIntro = () => {
        setHover(true);
    };
    const [leave, setLeave] = useState(false);
    const leaveIntro = () => {
        setLeave(true);
        setHover(false);
    };
    return (
        <>
            <div className="stampList">
                <div style={{ backgroundImage: `url(${data.data.myBadgeLogo})` }} className="stamp" onMouseOver={hoverIntro} onMouseLeave={leaveIntro}></div>

                <div className="stamp_name">{data.data.myBadgeName}</div>
                <div className={hover ? `hoverTest` : ""}>
                    {hover ? (
                        <>
                            <div className="hoverP">{data.data.myBadgeContent}</div>
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}

export default Stamp;
