import "./VoteListItem.scss";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";
import Vote from "../../smart-contract/vote-contract/vote";
import web3 from "../../smart-contract/vote-contract/web3";

function VoteListItem(props) {
  const name = "이몽룡 재단";
  const [progress, setProgress] = useState(70);
  const [allvote, setAllVote] = useState();
  const [foundation1, setFoundation1] = useState([]);
  const [error, setError] = useState("");
  const [canVote, setCanVote] = useState(true);

  async function onClickBtn() {
    try {
      const accounts = await web3.eth.getAccounts();
      const vote = Vote(props.voteAddress);
      vote.options.address = props.voteAddress;

      const result = await vote.methods.vote(props.foundationAccount).send({
        from: accounts[0],
      });

      console.log(result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  useEffect(() => {
    const vote = Vote(props.voteAddress);
    console.log("djemfpem", vote.options.address);
    console.log("asfdjialsdf", props.voteAddress);
    console.log(" 보트", vote);
    async function checkIfVoted() {
      console.log("vote", vote);
      const accounts = await web3.eth.getAccounts();

      const check = await vote.methods.isVote().call();
      console.log("check", check);

      console.log(accounts[0]);
      if (check.includes(accounts[0])) {
        console.log("dd", check.includes(accounts[0]));
        setCanVote(false);
      }
      console.log("=--canvote", canVote);
    }

    checkIfVoted();
  }, [props]);

  return (
    <>
      <div className="vote_item_card">
        <a href="/vote/detail">
          <div className="cardImg"></div>
        </a>
        <div className="card_content">
          <div className="card_header">
            <div className="list_num">{props.foundationName}</div>
            <a href="/vote/detail">
              <div className="name"></div>
            </a>
          </div>
          {/* <div className="card_progress">
            <div className="card_label">{progress}%</div>
            <Box sx={{ width: "100%" }}>
              <div className="progress_label">{vote_num} 득표</div>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </div> */}
          <div className="card_btn">
            {canVote ? (
              <button onClick={onClickBtn} className="vote_btn">
                투표하기
              </button>
            ) : (
              <button onClick={onClickBtn} className="vote_btn" disabled>
                투표 불가
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VoteListItem;
