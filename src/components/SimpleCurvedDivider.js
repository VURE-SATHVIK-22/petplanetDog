import './WaveDivider.css';

const SimpleCurvedDivider = ({ 
  topColor = '#ffffff', 
  bottomColor = '#000000',
  height = 150
}) => {
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ height: `${height}px`, zIndex: 10 }}
    >
      <div 
        className="absolute inset-0 w-full h-full smooth-wave-container"
        style={{
          background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`,
          clipPath: `polygon(0 0, 100% 0, 100% 70%, 50% 85%, 0 70%)`
        }}
      />
      
      <div 
        className="absolute inset-0 w-full h-full wave-overlay"
        style={{
          background: `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`,
          clipPath: `polygon(0 0, 100% 0, 100% 60%, 75% 80%, 25% 75%, 0 60%)`,
          opacity: 0.4
        }}
      />
    </div>
  );
};

export default SimpleCurvedDivider;