import React from 'react';
import RecordChart from '../../components/RecordChart';
import mainMealImg from '../../assets/images/main-meal-banner.png';
import mainPercentImg from '../../assets/images/main-percent.svg';
import MealSchedule from '../../components/MealSchedule';

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1280px] mx-auto">
        <div className="relative">
          <img src={mainMealImg} alt="main meal" className="w-full" />
          <img
            src={mainPercentImg}
            alt="percent"
            className="absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2"
          />
        </div>
        <div className="flex justify-center items-center bg-dark-600">
          <RecordChart />
        </div>
      </div>
      <div className="main-container">
        <MealSchedule />
      </div>
    </>
  );
};

export default Home;
