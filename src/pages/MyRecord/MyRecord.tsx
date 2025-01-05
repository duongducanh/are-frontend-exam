import React from 'react';
import BodyRecord from '../../components/BodyRecord';
import MyExercise from '../../components/MyExercise';
import MyDiary from '../../components/MyDiary';
import myRecommendImg1 from '../../assets/images/MyRecommend-1.png';
import myRecommendImg2 from '../../assets/images/MyRecommend-2.png';
import myRecommendImg3 from '../../assets/images/MyRecommend-3.png';

const BANNER_ITEMS = [
  {
    image: myRecommendImg1,
    recommendTitle: 'BODY RECORD',
    recommendSubtitle: '自分のカラダの記録'
  },
  {
    image: myRecommendImg2,
    recommendTitle: 'MY EXERCISE',
    recommendSubtitle: '自分のカラダの記録'
  },
  {
    image: myRecommendImg3,
    recommendTitle: 'MY DIARY',
    recommendSubtitle: '自分の日記'
  }
];

const MyRecord = () => {
  return (
    <>
      <div className="main-container">
        <div className="flex flex-wrap justify-center lg:justify-between gap-6 my-[56px]">
          {BANNER_ITEMS.map((item, index) => (
            <div
              key={index}
              className="border-[24px] border-primary-300 bg-black relative"
            >
              <img
                src={item.image}
                alt="my recommend"
                className="grayscale-[35%]"
              />
              <div className="absoluteCenter w-full text-center flex flex-col items-center gap-2.5">
                <div className="recommendTitle">{item.recommendTitle}</div>
                <div className="recommendSubtitle">
                  {item.recommendSubtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
        <BodyRecord />
        <MyExercise />
        <MyDiary />
      </div>
    </>
  );
};

export default MyRecord;
