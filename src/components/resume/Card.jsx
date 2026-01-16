import React from 'react';

const Card = ({ icon, title, year, desc, logo }) => {
  return (
    <div className="timeline__item">
      <div className="timeline__item-header">
        {logo ? (
          <img src={logo} alt="" className="timeline__icon-logo" />
        ) : (
          <i className={icon}></i>
        )}
        <h3 className="timeline__title">{title}</h3>
      </div>
      <span className="timeline__date">{year}</span>
      <p className="timeline__text">{desc}</p>
    </div>
  );
};

export default Card;
