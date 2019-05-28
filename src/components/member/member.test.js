import React from 'react';
import { shallow } from 'enzyme';
import Member from './member';

describe('<Member />', () => {
  test('renders', () => {
    const wrapper = shallow(<Member />);
    expect(wrapper).toMatchSnapshot();
  });
});
