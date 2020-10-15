import './styles.css';

import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';
import React, { Component, createRef } from 'react';

const ToolTipConstructor = ({
  offsetGap,
  offset,
  width,
  direction,
  children,
  className,
  ...rest
}) => {

  let toolTipStyles;

  switch (direction) {
    case 'top':
      toolTipStyles = {
        width: width ? parseInt(width, 10) : 140,
        marginLeft: width ? -Math.round(width / 2) : -70,
        bottom: `${120 + (parseInt(offsetGap, 10) || 0)}%`,
        left: `${50 + (parseInt(offset, 10) || 0)}%`,
      };
      break;
    case 'left':
      toolTipStyles = {
        width: parseInt(width, 10),
        right: `${115 + (parseInt(offsetGap, 10) || 0)}%`,
        top: `${-5 + (parseInt(offset, 10) || 0)}px`,
      };
      break;
    case 'right':
      toolTipStyles = {
        width: parseInt(width, 10),
        left: `${120 + (parseInt(offsetGap, 10) || 0)}%`,
        top: `${-5 + (parseInt(offset, 10) || 0)}px`,
      };
      break;
    default:
      toolTipStyles = {
        width: width ? parseInt(width, 10) : 140,
        marginLeft: width ? -Math.round(width / 2) : -70,
        top: `${115 + (parseInt(offsetGap, 10) || 0)}%`,
        left: `${50 + (parseInt(offset, 10) || 0)}%`,
      };
  }

  const tooltipClassNames = `tooltip tooltip-${direction}`;
  const customClassNames = className
      ? 'tooltip-hint'
      : `tooltip-hint ${className}`;

  return (
    <div className={customClassNames} {...rest}>
    {children[0]}
    <span
      className={tooltipClassNames}
      style={toolTipStyles}
    >
      {children[1]}
    </span>
  </div>
  );
};

export const ToolTipWithIcon = ({ children, iconSize, ...rest }) => {
  return (
    <ToolTipConstructor {...rest}>
      <InformationOutlineIcon width={iconSize} height={iconSize} />
      <>{children}</>
    </ToolTipConstructor>
  );
};

export const Hover = ({ children }) => {
  return <>{children}</>;
};

export const Instructions = ({ children }) => {
  return <>{children}</>;
};

export const ToolTip = ({ children, ...rest }) => {
  const hoverContent = children.find(
    element => element.type.name === Hover.name
  );
  const instructionsContent = children.find(
    element => element.type.name === Instructions.name
  );

  return (
    <ToolTipConstructor {...rest}>
      {hoverContent}
      {instructionsContent}
    </ToolTipConstructor>
  );
};



export default {
  ToolTip,
  Hover,
  Instructions,
  ToolTipWithIcon,
};
