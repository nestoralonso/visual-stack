import React from 'react';
import { TopNav } from '../TopNav';
import Enzyme, { mount, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('TopNav', () => {
  it('should find prop values in the DOM', () => {
    const wrapper = mount(
      <TopNav
        contentSize="wide"
        title="title"
        backToCjTitle="backToCjTitle"
        backToCjOnClick={() => {
          return 1 + 1;
        }}
        supportTitle="supportTitle"
        supportLink="supportLink"
        children={[5]}
        restProps={[{ prop: 1 }]}
      />
    );
    expect(wrapper.find('vs-topnav-content-wide').exists());
    expect(wrapper.find('.vs-topnav-title').text()).toEqual('title');
    expect(wrapper.find('.topnav-action>#topnav-back-title').text()).toEqual('backToCjTitle');
    expect(wrapper.find('.topnav-action>#topnav-help-title').text()).toEqual('supportTitle');
    expect(wrapper.find('.feedback-link-container').props().href).toEqual('supportLink');
  });

  it('should pass props to TopNav component', () => {
    const wrapper = mount(
      <TopNav
        contentSize="contentSize"
        title="title"
        backToCjTitle="backToCjTitle"
        backToCjOnClick={() => {
          return 1 + 1;
        }}
        supportTitle="supportTitle"
        supportLink="supportLink"
        children={[5]}
      />
    );
    wrapper.debug();
    expect(wrapper.find(TopNav).prop('contentSize')).toBe('contentSize');
    expect(wrapper.find(TopNav).prop('title')).toBe('title');
    expect(wrapper.find(TopNav).prop('backToCjOnClick')()).toBe(2);
    expect(wrapper.find(TopNav).prop('backToCjTitle')).toBe('backToCjTitle');
    expect(wrapper.find(TopNav).prop('supportTitle')).toBe('supportTitle');
    expect(wrapper.find(TopNav).prop('supportLink')).toBe('supportLink');
    expect(wrapper.find(TopNav).prop('children')).toEqual([5]);
  });

});
