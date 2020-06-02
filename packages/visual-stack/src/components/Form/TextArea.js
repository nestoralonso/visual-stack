import * as R from 'ramda';
import React from 'react';
import './Form.css';

export default ({ className, onBlur, onChange, trimmed, ...restProps }) => (
  <textarea
    {...restProps}
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
