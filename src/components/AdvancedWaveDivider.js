import { useEffect, useRef, useState } from 'react';
import './AdvancedWave.css';

const AdvancedWaveDivider = ({ 
  topColor = '#ffffff', 
  bottomColor = '#000000',
  height = 400,
  className = '',
  index = 0
}) => {
  const waveRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const gradientId = `advanced-wave-${index}-${Math.random().toString(36).slice(2, 9)}`;
  
  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return;

    let animationId;
    let lastScrollY = 0;
    let velocity = 0;
    
    const updateWave = () => {
      const rect = wave.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Calculate velocity for dynamic effects
      velocity = (scrollY - lastScrollY) * 0.1;
      lastScrollY = scrollY;
      
      // Enhanced visibility calculation
      const centerY = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(centerY - windowHeight / 2);
      const maxDistance = windowHeight;
      
      // Smooth progress calculation
      const progress = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));
      setScrollProgress(progress);
      
      // Enhanced visibility with hysteresis
      const visibilityThreshold = 0.1;
      if (progress > visibilityThreshold && !isVisible) {
        setIsVisible(true);
      } else if (progress < visibilityThreshold * 0.5 && isVisible) {
        setIsVisible(false);
      }
      
      // Dynamic wave deformation based on scroll velocity
      const paths = wave.querySelectorAll('path');
      paths.forEach((path, pathIndex) => {
        const baseDeformation = Math.sin(Date.now() * 0.001 + pathIndex) * 0.1;
        const velocityDeformation = velocity * 0.5;
        const totalDeformation = baseDeformation + velocityDeformation;
        
        path.style.transform = `scaleY(${1 + totalDeformation * 0.1}) translateZ(0)`;
      });
      
      animationId = requestAnimationFrame(updateWave);
    };
    
    updateWave();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible]);

  // Dynamic wave parameters based on scroll progress
  const waveIntensity = scrollProgress * 0.3 + 0.7;
  const waveSpeed = 1 + scrollProgress * 0.5;
  
  return (
    <div 
      ref={waveRef}
      className={`fixed inset-x-0 pointer-events-none z-50 ${className}`}
      style={{ 
        height: `${height}px`,
        top: '50vh',
        transform: 'translateY(-50%)',
        willChange: 'transform, opacity',
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: scrollProgress,
        filter: `blur(${(1 - scrollProgress) * 2}px) brightness(${0.9 + scrollProgress * 0.1})`
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full wave-svg"
        viewBox={`0 0 1920 ${height}`}
        preserveAspectRatio="none"
        style={{ 
          width: '100%', 
          height: '100%',
          filter: `drop-shadow(0 ${10 + scrollProgress * 20}px ${20 + scrollProgress * 40}px rgba(0,0,0,${0.1 + scrollProgress * 0.1}))`
        }}
      >
        <defs>
          {/* Enhanced gradient with multiple stops */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} stopOpacity="1" />
            <stop offset="25%" stopColor={topColor} stopOpacity="0.9" />
            <stop offset="50%" stopColor={topColor} stopOpacity="0.7" />
            <stop offset="75%" stopColor={bottomColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={bottomColor} stopOpacity="1" />
          </linearGradient>
          
          {/* Animated gradient for shimmer effect */}
          <linearGradient id={`${gradientId}-shimmer`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-200 0;1920 0;-200 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </linearGradient>
          
          {/* Noise filter for texture */}
          <filter id={`${gradientId}-noise`}>
            <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
        
        {/* Primary wave - most prominent */}
        <path
          className="primary-wave"
          fill={`url(#${gradientId})`}
          d={`M 0,${height * 0.6} Q 480,${height * 0.2} 960,${height * 0.6} T 1920,${height * 0.6} L 1920,${height} L 0,${height} Z`}
          style={{ 
            transformOrigin: 'center',
            filter: `url(#${gradientId}-noise)`
          }}
        >
          <animate
            attributeName="d"
            dur={`${18 / waveSpeed}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.2;0.4;0.6;0.8;1"
            values={`
              M 0,${height * 0.6} Q 480,${height * (0.2 * waveIntensity)} 960,${height * 0.6} T 1920,${height * 0.6} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.5} Q 480,${height * (0.8 * waveIntensity)} 960,${height * 0.3} T 1920,${height * 0.5} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.7} Q 480,${height * (0.1 * waveIntensity)} 960,${height * 0.8} T 1920,${height * 0.7} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.4} Q 480,${height * (0.9 * waveIntensity)} 960,${height * 0.2} T 1920,${height * 0.4} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.65} Q 480,${height * (0.3 * waveIntensity)} 960,${height * 0.7} T 1920,${height * 0.65} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.6} Q 480,${height * (0.2 * waveIntensity)} 960,${height * 0.6} T 1920,${height * 0.6} L 1920,${height} L 0,${height} Z
            `}
          />
        </path>
        
        {/* Secondary wave - offset timing */}
        <path
          className="secondary-wave"
          fill={`url(#${gradientId})`}
          opacity="0.7"
          d={`M 0,${height * 0.4} Q 720,${height * 0.8} 1440,${height * 0.2} L 1920,${height * 0.4} L 1920,${height} L 0,${height} Z`}
          style={{ transformOrigin: 'center' }}
        >
          <animate
            attributeName="d"
            dur={`${24 / waveSpeed}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25,0.46,0.45,0.94;0.25,0.46,0.45,0.94;0.25,0.46,0.45,0.94;0.25,0.46,0.45,0.94"
            keyTimes="0;0.25;0.5;0.75;1"
            values={`
              M 0,${height * 0.4} Q 720,${height * (0.8 * waveIntensity)} 1440,${height * 0.2} L 1920,${height * 0.4} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.3} Q 720,${height * (0.1 * waveIntensity)} 1440,${height * 0.7} L 1920,${height * 0.3} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.5} Q 720,${height * (0.9 * waveIntensity)} 1440,${height * 0.1} L 1920,${height * 0.5} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.35} Q 720,${height * (0.6 * waveIntensity)} 1440,${height * 0.4} L 1920,${height * 0.35} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.4} Q 720,${height * (0.8 * waveIntensity)} 1440,${height * 0.2} L 1920,${height * 0.4} L 1920,${height} L 0,${height} Z
            `}
          />
        </path>
        
        {/* Tertiary wave - subtle background */}
        <path
          className="tertiary-wave"
          fill={`url(#${gradientId})`}
          opacity="0.4"
          d={`M 0,${height * 0.8} Q 960,${height * 0.5} 1920,${height * 0.8} L 1920,${height} L 0,${height} Z`}
          style={{ transformOrigin: 'center' }}
        >
          <animate
            attributeName="d"
            dur={`${30 / waveSpeed}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.165,0.84,0.44,1;0.165,0.84,0.44,1;0.165,0.84,0.44,1"
            keyTimes="0;0.33;0.66;1"
            values={`
              M 0,${height * 0.8} Q 960,${height * (0.5 * waveIntensity)} 1920,${height * 0.8} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.75} Q 960,${height * (0.9 * waveIntensity)} 1920,${height * 0.75} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.85} Q 960,${height * (0.3 * waveIntensity)} 1920,${height * 0.85} L 1920,${height} L 0,${height} Z;
              M 0,${height * 0.8} Q 960,${height * (0.5 * waveIntensity)} 1920,${height * 0.8} L 1920,${height} L 0,${height} Z
            `}
          />
        </path>
        
        {/* Shimmer overlay */}
        <rect 
          width="100%" 
          height="100%" 
          fill={`url(#${gradientId}-shimmer)`}
          opacity={scrollProgress * 0.3}
        />
      </svg>
    </div>
  );
};

export default AdvancedWaveDivider;