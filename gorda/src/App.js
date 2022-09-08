import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DonationList from "./pages/DonationList";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dnlist" element={<DonationList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
