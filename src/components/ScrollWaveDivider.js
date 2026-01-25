const ScrollWaveDivider = ({ 
  topColor = '#ffffff', 
  bottomColor = '#000000',
  height = 300,
  className = ''
}) => {
  const gradientId = `wave-gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div 
      className={`fixed inset-x-0 pointer-events-none z-40 ${className}`}
      style={{ 
        height: `${height}px`,
        top: '50vh',
        transform: 'translateY(-50%)',
        willChange: 'transform, opacity',
        visibility: 'hidden'
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 1920 ${height}`}
        preserveAspectRatio="none"
        style={{ 
          width: '100%', 
          height: '100%',
          filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))'
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="50%" stopColor={topColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        
        {/* Main flowing wave */}
        <path
          fill={`url(#${gradientId})`}
          d={`M 0,${height * 0.6} Q 480,${height * 0.2} 960,${height * 0.6} T 1920,${height * 0.6} L 1920,${height} L 0,${height} Z`}
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4,0,0.6,1;0.4,0,0.6,1;0.4,0,0.6,1;0.4,0,0.6,1"
            keyTimes="0;0.25;0.5;0.75;1"
            values={`
              M 0,${height * 0.6} Q 480,${height * 0.2} 960,${height * 0.6} T 1920,${height * 0.6} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.5} Q 480,${height * 0.7} 960,${height * 0.3} T 1920,${height * 0.5} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.7} Q 480,${height * 0.1} 960,${height * 0.8} T 1920,${height * 0.7} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.4} Q 480,${height * 0.8} 960,${height * 0.2} T 1920,${height * 0.4} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.6} Q 480,${height * 0.2} 960,${height * 0.6} T 1920,${height * 0.6} L 1920,${height} L 0,${height} Z
            `}
          />
        </path>
        
        {/* Secondary wave for depth */}
        <path
          fill={`url(#${gradientId})`}
          opacity="0.6"
          d={`M 0,${height * 0.4} Q 720,${height * 0.8} 1440,${height * 0.2} L 1920,${height * 0.4} L 1920,${height} L 0,${height} Z`}
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25,0.46,0.45,0.94;0.25,0.46,0.45,0.94;0.25,0.46,0.45,0.94"
            keyTimes="0;0.33;0.66;1"
            values={`
              M 0,${height * 0.4} Q 720,${height * 0.8} 1440,${height * 0.2} L 1920,${height * 0.4} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.3} Q 720,${height * 0.1} 1440,${height * 0.7} L 1920,${height * 0.3} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.5} Q 720,${height * 0.9} 1440,${height * 0.1} L 1920,${height * 0.5} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.4} Q 720,${height * 0.8} 1440,${height * 0.2} L 1920,${height * 0.4} L 1920,${height} L 0,${height} Z
            `}
          />
        </path>
        
        {/* Tertiary subtle wave */}
        <path
          fill={`url(#${gradientId})`}
          opacity="0.3"
          d={`M 0,${height * 0.8} Q 960,${height * 0.5} 1920,${height * 0.8} L 1920,${height} L 0,${height} Z`}
        >
          <animate
            attributeName="d"
            dur="25s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.165,0.84,0.44,1;0.165,0.84,0.44,1"
            keyTimes="0;0.5;1"
            values={`
              M 0,${height * 0.8} Q 960,${height * 0.5} 1920,${height * 0.8} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.7} Q 960,${height * 0.9} 1920,${height * 0.7} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.8} Q 960,${height * 0.5} 1920,${height * 0.8} L 1920,${height} L 0,${height} Z
            `}
          />
        </path>
      </svg>
    </div>
  );
};

export default ScrollWaveDivider;