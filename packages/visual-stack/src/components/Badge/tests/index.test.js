import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from '..';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Badge', () => {
  it('should render with default variant', () => {
    const wrapper = shallow(<Badge>CONTENT CERTIFIED</Badge>);
    expect(wrapper.find('.vs-badge')).toHaveLength(1);
    expect(wrapper.find('.vs-badge.vs-badge-variant-1')).toHaveLength(1);
    expect(
      wrapper
        .find('.vs-badge.vs-badge-variant-1')
        .children(0)
        .text()
    ).toEqual('CONTENT CERTIFIED');
  });
  it('should render with specified variant', () => {
    const wrapper = shallow(<Badge variant="2">TEST</Badge>);
    expect(wrapper.find('.vs-badge')).toHaveLength(1);
    expect(wrapper.find('.vs-badge.vs-badge-variant-2')).toHaveLength(1);
    expect(
      wrapper
        .find('.vs-badge.vs-badge-variant-2')
        .children(0)
        .text()
    ).toEqual('TEST');
  });
});
