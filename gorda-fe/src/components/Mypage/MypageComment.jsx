import { useEffect, useState } from "react";
import { getComment } from "../../api/Comment";
import "./MypageComment.scss";
import MypageCommentList from "./MypageCommentList";

function MypageComment() {
    const [comment, setComment] = useState([""]);

    const getCommentCnt = async() => {
        await getComment({userIdx: localStorage.getItem("idx")},
        (response) => {
            setComment(response.data.data);
        },
        (err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        getCommentCnt();
    }, [])

    return (
        <>
            <div className="comment_container">
                <div className="comment_title">
                    내 댓글 <span>{comment.length}</span>
                </div>
                
                {comment.map((value, index) => (
                    <MypageCommentList 
                    index = {index}
                    donationIdx = {comment[index].donationIdx}
                />
                ))}
            </div>
        </>
    );
}

export default MypageComment;
