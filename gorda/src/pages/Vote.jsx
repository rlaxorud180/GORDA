import "./Vote.scss";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import VoteListItem from "../components/Vote/VoteListItem";

function Vote() {
    let datemonth = new Date().getMonth() + 1;

    const [open, setOpen] = useState(false);

    const handleCalender = () => {
        setOpen((current) => !current);
    };

    console.log(open);

    const [month, setMonth] = useState(datemonth);

    const handleChange = (event) => {
        setMonth(event.target.value);
    };
    console.log(month);
    return (
        <>
            <NavigationBar />
            <div className="vote_container">
                <div className="vote_header">
                    <div className="vote_title">{month}월의 기관</div>
                    <div onClick={handleCalender} className="vote_arrow">
                        <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.375 1L13.6845 18.399C15.6974 21.2442 19.9306 21.2088 21.8957 18.3304L33.3707 1.52235" stroke="#444444" />
                        </svg>
                    </div>
                    {open === true ? (
                        <div className="forma">
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 110 }}>
                                <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={month} onChange={handleChange} label="Age">
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
                    )}
                </div>
                <hr className="hr_box" />
                <div className="vote_title">
                    <div>이 한달,</div>
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
                    {month === 1 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 2 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 3 ? (
                        <>
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 4 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 5 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 6 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 7 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 8 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 9 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 10 ? <></> : ""}
                    {month === 11 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                    {month === 12 ? (
                        <>
                            <VoteListItem />
                            <VoteListItem />
                            <VoteListItem />
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}

export default Vote;
