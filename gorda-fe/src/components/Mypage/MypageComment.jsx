import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getComment } from "../../api/Comment";
import "./MypageComment.scss";
import MypageCommentList from "./MypageCommentList";

function MypageComment() {
  const [comment, setComment] = useState([]);
  console.log(comment);
  const getCommentCnt = async () => {
    await getComment(
      { userIdx: localStorage.getItem("idx") },
      (response) => {
        setComment(response.data.data);
        console.log(comment);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    getCommentCnt();
  }, []);

  return (
    <>
      <div className="comment_container">
        <div className="comment_title">
          내 댓글 <span>{comment.length}</span>
        </div>
        {comment.map((value, index) => (
          <Link to={`/detail/${comment[index].donationIdx}`}>
            <MypageCommentList
              index={index}
              donationIdx={comment[index].donationIdx}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MypageComment;
