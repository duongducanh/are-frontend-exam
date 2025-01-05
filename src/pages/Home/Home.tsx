import React from 'react';
import RecordChart from '../../components/RecordChart';
import mainMealImg from '../../assets/images/main-meal-banner.png';
import mainPercentImg from '../../assets/images/main-percent.svg';
import MealSchedule from '../../components/MealSchedule';
import { CHART_DATA } from '../../mock/chartData';

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[540px_1fr] max-w-[1280px] mx-auto">
        <div className="relative">
          <img
            src={mainMealImg}
            alt="main meal"
            className="w-full h-full object-cover"
          />
          <img src={mainPercentImg} alt="percent" className="absoluteCenter" />
        </div>
        <div className="flex justify-center items-center bg-dark-600 px-6 lg:px-8 py-5">
          <RecordChart recordData={CHART_DATA.year} />
        </div>
      </div>
      <div className="main-container">
        <MealSchedule />
      </div>
    </>
  );
};

export default Home;
