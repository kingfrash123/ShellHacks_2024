export const lineChartData = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "Steps",
      data: [3000, 5000, 6000, 8000, 7000, 9000],
      borderColor: "rgb(75, 192, 192)",
      fontColor: "rgb(0,0,0)",
    },
    {
      label: "OtherSteps",
      data: [1000, 9000, 2000, 3000, 700, 5000],
      borderColor: "rgb(1, 1, 192)",
      fontColor: ["rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(0,0,0)"],
    },
  ],
};

export const barChartData = {
  labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300, 150, 180, 100],
      backgroundColor: [
        "rgba(255,99,132,1)",
        "rgba(54,162,235,1)",
        "rgba(255,206,86,1)",
        "rgba(75,192,192,1)",
        "rgba(153,102,255,1)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54,162,235,1)",
        "rgba(255,206,86,1)",
        "rgba(75,192,192,1)",
        "rgba(153,102,255,1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const pieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
  datasets: [
    {
      label: "Time Spent",
      data: [120, 60, 30, 90, 45],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      hoverOffset: 4,
    },
  ],
};
