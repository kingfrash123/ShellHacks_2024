import { useState } from "react";
import axios from "axios";

function Transactions() {
  const [account, setAccount] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (account && category && amount) {
      try {
        const response = await axios.post('http://localhost:3000/inputTransactions/input', {
          account: account,
          category: category,
          price: amount
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    console.log("Account: ", account);
    console.log("Category: ", category);
    console.log("Amount: ", amount);
  };

  const handleMockData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/randTransactions/generate');
      console.log('Mock Data Response:', response.data);
    } catch (error) {
      console.error('Error fetching mock data:', error);
    }
  };

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
        <button type="submit" className="limit__button">
          Set Limit
        </button>
        <button type="button" onClick={handleMockData} className="limit__button">
          Mock Data
        </button>
      </form>
    </div>
  );
}

export default Transactions;
