import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import classNames from 'classnames';
import logoSvg from '../../src/images/ui-kit/cj-logo-2021.svg';
import './CJLogo.css';

const CJLogo = ({ className, useStandardPadding = true, ...restProps }) => (
  <SVG
    {...restProps}
    src={logoSvg}
    className={classNames(
      'vs-cj-logo',
      'vs-cj-logo-svg',
      useStandardPadding && 'vs-cj-logo-padded',
      className
    )}
  />
);

CJLogo.propTypes = {
  className: PropTypes.string,
  useStandardPadding: PropTypes.bool,
};

export default CJLogo;
