import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import classNames from 'classnames';
import logoSvg from '../images/ui-kit/cj-logo-2021.svg';
import './CJLogo.css';

const CJLogo = ({ className, useStandardPadding = true, ...restProps }) => (
  <SVG
    {...restProps}
    src={logoSvg}
    className={classNames(
      'vs-cj-logo',
      'vs-cj-logo-svg',
      className,
      useStandardPadding && 'vs-cj-logo-padded'
    )}
  />
);

CJLogo.propTypes = {
  className: PropTypes.string,
};

export default CJLogo;
