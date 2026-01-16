import React from 'react';

const Card = ({ icon, title, year, desc, logo }) => {
  return (
    <div className="timeline__item">
      {logo ? (
        <img src={logo} alt="" className="timeline__icon-logo" />
      ) : (
      <i className={icon}></i>
      )}
      <span className="timeline__date">{year}</span>
      <h3 className="timeline__title">{title}</h3>
      <p className="timeline__text">{desc}</p>
    </div>
  );
};

export default Card;
