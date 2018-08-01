import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('Card Component', () => {
  it('should render without throwing an error', () => {
    // TODO
  });
  it('should have 2 sections wrapped by divs: .newsImgSection and .newsInfoSection', () =>{
    // TODO
  });
  it('should have 1 img tag: .newImage', () => {
    // TODO
  });
  it('should have 1 h2 tag: .title', () => {
    // TODO
  });
  it('should have 1 p tag: .description ', () => {
    // TODO
  });
  it('should have 1 span tag: .source', () => {
    // TODO
  });
});
