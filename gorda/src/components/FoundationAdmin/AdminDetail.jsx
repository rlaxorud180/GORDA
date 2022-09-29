import "./AdminDetail.scss";
function AdminDetail() {
    const admin_eth = 100;
    const donation_count = 5;
    const wait_donation = 3;
    const foundation_ranking = 3;
    return (
        <>
            <div className="admin_detail">
                <div className="admin_title">기관 계좌</div>
                <div className="admin_detail_container">
                    <div>
                        <div className="admin_account">계좌 잔액</div>
                        <div className="admin_eth">{admin_eth}eth</div>
                    </div>
                    <div className="admin_container_detail">
                        <div className="admin_total_detail">
                            <div>등록한 기부 수</div>
                            <span>{donation_count}회</span>
                        </div>
                        <div className="admin_total_detail">
                            <div>등록 대기 기부 수</div>
                            <span>{wait_donation}회</span>
                        </div>
                        <div className="admin_total_detail">
                            <div>기관 순위</div>
                            <span>{foundation_ranking}위</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDetail;
