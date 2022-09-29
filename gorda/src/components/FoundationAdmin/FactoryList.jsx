import "./FactoryList.scss";

function FactoryList() {
    const factoryName = "업체";
    return (
        <>
            <div className="factory_card">
                <div className="factoryImg"></div>
                <div className="factoryName">{factoryName}</div>
                <input type="text" />
                <div className="card_btn">
                    <button className="selectBtn">선택하기</button>
                </div>
            </div>
        </>
    );
}

export default FactoryList;
