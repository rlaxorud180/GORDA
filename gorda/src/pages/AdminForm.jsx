import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getETHPrice, getETHPriceInUSD } from "../smart-contract/lib/getETHPrice";
import factory from "../smart-contract/factory";
import web3 from "../smart-contract/web3";
import NavigationBar from "../components/NavigationBar";
import "./AdminForm.scss";
import FactoryList from "../components/FoundationAdmin/FactoryList";

function AdminForm() {
    //   const wallet = useWallet();
    const [error, setError] = useState("");
    const [targetInUSD, setTargetInUSD] = useState();
    const [minContriInUSD, setMinContriInUSD] = useState();
    const [ETHPrice, setETHPrice] = useState(0);

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
            parseInt(data.amounts),
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
            await factory.methods
                .createCampaign(
                    [data.destination1, data.destination2],
                    [1, 4],
                    web3.utils.toWei(data.minimumContribution, "ether"),
                    accounts[0],
                    data.campaignName,
                    data.category,
                    20220303,
                    data.description,
                    data.imageUrl,
                    web3.utils.toWei(data.target, "ether")
                )
                .send({
                    from: accounts[0],
                });
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }

    // const handlePrevent = (e) => {
    //   e.preventDefault();
    //   console.log(e);
    // };

    return (
        <>
            <NavigationBar />
            <div className="form_container">
                <div className="form_title">기관 모금 게시글 작성</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input placeholder="받는 사람들" {...register("destination1", { required: true })} isDisabled={isSubmitting} />
                    <input type="number" placeholder="받는 사람들 얼마 주니?" {...register("amounts", { required: true })} isDisabled={isSubmitting} />
                    <input placeholder="받는 사람들" {...register("destination2", { required: true })} isDisabled={isSubmitting} />
                    <input type="number" placeholder="받는 사람들 얼마 주니?" {...register("amounts", { required: true })} isDisabled={isSubmitting} />
                    <button>
                        <h3>추가</h3>
                    </button> */}
                    <input className="titleinput" placeholder="제목" {...register("campaignName", { required: true })} isDisabled={isSubmitting} />
                    <div className="datecontainer">
                        <input className="dateinput" placeholder="날짜" type="date" {...register("date", { required: true })} isDisabled={isSubmitting} />
                    </div>

                    <select id="categories" {...register("category", { required: true })} isDisabled={isSubmitting}>
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
                    <input className="titleinput" placeholder="이미지" {...register("imageUrl", { required: true })} isDisabled={isSubmitting} type="url" />
                    <textarea className="textareainput" placeholder="디스크립션" {...register("description", { required: true })} isDisabled={isSubmitting} />

                    {/* <input
                        placeholder="카테고리"
                        {...register("category", { required: true })}
                        isDisabled={isSubmitting}
                      /> */}
                    {/* <div className="datecontainer">
                        <input className="dateinput" id="currentDate" type="date" />
                        <input className="dateinput" type="date" />
                      </div> */}

                    <div className="btnContainer">
                        <a href="#DonationManage" className="nextBtn">
                            다음
                        </a>
                    </div>
                    {error ? <h1>wrong </h1> : null}
                    <section id="DonationManage">
                        <div className="manage_container">
                            <div className="manage_title">관리 기관명</div>
                            <div className="selection">운반/운송/식품 업체 선택</div>
                            <hr className="hr" />
                            <div className="manage_list">
                                <FactoryList />
                                <FactoryList />
                                <FactoryList />
                                <FactoryList />
                                <FactoryList />
                                <FactoryList />
                                <FactoryList />
                                <FactoryList />
                                <FactoryList />
                            </div>
                        </div>
                    </section>

                    <div className="button_container">
                        <a href="#pageCost" type="submit" className="submit_Btn">
                            다음
                        </a>
                    </div>
                    <section id="pageCost">
                        <div className="pageCost_container">
                            <div className="cost_title">기부 관리</div>
                            <div className="cost_input_header">금액 배분 입력</div>
                            <hr className="hr" />
                            <div className="cost_list"></div>
                        </div>
                    </section>
                    <div className="createBtn">
                        <button type="submit" className="createBtn">
                            작성하기
                        </button>
                    </div>
                </form>
                {/* <form action="" onSubmit={handlePrevent}>
          <input type="text" placeholder="데스티네이션 입력" />
          <input className="titleinput" type="text" placeholder="어마운트" />
          <input type="text" placeholder="이미지" />
          <input className="titleinput" type="text" placeholder="타겟" />
          <input className="titleinput" type="text" placeholder="어마운트" />
          <input type="text" placeholder="이미지" />
          <input className="titleinput" type="text" placeholder="타겟" />

          <input className="titleinput" type="text" placeholder="제목 입력" />
          <div className="datecontainer">
            <input className="dateinput" id="currentDate" type="date" />
            <input className="dateinput" type="date" />
          </div> */}
                {/* <select id="categories">
            <option value="">카테고리 선택</option>
            <option value="hunger">기아</option>
            <option value="environment">환경</option>
            <option value="poor">빈곤</option>
            <option value="aged">노인</option>
          </select> */}
                {/* <div className="eth_input">
            <input type="text" placeholder="최소 기부금 : eth" />
            <input type="text" placeholder="목표 기부금 : eth" />
          </div>
          <div className="editor">에디터 쓸 예정</div>
          <input type="text" />
          <div className="button_container">
            <a href="#DonationManage" type="submit" className="submit_Btn">
              다음
            </a>
          </div>
          <section id="DonationManage">
            <div className="manage_container">
              <div className="manage_title">관리 기관명</div>
              <div className="selection">운반/운송/식품 업체 선택</div>
              <hr className="hr" />
              <div className="manage_list">
                <FactoryList />
                <FactoryList />
                <FactoryList />
                <FactoryList />
                <FactoryList />
                <FactoryList />
                <FactoryList />
                <FactoryList />
                <FactoryList />
              </div>
            </div>
          </section> */}
                {/* </form> */}
            </div>
        </>
    );
}

export default AdminForm;
