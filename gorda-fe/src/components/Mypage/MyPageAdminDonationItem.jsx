import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import web3 from "../../smart-contract/vote-contract/web3";
import Campaign from "../../smart-contract/donate-contract/campaign";
import "./MyPageAdminDonationItem.scss";

function MyPageAdminDonationItem(props) {
  const [expired, setExpired] = useState(false);
  const [error, setError] = useState("");
  console.log("props account", props.title, props.account);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
  });

  async function onSubmit(data) {
    const campaign = Campaign(props.account);

    try {
      const accounts = await web3.eth.getAccounts();

      const resulte = await campaign.methods
        .createRequest("안녕하세요. 돈 좀 주세요")
        .send({
          from: accounts[0],
        });
      console.log("출력밧", resulte);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  async function onApprove() {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      const campaign = Campaign(props.account);

      const result = await campaign.methods.approveRequest(0).send({
        from: accounts[0],
      });
      console.log("result", result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  async function onFinalize() {
    try {
      const accounts = await web3.eth.getAccounts();
      console.log("accounts", accounts);
      const campaign = Campaign(props.account);

      const result = await campaign.methods.finalizeRequest(0).send({
        from: accounts[0],
      });
      console.log("result", result);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  }

  useEffect(() => {
    const now = new Date();
    const deadline = new Date(props.end);
    if (deadline <= now) {
      if (props.eth >= props.target) {
        setExpired(true);
      }
    }

    async function hello() {
      try {
        const accounts = await web3.eth.getAccounts();
        console.log("accounts", accounts);
        const campaign = Campaign(props.account);

        const result = await campaign.methods.getSummary().call();
        console.log("result", result);
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
    }
    hello();
  }, []);

  return (
    <>
      <div className="item_date">{props.date}</div>
      <div className="item_title">{props.title}</div>
      <div className="block">
        <div className="item_eth">
          {props.eth} / {props.target} eth
        </div>
        <div className="item_donation">
          &nbsp; {((props.eth / props.target) * 100).toFixed(1)}%&nbsp;참여
        </div>
      </div>

      {/* {expired ? ( */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="titleinput"
            placeholder="%"
            {...register("percent", { required: true })}
            isDisabled={isSubmitting}
            type="number"
          />
          <button type="submit">출금 요청</button>
        </form>
        <button type="button" onClick={onFinalize}>
          파이널라이즈
        </button>
      </div>
      {/* ) : null} */}
      <hr className="dashedhr" />
    </>
  );
}

export default MyPageAdminDonationItem;
