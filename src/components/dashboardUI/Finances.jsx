// import { Link } from "react-router-dom";
import LineGraph from "/src/components/dashboardUI/LineGraph.jsx";
import BarChart from "/src/components/dashboardUI/BarChart.jsx";
import PieChart from "/src/components/dashboardUI/PieChart.jsx";
function Finances() {
  return (
    <div className="brightnessWorkaround">
      <div className="finances__data">
        <div className="finances__dataStyles">
          <LineGraph />
        </div>
        <div className="finances__dataStyles">
          <BarChart />
        </div>
        <div className="finances__dataStyles">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Finances;
