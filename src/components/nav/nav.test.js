import React from 'react';
import { shallow } from 'enzyme';
import Nav from './nav';

describe('<Nav />', () => {
  test('renders', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });
});
