import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { barChartData } from "../../testData/fakeData";

// For rendering
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
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
    <Bar className="finances__graphs" options={options} data={barChartData} />
  );
}

export default BarChart;
