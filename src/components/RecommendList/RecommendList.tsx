import React, { useMemo, useState, useEffect } from 'react';

interface PostItem {
  id: number;
  time: string;
  image: string;
  title: string;
  tags: string[];
}

const PAGE_SIZE = 8;

const RecommendList = () => {
  const [postData, setPostData] = useState<PostItem[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(PAGE_SIZE);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/mock/recommendData.json')
      .then((response) => response.json())
      .then((data: PostItem[]) => {
        setPostData(data);
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
            {postData.length ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-5">
                {postData.slice(0, visibleItems).map((item) => (
                  <div key={item.id}>
                    <div className="relative mb-2">
                      <img src={item.image} alt={item.title} />
                      <span className="font-inter text-light text-[15px] leading-[18px] bg-primary-300 px-[14px] py-[3px] absolute left-0 bottom-0">
                        {item.time}
                      </span>
                    </div>
                    <div className="text-[15px] leading-[22px] tracking-[0.08px] text-dark-500 line-clamp-2 mb-0.5">
                      {item.title}
                    </div>
                    <div className="flex flex-wrap gap-[11px]">
                      {item.tags.map((item, index) => (
                        <span
                          key={index}
                          className="text-[12px] leading-[22px] tracking-[0.06px] text-primary-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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
    [postData, loading, visibleItems]
  );

  const hasMoreItems = visibleItems < postData.length;

  return (
    <>
      {mealList}
      {hasMoreItems && (
        <div className="text-center mt-[28px]">
          <button onClick={handleLoadMore} className="primary-btn">
            コラムをもっと見る
          </button>
        </div>
      )}
    </>
  );
};

export default RecommendList;
