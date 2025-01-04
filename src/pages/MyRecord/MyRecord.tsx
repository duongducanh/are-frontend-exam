import React from 'react';
import BodyRecord from '../../components/BodyRecord';
import myRecommendImg1 from '../../assets/images/MyRecommend-1.png';
import myRecommendImg2 from '../../assets/images/MyRecommend-2.png';
import myRecommendImg3 from '../../assets/images/MyRecommend-3.png';

const MyRecord = () => {
  return (
    <>
      <div className="main-container">
        <div className="flex flex-wrap justify-between gap-6 my-[56px]">
          <div className="border-[24px] border-primary-300 bg-black relative">
            <img
              src={myRecommendImg1}
              alt="my recommend"
              className="grayscale-[35%]"
            />
            <div className="absoluteCenter w-full flex flex-col items-center gap-2.5">
              <div className="recommendTitle">BODY RECORD</div>
              <div className="recommendSubtitle">自分のカラダの記録</div>
            </div>
          </div>
          <div className="border-[24px] border-primary-300 bg-black relative">
            <img
              src={myRecommendImg2}
              alt="my recommend"
              className="grayscale-[35%]"
            />
            <div className="absoluteCenter w-full flex flex-col items-center gap-2.5">
              <div className="recommendTitle">MY EXERCISE</div>
              <div className="recommendSubtitle">自分の運動の記録</div>
            </div>
          </div>
          <div className="border-[24px] border-primary-300 bg-black relative">
            <img
              src={myRecommendImg3}
              alt="my recommend"
              className="grayscale-[35%]"
            />
            <div className="absoluteCenter w-full flex flex-col items-center gap-2.5">
              <div className="recommendTitle">MY DIARY</div>
              <div className="recommendSubtitle">自分の日記</div>
            </div>
          </div>
        </div>
        <BodyRecord />
      </div>
    </>
  );
};

export default MyRecord;
