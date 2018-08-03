import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
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
  it('should have 1 select tag with a default value of and empty string', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find('select').exists()).toBe(true);
    expect(wrapper.find('select').value()).toBe('');
  });
  it('should render at least 1 option tag', () => {
    const wrapper = shallow(<Dropdown />);
    expect(wrapper.find('option').length).toBe(1);
  });
  it('should render n+1 option tags for n sources', () => {
    const mockSources = [
      {
        id: 'mock-source-1',
        name: 'Mock Source 1'
      },
      {
        id: 'mock-source-2',
        name: 'Mock Source 2'
      },
      {
        id: 'mock-source-3',
        name: 'Mock Source 3'
      }
    ];
    const wrapper = shallow(<Dropdown sources={mockSources} />);
    expect(wrapper.find('option').length).toBe(mockSources.length + 1);
  });
  it('should call onChange prop with input value', () => {
    const value = "test-value";
    const onSelectMock = jest.fn();
    const component = mount(<Dropdown onChange={onSelectMock} />);
    component.find('select').simulate('change', {
      target: { value },
    });
    expect(onSelectMock).toBeCalledWith(value);
  });
});
