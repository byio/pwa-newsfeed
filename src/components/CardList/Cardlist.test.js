import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardList from './CardList';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('CardList Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardList />);
  });
  it('should render without throwing an error', () => {
    expect(wrapper.find('div.cardList').exists()).toBe(true);
  });
});
