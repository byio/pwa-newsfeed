import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('Card Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render text', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.text()).toEqual('Card component');
  });
  it('should render an image', () => {
    const mockNews = [
      { id: 1, imgURL: 'http://via.placeholder.com/200x200'}
    ];
    const wrapper = shallow(
      <Card
        imgURL={mockNews.imgURL}
      />
    );
    expect(wrapper.find(img).prop('src')).toEqual(mockNews.imgURL);
  });
});
