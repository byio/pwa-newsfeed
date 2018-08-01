import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('Card Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card />);
  });
  it('should render without throwing an error', () => {
    expect(wrapper.find('div.card').exists()).toBe(true);
  });
  it('should have 2 sections wrapped by divs: .newsImgSection and .newsInfoSection', () =>{
    expect(wrapper.find('div.card').children().length).toBe(2);
    expect(wrapper.find('div.newsImgSection').exists()).toBe(true);
    expect(wrapper.find('div.newsInfoSection').exists()).toBe(true);
  });
  it('should have 1 img tag: .newsImage', () => {
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('img.newsImage').exists()).toBe(true);
  });
  it('should have 1 h2 tag: .title', () => {
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2.newsTitle').exists()).toBe(true);
  });
  it('should have 1 p tag: .description ', () => {
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p.newsDescription').exists()).toBe(true);
  });
  it('should have 1 span tag: .source', () => {
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('span.newsSource').exists()).toBe(true);
  });
});
