import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RecordChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    title: {
      display: false
    },
    scales: {
      y: {
        min: 30,
        max: 100,
        ticks: {
          display: false,
          color: 'white'
        },
        grid: {
          display: false
        }
      },
      x: {
        ticks: {
          color: 'white'
        },
        grid: {
          color: '#777777'
        }
      }
    },
    layout: {
      padding: {
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
      }
    }
  };

  const labels = [
    '6 月',
    '7 月',
    '8 月',
    '9 月',
    '10 月',
    '11 月',
    '12 月',
    '1 月',
    '2 月',
    '3 月',
    '4 月',
    '5 月'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Record 1',
        data: [90, 87, 70, 83, 75, 68, 75, 65, 60, 55, 50, 55],
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21'
      },
      {
        label: 'Record 2',
        data: [90, 85, 76, 73, 70, 66, 64, 55, 50, 48, 45, 40],
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0'
      }
    ]
  };

  return (
    <div className="w-full flex justify-center items-center bg-dark-600">
      <Line options={options} data={data} />
    </div>
  );
};

export default RecordChart;
