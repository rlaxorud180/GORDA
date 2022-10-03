import "./DonationListCard.scss";

function DonationListCard(props) {
  const hashtag = "기본생활지원";
  const title = "저소득가정의 생활에 힘이 되어줄 세제를 선물해주세요";
  const paragraph =
    "푸드마켓에서 식품류 뿐만 아니라 생활용품도 후원받고 있다는 점을 알고 계신가요? 푸드마켓을 이용 중이신 한부모가정 OOO 어머니는 지...";
  const fund = "609,900";

  return (
    <>
      <div className="listcard">
        <div className="cardImg">
          {/* <img src={props.imgURL} alt="cardImg" /> */}
          <div
            className="img"
            style={{
              width: "290px",
              height: "300px",
              borderRadius: "20px 0px 0px 20px",
              backgroundImage: `url(${props.imgURL})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="cardP">
          <div className="hashtag"># {props.category}</div>
          <div className="title">{props.title}</div>
          <div className="paragraph">{props.description}</div>
          <div className="fund">{props.target}ETH 모금 중</div>
        </div>
      </div>
    </>
  );
}

export default DonationListCard;
