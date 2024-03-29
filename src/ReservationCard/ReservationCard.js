import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({
  date,
  id,
  name,
  number,
  time,
  cancelReservation
}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>Guests: {number}</p>
      <button onClick={() => cancelReservation(id)}>Cancel</button>
    </div>
  );
};

export default ReservationCard;
