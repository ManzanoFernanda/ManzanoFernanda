import React from 'react';
import { useLanguage } from '../../context/language';

const ScrollDown = () => {
  const { lang } = useLanguage();
  const text = lang === 'es' ? 'Desliza' : 'Scroll Down';
  
  return (
    <div className="scroll__down">
      <a href="#about" className="scroll__arrow-wrapper">
        <span className="home__scroll-name">{text}</span>
        <div className="scroll__arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default ScrollDown;
