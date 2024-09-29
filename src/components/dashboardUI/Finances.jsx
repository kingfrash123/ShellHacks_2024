// import { Link } from "react-router-dom";
import LineGraph from "/src/components/dashboardUI/LineGraph.jsx";
import BarChart from "/src/components/dashboardUI/BarChart.jsx";
// import PieChart from "/src/components/dashboardUI/PieChart.jsx";
import Limit from "/src/components/dashboardUI/Limit.jsx";
import Status from "/src/components/dashboardUI/Status.jsx";
import { useState } from "react";
import Transactions from "./Transactions";

function Finances(props) {
  const [account, setAccount] = useState("");
  const [company, setCompany] = useState("");
  const [limit, setLimit] = useState(0);
  console.log(props);
  const username = props.data.name;
  const firstBank = props.data.account1;
  const secondBank = props.data.account2;

  // const username = "props.data.name";
  // const firstBank = "props.data.account1";
  // const secondBank = "props.data.account2";

  function chooseAccount(acc) {
    setAccount(acc);
  }
  function chooseCompany(acc) {
    setCompany(acc);
  }
  function chooseLimit(acc) {
    setLimit(acc);
  }
  return (
    <div className="finances">
      <div className="finances__data">
        <div className="finances__dataStyles">
          <BarChart />
        </div>

        <div className="finances__dataStyles">
          <LineGraph />
        </div>
      </div>
      <div className="finances__dataTwo">
        <div className="limit">
          <Limit
            firstAccount={firstBank}
            chooseAccount={chooseAccount}
            chooseCompany={chooseCompany}
            chooseLimit={chooseLimit}
          />
        </div>

        <div className="status">
          <Status
            username={username}
            account={firstBank}
            chosenAccount={account}
            secondAccount={secondBank}
            company={company}
            limit={limit}
          />
        </div>
        <div className="transactions">
          <Transactions />
        </div>

        {/* <div className="finances__pieGraph">
          <PieChart />
        </div> */}
      </div>
    </div>
  );
}

export default Finances;
