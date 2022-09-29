import "./FactoryList.scss";

function FactoryList({ name, changeInput }) {
  return (
    <>
      <div className="factory_card">
        <div className="factoryImg"></div>
        <div className="factoryName">{name}</div>
        <div className="amount">
          <input
            type="text"
            className="amountInput"
            onChange={(event) => changeInput(event.target.value)}
          />
        </div>
        <div className="card_btn">
          <button className="selectBtn">선택하기</button>
        </div>
      </div>
    </>
  );
}

export default FactoryList;
