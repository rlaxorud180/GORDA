import { useState } from "react";
import DonationListCard from "../components/DonationListCard";
import NavigationBar from "../components/NavigationBar";
import './DonationList.scss'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function DonationList() {
    const [count, setCount] = useState('47,398,495')
    return (
        <>
            <NavigationBar />
            <div className="donationlist_container">
                {/* <div className="page_header">
                    <div className="header_p">
                        <div>당신의 착한 마음을</div>
                        <div>Gorda가 응원합니다 <span><i className='bx bxs-heart' ></i></span></div>
                    </div>
                    <div className="donationCount">
                        <i className='bx bxs-heart-circle'></i>
                        <div className="countbox">기부 {count}건</div>
                    </div>
                </div>
                <div className="page_card">
                    <DonationListCard />
                    <div className="bannercard">
                        배너배너배너
                    </div>
                </div> */}
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                        <div className="left_side">
                            <div className="header_p">
                                <div>당신의 착한 마음을</div>
                                <div>Gorda가 응원합니다 <span><i className='bx bxs-heart' ></i></span></div> 
                            </div>
                            <div className="page_card">
                                <DonationListCard />
                            </div>
                        </div>
                        </Grid>
                        <Grid item xs={4}>
                        <div className="right_side">
                            <div className="donationCount">
                                <i className='bx bxs-heart-circle'></i>
                                <div className="countbox">기부 {count}건</div>
                            </div>
                            <div className="bannerCard">
                                배너배너배너
                            </div>
                        </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default DonationList;