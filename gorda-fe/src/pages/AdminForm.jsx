import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  getETHPrice,
  getETHPriceInUSD,
} from "../smart-contract/donate-contract/lib/getETHPrice";
import factory from "../smart-contract/donate-contract/factory";
import web3 from "../smart-contract/donate-contract/web3";
import NavigationBar from "../components/NavigationBar";
import "./AdminForm.scss";
import FactoryList from "../components/FoundationAdmin/FactoryList";
import axios from "axios";

function AdminForm() {
  const [error, setError] = useState("");
  const [targetInUSD, setTargetInUSD] = useState();
  const [minContriInUSD, setMinContriInUSD] = useState();
  const [ETHPrice, setETHPrice] = useState(0);
  const [foundation, setFoundation] = useState([]);
  const [selectedFoundation, setSelectedFoundation] = useState([]);
  const [selectedAmounts, setSelectedAmounts] = useState([]);
  // const [companyArr, setCompanyArr] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
  });

  async function onSubmit(data) {
    console.log(
      data.destination,
      data.amounts,
      web3.utils.toWei(data.minimumContribution, "ether"),
      "accounts",
      data.campaignName,
      data.category,
      data.date,
      data.description,
      data.imageUrl,
      web3.utils.toWei(data.target, "ether")
    );
    try {
      const accounts = await web3.eth.getAccounts();
      const timeStamp = parseInt(new Date(data.date).getTime() / 1000);
      const result = await factory.methods
        .createCampaign(
          [
            "0xA3A14BCa06E4Ca15522C56c09e654DB8422A922e",
            "0x46BC02098eb6A22cffAa8dD24F819fE5F6f58aE9",
          ],
          [30, 70],
          web3.utils.toWei(data.minimumContribution, "ether"),
          accounts[0],
          data.campaignName,
          data.category,
          timeStamp,
          data.description,
          data.imageUrl,
          web3.utils.toWei(data.target, "ether")
        )
        .send({
          from: accounts[0],
        });
      console.log("result", result);

      const newCampaign = await factory.methods.getDeployedCampaigns().call();
      console.log("new", newCampaign);
      const now = new Date();

      console.log("보내는 데이터 ", {
        donationAccount: newCampaign[newCampaign.length - 1],
        donationContent: data.description,
        donationEndDate: data.date,
        donationLike: 0,
        donationLogo: data.imageUrl,
        donationStartDate: now,
        donationSubject: data.category,
        foundationIdx: data.foundation,
      });

      axios({
        headers: {},
        url: "http://localhost:8080/api/donation/regist",
        method: "POST",
        data: {
          donationAccount: newCampaign[newCampaign.length - 1],
          donationContent: data.description,
          donationEndDate: data.date,
          donationLike: 0,
          donationLogo: data.imageUrl,
          donationStartDate: now,
          donationSubject: data.category,
          foundationIdx: data.foundation,
        },
      })
        .then((res) => {
          console.log("리스폰스 데이터", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  useEffect(() => {
    axios({
      headers: {},
      url: "http://localhost:8080/api/foundation",
      method: "GET",
    })
      .then((res) => {
        console.log("파운데이션 목록", res.data.data);
        setFoundation(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [inputValue, setInputValue] = useState([]);

  const changeInput = (value) => {
    console.log(inputValue);
    const tmpIdx = inputValue.findIndex((e) => e === value);

    if (tmpIdx >= 0) {
      inputValue.splice(tmpIdx, 1);
    } else {
      setInputValue((inputValue) => [...inputValue, value]);
    }
  };

  const companyArr = [
    {
      companyIdx: "124",
      name: "옥수수",
      address: "0xA3A14BCa06E4Ca15522C56c09e654DB8422A922e",
    },
    {
      companyIdx: "1241",
      name: "학용품",
      address: "0xA3A14BCa06E4Ca15522C56c09e654DB8422A922e",
    },
    {
      companyIdx: "1234",
      name: "인건비",
      address: "0xA3A14BCa06E4Ca15522C56c09e654DB8422A922e",
    },
  ];
  return (
    <>
      <NavigationBar />
      <div className="form_container">
        <div className="form_title">기관 모금 게시글 작성</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select
            id="categories"
            {...register("foundation", { required: true })}
            isDisabled={isSubmitting}
          >
            <option value="">기관 선택</option>

            {foundation.map((item) => {
              return (
                <option value={item.foundationIdx}>
                  {item.foundationName}
                </option>
              );
            })}
          </select>
          <input
            className="titleinput"
            placeholder="제목"
            {...register("campaignName", { required: true })}
            isDisabled={isSubmitting}
          />
          <div className="datecontainer">
            <input
              className="dateinput"
              placeholder="날짜"
              type="date"
              {...register("date", { required: true })}
              isDisabled={isSubmitting}
            />
          </div>

          <select
            id="categories"
            {...register("category", { required: true })}
            isDisabled={isSubmitting}
          >
            <option value="">카테고리 선택</option>
            <option value="hunger">기아</option>
            <option value="environment">환경</option>
            <option value="poor">빈곤</option>
            <option value="aged">노인</option>
          </select>
          <input
            className="titleinput"
            placeholder="미니멈컨트리뷰션"
            type="number"
            step="any"
            {...register("minimumContribution", { required: true })}
            isDisabled={isSubmitting}
            onChange={(e) => {
              setMinContriInUSD(Math.abs(e.target.value));
            }}
            min="0"
          />
          <input
            className="titleinput"
            placeholder="타겟 머니"
            type="number"
            step="any"
            {...register("target", { required: true })}
            isDisabled={isSubmitting}
            onChange={(e) => {
              setTargetInUSD(Math.abs(e.target.value));
            }}
            min="0"
          />
          <input
            className="titleinput"
            placeholder="이미지"
            {...register("imageUrl", { required: true })}
            isDisabled={isSubmitting}
            type="url"
          />
          <textarea
            className="textareainput"
            placeholder="디스크립션"
            {...register("description", { required: true })}
            isDisabled={isSubmitting}
          />
          <div className="btnContainer">
            <a href="#DonationManage" className="nextBtn">
              다음
            </a>
          </div>
          <section id="DonationManage">
            <div className="manage_container">
              <div className="manage_title">모금액 사용처</div>
              <div className="selection">운반/운송/식품 업체 선택</div>
              <hr className="hr" />
              <div className="manage_list">
                <FactoryList
                  key={companyArr[0].companyIdx}
                  name={companyArr[0].name}
                  changeInput={changeInput}
                />
              </div>
            </div>
          </section>
          <div className="createBtn">
            <button type="submit" className="createBtn">
              작성하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminForm;
