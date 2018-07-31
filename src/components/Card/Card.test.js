import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

it("renders correctly", () => {
  const component = renderer.create(
    <Card />
  );
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
