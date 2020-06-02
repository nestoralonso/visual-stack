import * as R from 'ramda';
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const TextArea = ({ className, onBlur, onChange, trimmed, ...restProps }) => (
  <textarea
    {...restProps}
    className={classNames('form-control', className)}
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

TextArea.propTypes = {
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  trimmed: PropTypes.bool,
  value: PropTypes.string,
};

export default TextArea;
