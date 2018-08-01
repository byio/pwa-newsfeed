import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CardList from './CardList';

// Enzyme config
Enzyme.configure({ adapter: new Adapter() });

// Tests
describe('CardList Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<CardList />);
    expect(wrapper.find('div.cardList').exists()).toBe(true);
  });
  it('should render n Card components for n news articles', () => {
    const mockNewsArray = [
      {
        source: {
          id: null,
          name: 'Androidcentral.com'
        },
        author: 'Andrew Martonik',
        title: 'title of article',
        description: 'description of article',
        url: 'https://www.androidcentral.com/oneplus-just-surpassed-samsungs-sales-india-first-time',
        urlToImage: 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2018/05/oneplus-6-vs-galaxy-s9-plus-10.jpg?itok=9vBCskjM',
        publishedAt: '2018-07-31T04:30:02Z'
      },
      {
        source: {
          id: null,
          name: 'Androidcentral.com'
        },
        author: 'Andrew Martonik',
        title: 'title of article',
        description: 'description of article',
        url: 'https://www.androidcentral.com/oneplus-just-surpassed-samsungs-sales-india-first-time',
        urlToImage: 'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2018/05/oneplus-6-vs-galaxy-s9-plus-10.jpg?itok=9vBCskjM',
        publishedAt: '2018-07-31T04:30:02Z'
      }
    ];
    const wrapper = shallow(<CardList news={mockNewsArray} />);
    expect(wrapper.find('Card').length).toBe(mockNewsArray.length);
  });
});
