import { useState } from "react";
import LimitTerminal from "./LimitTerminal";
import axios from "axios";
// import Status from "/src/components/dashboardUI/Status.jsx";

const limitForm = document.querySelector(".limit__form");
const limitContainer = document.querySelector(".limit__container");
const limitTerminal = document.getElementById("limit__terminal");
const limitListOne = document.getElementById("limitListOne");

function Limit({ firstAccount, chooseAccount, chooseCompany, chooseLimit }) {
  const [account, setAccount] = useState("");
  const [company, setCompany] = useState("");
  const [limit, setLimit] = useState(0);

  const [showComponent, setShowComponent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account && company && limit) {
      setShowComponent(true);
      try {
        const response = await axios.post('http://localhost:3000/userDashbord/categories', {
          category: company,
          amount: limit
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
      //   limitTerminal.classList.remove("display-none");
    }

    limitListOne.innerHTML += `       
             <>
              <p>${props.company}</p>
              <p>${props.limit}</p>
            </>`;

    // Pass state to parent for Status component
    // if (account == firstAccount) {
    chooseAccount(account);
    chooseCompany(company);
    chooseLimit(limit);
    // }

    console.log("Account: ", account);
    console.log("Company: ", company);
    console.log("Limit: ", limit);
  };

  const handleClick = () => {
    // limitForm.classList.replace("marginBottomHelper", "marginBottomHelperNone");
    // if (company && limit) {
    //   limitTerminal.classList.remove("display-none");
    // }
    // console.log("clicked");
  };

  return (
    <div className="limit__container">
      <form className="limit__form marginBottomHelper" onSubmit={handleSubmit}>
        <div className="limit__headerText">Fee Manager</div>
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
            Company:
          </label>
          <input
            type="text"
            id="companyName"
            className="limit__formInputs"
            placeholder="Water Inc."
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="limit__num">
          <label className="limit__label" htmlFor="numValue">
            New limit:
          </label>
          <input
            type="number"
            id="limit"
            className="limit__formInputs"
            placeholder="Type a number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <button type="submit" onSubmit={handleSubmit} className="limit__button">
          Set Limit
        </button>
      </form>

      {showComponent && (
        <LimitTerminal companyName={company} limitNum={limit} />
      )}
    </div>
  );
}

export default Limit;
