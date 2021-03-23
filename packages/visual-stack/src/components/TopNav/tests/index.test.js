import React from 'react'
import { TopNav } from '../TopNav'
import Enzyme, { mount } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import { BackToCjLink} from "../BackToCjLink"
import { CjSupportLink} from "../CjSupportLink"

Enzyme.configure({ adapter: new Adapter() })

describe('TopNav', () => {
  it('should find prop values in the DOM', () => {
    const wrapper1 = mount(
      <TopNav
        title="title"
        actionChildren={<div>actions</div>}
        children={<div>content</div>}
        contentSize="wide"
      />
    )
    expect(wrapper1.find('.vs-topnav-title').text()).toEqual('title')
    expect(wrapper1.find('.vs-topnav-content-wide').text()).toEqual('content')
    expect(wrapper1.find('.vs-topnav-button-bar').text()).toEqual('actions')

    const wrapper2 = mount(
      <TopNav
        contentSize="normal"
        children={<div>content</div>}
      />
    )
    expect(wrapper2.find('.vs-topnav-content-normal').text()).toEqual('content')

    const wrapper3 = mount(
      <TopNav
        children={<div>content</div>}
      />
    )
    expect(wrapper3.find('.vs-topnav-content').text()).toEqual('content')
  })

  it('should pass props to TopNav component', () => {
    const wrapper = mount(
      <TopNav
        title="title"
        actionChildren={<div>actions</div>}
        children={<div>content</div>}
        contentSize="normal"
      />
    )
    wrapper.debug()
    expect(wrapper.find(TopNav).prop('title')).toBe('title')
    expect(wrapper.find(TopNav).prop('actionChildren')).toEqual(<div>actions</div>)
    expect(wrapper.find(TopNav).prop('children')).toEqual(<div>content</div>)
    expect(wrapper.find(TopNav).prop('contentSize')).toBe('normal')
  })
})

describe('BackToCjLink', () => {
  it('BackToCjLink renders in the DOM', () => {
    const wrapper = mount(
      <BackToCjLink
        title="title"
        onClick={() => {
          return 1 + 1
        }}
      />
    )
    expect(wrapper.find(BackToCjLink).prop('title')).toBe("title")
    expect(wrapper.find(BackToCjLink).prop('onClick')()).toBe(2)
    expect(wrapper.find('.topnav-action>#topnav-back-title').text()).toEqual('title')
  })
})

describe('CjSupportLink', () => {
  it('CjSupportLink renders in the DOM', () => {
    const wrapper = mount(
      <CjSupportLink
        title="title"
        link="link"
      />
    )
    expect(wrapper.find(CjSupportLink).prop('title')).toBe('title')
    expect(wrapper.find(CjSupportLink).prop('link')).toBe('link')
    expect(wrapper.find('.topnav-action>#topnav-help-title').text()).toEqual('title')
    expect(wrapper.find('.feedback-link-container').props().href).toEqual('link')
  })
})
