import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Box.css';

const Box = ({
  alignItems,
  border,
  children,
  className,
  direction,
  gap,
  grow,
  justifyContent,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  ...restProps
}) => {
  const classes = classNames(
    'vs-box',
    `vs-box-direction-${direction}`,
    border && 'vs-box-border',
    gap && `vs-box-gap-${gap === true ? 'default' : gap}`,
    padding && `vs-box-padding-${padding === true ? 'default' : padding}`,
    paddingBottom &&
      `vs-box-padding-bottom-${
        paddingBottom === true ? 'default' : paddingBottom
      }`,
    paddingLeft &&
      `vs-box-padding-left-${paddingLeft === true ? 'default' : paddingLeft}`,
    paddingRight &&
      `vs-box-padding-right-${
        paddingRight === true ? 'default' : paddingRight
      }`,
    paddingTop &&
      `vs-box-padding-top-${paddingTop === true ? 'default' : paddingTop}`,
    alignItems && `vs-box-align-items-${alignItems}`,
    justifyContent && `vs-box-justify-content-${justifyContent}`,
    grow && 'vs-box-grow',
    className
  );
  return (
    <div {...restProps} className={classes}>
      {children}
    </div>
  );
};

Box.defaultProps = {
  direction: 'row',
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['column', 'row']),
  padding: PropTypes.oneOf(['small', true, 'large', 'xl', 'xxl']),
  paddingTop: PropTypes.oneOf(['small', true, 'large', 'xl', 'xxl']),
  paddingBottom: PropTypes.oneOf(['small', true, 'large', 'xl', 'xxl']),
  paddingLeft: PropTypes.oneOf(['small', true, 'large', 'xl', 'xxl']),
  paddingRight: PropTypes.oneOf(['small', true, 'large', 'xl', 'xxl']),
  gap: PropTypes.oneOf(['small', true, 'large', 'xl', 'xxl']),
  alignItems: PropTypes.oneOf(['start', 'center', 'end']),
  justifyContent: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  border: PropTypes.bool,
  grow: PropTypes.bool,
};

export default Box;
