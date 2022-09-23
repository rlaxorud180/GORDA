import "./MypageCommentList.scss";

function MypageCommentList() {
    const comment_list_1 = "제 11회 대구여성영화제 함께 해주세요!";
    const comment = "응원합니다!";
    return (
        <>
            <div className="comment_list">
                <div className="box_tag">모금함</div>
                <div className="comment_list_title">{comment_list_1}</div>
            </div>
            <div className="comment_box">{comment}</div>
            <div className="comment_time_like">
                <div className="comment_time">방금 전</div>
                <div className="comment_like">
                    <div className="comment_heart">
                        <i className="bx bxs-heart"></i>좋아요
                    </div>
                    <div className="comment_delete">삭제</div>
                </div>
            </div>
        </>
    );
}
export default MypageCommentList;
