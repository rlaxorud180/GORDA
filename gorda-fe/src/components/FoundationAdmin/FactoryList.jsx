import { useState } from "react";
import "./FactoryList.scss";

function FactoryList({ idx, name, changeInput }) {
  const [tmpData, setTmpData] = useState(0);

  const changeTmpData = (e) => {
    setTmpData(e.target.value);
  };
  return (
    <>
      <div className="factory_card">
        <div className="factoryName">{name}</div>
        <div className="amount">
          <input
            type="text"
            className="amountInput"
            onChange={(e) => changeTmpData(e)}
          />
        </div>
        <div className="card_btn">
          <input
            type="checkbox"
            className="selectBtn"
            onClick={() => changeInput([idx, tmpData])}
          />
        </div>
      </div>
    </>
  );
}

export default FactoryList;
