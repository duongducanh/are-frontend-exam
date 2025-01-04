import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="bg-dark-500 mt-[64px]">
        <div className="main-container py-[56px]">
          <div className="flex flex-wrap gap-x-[25px] lg:gap-x-[45px] text-light text-[11px] leading-4 tracking-[0.03px]">
            <div>
              <Link to="" className="hover:text-primary-400">
                <span>会員登録</span>
              </Link>
            </div>
            <div>
              <Link to="" className="hover:text-primary-400">
                <span>運営会社</span>
              </Link>
            </div>
            <div>
              <Link to="" className="hover:text-primary-400">
                <span>利用規約</span>
              </Link>
            </div>
            <div>
              <Link to="" className="hover:text-primary-400">
                <span>個人情報の取扱について</span>
              </Link>
            </div>
            <div>
              <Link to="" className="hover:text-primary-400">
                <span>特定商取引法に基づく表記</span>
              </Link>
            </div>
            <div>
              <Link to="" className="hover:text-primary-400">
                <span>お問い合わせ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
