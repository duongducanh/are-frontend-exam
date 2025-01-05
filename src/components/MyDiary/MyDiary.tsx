import React, { useMemo, useState, useEffect } from 'react';

interface DiaryItem {
  id: number;
  date: string;
  time: string;
  content: string;
}

const PAGE_SIZE = 8;

const MyDiary = () => {
  const [myDiaryData, setMyDiaryData] = useState<DiaryItem[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(PAGE_SIZE);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/mock/diaryData.json')
      .then((response) => response.json())
      .then((data: DiaryItem[]) => {
        setMyDiaryData(data);
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  const mealList = useMemo(
    () => (
      <>
        {loading ? (
          <div className="text-primary-400 text-center text-[18px]">
            Loading...
          </div>
        ) : (
          <>
            {' '}
            {myDiaryData.length ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {myDiaryData.slice(0, visibleItems).map((item) => (
                  <div
                    key={item.id}
                    className="border-2 border-[#707070] p-4 pb-[40px] text-dark-500 "
                  >
                    <div className="font-inter font-normal text-[18px] leading-[22px] tracking-[0.09px] mb-2">
                      <div>{item.date}</div>
                      <div>{item.time}</div>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.content }}
                      className="text-[12px] leading-[17px] tracking-[0.06px] "
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-black text-center text-[18px]">
                you have no item
              </div>
            )}
          </>
        )}
      </>
    ),
    [myDiaryData, loading, visibleItems]
  );

  const hasMoreItems = visibleItems < myDiaryData.length;

  return (
    <>
      <div className="font-inter font-normal text-[22px] leading-[27px] tracking-[0.11px] text-dark-500 mb-[3px]">
        MY DIARY
      </div>
      {mealList}
      {hasMoreItems && (
        <div className="text-center mt-[28px]">
          <button onClick={handleLoadMore} className="primary-btn">
            自分の日記をもっと見る
          </button>
        </div>
      )}
    </>
  );
};

export default MyDiary;
