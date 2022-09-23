import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import DonationList from "./pages/DonationList";
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
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mypage/donation" element={<MyPageDonation />} />
                    <Route path="/vote" element={<Vote />} />
                    <Route path="/vote/detail" element={<InstitutionDetail />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
