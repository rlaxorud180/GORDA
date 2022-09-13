import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";
import "./Home.scss";

function Home() {
    return (
        <>
            <HomeNav />
            {/* Home Section */}
            <section id="home">
                <div className="home_container">
                    <div className="home_paragraph">당신은 별 하나 묻힌 아무 벌써 한 위에도 이네들은 있습니다.</div>
                    <div className="home_paragraph">프랑시스 별 그리고 까닭입니다.</div>
                    <button className="login_btn">시작하기</button>
                    <a href="#donation" className="next_btn">
                        <i className="bx bx-down-arrow-alt"></i>
                    </a>
                </div>
            </section>
            {/* End Home Section */}

            {/* Donation Section */}
            <section id="donation">
                <div className="donation_container">
                    <div className="donation_paragraph">
                        <h1>소리다. 이것은 새 풀이 것이다.</h1>
                        <h1>봄바람을 풀이 못할 사람은 심장의.</h1>
                        <p>
                            주며, 그들에게 예수는 힘있다. 끓는 소금이라 반짝이는 방지하는 유소년에게서 그들은 품고 사라지지 풀이 이것이다. 것은 무엇을 가진 생의 일월과 이것이다. 영원히 발휘하기 희망의
                            위하여, 낙원을것은 우리의 뿐이다.
                        </p>
                        <a href="/dnlist">
                            <button className="more_btn">더 알아보기</button>
                        </a>
                    </div>
                    <a href="#poll" className="next_btn_2">
                        <i className="bx bx-down-arrow-alt"></i>
                    </a>
                </div>
            </section>
            {/* End Donation Section  */}

            {/* Poll Section */}
            <section id="poll">
                <div className="poll_container">
                    <a href="#market" className="next_btn_3">
                        <i className="bx bx-down-arrow-alt"></i>
                    </a>
                    <div className="poll_paragraph">
                        <h1>새겨지는 가을 묻힌 무엇인지</h1>
                        <p>얼마나 이상은 이상이 대한 듣기만 동산에는 속잎나고, 것이다.</p>
                        <p> 착목한는 천고에 이상의 사막이다. 두기 얼마나 그러므로 보이는 속잎나고, 되는 물방아 보라</p>
                        <button className="go_btn">투표 바로가기</button>
                    </div>
                </div>
            </section>
            {/* End Poll Section */}
            <section id="market">
                <div className="market_container">
                    <div className="market_paragraph">
                        <h1>등산에는 속잎나고, 것이다.</h1>
                        <p>두기 얼마나 그러므로 보이는 속잎나고, 되는 물방아 보라, 역사를 고행을 있는 이는 얼마나 듣는다.</p>
                        <p>쓸쓸하랴? 용기가 모래뿐일 못 아니더면, 새가 길지 가진 있는가?</p>
                    </div>
                    <button className="market_btn">상점 바로가기</button>
                    <a href="#home" className="next_btn_4">
                        <i className="bx bx-up-arrow-alt"></i>
                    </a>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;
