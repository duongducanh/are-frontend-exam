import React from 'react';
import RecommendList from '../../components/RecommendList';

const COLUMN_ITEMS = [
  {
    title: 'RECOMMENDED COLUMN',
    subtitle: 'オススメ'
  },
  {
    title: 'RECOMMENDED DIET',
    subtitle: 'ダイエット'
  },
  {
    title: 'RECOMMENDED BEAUTY',
    subtitle: '美容'
  },
  {
    title: 'RECOMMENDED HEALTH',
    subtitle: '健康'
  }
];

const Challenge = () => {
  return (
    <>
      <div className="main-container">
        <div className="grid grid-cols-[repeat(2,minmax(0,216px))] lg:grid-cols-[repeat(4,minmax(0,216px))] justify-center gap-6 sm:gap-[32px] my-[56px]">
          {COLUMN_ITEMS.map((item, index) => (
            <div key={index} className="bg-dark-600 px-2 pt-6 py-[22px]">
              <div className=" w-full text-center flex flex-col items-center">
                <div className="font-inter font-normal text-[22px] leading-[27px] tracking-[0.01px] text-primary-300">
                  {item.title}
                </div>
                <div className="inline-block w-[56px] h-[1px] bg-light mt-2.5 mb-[7px]"></div>
                <div className="text-[18px] leading-[26px] text-light">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
        <RecommendList />
      </div>
    </>
  );
};

export default Challenge;
