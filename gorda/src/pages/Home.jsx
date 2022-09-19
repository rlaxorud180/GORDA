import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";
import "./Home.scss";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { signIn } from "../api/Users";



function Home() {
    const [isConnected, setIsConnected] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
    function checkConnectedWallet() {
      const userData = JSON.parse(localStorage.getItem("userAccount"));
      if (userData != null) {
        setUserInfo(userData);
        setIsConnected(true);
      }
    }
    checkConnectedWallet();
  }, []);

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      // eslint-disable-next-line
      provider = window.web3.currentProvider;
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        if (currentProvider !== window.ethereum) {
          console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
          );
        }

        // 메타마스크 연결
        await currentProvider.request({ method: "eth_requestAccounts" });

        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const chainId = await web3.eth.getChainId();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account); // Get wallet balance
        ethBalance = web3.utils.fromWei(ethBalance, "ether"); //Convert balance to wei
        saveUserInfo(ethBalance, account, chainId);
        if (userAccount.length === 0) {
          console.log("Please connect to meta mask");
        }
        else {
            console.log("난 여기");
            console.log(userAccount)
            await signIn(
                {userAccount},
                (response) => {
                    console.log("리스폰스", response)
                    localStorage.setItem("NickName", response.data);
                },
                (err) => {
                    console.log("에러", err)
                    console.log("로그인 실패");
                }
            )
        }
      }
    } catch (err) {
      console.log(
        "There was an error fetching your accounts. Make sure your Ethereum client is configured correctly."
      );
    }
    
  };

  const onDisconnect = () => {
    localStorage.clear();
    setUserInfo({});
    setIsConnected(false);
  };

  const getSignature = async () => {
    try {
    } catch (err) {
      console.log(
        "There was an error fetching your accounts. Make sure your Ethereum client is configured correctly."
      );
    }
  };

  const saveUserInfo = (ethBalance, account, chainId) => {
    const userAccount = {
      account: account,
      balance: ethBalance,
      connectionid: chainId,
    };
    window.localStorage.setItem("userAccount", JSON.stringify(userAccount)); //user persisted data
    const userData = JSON.parse(localStorage.getItem("userAccount"));
    setUserInfo(userData);
    setIsConnected(true);
  };


    return (
        <>
            <HomeNav />
            {/* Home Section */}
            <section id="home">
                <div className="home_container">
                    <div className="home_paragraph">당신은 별 하나 묻힌 아무 벌써 한 위에도 이네들은 있습니다.</div>
                    <div className="home_paragraph">프랑시스 별 그리고 까닭입니다.</div>
                    {console.log("이즈커넥티드 : ", isConnected)}
                    {!isConnected && (<button className="login_btn" onClick={onConnect}>계좌 연결하기</button>)}
                    {isConnected && (<button className="login_btn" onClick={onDisconnect}>계좌 연결해제</button>)}
                    <a href="#donation" className="next_btn">
                        <i className="bx bx-down-arrow-alt"></i>
                    </a>
                </div>
            </section>
            {isConnected && (
        <div className="app-wrapper">
          <div className="app-details">
            <h2>✅ You are connected to metamask.</h2>
            <div className="app-account">
              <span>Account number:</span>
              {userInfo.account}
            </div>
            <div className="app-balance">
              <span>Balance:</span>
              {userInfo.balance}
            </div>
            <div className="app-connectionid">
              <span>Connection ID:</span>
              {userInfo.connectionid}
            </div>
          </div>
          <div>
            <button className="app-buttons__logout" onClick={onDisconnect}>
              Disconnect
            </button>
          </div>
        </div>
      )}

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
                        <a href="/vote">
                            <button className="go_btn">투표 바로가기</button>
                        </a>
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
            {/* <Footer /> */}
        </>
    );
}

export default Home;
