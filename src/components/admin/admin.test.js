import React from 'react';
import { shallow } from 'enzyme';
import Admin from './admin';

describe('<Admin />', () => {
  test('renders', () => {
    const wrapper = shallow(<Admin />);
    expect(wrapper).toMatchSnapshot();
  });
});
