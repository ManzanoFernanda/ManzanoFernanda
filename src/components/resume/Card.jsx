import React, { useState } from 'react';

const Card = ({ icon, title, year, desc, logo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="timeline__item">
      <div className="timeline__item-header" onClick={toggleExpand}>
        {logo ? (
          <img src={logo} alt="" className="timeline__icon-logo" />
        ) : (
          <i className={icon}></i>
        )}
        <h3 className="timeline__title">{title}</h3>
        <button 
          className={`timeline__expand-btn ${isExpanded ? 'timeline__expand-btn--expanded' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand();
          }}
          aria-label={isExpanded ? 'Ocultar detalles' : 'Mostrar detalles'}
          aria-expanded={isExpanded}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className={`timeline__item-content ${isExpanded ? 'timeline__item-content--expanded' : ''}`}>
        <span className="timeline__date">{year}</span>
        <p className="timeline__text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
