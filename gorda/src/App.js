import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import DonationDetailPage from "./pages/DonationDetailPage";
import AdminForm from "./pages/AdminForm";
import DonationList from "./pages/DonationList";
import DonationManage from "./pages/DonationManage";
import FoundationAdmin from "./pages/FoundationAdmin";
import Home from "./pages/Home";
import InstitutionDetail from "./pages/InstitutionDetail";
import MyPage from "./pages/MyPage";
import MyPageDonation from "./pages/MyPageDonation";
import Vote from "./pages/Vote";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dnlist" element={<DonationList />} />
                    <Route path="/dndetail" element={<DonationDetailPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mypage/donation" element={<MyPageDonation />} />
                    <Route path="/vote" element={<Vote />} />
                    <Route path="/vote/detail" element={<InstitutionDetail />} />
                    <Route path="/mypage/admin" element={<FoundationAdmin />} />
                    <Route path="/mypage/admin/new" element={<AdminForm />} />
                    {/* <Route path="/manage" element={<DonationManage />} /> */}
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
