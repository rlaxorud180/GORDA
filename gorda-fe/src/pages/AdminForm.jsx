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
  const [company, setCompany] = useState([]);
  const [inputValue, setInputValue] = useState([]);

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
    const tmpCompanyArr = [];
    const tmpAmountArr = [];

    for (let i = 0; i < inputValue.length; i++) {
      tmpCompanyArr.push(inputValue[i][0]);
      tmpAmountArr.push(inputValue[i][1]);
    }
    console.log(
      tmpCompanyArr,
      tmpAmountArr,
      web3.utils.toWei(data.minimumContribution, "ether"),
      "accounts",
      data.campaignName,
      data.category,
      new Date(data.date),
      data.description,
      data.imageUrl,
      web3.utils.toWei(data.target, "ether")
    );
    try {
      const accounts = await web3.eth.getAccounts();
      const timeStamp = parseInt(new Date(data.date).getTime() / 1000);
      const result = await factory.methods
        .createCampaign(
          tmpCompanyArr,
          tmpAmountArr,
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
        url: "http://j7a307.p.ssafy.io:8080/api/donation/regist",
        method: "POST",
        data: {
          donationAccount: newCampaign[newCampaign.length - 1],
          donationContent: data.description,
          donationEndDate: new Date(data.date),
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
      url: "http://j7a307.p.ssafy.io:8080/api/company",
      method: "GET",
    })
      .then((res) => {
        console.log("컴퍼니 목록", res.data.data);
        setCompany(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios({
      headers: {},
      url: "http://j7a307.p.ssafy.io:8080/api/foundation",
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
  console.log(inputValue);
  const changeInput = (value) => {
    let done = 0;

    for (let i = 0; i < inputValue.length; i++) {
      let cnt = 0;
      for (let j = 0; j < inputValue[i].length; j++) {
        if (inputValue[i][j] === value[j]) {
          cnt = cnt + 1;
        }
        if (cnt === 2) {
          console.log("삭제할 것", inputValue[i], value);
          let tmpArr = inputValue;
          let tmpValue = tmpArr.splice(i, 1);
          setInputValue(tmpArr);
          done = done + 1;
          break;
        }
      }
      if (done === 1) {
        break;
      }
    }

    if (done === 0) {
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

            {foundation.map((item, key) => {
              return (
                <option key={key} value={item.foundationAccount}>
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
                {company.map((item, key) => {
                  return (
                    <FactoryList
                      idx={item.companyAccount}
                      name={item.companyName}
                      changeInput={changeInput}
                    />
                  );
                })}
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
