import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationContainer = ({ reservations }) => {
  const individualReservation = reservations.map((reservation, i) => {
    return (
      <ReservationCard
        date={reservation.date}
        id={reservation.id}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
        key={i}
      />
    );
  });

  return <div>{individualReservation}</div>;
};

export default ReservationContainer;
