import React from 'react';
import './Modal.modules.css';

const Modal = ({ children, isVisible, setVisible }) => {
  const rootClasses = ['myModal'];
  if (isVisible) {
    rootClasses.push('active');
  }

  return (
    <div
      aria-hidden="true"
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div
        aria-hidden="true"
        className="myModalContent"
        onClick={(e) => e.stopPropagation()}
      >
        {children }
      </div>
    </div>
  );
};

export default Modal;
