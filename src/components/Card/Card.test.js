import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import sinon from 'sinon';

import Card from './Card';

it("renders correctly", () => {
  const wrapper = shallow(
    <Card />
  );

  expect(wrapper).toMatchSnapshot();
});
