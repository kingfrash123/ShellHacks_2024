import { useState } from "react";

function Transactions() {
  const [account, setAccount] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Account: ", account);
    console.log("Category: ", category);
    console.log("Amount: ", amount);
  };

  /*
  const handleClick = () => {
    // limitForm.classList.replace("marginBottomHelper", "marginBottomHelperNone");
    // if (company && limit) {
    //   limitTerminal.classList.remove("display-none");
    // }
    // console.log("clicked");
  };
*/

  return (
    <div className="limit__container">
      <form className="limit__form marginBottomHelper" onSubmit={handleSubmit}>
        <div className="limit__headerText">Insert New Transactions</div>
        <div className="limit__company">
          <label className="limit__label" htmlFor="email">
            Account:
          </label>
          <input
            type="text"
            id="companyName"
            className="limit__formInputs"
            placeholder="Bank Account Name"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
        <div className="limit__company">
          <label className="limit__label" htmlFor="email">
            Category:
          </label>
          <input
            type="text"
            id="companyName"
            className="limit__formInputs"
            placeholder="Books, Clothes, etc..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="limit__num">
          <label className="limit__label" htmlFor="numValue">
            Amount:
          </label>
          <input
            type="number"
            id="limit"
            className="limit__formInputs"
            placeholder="Type a number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit" onSubmit={handleSubmit} className="limit__button">
          Set Limit
        </button>
      </form>
    </div>
  );
}

export default Transactions;
