import * as React from 'react';
import { Button } from './Button';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import classNames from 'classnames';
import './CollapsiblePanel.css';
import PropTypes from 'prop-types';

const paddingSize = {
  LARGE: 'large',
};

export class PureCollapsiblePanel extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.props.onChange(!this.props.collapsed);
  }

  render() {
    const {
      children,
      className,
      collapsed,
      onChange,
      padding,
      title,
      titleIcon,
      ...restProps
    } = this.props;

    return (
      <div
        {...restProps}
        className={classNames(className, 'vs-collapsible-panel', {
          'vs-collapsible-panel-padding-large': padding === paddingSize.LARGE,
        })}
      >
        <div className="vs-collapsible-panel-header">
          <Button
            type="icon"
            className="vs-collapsible-panel-header-button"
            onClick={this.toggleCollapsed}
          >
            {collapsed ? <ChevronRightIcon /> : <ChevronDownIcon />}
          </Button>
          <div className="vs-collapsible-panel-icon-container">{titleIcon}</div>
          <span
            className="vs-collapsible-panel-header-title"
            onClick={this.toggleCollapsed}
          >
            {title}
          </span>
        </div>
        {!collapsed && (
          <div className="vs-collapsible-panel-item">
            {titleIcon && (
              <div className="vs-collapsible-panel-icon-placeholder" />
            )}
            <div className="vs-collapsible-panel-item-content">{children}</div>
          </div>
        )}
      </div>
    );
  }
}

export class CollapsiblePanel extends React.Component {
  constructor(props) {
    super(props);

    const collapsed =
      props.initializedCollapsed === undefined
        ? true
        : props.initializedCollapsed;
    this.state = { collapsed };

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { initializedCollapsed, ...restProps } = this.props;

    return (
      <PureCollapsiblePanel
        onChange={this.toggleCollapsed}
        collapsed={this.state.collapsed}
        {...restProps}
      />
    );
  }
}

PureCollapsiblePanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  collapsed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  padding: PropTypes.oneOf([paddingSize.LARGE]),
  title: PropTypes.node,
  titleIcon: PropTypes.node,
};

CollapsiblePanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  initializedCollapsed: PropTypes.bool,
  padding: PropTypes.oneOf([paddingSize.LARGE]),
  title: PropTypes.node,
  titleIcon: PropTypes.node,
};

export default CollapsiblePanel;
