import "./styles.css";

import InformationOutlineIcon from "mdi-react/InformationOutlineIcon";
import React, { Component, createRef } from "react";

class ToolTipConstructor extends Component {
  constructor(props) {
    super(props);
    const {
      offsetGap,
      offset,
      width,
      direction,
      children,
      className,
      ...rest
    } = props;
    
    let toolTipStyles;

    switch (direction) {
      case "top":
        toolTipStyles = {
          width: width ? parseInt(width) : 140,
          marginLeft: width ? -Math.round(width / 2) : -70,
          bottom: `${120 + (parseInt(offsetGap) || 0)}%`,
          left: `${50 + (parseInt(offset) || 0)}%`,
        };
        break;
      case "left":
        toolTipStyles = {
          width: parseInt(width),
          right: `${115 + (parseInt(offsetGap) || 0)}%`,
          top: `${-5 + (parseInt(offset) || 0)}px`,
        };
        break;
      case "right":
        toolTipStyles = {
          width: parseInt(width),
          left: `${120 + (parseInt(offsetGap) || 0)}%`,
          top: `${-5 + (parseInt(offset) || 0)}px`,
        };
        break;
      default:
        toolTipStyles = {
          width: width ? parseInt(width) : 140,
          marginLeft: width ? -Math.round(width / 2) : -70,
          top: `${115 + (parseInt(offsetGap) || 0)}%`,
          left: `${50 + (parseInt(offset) || 0)}%`,
        };
    }
    
    this.state = {
      styles: toolTipStyles,
    };

    this.tooltipClassNames = `tooltip tooltip-${direction}`;
    this.customClassNames = className ? "tooltip-hint" : `tooltip-hint ${className}`;

    this.children = children;
    this.rest = rest;
    this.ref = createRef();
  }
  
  render() {
    return (
      <div
        className={this.customClassNames}
        {...this.rest}
      >
        {this.children[0]}
        <span ref={this.ref} className={this.tooltipClassNames} style={this.state.styles}>
          {this.children[1]}
        </span>
      </div>
    )
  }
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
    (element) => element.type.name === Hover.name
  );
  const instructionsContent = children.find(
    (element) => element.type.name === Instructions.name
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
  ToolTipWithIcon
}