import NavigationBar from "../components/NavigationBar";
import "./AdminForm.scss";
import FactoryList from "../components/FoundationAdmin/FactoryList";

function AdminForm() {
    const handlePrevent = (e) => {
        e.preventDefault();
        console.log("클릭 됨");
    };

    return (
        <>
            <NavigationBar />
            <div className="form_container">
                <div className="form_title">기관 모금 게시글 작성</div>
                <form action="" onSubmit={handlePrevent}>
                    <input className="titleinput" type="text" placeholder="제목 입력" />
                    <div className="datecontainer">
                        <input className="dateinput" id="currentDate" type="date" />
                        <input className="dateinput" type="date" />
                    </div>
                    <select id="categories">
                        <option value="">카테고리 선택</option>
                        <option value="hunger">기아</option>
                        <option value="environment">환경</option>
                        <option value="poor">빈곤</option>
                        <option value="aged">노인</option>
                    </select>
                    <div className="eth_input">
                        <input type="text" placeholder="최소 기부금 : eth" />
                        <input type="text" placeholder="목표 기부금 : eth" />
                    </div>
                    <div className="editor">에디터 쓸 예정</div>
                </form>
                <div className="button_container">
                    <a href="#DonationManage">
                        <button type="submit" className="submit_Btn">
                            다음
                        </button>
                    </a>
                </div>
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
                <div className="button_container">
                    <a href="#pageCost">
                        <button type="submit" className="submit_Btn">
                            다음
                        </button>
                    </a>
                </div>
            </section>
            <section id="pageCost">
                <div className="pageCost_container">
                    <div className="cost_title">기부 관리</div>
                    <div className="cost_input_header">금액 배분 입력</div>
                    <hr className="hr" />
                    <div className="cost_list"></div>
                </div>
            </section>
        </>
    );
}

export default AdminForm;
