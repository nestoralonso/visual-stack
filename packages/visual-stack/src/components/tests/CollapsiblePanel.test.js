import React from 'react';
import { CollapsiblePanel, PureCollapsiblePanel } from '../CollapsiblePanel';
import { mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CollapsiblePanel', () => {
  let container;

  describe('when initially collapsed', () => {
    beforeEach(() => {
      container = mount(
        <CollapsiblePanel>
          <div id="test-marker">I am some content</div>
        </CollapsiblePanel>
      );
    });

    test('should not initially show content', () => {
      expect(container.find('div#test-marker').length).toBe(0);
    });

    test('should toggle content when button is clicked', () => {
      const headerButton = container.find(
        'button.vs-collapsible-panel-header-button'
      );
      expect(container.find('div#test-marker').length).toBe(0);
      headerButton.simulate('click');
      expect(container.find('div#test-marker').length).toBe(1);
      headerButton.simulate('click');
      expect(container.find('div#test-marker').length).toBe(0);
    });

    test('should toggle content when title is clicked', () => {
      const headerTitle = container.find(
        'button.vs-collapsible-panel-header-button'
      );
      expect(container.find('div#test-marker').length).toBe(0);
      headerTitle.simulate('click');
      expect(container.find('div#test-marker').length).toBe(1);
      headerTitle.simulate('click');
      expect(container.find('div#test-marker').length).toBe(0);
    });
  });

  describe('when not initially collapsed', () => {
    beforeEach(() => {
      container = mount(
        <CollapsiblePanel initializedCollapsed={false} >
          <div id="test-marker">I am some content</div>
        </CollapsiblePanel>
      );
    });

    test('should initially show the content', () => {
      expect(container.find('div#test-marker').length).toBe(1);
    });

    test('should toggle content when button is clicked', () => {
      const headerButton = container.find(
        'button.vs-collapsible-panel-header-button'
      );
      expect(container.find('div#test-marker').length).toBe(1);
      headerButton.simulate('click');
      expect(container.find('div#test-marker').length).toBe(0);
      headerButton.simulate('click');
      expect(container.find('div#test-marker').length).toBe(1);
    });

    test('should toggle content when title is clicked', () => {
      const headerTitle = container.find(
        'button.vs-collapsible-panel-header-button'
      );
      expect(container.find('div#test-marker').length).toBe(1);
      headerTitle.simulate('click');
      expect(container.find('div#test-marker').length).toBe(0);
      headerTitle.simulate('click');
      expect(container.find('div#test-marker').length).toBe(1);
    });
  });

  describe('when rendering icon', () => {
    it('should render icon when I pass in an icon prop', () => {
      const titleIcon = <div id="titleIcon" />;
      const container = mount(
        <CollapsiblePanel titleIcon={titleIcon} initializedCollapsed={false} />
      );
      expect(
        container.find('.vs-collapsible-panel-icon-container #titleIcon')
      ).toHaveLength(1);
      expect(
        container.find('.vs-collapsible-panel-icon-placeholder')
      ).toHaveLength(1);
    });

    it('should not render icon when I dont pass in an icon prop', () => {
      const container = mount(
        <CollapsiblePanel initializedCollapsed={false} />
      );
      expect(
        container.find('.vs-collapsible-panel-icon-container #titleIcon')
      ).toHaveLength(0);
      expect(
        container.find('.vs-collapsible-panel-icon-placeholder')
      ).toHaveLength(0);
    });
  });
});

describe('PureCollapsiblePanel', () => {
  let container;
  let onToggleCollapsed;

  describe('when collapsed prop is true', () => {

    test('render collapsed and respond false when button clicked', () => {
      onToggleCollapsed = jest.fn();
      container = mount(
        <PureCollapsiblePanel collapsed={true} onToggleCollapsed={onToggleCollapsed}>
          <div id="test-marker">I am some content</div>
        </PureCollapsiblePanel>
      );

      const headerButton = container.find(
        'button.vs-collapsible-panel-header-button'
      );
      expect(container.find('div#test-marker').length).toBe(0);
      headerButton.simulate('click');
      expect(container.find('div#test-marker').length).toBe(0);
      expect(onToggleCollapsed.mock.calls[0][0]).toEqual(false);
    });

    test('render collapsed and respond false when title clicked', () => {
      onToggleCollapsed = jest.fn();
      container = mount(
        <PureCollapsiblePanel collapsed={true} onToggleCollapsed={onToggleCollapsed}>
          <div id="test-marker">I am some content</div>
        </PureCollapsiblePanel>
      );

      const headerButton = container.find(
        '.vs-collapsible-panel-header-title'
      );
      expect(container.find('div#test-marker').length).toBe(0);
      headerButton.simulate('click');
      expect(container.find('div#test-marker').length).toBe(0);
      expect(onToggleCollapsed.mock.calls[0][0]).toEqual(false);
    });


  });

  describe('when collapsed prop is false', () => {

    test('render expanded and respond true when button clicked', () => {
      onToggleCollapsed = jest.fn();
      container = mount(
        <PureCollapsiblePanel collapsed={false} onToggleCollapsed={onToggleCollapsed}>
          <div id="test-marker">I am some content</div>
        </PureCollapsiblePanel>
      );

      const headerButton = container.find(
        'button.vs-collapsible-panel-header-button'
      );
      expect(container.find('div#test-marker').length).toBe(1);
      headerButton.simulate('click');
      expect(container.find('div#test-marker').length).toBe(1);
      expect(onToggleCollapsed.mock.calls[0][0]).toEqual(true);
    });

    test('render expanded and respond true when title clicked', () => {
      onToggleCollapsed = jest.fn();
      container = mount(
        <PureCollapsiblePanel collapsed={false} onToggleCollapsed={onToggleCollapsed}>
          <div id="test-marker">I am some content</div>
        </PureCollapsiblePanel>
      );

      const headerButton = container.find(
        '.vs-collapsible-panel-header-title'
      );
      expect(container.find('div#test-marker').length).toBe(1);
      headerButton.simulate('click');
      expect(container.find('div#test-marker').length).toBe(1);
      expect(onToggleCollapsed.mock.calls[0][0]).toEqual(true);
    });
  });

  describe('when rendering icon', () => {
    it('should render icon when I pass in an icon prop', () => {
      const titleIcon = <div id="titleIcon" />;
      const container = mount(
        <PureCollapsiblePanel titleIcon={titleIcon} collapsed={false} onToggleCollapsed={()=>{}} />
      );
      expect(
        container.find('.vs-collapsible-panel-icon-container #titleIcon')
      ).toHaveLength(1);
      expect(
        container.find('.vs-collapsible-panel-icon-placeholder')
      ).toHaveLength(1);
    });

    it('should not render icon when I dont pass in an icon prop', () => {
      const container = mount(
        <PureCollapsiblePanel collapsed={false} onToggleCollapsed={()=>{}}/>
      );
      expect(
        container.find('.vs-collapsible-panel-icon-container #titleIcon')
      ).toHaveLength(0);
      expect(
        container.find('.vs-collapsible-panel-icon-placeholder')
      ).toHaveLength(0);
    });
  });
});
