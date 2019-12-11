import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from './ReservationCard';

describe('RESERVATION CARD', () => {
  it('should match the ReservationCard Component Snapshot', () => {
    const wrapper = shallow(<ReservationCard />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call on cancelReservation when the button is clicked to cancel a reservation', () => {
    const mockCancelReservation = jest.fn();
    const wrapper = shallow(
      <ReservationCard id={1975} cancelReservation={mockCancelReservation} />
    );

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(mockCancelReservation).toHaveBeenCalledWith(1975);
  });
});
