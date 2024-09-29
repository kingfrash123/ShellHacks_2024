import HeaderDashboard from "/src/components/dashboardUI/HeaderDashboard.jsx";
import Finances from "/src/components/dashboardUI/Finances.jsx";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/userData.json");
      const jsonData = await response.json();
      setData(jsonData);
      setisLoading(false);
    };

    fetchData();
  }, []);
  console.log(data);
  if (isLoading) {
    return <div>Currently loading your Dashboard</div>;
  }

  return (
    <div>
      <HeaderDashboard />
      <div className="brightnessWorkaround">
        <h1 className="dashboardHeaderText">Dashboard</h1>
        <div className="dashboardContainer">
          {/* <div className="limit">
            <Limit />
          </div> */}
          <div className="finances">
            <Finances data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
