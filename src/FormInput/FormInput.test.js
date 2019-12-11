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
});
