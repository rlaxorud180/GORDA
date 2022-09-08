import "./DonationListCard.scss";

function DonationListCard() {
    const hashtag = "기본생활지원";
    const title = "저소득가정의 생활에 힘이 되어줄 세제를 선물해주세요";
    const paragraph = "푸드마켓에서 식품류 뿐만 아니라 생활용품도 후원받고 있다는 점을 알고 계신가요? 푸드마켓을 이용 중이신 한부모가정 OOO 어머니는 지...";
    const fund = "609,900";

    return (
        <>
            <div className="listcard">
                <div className="cardImg">
                    {/* <img src="" alt="cardImg" /> */}
                    <div className="img"></div>
                </div>
                <div className="cardP">
                    <div className="hashtag"># {hashtag}</div>
                    <div className="title">{title}</div>
                    <div className="paragraph">{paragraph}</div>
                    <div className="fund">{fund}원 모금중</div>
                </div>
            </div>
        </>
    );
}

export default DonationListCard;
