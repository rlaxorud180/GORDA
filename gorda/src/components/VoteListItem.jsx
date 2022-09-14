import "./VoteListItem.scss";

function VoteListItem() {
    const name = "이몽룡 재단";
    return (
        <>
            <div className="vote_item_card">
                <div className="cardImg"></div>
                <div className="card_content">
                    <div className="card_header">
                        <div className="list_num">1</div>
                        <div className="name">{name}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VoteListItem;
