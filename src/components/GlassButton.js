import React from 'react';

const GlassButton = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "glass-button-elite";
  const variants = {
    primary: "glass-button-primary",
    secondary: "glass-button-secondary"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default GlassButton;
