import React from 'react';
import './Input.modules.css';

const Input = React.forwardRef((props, ref) => <input ref={ref} {...props} className="myInput" />);

export default Input;
