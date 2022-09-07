import { Link } from "react-router-dom";
import "./HomeNav.scss";
function HomeNav() {
    return (
        <section id="header">
            <div className="header container">
                <div className="nav-bar">
                    <div className="home-logo">
                        <Link to="/">Gorda</Link>
                    </div>
                    <div className="nav-list">
                        <ul>
                            <li>
                                <a href="#home">홈</a>
                                <a href="#donation">기부</a>
                                <a href="#poll">투표</a>
                                <a href="#market">상점</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeNav;
