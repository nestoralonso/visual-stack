import React from 'react';
import { mount } from 'enzyme';
import { Badge } from '..';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Badge', () => {
  const el = document.createElement('div');
  document.body.appendChild(el);

  test('should render children', () => {
    const wrapper = mount(
      <Badge backgroundColor="red" color="blue">
        CONTENT CERTIFIED
      </Badge>
    );
    expect(wrapper.find(Badge).text()).toEqual('CONTENT CERTIFIED');
  });
});
