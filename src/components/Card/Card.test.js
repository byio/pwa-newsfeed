import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('Card Component', () => {
  it('Should render text', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.text()).toEqual('Card component');
  });
});
