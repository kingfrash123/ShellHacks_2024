import HeaderDashboard from "/src/components/dashboardUI/HeaderDashboard.jsx";
import Finances from "/src/components/dashboardUI/Finances.jsx";

function Home() {
  return (
    <div>
      <HeaderDashboard />
      <div className="finances">
        <Finances />
      </div>
      <h1 className="loginHeaderText">Dashboard</h1>
      <p className="">Login</p>
    </div>
  );
}

export default Home;
