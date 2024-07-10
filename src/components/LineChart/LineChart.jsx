"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Chart } from "chart.js";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const generateRandomData = (min, max, length) => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "WPPOOL",
      data: generateRandomData(0, 100, 12),
      fill: false,
      borderColor: "#FC714D",
      pointBackgroundColor: "#FC714D",
      pointRadius: 1,
      pointHoverRadius: 10,
      borderWidth: 1,
      tension: 0.1,
    },
    {
      label: "Google",
      data: generateRandomData(0, 100, 12),
      fill: false,
      borderColor: "#615DE3",
      pointBackgroundColor: "#615DE3",
      pointRadius: 1,
      pointHoverRadius: 10,
      borderWidth: 1,
      tension: 0.1,
    },
    {
      label: "Microsoft",
      data: generateRandomData(0, 100, 12),
      fill: false,
      borderColor: "#AFCD80",
      pointBackgroundColor: "#AFCD80",
      pointRadius: 1,
      pointHoverRadius: 10,
      borderWidth: 1,
      tension: 0.1,
    },
    {
      label: "Twitter",
      data: generateRandomData(0, 100, 12),
      fill: false,
      borderColor: "#6F34A1",
      pointBackgroundColor: "#6F34A1",
      pointRadius: 1,
      pointHoverRadius: 10,
      borderWidth: 1,
      tension: 0.1,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom", // Position legend at the bottom
      labels: {
        usePointStyle: true,
        generateLabels: (chart) => {
          const labels =
            Chart.defaults.plugins.legend.labels.generateLabels(chart);
          labels.forEach((label) => {
            label.pointStyle = "rect";
            if (label.text === "WPPOOL") {
              label.fillStyle = "#FC714D"; // Blue color for Twitter
            }
            if (label.text === "Google") {
              label.fillStyle = "#615DE3"; // Orange color for Google
            }
            if (label.text === "Twitter") {
              label.fillStyle = "#6F34A1"; // Blue color for Twitter
            }
            if (label.text === "Microsoft") {
              label.fillStyle = "#AFCD80"; // Blue color for Twitter
            }
          });
          return labels;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide vertical grid lines
      },
      border: {
        display: true, // Show x-axis line
      },
    },
    y: {
      ticks: {
        callback: function (value) {
          return `${value}%`; // Add '%' symbol to y-axis labels
        },
      },
    },
  },
};
const LineChart = () => {
  return (
    <div className="w-full h-[350px]">
      <Line data={data} options={options} />
    </div>
  );
};
export default LineChart;
