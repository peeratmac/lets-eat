export const getAllReservations = () => {
  fetch('http://localhost:3001/api/v1/reservations').then(response =>
    response.json()
  );
};
