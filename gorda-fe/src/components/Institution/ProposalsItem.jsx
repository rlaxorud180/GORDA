import './ProposalsItem.scss'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from "react";
function ProposalsItem() {
    const title = '철창 안에 갇혀버린 동물들에게 자유를!'
    const name = '이몽룡 재단'
    const [eth, setEth] = useState(100000)
    const goal_eth = eth.toLocaleString('ko-KR')
    const [progress, setProgress] = useState(20);
    return (
        <>
            <div className="proposal_container">
                <div className="proposal_image"></div>
                <div className="proposal_title">{title}</div>
                <div className="proposal_name">{name}</div>
                <div className="proposal_prs">
                    <Box sx={{ width: '50%' }}>
                        <LinearProgress  variant="determinate" value={progress} />
                    </Box>
                    <div className="proposal_goal">{goal_eth}eth</div>      
                </div> 
            </div>
        </>
    )
}

export default ProposalsItem;