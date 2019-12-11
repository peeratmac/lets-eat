import React from 'react';
import { shallow } from 'enzyme';
import ReservationContainer from './ReservationContainer';

describe('RESERVATION CONTAINER', () => {
  it('should match the ReservationContainer Component Snapshot', () => {
    const mockReservations = [
      { name: 'Peerat', date: '12/25', time: '5:30 pm', number: '555' },
      { name: 'Consuelo', date: '10/31', time: '7:45 am', number: '10' }
    ];
    const mockCancelReservation = jest.fn();

    const wrapper = shallow(
      <ReservationContainer
        reservations={mockReservations}
        cancelReservation={mockCancelReservation}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
