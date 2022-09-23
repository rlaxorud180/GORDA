import MyPageDonationItem from "./MyPageDonationItem";
import "./MyPageDonationList.scss";

function MyPageDonationList() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dstring = year + "년 " + month + "월";

    const count = 5;

    return (
        <>
            <div className="list_title">기부내역</div>
            <div className="list_count">
                <div className="dstring">{dstring}</div>
                <div className="dcount">({count}건)</div>
            </div>
            <div className="list_box">
                <MyPageDonationItem />

                <MyPageDonationItem />

                <MyPageDonationItem />

                <MyPageDonationItem />

                <MyPageDonationItem />
            </div>
        </>
    );
}

export default MyPageDonationList;
