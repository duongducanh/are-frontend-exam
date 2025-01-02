import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import ChallengeIcon from '../Icons/Challenge';
import InformationIcon from '../Icons/Information';
import MemoIcon from '../Icons/Memo';
import MenuIcon from '../Icons/Menu';

const Header = () => {
  return (
    <header className="bg-dark-500">
      <div className="main-container flex justify-between items-center gap-x-4">
        <Link to="/" className="mr-auto">
          <img src={logo} alt="logo" />
        </Link>
        <div className="flex text-light text-[16px] leading-[23px] [&>div]:min-w-[160px]">
          <div>
            <Link
              to="/my-records"
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
        <div>
          <button>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
