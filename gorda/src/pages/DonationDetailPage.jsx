import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import NavigationBar from "../components/NavigationBar";
import "./DonationDetailPage.scss";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { getETHPrice, getETHPriceInUSD } from "../lib/GetEtherPrice";
import Modal from "@mui/material/Modal";
import Campaign from "../smart-contract/donate-contract/campaign";

import Web3 from "web3";
import web3 from "../smart-contract/donate-contract/web3";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "473px",
  // height: '550px',
  bgcolor: "background.paper",
  borderRadius: 5,
  border: "none",
  p: "58px 30px 44px 27px",
};

function DonationDetailPage() {
  const detail_title = "청소년에게 공연예술은 선택이 아닌 필수입니다!";
  const post_foundation = "청소년을 위한 공연예술 사회적협동조합";

  const p_title =
    "청소년에게 경쟁사회에서 살아남는 기술만 알려주면 되는 걸까요?";
  const image_description = "사진 설명";
  const eth = 10000;
  const goaleth = 20000;
  const team = "프로젝트팀";
  const foundation_name = "킹니셰프한국위원회";

  const [infos, setInfos] = useState([]);
  const [error, setError] = useState("");
  const [targetInUSD, setTargetInUSD] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amountInUSD, setAmountInUSD] = useState();
  const [targetEth, setTargetEth] = useState("");
  const [balanceEth, setBalanceEth] = useState("");
  const [date, setDate] = useState("");
  const id = useParams();
  const campaignItem = Campaign(id);
  campaignItem.options.address = campaignItem.options.campaignid;

  const { handleSubmit, register, formState, reset, getValues } = useForm({
    mode: "onChange",
  });

  const [wallet_eth, setWallet_eth] = useState(0);

  const [userInfo, setUserInfo] = useState({});

  const [progress, setProgress] = useState(0);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const [openTap, setOpenTap] = useState(false);
  const handleTap = () => {
    setOpenTap((present) => !present);
  };

  const [valueLength, setValueLength] = useState(0);
  const checkValueLength = (e) => {
    setValueLength(e.target.value.length);
  };

  const comment_list_count = 0;

  const [cheerCount, setCheerCount] = useState(0);
  const upCheerCount = () => {
    setCheerCount(cheerCount + 1);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = async () => {
    setOpen(true);
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
        // const chainId = await web3.eth.getChainId();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account); // Get wallet balance
        ethBalance = web3.utils.fromWei(ethBalance, "ether"); //Convert balance to wei
        setWallet_eth(ethBalance);
        // saveUserInfo(ethBalance, account, chainId);
        if (userAccount.length === 0) {
          console.log("Please connect to meta mask");
        } else {
          console.log(ethBalance);
        }
      }
    } catch (err) {
      console.log(
        "There was an error fetching your accounts. Make sure your Ethereum client is configured correctly."
      );
    }
  };
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState(0);
  const resetBtn = () => {
    setInputValue(0);
  };

  const testinput = (e) => {
    if (e.target.value < 0) {
      setInputValue(0);
      alert("음수는 입력하지 말아욧");
    } else {
      setInputValue(e.target.value);
    }
    console.log("달러값", getETHPriceInUSD(ethPrice, inputValue));
  };

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

  const handlePreventDefault = () => {
    console.log("test");
  };

  async function onSubmit(data) {
    alert("정말 기부하시겠습니까?");
    try {
      console.log("dadgasdgf", data.donation);
      const accounts = await web3.eth.getAccounts();
      const result = await campaignItem.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(data.donation, "ether"),
      });
      console.log("result", result);
      setAmountInUSD(null);
      reset("", {
        keepValues: false,
      });
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }
  // const saveUserInfo = (ethBalance, account, chainId) => {
  //     console.log("이동희");
  //     const userAccount = {
  //         account: account,
  //         balance: ethBalance,
  //         connectionid: chainId,
  //     };
  //     window.localStorage.setItem("userAccount", JSON.stringify(userAccount)); //user persisted data
  //     const userData = JSON.parse(localStorage.getItem("userAccount"));
  //     setUserInfo(userData);
  // };
  // console.log(getETHPrice()  )
  const [ethPrice, setEthPrice] = useState(0);

  useEffect(() => {
    async function getEth() {
      try {
        const result = await getETHPrice();
        setEthPrice(result);
      } catch (error) {
        console.log(error);
      }
    }
    getEth();
  }, []);

  async function onSubmit(data) {
    console.log("hello ", web3.utils.toWei(data.donation, "ether"));
    try {
      const accounts = await web3.eth.getAccounts();
      const result = await campaignItem.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(data.donation, "ether"),
      });
      console.log("result", result);
      setAmountInUSD(null);
      reset("", {
        keepValues: false,
      });
      setIsSubmitted(true);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }
  async function campaignInfo() {
    const summary = await campaignItem.methods.getSummary().call();
    setInfos(summary);
    setTargetEth(infos[11]);
    setBalanceEth(infos[1]);
    setProgress(balanceEth / targetEth);
    let tmpDate = new Date(parseInt(infos[6])).toLocaleString();
    console.log("tmp date", tmpDate);
    setDate(tmpDate);
  }
  useEffect(() => {
    campaignInfo();
  }, []);

  // console.log("겟이더", ethPrice);
  return (
    <>
      <NavigationBar />
      <div className="detail_header">
        {console.log("-", infos)}
        <div className="header_title">{infos[5]}</div>
        <div className="header_foundation">
          by {infos[4]} 백엔드에 미리 저장 요망
        </div>
      </div>
      <div className="detail_container">
        <div className="box_notion">
          <div className="notion_top">
            참여하면 Gorda에서 뱃지 NFT SoulBound를 제공!
          </div>
          <div className="notion_bottom">
            1ETH 이상 기부하는 분들께는 Honor 뱃지를 드립니다.
          </div>
        </div>
        <p className="p_title">{p_title}</p>
        <p className="p_content">{infos[9]}</p>
        <div
          className="p_image"
          style={{ backgroundImage: `url(${infos[10]})` }}
        ></div>
        <div className="image_description"></div>
        <p className="p_content">
          공란 == <br />
          <br />
        </p>
        <div className="circle_box">
          <div className="cl"></div>
          <div className="cl"></div>
          <div className="cl"></div>
        </div>
        {/* <div className="related_links">
          <div className="links_header">관련 링크</div>

          <li className="libox">예술활동이 청소년 비행 줄여준다(연구)</li>
          <li className="libox">청소년을 위한 공연예술축제</li>
        </div> */}
        <div className="eth_box">
          {console.log("balance", balanceEth)}
          <div className="now_eth">{balanceEth} eth</div>
          <div className="goal_eth">{targetEth} eth 목표</div>
          <div className="goal_progress">
            <Box sx={{ flexGrow: 1 }}>
              <div className="testPro">
                <div className="pro_gress">{progress}%</div>
                <BorderLinearProgress variant="determinate" value={progress} />
              </div>
            </Box>
          </div>
        </div>
        <div className="foundation">
          <div className="foundation_image"></div>
          <div className="foundation_profile">
            <div className="team">{team}</div>
            <div className="foundation_name">{foundation_name}</div>
          </div>
        </div>
        <div className="period">모금기간: 2022.08.31 ~ {date}</div>
        <div className="found_data" onClick={handleTap}>
          <i className="bx bxs-down-arrow"></i>
          {foundation_name}는?
          {openTap ? (
            <>
              <div>ㅎㅇ</div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="comment_section">
          <div className="section_title">마음을 나누는 댓글</div>
          <hr />
          <br />
          <form onSubmit={handlePreventDefault}>
            <div className="my_comment">
              <div className="my_badge"></div>
              <textarea
                onChange={checkValueLength}
                className="my_comment_box"
                maxLength="500"
                placeholder="댓글만 써도 마음이 전해집니다."
              />
            </div>
            <div className="comment_info">
              <div className="comment_count">{valueLength}/500</div>
              <button className="registBtn" type="submit">
                등록
              </button>
            </div>
          </form>
          <hr />
          <br />
          <div className="comment_list_section">
            <div className="comment_list_section_header">
              댓글 <span>{comment_list_count}</span>
            </div>
          </div>
          <hr />
          <br />
        </div>
        <div className="donation_menu">
          <div className="leftMenu">
            <div onClick={upCheerCount} className="cheer">
              <div className="cheering">
                <i className="bx bxs-heart"></i>
                <div className="cheer_text">응원</div>
              </div>
              <div className="cheer_count">{cheerCount}</div>
            </div>
            <div className="line"></div>
            <div className="share">
              <i className="bx bxs-share-alt"></i>
              공유
            </div>
          </div>
          <div onClick={handleOpen} className="rightMenu">
            <div className="rightMenu_text">기부하기</div>
          </div>
        </div>
        <div className="modal">
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modalTitle">기부금 결제</div>
                <div className="modalWallet">
                  내 지갑 잔액:
                  <span>{wallet_eth.toLocaleString("ko-KR")}eth</span>
                </div>
                <input
                  className="modalInput"
                  placeholder="기부할 금액"
                  type="number"
                  step="any"
                  {...register("donation", { required: true })}
                  isDisabled={formState.isSubmitting}
                  onChange={testinput}
                  min="0"
                  value={inputValue}
                />
                <div onClick={resetBtn} className="reinput">
                  다시 입력
                </div>
                <div className="modalCost">
                  <div className="donationCost">
                    <span>{inputValue}</span> eth
                  </div>
                  {inputValue ? (
                    <div className="dollar">
                      ~$ {getETHPriceInUSD(ethPrice, inputValue)}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="modal_p">당신의 마음을 표현해주세요</div>
                <button type="submit" className="donBtn">
                  기부하기
                </button>
              </form>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default DonationDetailPage;
