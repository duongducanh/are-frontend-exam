import React, { useState } from 'react';
import RecordChart from '../RecordChart';
import { RecordChartDataTypes } from '../../types/record';
import { CHART_DATA } from '../../mock/chartData';

const TIME_FILTER = [
  { id: 'day', title: '日' },
  { id: 'week', title: '週' },
  { id: 'month', title: '月' },
  { id: 'year', title: '年' }
];

const BodyRecord = () => {
  const [datasets, setDatasets] = useState<RecordChartDataTypes>(
    CHART_DATA.year
  );
  const [activeTimeBtn, setActiveTimeBtn] = useState<string>('year');

  const handleButtonClick = (id: string) => {
    setDatasets(CHART_DATA[id as keyof typeof CHART_DATA]);
    setActiveTimeBtn(id);
  };

  return (
    <div className="bg-dark-600 py-4 px-6 mb-[56px]">
      <div className="flex text-light">
        <div className="inline-block w-[76px] mr-[21px] font-inter font-normal text-[15px] leading-[18px] tracking-[0.15px]">
          BODY RECORD
        </div>
        <div className="font-inter font-normal text-[22px] leading-[27px] tracking-[0.11px]">
          2021.05.21
        </div>
      </div>
      <RecordChart recordData={datasets} />
      <div className="flex gap-4 mt-1">
        {TIME_FILTER.map((item) => (
          <button
            key={item.id}
            className={`text-[15px] leading-[22px] tracking-[0.08px] h-[24px] rounded-[11px] w-[56px] 
              ${activeTimeBtn === item.id ? 'bg-primary-300 text-light' : 'bg-light text-primary-300'}`}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyRecord;
