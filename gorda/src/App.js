import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import DonationList from "./pages/DonationList";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import MyPageDonation from "./pages/MyPageDonation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dnlist" element={<DonationList />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/mypage/donation" element={<MyPageDonation />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
