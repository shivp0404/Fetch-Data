import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.url} alt={item.name} className="card-image" />
      <div className="card-content">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
};

export default Card;
