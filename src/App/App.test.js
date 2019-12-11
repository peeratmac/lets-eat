import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ReactDOM from 'react-dom';
import { cancelReservation } from './App';

describe('APP', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the App Component Snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should retrieve all reservations data on the server upon mounting', async () => {
    const wrapper = shallow(<App />);

    shallow(<App />);

    const mockReservationsData = [
      { date: '12/25', id: 1, name: 'Peerat', number: 55, time: '7:00 am' }
    ];

    const mockResponse = {
      allReservationsData: mockReservationsData
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });

    const instance = wrapper.instance();
    await instance.componentDidMount();

    expect(window.fetch).toHaveBeenCalledWith(
      'http://localhost:3001/api/v1/reservations'
    );
  });

  it('should call fetch to make a POST request with correct arguments', () => {
    const wrapper = shallow(<App />);
    const expected = [
      'http://localhost:3001/api/v1/reservations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: '12/25',
          id: 1,
          name: 'Peerat',
          number: 55,
          time: '7:00 am'
        })
      }
    ];

    wrapper.instance().makeReservation({
      date: '12/25',
      id: 1,
      name: 'Peerat',
      number: 55,
      time: '7:00 am'
    });

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should call fetch to make a DELETE request with correct arguments', () => {
    const wrapper = shallow(<App />);
    const expected = [
      `http://localhost:3001/api/v1/reservations/1`,
      {
        method: 'DELETE'
      }
    ];

    wrapper.instance().cancelReservation(1);

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it.skip('should update state with a new reservation when makeReservation is called', async () => {
    const wrapper = shallow(<App />);

    const mockReservationsData = [
      { date: '12/25', id: 1, name: 'Peerat', number: 55, time: '7:00 am' }
    ];

    const mockResponse = {
      allReservationsData: mockReservationsData
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });

    wrapper.instance().makeReservation = jest.fn();

    wrapper.instance().makeReservation.mockImplementation(() => {
      return Promise.resolve({
        date: '12/24',
        id: 5782,
        name: 'Maria Sharapova',
        number: 60,
        time: '5:00 am'
      });
    });

    const mockNewReservation = {
      date: '12/24',
      id: 6654,
      name: 'Serena Williams',
      number: 70,
      time: '6:00 am'
    };

    const expected = [
      {
        date: '12/24',
        id: 5782,
        name: 'Maria Sharapova',
        number: 60,
        time: '5:00 am'
      },
      mockNewReservation
    ];

    await wrapper.instance().makeReservation(mockNewReservation);

    expect(wrapper.instance().makeReservation).toHaveBeenCalled();
    expect(wrapper.state('allReservationsData')).toEqual(expected);
  });
});
