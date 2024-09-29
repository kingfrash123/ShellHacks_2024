import HeaderDashboard from "/src/components/dashboardUI/HeaderDashboard.jsx";
import Finances from "/src/components/dashboardUI/Finances.jsx";
import Limit from "/src/components/dashboardUI/Limit.jsx";

function Home() {
  return (
    <div>
      <HeaderDashboard />
      <div className="brightnessWorkaround">
        <h1 className="dashboardHeaderText">Dashboard</h1>
        <div className="dashboardContainer">
          <div className="forceFlex">
            <div className="limit">
              <Limit />
            </div>
            <div className="finances">
              <Finances />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
