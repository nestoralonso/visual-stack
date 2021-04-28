import React from 'react';
import { Drawer } from '../index';
import Enzyme, { shallow } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
Enzyme.configure({ adapter: new Adapter() });

describe('Drawer', () => {
  it('should render when open', () => {
    const wrapper = shallow(
      <Drawer isOpen>
        <div className="test" />
      </Drawer>
    );

    expect(wrapper.find('.vs-drawer.vs-drawer-open')).toHaveLength(1);
    expect(wrapper.find('.vs-drawer .test')).toHaveLength(1);
  });

  it('should render when not open', () => {
    const wrapper = shallow(
      <Drawer isOpen={false}>
        <div className="test" />
      </Drawer>
    );

    expect(wrapper.find('.vs-drawer')).toHaveLength(1);
    expect(wrapper.find('.vs-drawer.vs-drawer-open')).toHaveLength(0);
  });
});
