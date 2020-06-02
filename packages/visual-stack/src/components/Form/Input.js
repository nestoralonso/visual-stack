import * as R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Input = ({
  className,
  onBlur,
  onChange,
  trimmed,
  type,
  ...restProps
}) => (
  <input
    {...restProps}
    type={type || 'text'}
    className={`form-control ${className || ''}`}
    onChange={onChange}
    onBlur={e => {
      const maybeTrimmedEvent = trimmed
        ? R.over(R.lensPath(['target', 'value']), R.trim)(e)
        : e;

      if (onChange) {
        onChange(maybeTrimmedEvent);
      }

      if (onBlur) {
        onBlur(maybeTrimmedEvent);
      }
    }}
  />
);

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  trimmed: PropTypes.bool,
};

export default Input;
