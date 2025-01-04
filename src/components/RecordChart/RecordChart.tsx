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
import { RecordChartProps } from '../../types/record';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RecordChart = ({ recordData }: RecordChartProps) => {
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
        left: 25,
        right: 25,
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
    ...recordData
  };

  return (
    <div className="w-full flex justify-center items-center bg-dark-600">
      <Line options={options} data={data} />
    </div>
  );
};

export default RecordChart;
