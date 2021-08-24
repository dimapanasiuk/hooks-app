import React from 'react';
import './Button.modules.css';

const Button = ({ children, ...props }) => (
  <button {...props} type="button" className="myBtn">
    {children}
  </button>
);

export default Button;
