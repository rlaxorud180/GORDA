import { Link } from "react-router-dom";
import "./NavigationBar.scss";
function NavigationBar() {
    return (
        <section id="nav">
            <div className="header container">
                <div className="nav-bar">
                    <div className="home-logo">
                        <Link to="/">Gorda</Link>
                    </div>
                    <div className="nav-list">
                        <ul>
                            <li>
                                <Link to="/">홈</Link>
                                <Link to="/dnlist">기부</Link>
                                <Link to="">투표</Link>
                                <button className="login_btn">로그인</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavigationBar;
