import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput';

describe('FORM INPUT', () => {
  it('should match the FormInput Component Snapshot', () => {
    const mockMakeReservation = jest.fn();
    const wrapper = shallow(
      <FormInput makeReservation={mockMakeReservation} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should update the states of name, date, time, number when handleChange is called', () => {
    const mockMakeReservation = jest.fn();
    const wrapper = shallow(
      <FormInput makeReservation={mockMakeReservation} />
    );

    const mockEvent1 = { target: { name: 'name', value: 'Peerat' } };
    const expected1 = 'Peerat';

    const mockEvent2 = { target: { name: 'date', value: '12/25' } };
    const expected2 = '12/25';

    const mockEvent3 = { target: { name: 'time', value: '8:30 am' } };
    const expected3 = '8:30 am';

    const mockEvent4 = { target: { name: 'number', value: 555 } };
    const expected4 = 555;

    wrapper.instance().handleChange(mockEvent1);
    wrapper.instance().handleChange(mockEvent2);
    wrapper.instance().handleChange(mockEvent3);
    wrapper.instance().handleChange(mockEvent4);

    expect(wrapper.state('name')).toEqual(expected1);
    expect(wrapper.state('date')).toEqual(expected2);
    expect(wrapper.state('time')).toEqual(expected3);
    expect(wrapper.state('number')).toEqual(expected4);
  });
});
