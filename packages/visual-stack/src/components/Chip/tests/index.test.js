import React from 'react';
import { mount } from 'enzyme';
import { Chip } from '../';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Chip', () => {
  const el = document.createElement('div');
  document.body.appendChild(el);

  test('should render children', () => {
    const wrapper = mount(
      <Chip backgroundColor="red" color="blue">
        CONTENT CERTIFIED
      </Chip>
    );
    expect(wrapper.find(Chip).text()).toEqual('CONTENT CERTIFIED');
  });
});
