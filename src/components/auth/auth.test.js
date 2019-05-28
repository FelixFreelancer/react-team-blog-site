import React from 'react';
import { shallow } from 'enzyme';
import Auth from './auth';

describe('<Auth />', () => {
  test('renders', () => {
    const wrapper = shallow(<Auth />);
    expect(wrapper).toMatchSnapshot();
  });
});
