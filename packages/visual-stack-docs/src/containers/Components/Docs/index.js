import React from 'react';
import {
  PageHeader,
  PageTitle,
} from '@cjdev/visual-stack/lib/components/PageHeader';
import PageContent from '@cjdev/visual-stack/lib/components/PageContent';
// 1. add an import for your demo
import AlertDocs from './alert';
import BadgeDocs from './badge';
import BlankSlateDocs from './blankslate';
import BoxDocs from './box';
import ButtonDocs from './button';
import ButtonWithDropdownDocs from './button-with-dropdown';
import CardDocs from './card';
import CollapsiblePanelDocs from './collapsiblepanel';
import DatePickerDocs from './datepicker';
import DrawerDocs from './drawer';
import ExpandingInputButtonDocs from './expanding-input-button';
import FormDocs from './form';
import ListDocs from './list';
import ListViewDocs from './listview';
import LoadingAnimationDocs from './loading-animation';
import ModalDocs from './modal';
import PageHeaderDocs from './pageheader';
import PaginationDocs from './pagination';
import PanelDocs from './panel';
import PercentSliderDocs from './percentslider';
import PopoverDocs from './popover';
import SelectDocs from './select';
import SideNavDocs from './sidenav';
import SlidingPanelDocs from './slidingpanel';
import SpinnerDocs from './spinner';
import TabLayoutDocs from './tablayout';
import TableDocs from './table';
import TopNavDocs from './topnav';

const routeComponentMap = {};

const addComponentRoute = (path, linkName, component) => {
  routeComponentMap[path] = { path, linkName, component };
};

// 2. add your demo to the routeComponentMap
addComponentRoute('alert', 'Alert', <AlertDocs />);
addComponentRoute('badge', 'Badge', <BadgeDocs />);
addComponentRoute('blankslate', 'Blank Slate', <BlankSlateDocs />);
addComponentRoute('box', 'Box', <BoxDocs />);
addComponentRoute('button', 'Button', <ButtonDocs />);
addComponentRoute(
  'button-with-dropdown',
  'Button With Dropdown',
  <ButtonWithDropdownDocs />
);
addComponentRoute('card', 'Card', <CardDocs />);
addComponentRoute(
  'collapsiblepanel',
  'Collapsible Panel',
  <CollapsiblePanelDocs />
);
addComponentRoute(
  'expanding-input-button',
  'Expanding Input Button',
  <ExpandingInputButtonDocs />
);
addComponentRoute('datepicker', 'Date Picker', <DatePickerDocs />);
addComponentRoute('drawer', 'Drawer', <DrawerDocs />);
addComponentRoute('form', 'Form', <FormDocs />);
addComponentRoute('list', 'List', <ListDocs />);
addComponentRoute('listview', 'List View', <ListViewDocs />);
addComponentRoute(
  'loading-animation',
  'Loading Animation',
  <LoadingAnimationDocs />
);
addComponentRoute('modal', 'Modal', <ModalDocs />);
addComponentRoute('pageheader', 'Page Header', <PageHeaderDocs />);
addComponentRoute('pagination', 'Pagination', <PaginationDocs />);
addComponentRoute('panel', 'Panel', <PanelDocs />);
addComponentRoute('percentslider', 'Percent Slider', <PercentSliderDocs />);
addComponentRoute('popover', 'Popover', <PopoverDocs />);
addComponentRoute('select', 'Select', <SelectDocs />);
addComponentRoute('sidenav', 'SideNav', <SideNavDocs />);
addComponentRoute('slidingpanel', 'Sliding Panel', <SlidingPanelDocs />);
addComponentRoute('spinner', 'Spinner', <SpinnerDocs />);
addComponentRoute('tablayout', 'TabLayout', <TabLayoutDocs />);
addComponentRoute('table', 'Table', <TableDocs />);
addComponentRoute('topnav', 'TopNav', <TopNavDocs />);

const ComponentDocs = ({ params }) => {
  const routeData = routeComponentMap[params.componentName];
  return (
    <div>
      <PageHeader>
        <PageTitle>{routeData.linkName}</PageTitle>
      </PageHeader>
      <PageContent>{routeData.component}</PageContent>
    </div>
  );
};

export { routeComponentMap };
export default ComponentDocs;
