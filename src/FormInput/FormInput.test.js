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

  it('should call clearInputs when handleMakeReservation is called', () => {
    const mockMakeReservation = jest.fn();
    const wrapper = shallow(
      <FormInput makeReservation={mockMakeReservation} />
    );

    wrapper.instance().clearInputs = jest.fn();

    wrapper.instance().handleMakeReservation({ preventDefault: jest.fn() });

    expect(wrapper.instance().clearInputs).toHaveBeenCalled();
  });

  it('should run handleMakeReservation with the click of Make Reservation button on the form', () => {
    const mockMakeReservation = jest.fn();
    const wrapper = shallow(
      <FormInput makeReservation={mockMakeReservation} />
    );

    wrapper.instance().handleMakeReservation = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper
      .find('button')
      .at(0)
      .simulate('click', mockEvent);

    expect(wrapper.instance().handleMakeReservation).toHaveBeenCalled();
  });

  it('should reset state when clearInputs is called', () => {
    const mockMakeReservation = jest.fn();
    const wrapper = shallow(
      <FormInput makeReservation={mockMakeReservation} />
    );

    const expected = { name: '', date: '', time: '', number: '' };

    wrapper.instance().setState({
      name: 'Peerat',
      date: '12/25',
      time: '8:30 am',
      number: 555
    });

    wrapper.instance().clearInputs();

    expect(wrapper.state()).toEqual(expected);
  });
});
