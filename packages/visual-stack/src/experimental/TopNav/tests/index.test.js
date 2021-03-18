import React from 'react';
import Box from '../index';
import { TopNav } from '../TopNav';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import { BackToCjLink } from '../BackToCjLink';

Enzyme.configure({ adapter: new Adapter() });

describe('TopNav', () => {
  it('should set title', () => {
    // const backToCjLink = <BackToCjLink />
    const wrapper = mount(
      // <TopNav backToCjLink={backToCjLink} title="Lorem ipsum" />
      <TopNav title="Lorem ipsum" />
    );
    expect(wrapper.find('.vs-topnav-page-title').text()).toEqual('Lorem ipsum');
  });
});
