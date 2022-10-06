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
import MyPageDonationRequest from "./pages/MyPageDonationRequest";
import Detail from "./pages/Detail";
import Vote from "./pages/Vote";
import VoteCreation from "./pages/VoteCreation";
import ApiTest from "./pages/ApiTest";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const userrole = localStorage.Role;

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {userrole === "1" ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/dnlist" element={<DonationList />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/donation" element={<MyPageDonation />} />
              <Route
                path="/mypage/request"
                element={<MyPageDonationRequest />}
              />
              <Route path="/vote" element={<Vote />} />
              <Route path="/vote/detail" element={<InstitutionDetail />} />
              <Route
                path="/vote/detail/:foundationIdx"
                element={<InstitutionDetail />}
              />
              <Route path="/votecreation" element={<VoteCreation />} />
              <Route path="/mypage/admin" element={<FoundationAdmin />} />
              <Route path="/mypage/admin/new" element={<AdminForm />} />
              <Route path="/:campaignid" element={<Detail />} />
              <Route
                path="/detail/:campaignid"
                element={<DonationDetailPage />}
              />
              <Route path="/apitest" element={<ApiTest />} />
              {/* <Route path="/manage" element={<DonationManage />} /> */}
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/dnlist" element={<DonationList />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/donation" element={<MyPageDonation />} />
              <Route
                path="/mypage/request"
                element={<MyPageDonationRequest />}
              />
              <Route path="/vote" element={<Vote />} />

              <Route path="/mypage/admin" element={<FoundationAdmin />} />
              <Route path="/vote/detail" element={<InstitutionDetail />} />
              <Route
                path="/vote/detail/:foundationIdx"
                element={<InstitutionDetail />}
              />
              <Route path="/:campaignid" element={<Detail />} />
              <Route
                path="/detail/:campaignid"
                element={<DonationDetailPage />}
              />
              <Route path="/apitest" element={<ApiTest />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
