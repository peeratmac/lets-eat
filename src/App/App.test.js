import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ReactDOM from 'react-dom';

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
});
