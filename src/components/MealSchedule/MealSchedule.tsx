import React, { useMemo, useState, useEffect, useCallback } from 'react';
import FilterButton from './FilterButton';

interface MealItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

const FILTER_ITEMS = [
  { id: 'morning', label: 'Morning', icon: 'knife' },
  { id: 'lunch', label: 'Lunch', icon: 'knife' },
  { id: 'dinner', label: 'Dinner', icon: 'knife' },
  { id: 'snack', label: 'Snack', icon: 'cup' }
];
const PAGE_SIZE = 8;

const MealSchedule = () => {
  const [data, setData] = useState<MealItem[]>([]);
  const [filteredData, setFilteredData] = useState<MealItem[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(PAGE_SIZE);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/mock/meals.json')
      .then((response) => response.json())
      .then((data: MealItem[]) => {
        setData(data);
        setFilteredData(data);
        setLoading(false);
      });
  }, []);

  const handleFilter = useCallback(
    (category: string) => {
      setVisibleItems(PAGE_SIZE);
      if (category === 'all') {
        setFilteredData(data);
      } else {
        setFilteredData(data.filter((item) => item.category === category));
      }
    },
    [data]
  );

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  const filterButtons = useMemo(
    () => (
      <div className="flex flex-wrap justify-between gap-4 max-w-[717px] mx-auto my-6">
        {FILTER_ITEMS.map((item) => (
          <FilterButton key={item.id} item={item} handleFilter={handleFilter} />
        ))}
      </div>
    ),
    [handleFilter]
  );

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
            {filteredData.length ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {filteredData.slice(0, visibleItems).map((item) => (
                  <div key={item.id} className="relative">
                    <img src={item.image} alt={item.title} />
                    <span
                      className="font-inter text-light text-[15px] leading-[18px] tracking-[0.15px] bg-primary-300 
            px-[8px] py-[7px] min-w-[120px] absolute left-0 bottom-0"
                    >
                      {item.title}
                    </span>
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
    [filteredData, loading, visibleItems]
  );

  const hasMoreItems = visibleItems < filteredData.length;

  return (
    <>
      {filterButtons}
      {mealList}
      {hasMoreItems && (
        <div className="text-center mt-[28px]">
          <button onClick={handleLoadMore} className="primary-btn">
            記録をもっと見る
          </button>
        </div>
      )}
    </>
  );
};

export default MealSchedule;
