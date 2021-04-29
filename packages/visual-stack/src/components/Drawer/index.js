import './styles.css';

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export const Drawer = ({ className, children, isOpen, ...restProps }) => (
  <div
    {...restProps}
    className={classNames(className, 'vs-drawer', {
      'vs-drawer-open': isOpen,
    })}
  >
    {children}
  </div>
);

Drawer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};
