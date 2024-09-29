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
    maintainAspectRatio: false,
    scales: {
      yAxes: {
        grid: {
          drawBorder: true,
          color: "#FFFFFF",
        },
        ticks: {
          beginAtZero: true,
          color: "white",
          fontSize: 12,
        },
      },
      xAxes: {
        grid: {
          drawBorder: true,
          color: "#FFFFFF",
        },
        ticks: {
          beginAtZero: true,
          color: "white",
          fontSize: 12,
        },
      },
    },
  };

  return (
    <Line className="finances__graphs" options={options} data={lineChartData} />
  );
}

export default LineGraph;
