import "./FoundationAdmin.scss";
import NavigationBar from "../components/NavigationBar";
import AdminDetail from "../components/FoundationAdmin/AdminDetail";
import RegistDonation from "../components/FoundationAdmin/RegistDonation";

function FoundationAdmin() {
    const tag = "기관 관리자";
    const name = "Gorda 관리자";
    return (
        <>
            <NavigationBar />
            <div className="admin_container">
                <div className="admin_header">
                    <div className="admin_tag">{tag}</div>
                    <div className="admin_name">{name}</div>
                </div>
                <AdminDetail />
                {/* <RegistDonation /> */}
                <div className="btn_container">
                    
                    <a href="/mypage/admin/new">
                        <div className="regist_btn">새 모금 등록</div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default FoundationAdmin;
