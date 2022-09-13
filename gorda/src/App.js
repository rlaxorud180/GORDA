import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DonationList from "./pages/DonationList";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dnlist" element={<DonationList />} />
                    <Route path="/mypage" element={<MyPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
