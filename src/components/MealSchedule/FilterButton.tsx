import React from 'react';
import hexagonalImg from '../../assets/images/hexagonal.svg';
import { KnifeIcon, CupIcon } from '../Icons';

interface FilterItem {
  id: string;
  label: string;
  icon: string;
}

interface FilterButtonProps {
  item: FilterItem;
  handleFilter: (id: string) => void;
}

const FilterButton = ({ item, handleFilter }: FilterButtonProps) => {
  const { id, label, icon } = item;

  return (
    <button className="relative" onClick={() => handleFilter(id)}>
      <img src={hexagonalImg} alt="filter" />
      <span className="absoluteCenter flex flex-col items-center -mt-[1px]">
        {icon === 'knife' && <KnifeIcon />}
        {icon === 'cup' && <CupIcon />}
        <span className="font-inter text-[20px] leading-6 text-light font-normal">
          {label}
        </span>
      </span>
    </button>
  );
};

export default FilterButton;
