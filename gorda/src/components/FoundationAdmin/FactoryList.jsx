import "./FactoryList.scss";

function FactoryList() {
    const factoryName = "업체";
    return (
        <>
            <div className="factory_card">
                <div className="factoryImg"></div>
                <div className="factoryName">{factoryName}</div>
                <div className="amount">
                    <input type="text" className="amountInput" />
                </div>
                <div className="card_btn">
                    <button className="selectBtn">선택하기</button>
                </div>
            </div>
        </>
    );
}

export default FactoryList;
