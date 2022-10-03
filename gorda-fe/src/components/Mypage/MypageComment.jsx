import "./MypageComment.scss";
import MypageCommentList from "./MypageCommentList";

function MypageComment() {
    const comment_count = 2;

    return (
        <>
            <div className="comment_container">
                <div className="comment_title">
                    댓글 <span>{comment_count}</span>
                </div>
                <MypageCommentList />
                <MypageCommentList />
                <MypageCommentList />
            </div>
        </>
    );
}

export default MypageComment;
