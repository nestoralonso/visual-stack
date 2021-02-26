import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Modal.css';

const backgroundClick = (event, onBackgroundClick) => {
  if (event.target.matches('.modal')) {
    onBackgroundClick();
  }
};

export const Modal = ({
  children,
  onBackgroundClick,
  className,
  ...restProps
}) => (
  <div
    {...restProps}
    className={classNames('modal', className)}
    style={{ display: 'block' }}
    onClick={event =>
      onBackgroundClick ? backgroundClick(event, onBackgroundClick) : {}
    }
  >
    {children}
  </div>
);

export const Header = ({ title, children, className, ...restProps }) => (
  <div {...restProps} className={classNames('modal-header', className)}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export const Dialog = ({ children, className, ...restProps }) => (
  <div {...restProps} className={classNames('modal-dialog', className)}>
    {children}
  </div>
);

export const Content = ({ children, className, ...restProps }) => (
  <div {...restProps} className={classNames('modal-content', className)}>
    {children}
  </div>
);

export const Body = ({ children, className, ...restProps }) => (
  <div {...restProps} className={classNames('modal-body', className)}>
    {children}
  </div>
);

export const Footer = ({ children, className, ...restProps }) => (
  <div {...restProps} className={classNames('modal-footer', className)}>
    {children}
  </div>
);

export const Backdrop = ({ className, ...restProps }) => (
  <div
    {...restProps}
    className={classNames('modal-backdrop fade in', className)}
  />
);
