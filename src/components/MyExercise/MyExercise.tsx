import React from 'react';
import exerciseData from '../../mock/exerciseData.json';

const MyExercise = () => {
  return (
    <div className="bg-dark-600 py-4 px-6 mb-[56px]">
      <div className="flex text-light">
        <div className="inline-block w-[76px] mr-[21px] font-inter font-normal text-[15px] leading-[18px] tracking-[0.15px]">
          MY EXERCISE
        </div>
        <div className="font-inter font-normal text-[22px] leading-[27px] tracking-[0.11px]">
          2021.05.21
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-2 mt-1 min-h-[204px] max-h-[350px] md:max-h-[204px] overflow-auto scrollbar-custom pr-[33px]">
        {exerciseData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-x-2 border-b border-gray-400"
          >
            <div className="pb-0.5 flex">
              <div className="h-[5px] w-[5px] bg-light rounded-full mt-[7px] mr-3"></div>
              <div>
                <div className="text-[15px] leading-[22px] tracking-[0.08px] text-light">
                  {item.title}
                </div>
                <div className="font-inter font-normal text-[15px] leading-[18px] tracking-[0.08px] text-primary-300">
                  {item.energy}
                </div>
              </div>
            </div>
            <div className="font-inter font-normal text-[18px] leading-[22px] tracking-[0.09px] text-primary-300 pr-[13px]">
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExercise;
