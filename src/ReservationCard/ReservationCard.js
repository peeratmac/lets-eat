import React from 'react';

const ReservationCard = ({ date, id, name, number, time }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Guests: {number}</p>
      <button>Cancel</button>
    </div>
  );
};

export default ReservationCard;
