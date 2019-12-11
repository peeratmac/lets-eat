import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from './ReservationCard';

describe('RESERVATION CARD', () => {
  it('should match the ReservationCard Component Snapshot', () => {
    const wrapper = shallow(<ReservationCard />);

    expect(wrapper).toMatchSnapshot();
  });
});
