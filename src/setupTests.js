import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

// set enzyme-to-json as default serializer for jest
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

// set up react 16 enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
