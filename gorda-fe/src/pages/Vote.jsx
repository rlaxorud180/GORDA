import "./Vote.scss";
import NavigationBar from "../components/NavigationBar";
import { useState, useEffect } from "react";
import apiInstance from "../api/Index";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import VoteListItem from "../components/Vote/VoteListItem";
import factory from "../smart-contract/vote-contract/factory";
import VoteItem from "../smart-contract/vote-contract/vote";
import axios from "axios";

function Vote() {
  let datemonth = new Date().getMonth() + 1;
  const [open, setOpen] = useState(false);
  const [voteList, setVoteList] = useState([0]);
  const [thisMonthVote, setThisMonthVote] = useState([0]);
  const [voteProps, setVoteProps] = useState([]);
  const [foundation, setFoundation] = useState([]);
  const api = apiInstance();
  // 이달의 기관 (전월 기록 희망 시 -1 뒤에 추가 변수 빼기 필요)
  const voteItem = VoteItem(voteList[voteList.length - 1]);
  const handleCalender = () => {
    setOpen((current) => !current);
  };

  const [month, setMonth] = useState(datemonth);

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  useEffect(() => {
    if (voteList) {
      async function callThisMonthVote() {
        const summary = await voteItem.methods.show().call();
        console.log("summary", summary);
        setThisMonthVote(summary);
      }
      callThisMonthVote();
    }
  }, [voteList]);

  useEffect(() => {
    async function callVoteList() {
      const tmp = await factory.methods.getDeployedVotes().call();
      setVoteList(tmp);
      console.log("voteList", voteList);
    }

    callVoteList();
  }, []);

  useEffect(() => {
    api
      .get("api/foundation")
      .then((res) => {
        console.log("투표리스트", res);
        setFoundation(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="vote_container">
        <div className="vote_header">
          {/* {thisMonthVote[0].length >= 1 ? (
            <div>
              {thisMonthVote[0].map((item) => (
                <h3>안녕하세요. {item} 입니다.</h3>
              ))}
            </div>
          ) : null} */}

          <br />

          <div className="vote_title">이달의 기관</div>
          {/* <div onClick={handleCalender} className="vote_arrow">
            <svg
              width="34"
              height="22"
              viewBox="0 0 34 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 1L13.6845 18.399C15.6974 21.2442 19.9306 21.2088 21.8957 18.3304L33.3707 1.52235"
                stroke="#444444"
              />
            </svg>
          </div>
          {open === true ? (
            <div className="forma">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 110 }}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={month}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value={1}>1월</MenuItem>
                  <MenuItem value={2}>2월</MenuItem>
                  <MenuItem value={3}>3월</MenuItem>
                  <MenuItem value={4}>4월</MenuItem>
                  <MenuItem value={5}>5월</MenuItem>
                  <MenuItem value={6}>6월</MenuItem>
                  <MenuItem value={7}>7월</MenuItem>
                  <MenuItem value={8}>8월</MenuItem>
                  <MenuItem value={9}>9월</MenuItem>
                  <MenuItem value={10}>10월</MenuItem>
                  <MenuItem value={11}>11월</MenuItem>
                  <MenuItem value={12}>12월</MenuItem>
                </Select>
              </FormControl>
            </div>
          ) : (
            ""
          )} */}
        </div>
        <hr className="hr_box" />
        <div className="vote_title">
          <div>지난 한달 동안</div>
          <div>여러분이 기부한 곳 중</div>
          <div>
            가장 <span className="title_box">투명하고 만족스러운</span> 기관에
          </div>
          <div>
            <span className="title_color">투표</span>해주세요
          </div>
        </div>
        <hr className="hr_box_2" />
        <div className="vote_list_p">지난 달 모금에 참여한 기관</div>
        <div className="vote_list">
          {foundation &&
            foundation.map((item, key) => {
              console.log("투표하는중~~", item);
              return (
                <VoteListItem
                  foundationName={item.foundationName}
                  foundationAccount={item.foundationAccount}
                  foundationLogo={item.foundationLogo}
                  foundationIdx={item.foundationIdx}
                  voteAddress={voteList[voteList.length - 1]}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Vote;
