import React from 'react';
import { Box } from '../index';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Box', () => {
  it('should render children', () => {
    const wrapper = mount(<Box>Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box').text()).toEqual('Lorem ipsum');
  });
  it('should render children with direction column', () => {
    const wrapper = mount(
      <Box direction="column">
        <span>Lorem ipsum</span>
        <button>OK</button>
      </Box>
    );
    expect(wrapper.find('.vs-box.vs-box-direction-column span').text()).toEqual(
      'Lorem ipsum'
    );
    expect(
      wrapper.find('.vs-box.vs-box-direction-column button').text()
    ).toEqual('OK');
  });
  it('should render children with direction row', () => {
    const wrapper = mount(
      <Box direction="row">
        <span>Lorem ipsum</span>
        <button>OK</button>
      </Box>
    );
    expect(wrapper.find('.vs-box.vs-box-direction-row span').text()).toEqual(
      'Lorem ipsum'
    );
    expect(wrapper.find('.vs-box.vs-box-direction-row button').text()).toEqual(
      'OK'
    );
  });
  it('should render with border', () => {
    const wrapper = mount(<Box border>Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-border').text()).toEqual('Lorem ipsum');
  });
  it('should render with padding default', () => {
    const wrapper = mount(<Box padding="default">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-default').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with padding small', () => {
    const wrapper = mount(<Box padding="small">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-small').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with padding large', () => {
    const wrapper = mount(<Box padding="large">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-large').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingLeft default', () => {
    const wrapper = mount(<Box paddingLeft="default">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-left-default').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingLeft small', () => {
    const wrapper = mount(<Box paddingLeft="small">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-left-small').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingLeft large', () => {
    const wrapper = mount(<Box paddingLeft="large">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-left-large').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingRight default', () => {
    const wrapper = mount(<Box paddingRight="default">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-right-default').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingRight small', () => {
    const wrapper = mount(<Box paddingRight="small">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-right-small').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingRight large', () => {
    const wrapper = mount(<Box paddingRight="large">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-right-large').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingTop default', () => {
    const wrapper = mount(<Box paddingTop="default">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-top-default').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingTop small', () => {
    const wrapper = mount(<Box paddingTop="small">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-top-small').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingTop large', () => {
    const wrapper = mount(<Box paddingTop="large">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-top-large').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingBottom default', () => {
    const wrapper = mount(<Box paddingBottom="default">Lorem ipsum</Box>);
    expect(
      wrapper.find('.vs-box.vs-box-padding-bottom-default').text()
    ).toEqual('Lorem ipsum');
  });
  it('should render with paddingBottom small', () => {
    const wrapper = mount(<Box paddingBottom="small">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-bottom-small').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with paddingBottom large', () => {
    const wrapper = mount(<Box paddingBottom="large">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-padding-bottom-large').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with gap default', () => {
    const wrapper = mount(<Box gap="default">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-gap-default').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with gap small', () => {
    const wrapper = mount(<Box gap="small">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-gap-small').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with gap large', () => {
    const wrapper = mount(<Box gap="large">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-gap-large').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with align center', () => {
    const wrapper = mount(<Box align="center">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-align-center').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with align start', () => {
    const wrapper = mount(<Box align="start">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-align-start').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with align end', () => {
    const wrapper = mount(<Box align="end">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-align-end').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with justify center', () => {
    const wrapper = mount(<Box justify="center">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-justify-center').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with justify start', () => {
    const wrapper = mount(<Box justify="start">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-justify-start').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with justify end', () => {
    const wrapper = mount(<Box justify="end">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-justify-end').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with justify space-around', () => {
    const wrapper = mount(<Box justify="space-around">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-justify-space-around').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with justify space-between', () => {
    const wrapper = mount(<Box justify="space-between">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-justify-space-between').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with justify space-evenly', () => {
    const wrapper = mount(<Box justify="space-evenly">Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-justify-space-evenly').text()).toEqual(
      'Lorem ipsum'
    );
  });
  it('should render with grow', () => {
    const wrapper = mount(<Box grow>Lorem ipsum</Box>);
    expect(wrapper.find('.vs-box.vs-box-grow').text()).toEqual('Lorem ipsum');
  });
  it('should render with arbitrary data-id prop', () => {
    const wrapper = mount(
      <Box data-id="test" id="test">
        Lorem ipsum
      </Box>
    );
    expect(wrapper.find('.vs-box[data-id="test"]').text()).toEqual(
      'Lorem ipsum'
    );
  });
});
