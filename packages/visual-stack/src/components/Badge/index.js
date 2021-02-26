import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './Badge.css';
import Box from '../../experimental/Box';

export const Badge = ({ children, className, variant, ...restProps }) => {
  return (
    <Box
      {...restProps}
      className={classNames(
        'vs-badge',
        `vs-badge-variant-${variant}`,
        className
      )}
    >
      {children}
    </Box>
  );
};

Badge.defaultProps = {
  variant: '1',
};

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    'cj-green',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ]),
};
