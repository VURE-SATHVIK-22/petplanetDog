import React from 'react';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div className={`glass-card-elite p-8 ${hover ? '' : 'hover:translate-y-0 hover:bg-white/45'} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
