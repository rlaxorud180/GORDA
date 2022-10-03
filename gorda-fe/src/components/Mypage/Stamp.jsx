import { useState } from "react";
import "./Stamp.scss";
import testImg from "../../images/test.jpg";

function Stamp() {
    const stamp_name = "헌혈";
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
                <div className="stamp" onMouseOver={hoverIntro} onMouseLeave={leaveIntro}>
                    <img src={testImg} alt="" />
                </div>

                <div className="stamp_name">{stamp_name}</div>
                <div className={hover ? `hoverTest` : ""}>
                    {hover ? (
                        <>
                            <div className="hoverP">asdf</div>
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
