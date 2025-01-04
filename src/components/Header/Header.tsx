import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import useOutsideClick from '../../hooks/useOutsideClick';
import {
  ChallengeIcon,
  InformationIcon,
  MemoIcon,
  MenuIcon,
  CloseIcon
} from '../Icons';

const MENU_ITEMS = [
  {
    name: '自分の記録',
    url: '/my-record'
  },
  {
    name: '体重グラフ',
    url: '/#'
  },
  {
    name: '目標',
    url: '/#'
  },
  {
    name: '選択中のコース',
    url: '/#'
  },
  {
    name: 'コラム一覧',
    url: '/#'
  },
  {
    name: '設定',
    url: '/challenge'
  }
];

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  useOutsideClick(dropdownRef, handleClose, isOpenMenu);

  return (
    <header className="bg-dark-500">
      <div className="main-container max-w-[974px] flex justify-between items-center gap-x-[7px] py-3">
        <Link to="/" className="mr-auto">
          <img src={logo} alt="logo" className="relative top-[4px]" />
        </Link>
        <div className="hidden md:flex text-light text-[16px] leading-[23px] [&>div]:min-w-[160px]">
          <div>
            <Link
              to="/my-record"
              className="flex items-center gap-x-2 hover:text-primary-400"
            >
              <MemoIcon />
              <span>自分の記録</span>
            </Link>
          </div>
          <div>
            <Link
              to="/challenge"
              className="flex items-center gap-x-2 hover:text-primary-400"
            >
              <ChallengeIcon />
              <span>チャレンジ</span>
            </Link>
          </div>
          <div>
            <Link
              to="#"
              className="flex items-center gap-x-2 hover:text-primary-400"
            >
              <span className="relative">
                <InformationIcon />
                <span className="w-4 h-4 rounded-full bg-primary-500 text-[10px] leading-3 text-light absolute top-0 -right-2 flex justify-center items-center">
                  1
                </span>
              </span>
              <span>お知らせ</span>
            </Link>
          </div>
        </div>
        <div className="relative">
          <button type="button" name="menu" onClick={() => setIsOpenMenu(true)}>
            {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
          {isOpenMenu && (
            <div
              ref={dropdownRef}
              className="absolute z-10 bg-gray-400 w-[280px] right-0 mt-[13px]"
            >
              <ul className="text-[18px] leading-[26px] text-light">
                {MENU_ITEMS.map((menuItem, index) => (
                  <li
                    key={index}
                    className="px-[32px] py-[23px] border-t border-t-white/15 border-b border-b-dark-600/25"
                  >
                    <Link
                      to={menuItem.url}
                      className="block hover:text-primary-400"
                      onClick={handleClose}
                    >
                      <span>{menuItem.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
