import "./MypageStamp.scss";
import Stamp from "./Stamp";

function MypageStamp() {
    const stamp_num = 1;
    return (
        <>
            <div className="stamp_container">
                <div className="stamp_title">
                    스탬프 <span>{stamp_num}</span>
                </div>
                <div className="stamp_list">
                    <Stamp />
                    <Stamp />
                    <Stamp />
                    <Stamp />
                    <Stamp />
                    <Stamp />
                </div>
            </div>
        </>
    );
}

export default MypageStamp;
