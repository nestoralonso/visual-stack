import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Chip.css';
import Box from '../../experimental/Box';

export const Chip = ({
  children,
  className,
  backgroundColor,
  color,
  ...restProps
}) => {
  return (
    <Box
      {...restProps}
      className={classNames('vs-chip', className)}
      style={{
        backgroundColor,
        color,
      }}
    >
      {children}
    </Box>
  );
};

Chip.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
};
