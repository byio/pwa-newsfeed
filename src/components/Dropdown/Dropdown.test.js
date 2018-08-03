import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Dropdown from './Dropdown';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('Select Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find('div.dropdown').exists()).toBe(true);
  });
});
