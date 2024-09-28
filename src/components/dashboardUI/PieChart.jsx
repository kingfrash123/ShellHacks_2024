import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { pieChartData } from "../../testData/fakeData";

// For rendering
ChartJS.register(Tooltip, Legend, ArcElement);

function PieChart() {
  const options = {};

  return (
    <Pie className="finances__graphs" options={options} data={pieChartData} />
  );
}

export default PieChart;
