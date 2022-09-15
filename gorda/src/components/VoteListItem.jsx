import "./VoteListItem.scss";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from "react";


function VoteListItem() {
    const name = "이몽룡 재단";
    const [progress, setProgress] = useState(70);
    const [vote, setVote] = useState(0)
    const [allvote, setAllVote] = useState();
    const vote_num = vote.toLocaleString('ko-KR')
    const onClickBtn = () => {
        setVote(vote + 1)
    }
    
    return (
        <>
            <div className="vote_item_card">
                <div className="cardImg"></div>
                <div className="card_content">
                    <div className="card_header">
                        <div className="list_num">1</div>
                        <a href="/vote/detail">
                            <div className="name">{name}</div>
                        </a>
                    </div>
                    <div className="card_progress">
                        <div className="card_label">{progress}%</div>
                        <Box sx={{ width: '100%' }}>
                            <div className="progress_label">{vote_num} 득표</div>
                            <LinearProgress  variant="determinate" value={progress} />
                        </Box>
                    </div>
                    <div className="card_btn">
                        <button onClick={onClickBtn} className="vote_btn">투표하기</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VoteListItem;
