import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import NavigationBar from "../components/NavigationBar";
import "./DonationDetailPage.scss";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
// import { getETHPrice, getETHPriceInUSD } from "../lib/GetEtherPrice";
import Modal from "@mui/material/Modal";
import Campaign from "../smart-contract/donate-contract/campaign";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

import Web3 from "web3";
import web3 from "../smart-contract/donate-contract/web3";
import apiInstance from "../api/Index";

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
  const api = apiInstance();
  const team = "프로젝트팀";
  const foundation_name = "킹니셰프한국위원회";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [infos, setInfos] = useState({
    donationIdx:
      "f8ef9f089d14a37e9c540fd903a7543e661a80cdd63f3e3e2d00f79558c9b9da",
    foundationIdx:
      "1f42d8a83d86b4e2c91f0f66c3dc79b35bad41dce2ae86f996d48556b9c153df",
    donationLogo:
      "http://newsimg.hankookilbo.com/2017/01/09/201701091433285687_1.jpg",
    donationName: "기아대책",
    donationSubject: "hunger",
    donationAccount: "0xeb25b55CFA479F7a7C9e8A618f42e9F241AE5c24",
    donationContent: "홈리스를 위한 기부",
    donationLike: 0,
    donationTargetEth: 3000000000000000000,
    donationCurrentEth: 3000000000000000000,
    donationStartDate: "2022-10-05T06:15:25.658",
    donationEndDate: "2022-11-02T00:00:00",
  });
  const [error, setError] = useState("");
  const [targetInUSD, setTargetInUSD] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [amountInUSD, setAmountInUSD] = useState();
  const [targetEth, setTargetEth] = useState("");
  const [balanceEth, setBalanceEth] = useState("");
  const [date, setDate] = useState("");
  const id = useParams();
  const [address, setAddress] = useState("");
  const [foundation, setFoundation] = useState([]);
  const campaignItem = Campaign(infos.donationAccount);
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
      const myIdx = localStorage.getItem("idx");

      const accounts = await web3.eth.getAccounts();
      setLoading(true);
      setOpen(false);

      const result = await campaignItem.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(String(data.donation), "ether"),
      });
      console.log("result", result);
      setAmountInUSD(null);
      reset("", {
        keepValues: false,
      });
      setIsSubmitted(true);

      api
        .post("api/my_donation/regist", {
          donationIdx: infos.donationIdx,
          myDonationAmount: web3.utils.toWei(String(data.donation), "ether"),
          myDonationName: "공백",
          userIdx: myIdx,
        })
        .then((res) => {
          console.log("성공");
          navigate("/dnlist");
        })
        .catch((e) => {
          console.log(e);
        });

      const config = { headers: { "Content-Type": "application/json" } };
      api
        .put(
          `api/donation/${infos.donationIdx}`,
          web3.utils.toWei(String(data.donation), "ether"),
          config
        )
        .then((res) => {
          console.log("===성공", res.data);
          setLoading(false);
          navigate("/dnlist");
        })
        .catch((e) => {
          console.log(e);
        });
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
  // const [ethPrice, setEthPrice] = useState(0);

  // useEffect(() => {
  //   async function getEth() {
  //     try {
  //       const result = await getETHPrice();
  //       setEthPrice(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getEth();
  // }, []);

  // async function onSubmit(data) {
  // console.log("hello ", web3.utils.toWei(data.donation, "ether"));
  // try {
  //   const accounts = await web3.eth.getAccounts();
  //   const result = await campaignItem.methods.contribute().send({
  //     from: accounts[0],
  //     value: web3.utils.toWei(data.donation, "ether"),
  //   });
  //   console.log("result", result);
  //   setAmountInUSD(null);
  //   reset("", {
  //     keepValues: false,
  //   });
  //   setIsSubmitted(true);
  // } catch (err) {
  //   setError(err.message);
  //   console.log(err);
  // }
  // }

  // useEffect(() => {
  //   async function campaignInfo() {
  //     const summary = await campaignItem.methods.getSummary().call();
  //     setInfos(summary);
  //     console.log("ssummary", summary);
  //     setTargetEth(infos[11]);
  //     setBalanceEth(infos[1]);
  //     setProgress(balanceEth / targetEth);
  //     let tmpDate = new Date(parseInt(infos[6])).toLocaleString();
  //     console.log("tmp date", tmpDate);
  //     setDate(tmpDate);
  //   }
  //   campaignInfo();
  // }, [balanceEth]);

  useEffect(() => {
    api
      .get(`api/donation/${id.campaignid}`)
      .then((res) => {
        setInfos(res.data.data);
        console.log("==", res.data.data.donationCurrentEth);
        console.log("==", res.data.data.donationTargetEth);

        setProgress(
          (res.data.data.donationCurrentEth / res.data.data.donationTargetEth) *
            100
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (infos) {
      api
        .get(`api/foundation/${infos.foundationIdx}`)
        .then((res) => {
          setFoundation(res.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [infos]);

  return (
    <>
      <NavigationBar />
      {loading ? (
        <CircularProgress
          style={{
            position: "fixed",
            top: "47%",
            left: "47%",
          }}
          size={100}
        />
      ) : null}
      <div className="detail_header">
        <div className="header_title">{infos.donationName}</div>
        <div className="header_foundation">by {foundation.foundationName}</div>
      </div>
      <div className="detail_container">
        <div className="box_notion">
          <div className="notion_top">
            참여하면 Gorda에서 뱃지 SoulBound를 제공!
          </div>
          <div className="notion_bottom">
            1ETH 이상 기부하는 분들께는 Honor 뱃지를 드립니다.
          </div>
        </div>
        <p className="p_content">{infos.donationContent}</p>

        <div className="eth_box">
          {console.log("balance", balanceEth)}
          <div className="now_eth">
            {web3.utils.fromWei(infos.donationCurrentEth.toString(), "ether")}
            eth
          </div>
          {console.log("타겟어마운드", infos.donationCurrentEth)}
          <div className="goal_eth">
            {web3.utils.fromWei(infos.donationTargetEth.toString(), "ether")}{" "}
            eth 목표
          </div>
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
          {console.log("asdfas", infos.donationLogo)}
          <div
            className="foundation_image"
            style={{ backgroundImage: `url(${infos.donationLogo})` }}
          ></div>
          <div className="foundation_profile">
            <div className="team">주최기관</div>
            <div className="foundation_name">{foundation.foundationName}</div>
          </div>
        </div>
        <div className="period">
          모금기간: {infos.donationStartDate.substr(0, 10)} ~
          {infos.donationEndDate.substr(0, 10)}
        </div>
        <div className="found_data" onClick={handleTap}>
          <i className="bx bxs-down-arrow"></i>
          {foundation.foundationName}는?
          {openTap ? (
            <>
              <div>{foundation.foundationContent}</div>
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
                      {/* ~$달러 {getETHPriceInUSD(ethPrice, inputValue)} */}
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
