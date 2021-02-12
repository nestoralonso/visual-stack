import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SlidingPanel.css';
import FilterVariantIcon from 'mdi-react/FilterVariantIcon';
import ArrowRightIcon from 'mdi-react/ArrowRightIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import { Button } from '../Button.js';
import * as R from 'ramda';

const Badge = ({ children }) => {
  return <div className="vs-sliding-panel-badge">{children}</div>;
};

const removeUnrelatedProps = R.omit([
  'initialActive',
  'syncStateToOpen',
  'expandFilterDropdown',
  'hideFilterDropdown',
  'toggleSlidingPanel',
  'setSlidingPanelActiveState',
]);

export const ToggleIcon = ({
  onClick,
  hoverText,
  toggleIconState,
  className,
  ...restProps
}) => {
  const Icon = toggleIconState ? ArrowRightIcon : FilterVariantIcon;

  return (
    <a
      {...restProps}
      className={`vs-sliding-panel-toggle-icon ${className}`}
      onClick={onClick}
      title={hoverText}
    >
      <Button type="inline-outline-secondary">
        <Icon className="vs-sliding-panel-section-icon" />
      </Button>
    </a>
  );
};
ToggleIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  toggleIconState: PropTypes.bool,
  hoverText: PropTypes.string,
  label: PropTypes.string,
};

export const SlidingPanel = ({
  className = '',
  children,
  active,
  ...restProps
}) => {
  return (
    <div
      className={classNames(`${className} vs-sliding-panel`, {
        'vs-active': active,
      })}
      {...removeUnrelatedProps(restProps)}
    >
      <ul className="vs-force-sliding-panel-width">{children}</ul>
    </div>
  );
};
SlidingPanel.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
};

export const SlidingPanelHeader = ({
  className = '',
  children,
  ...restProps
}) => {
  return (
    <li className={`${className} vs-sliding-panel-header`} {...restProps}>
      {children}
    </li>
  );
};
SlidingPanelHeader.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export const SlidingPanelSection = ({
  className = '',
  children,
  ...restProps
}) => {
  return (
    <li className={`${className} vs-sliding-panel-section`} {...restProps}>
      {children}
    </li>
  );
};
SlidingPanelSection.propTypes = {
  children: PropTypes.any,
};

export const SlidingPanelDropdown = ({
  className = '',
  label,
  children,
  onClick,
  badge,
  expanded,
  id = '',
  ...restProps
}) => {
  const containerClasses = classNames(
    `${className} vs-sliding-panel-section-container`,
    {
      'vs-expanded': expanded,
    }
  );
  const optionsClasses = classNames('vs-sliding-panel-section-options', {
    'vs-expanded': expanded,
  });
  return (
    <ul
      className={containerClasses}
      id={id}
      {...removeUnrelatedProps(restProps)}
    >
      <li>
        <a
          onClick={onClick}
          className="vs-sliding-panel-section-container-label"
        >
          <div className="vs-sliding-panel-section-label">
            {label}
            {badge && <Badge>{badge}</Badge>}
          </div>
          <div className="vs-sliding-panel-chevron-container">
            <ChevronRightIcon />
          </div>
        </a>
      </li>
      <ul>
        <div className={optionsClasses}>{children}</div>
      </ul>
    </ul>
  );
};
SlidingPanelDropdown.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
  label: PropTypes.any,
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
};
