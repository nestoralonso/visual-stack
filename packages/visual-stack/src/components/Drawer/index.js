import './styles.css';

import classNames from 'classnames';
import React from 'react';

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
