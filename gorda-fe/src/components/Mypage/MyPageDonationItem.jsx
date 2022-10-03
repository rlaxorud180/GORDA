import "./MyPageDonationItem.scss";

function MyPageDonationItem() {
    const daegu_date = "2022.09.05";
    const daegu_title = "제 11회 대구여성영화제 함께 해주세요!";
    const daegu_eth = 100;
    const daegu_donation = "참여기부";

    return (
        <>
            <div className="item_date">{daegu_date}</div>
            <div className="item_title">{daegu_title}</div>
            <div className="block">
                <div className="item_eth">{daegu_eth} eth</div>
                <div className="item_donation">{daegu_donation}</div>
            </div>
            <hr className="dashedhr" />
        </>
    );
}

export default MyPageDonationItem;
