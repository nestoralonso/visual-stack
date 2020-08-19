import React from 'react';
import { CollapsiblePanel } from '../CollapsiblePanel';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CollapsiblePanel', () => {
  let shallowWrapper;
  let onToggleCollapsed;

  describe('when initially collapsed', () => {
    beforeEach(() => {
      onToggleCollapsed = jest.fn();
      shallowWrapper = shallow(
        <CollapsiblePanel onToggleCollapsed={onToggleCollapsed}>
          <div id="test-marker">I am some content</div>
        </CollapsiblePanel>
      );
    });

    test('should not initially show content', () => {
      expect(shallowWrapper.find('div#test-marker').length).toBe(0);
    });

    test('should toggle content when button is clicked', () => {
      const headerButton = shallowWrapper.find(
        '.vs-collapsible-panel-header-button'
      );
      expect(shallowWrapper.find('div#test-marker').length).toBe(0);
      headerButton.simulate('click');
      expect(shallowWrapper.find('div#test-marker').length).toBe(1);
      expect(onToggleCollapsed.mock.calls[0][0]).toEqual(false);
      headerButton.simulate('click');
      expect(shallowWrapper.find('div#test-marker').length).toBe(0);
      expect(onToggleCollapsed.mock.calls[1][0]).toEqual(true);
    });
    
    test('should toggle content when title is clicked', () => {
      const headerTitle = shallowWrapper.find(
        '.vs-collapsible-panel-header-title'
      );
      expect(shallowWrapper.find('div#test-marker').length).toBe(0);
      headerTitle.simulate('click');
      expect(shallowWrapper.find('div#test-marker').length).toBe(1);
      expect(onToggleCollapsed.mock.calls[0][0]).toEqual(false);
      headerTitle.simulate('click');
      expect(shallowWrapper.find('div#test-marker').length).toBe(0);
      expect(onToggleCollapsed.mock.calls[1][0]).toEqual(true);
    });
  });

  describe('when not initially collapsed', () => {
    beforeEach(() => {
      onToggleCollapsed = jest.fn();
      shallowWrapper = shallow(
        <CollapsiblePanel
          onToggleCollapsed={onToggleCollapsed}
          initializedCollapsed={false}
        >
          <div id="test-marker">I am some content</div>
        </CollapsiblePanel>
      );
    });

    test('should initially show the content', () => {
      expect(shallowWrapper.find('div#test-marker').length).toBe(1);
    });

    test('should toggle content when button is clicked', () => {
      const headerButton = shallowWrapper.find(
        '.vs-collapsible-panel-header-button'
      );
      expect(shallowWrapper.find('div#test-marker').length).toBe(1);
      headerButton.simulate('click');
      expect(shallowWrapper.find('div#test-marker').length).toBe(0);
      expect(onToggleCollapsed.mock.calls[0][0]).toEqual(true);
      headerButton.simulate('click');
      expect(shallowWrapper.find('div#test-marker').length).toBe(1);
      expect(onToggleCollapsed.mock.calls[1][0]).toEqual(false);
    });

    test('should toggle content when title is clicked', () => {
      const headerTitle = shallowWrapper.find(
        '.vs-collapsible-panel-header-title'
      );
      expect(shallowWrapper.find('div#test-marker').length).toBe(1);
      headerTitle.simulate('click');
      expect(shallowWrapper.find('div#test-marker').length).toBe(0);
      expect(onToggleCollapsed.mock.calls[0][0]).toEqual(true);
      headerTitle.simulate('click');
      expect(shallowWrapper.find('div#test-marker').length).toBe(1);
      expect(onToggleCollapsed.mock.calls[1][0]).toEqual(false);
    });
  });

  describe('when rendering icon', () => {
    it('should render icon when I pass in an icon prop', () => {
      const titleIcon = <div id="titleIcon" />;
      const container = shallow(
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
      const container = shallow(
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
