import { useEffect, useState } from "react";
import { getMyBadge, putMyBadge } from "../../api/Badge";
import "./MypageStamp.scss";
import Stamp from "./Stamp";

function MypageStamp() {
    const [myBadge, setMyBadge] = useState([]);
    const [stampNum, setStampNum] = useState(0);

    useEffect(() => {
        toDoThings();
    }, []);

    const toDoThings = async () => {
        await freshMyBadge();
        await getMyBadgeData();
    };

    const getMyBadgeData = async () => {
        await getMyBadge(
            { userIdx: localStorage.getItem("idx") },
            (response) => {
                response.data.data.map((sibal) => {
                    if (sibal.isMyBadgeEmpty === 1) {
                        setStampNum((prev) => prev + 1);
                    }
                });
                setMyBadge(response.data.data);
            },
            (err) => {
                console.lof("내 뱃지데이터 가져오기 실패", err);
            }
        );
    };

    const freshMyBadge = async () => {
        await putMyBadge(
            { userIdx: localStorage.getItem("idx") },
            (response) => {
                console.log("내 뱃지 갱신 성공", response);
            },
            (err) => {
                console.log("내 뱃지 갱신 실패", err);
            }
        );
    };

    return (
        <>
            <div className="stamp_container">
                <div className="stamp_title">
                    획득 스탬프 <span>{stampNum}</span>
                </div>

                <div className="stamp_list">
                    {myBadge.map((a, index) => {
                        if (a.isMyBadgeEmpty === 1) {
                            return (
                                <>
                                    <Stamp data={a} />
                                </>
                            );
                        }
                    })}
                    {myBadge.map((a, index) => {
                        if (a.isMyBadgeEmpty === 0) {
                            return (
                                <>
                                    <Stamp data={a} />
                                </>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}

export default MypageStamp;
