import { useEffect, useState } from "react";
import "./DonatorRanking.scss";
import { getUserRanking } from "../../api/Users";

function DonatorRanking() {
  const [userRanking, setUserRanking] = useState([]);

  const rankingGet = async () => {
    await getUserRanking(
      (response) => {
        setUserRanking(response.data.data);
      },
      (err) => {
        console.log("유저랭킹정보 에러", err);
      }
    );
  };

  useEffect(() => {
    rankingGet();
  }, []);

  return (
    <>
      <div className="rank_container">
        <div className="rank_header">기부자 랭킹</div>
        <div>
          {userRanking.map((a, index) => {
            return (
              <>
                <i class="bx bx-medal"></i>
                <div>{a.userNickname}</div>
                <div>{a.userAmount} eth</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default DonatorRanking;
