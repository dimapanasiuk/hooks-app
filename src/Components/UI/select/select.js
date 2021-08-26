import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Select = ({
  options, defaultValue, value, onChange,
}) => (
  <div>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="value1">{defaultValue}</option>
      {options.map((option) => (
        <option key={uuidv4()} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
