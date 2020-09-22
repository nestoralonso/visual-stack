import { ToolTip, Hover, Instructions } from '../index.js';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('ToolTip', () => {
  test('should render identify Hover and Instruction Components', () => {
    const wrapper = mount(
      <ToolTip>
        <Instructions>This is Instructions</Instructions>
        <Hover>This is Hover</Hover>
      </ToolTip>
    );

    expect(wrapper.contains(<Hover>This is Hover</Hover>)).toEqual(true);
    expect(wrapper.find('.tooltip').text()).toEqual('This is Instructions');
  });
});
