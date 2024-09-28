import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lineChartData } from "/src/testData/fakeData.js";

// For rendering
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#000",
          font: {
            size: 18,
          },
        },
        position: "bottom",
        color: "#000",
      },
      title: {
        display: true,
        text: "Finances",
        color: "#000",
      },
    },
  };

  return (
    <Line className="finances__graphs" options={options} data={lineChartData} />
  );
}

export default LineGraph;
