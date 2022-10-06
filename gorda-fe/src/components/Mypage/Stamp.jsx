import { useEffect, useState } from "react";
import "./Stamp.scss";
import testImg from "../../images/test.jpg";

function Stamp(data) {
  const [stampData, setStampData] = useState([]);

  useEffect(() => {
    setStampData(data);
  }, []);
  console.log(data);
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
        <div
          className="stamp"
          onMouseOver={hoverIntro}
          onMouseLeave={leaveIntro}
        >
          <img src={testImg} alt="" />
        </div>

        <div className="stamp_name">{data.myBadgeName}</div>
        <div className={hover ? `hoverTest` : ""}>
          {hover ? (
            <>
              <div className="hoverP">{stampData.myBadgeContent}</div>
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
