import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Badge.css';
import Box from '../../experimental/Box';

export const Badge = ({
  children,
  className,
  backgroundColor,
  color,
  ...restProps
}) => {
  return (
    <Box
      {...restProps}
      className={classNames('vs-badge', className)}
      style={{
        backgroundColor,
        color,
      }}
    >
      {children}
    </Box>
  );
};

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
};
