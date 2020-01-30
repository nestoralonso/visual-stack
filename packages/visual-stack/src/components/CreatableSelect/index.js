import React from 'react';
import ReactCreatableSelect from 'react-select/Creatable';
import cn from 'classnames';
import './CreatableSelect.css';

const CreatableSelect = ({ className, ...otherProps }) => (
  <ReactCreatableSelect
    className={cn('vs-default-react-select-creatable', className)}
    classNamePrefix={'vs-react-select-creatable'}
    {...otherProps}
  />
);
export default CreatableSelect;
