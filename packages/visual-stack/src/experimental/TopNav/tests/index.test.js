import React from 'react';
import { TopNav } from '../TopNav';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('TopNav', () => {
  it('should find prop values in the DOM', () => {
    const wrapper = mount(
      <TopNav
        contentSize="wide"
        title="title"
        children={<div>content</div>}
        actionChildren={<div>actions</div>}
      />
    );
    expect(wrapper.find('.vs-topnav-title').text()).toEqual('title');
    expect(wrapper.find('.vs-topnav-content-wide').text()).toEqual('content');
    expect(wrapper.find('.vs-topnav-button-bar').text()).toEqual('actions');
  });

  it('should pass props to TopNav component', () => {
    const wrapper = mount(
      <TopNav
        contentSize="contentSize"
        title="title"
        actionChildren={<div>actions</div>}
        children={<div>content</div>}
      />
    );
    wrapper.debug();
    expect(wrapper.find(TopNav).prop('contentSize')).toBe('contentSize');
    expect(wrapper.find(TopNav).prop('title')).toBe('title');
    expect(wrapper.find(TopNav).prop('children')).toEqual(<div>content</div>);
    expect(wrapper.find(TopNav).prop('actionChildren')).toEqual(<div>actions</div>);
  });
});
