import "./styles.css";

import Label from "../Form/Label";
import Box from "../../experimental/Box";
import React from "react";

const handleChange = (percentageInput, onChange) => {
  const percentage = parseInt(percentageInput, 10);
  if (isNaN(percentage)) {
    onChange(0);
    return;
  }
  if (percentage > 100) {
    return;
  }
  onChange(percentage);
};

export const PercentSlider = ({ value, onChange, label, id }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Slider onChange={(newValue) => handleChange(newValue, onChange)} 
      value={value} id={id} />
    </div>
  );
};

const Slider = ({ value, onChange, id }) => {
  return (
    <Box>
      <input
        id={id}
        data-testid={`${id}-slider`}
        className="percentage-input"
        value={`${value}`}
        onChange={(e) => onChange(e.target.value)}
        type="range"
        min="0"
        max="100"
        style={{ "--webkitProgressPercent": `${value}%` }}
      />

      <span className="percentage-input-wrapper">
        <span 
           data-testid={`${id}-display`} 
           className="percentage-display"
        >
          {value}
        </span>
        <span>%</span>
      </span>
    </Box>
  );
};
