import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Custom easing functions to replace deprecated gsap.parseEase
const easeInOut = (t, power = 2) => {
  return t < 0.5 
    ? Math.pow(2, power - 1) * Math.pow(t, power)
    : 1 - Math.pow(-2 * t + 2, power) / 2;
};

const easeLinear = (t) => t;

const CurvedDivider = ({ 
  topColor = '#FFFCF7', 
  bottomColor = '#2A1D17', 
  height = 200,
  className = '',
  curveIntensity = 0.6,
  animationDuration = 1.5
}) => {
  const dividerRef = useRef(null);
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    if (!dividerRef.current || !pathRef.current) return;

    const ctx = gsap.context(() => {
      const divider = dividerRef.current;
      const path = pathRef.current;
      
      // Get viewport dimensions for responsive calculations
      const updateDimensions = () => {
        const vw = window.innerWidth;
        const vh = height;
        
        // Base curve path - starts flat, becomes curved
        const flatPath = `M 0,${vh} L 0,${vh} Q ${vw/2},${vh} ${vw},${vh} L ${vw},${vh * 2} L 0,${vh * 2} Z`;
        
        // Set initial state - flat/hidden
        gsap.set(path, {
          attr: { d: flatPath },
          transformOrigin: 'center top'
        });
        
        gsap.set(divider, {
          y: vh * 0.8,
          opacity: 0.8
        });

        // Create the reveal animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: divider,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
            refreshPriority: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              
              // Smooth curve morphing with easing
              const easeProgress = easeInOut(progress, 2);
              
              // Calculate dynamic curve depth
              const dynamicCurve = curveIntensity * Math.sin(easeProgress * Math.PI);
              const currentDepth = vh * (0.3 - dynamicCurve);
              
              // Create morphing path
              const morphPath = `M 0,${vh} L 0,${vh * (0.3 + (1 - easeProgress) * 0.7)} Q ${vw/2},${currentDepth} ${vw},${vh * (0.3 + (1 - easeProgress) * 0.7)} L ${vw},${vh * 2} L 0,${vh * 2} Z`;
              
              // Apply the morphing
              path.setAttribute('d', morphPath);
              
              // Smooth vertical movement
              const yOffset = vh * (0.8 - easeProgress * 0.8);
              gsap.set(divider, {
                y: yOffset,
                opacity: 0.8 + (easeProgress * 0.2)
              });
            }
          }
        });

        return tl;
      };

      // Initial setup
      let animation = updateDimensions();

      // Handle resize with custom debounce
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (animation) animation.kill();
          ScrollTrigger.refresh();
          animation = updateDimensions();
        }, 250);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
        if (animation) animation.kill();
      };

    }, dividerRef);

    return () => ctx.revert();
  }, [height, curveIntensity, animationDuration]);

  return (
    <div 
      ref={dividerRef}
      className={`curved-divider relative w-full overflow-hidden ${className}`}
      style={{ 
        height: `${height}px`,
        zIndex: 10,
        pointerEvents: 'none'
      }}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${typeof window !== 'undefined' ? window.innerWidth : 1920} ${height * 2}`}
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      >
        <defs>
          <linearGradient id={`divider-gradient-${Math.random()}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} stopOpacity="1" />
            <stop offset="50%" stopColor={topColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={bottomColor} stopOpacity="1" />
          </linearGradient>
          
          {/* Add subtle shadow filter */}
          <filter id={`divider-shadow-${Math.random()}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0,0,0,0.1)" />
          </filter>
        </defs>
        
        <path
          ref={pathRef}
          fill={`url(#divider-gradient-${Math.random()})`}
          filter={`url(#divider-shadow-${Math.random()})`}
          style={{
            willChange: 'd, transform',
            transformOrigin: 'center top'
          }}
        />
      </svg>
      
      {/* Optional overlay for enhanced depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, ${topColor}00 0%, ${topColor}20 50%, ${bottomColor}40 100%)`,
          mixBlendMode: 'multiply',
          opacity: 0.3
        }}
      />
    </div>
  );
};

// Enhanced version with multiple curve layers
export const PhenomenonCurvedDivider = ({ 
  topColor = '#FFFCF7', 
  bottomColor = '#2A1D17',
  height = 250,
  className = ''
}) => {
  const containerRef = useRef(null);
  const primaryPathRef = useRef(null);
  const secondaryPathRef = useRef(null);
  const tertiaryPathRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const primaryPath = primaryPathRef.current;
      const secondaryPath = secondaryPathRef.current;
      const tertiaryPath = tertiaryPathRef.current;

      const updateAnimation = () => {
        const vw = window.innerWidth;
        const vh = height;

        // Multiple curve layers for depth
        const createPath = (depth, offset = 0) => {
          return `M 0,${vh + offset} L 0,${vh * 0.4 + offset} Q ${vw/2},${vh * (0.4 - depth)} ${vw},${vh * 0.4 + offset} L ${vw},${vh * 2} L 0,${vh * 2} Z`;
        };

        // Set initial states
        gsap.set([primaryPath, secondaryPath, tertiaryPath], {
          attr: { d: createPath(0) },
          transformOrigin: 'center top'
        });

        gsap.set(container, {
          y: vh * 0.6,
          opacity: 0.9
        });

        // Create the premium reveal animation
        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
            ease: "power2.inOut",
            refreshPriority: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              
              // Enhanced easing for premium feel
              const primaryEase = easeInOut(progress, 3);
              
              const secondaryProgress = Math.min(1, Math.max(0, progress * 0.8 + 0.2));
              const secondaryEase = easeInOut(secondaryProgress, 2);
              
              const tertiaryProgress = Math.min(1, Math.max(0, progress * 0.6 + 0.4));
              const tertiaryEase = easeLinear(tertiaryProgress);
              
              // Dynamic curve calculations with wave motion
              const waveOffset = Math.sin(progress * Math.PI) * 20;
              
              const primaryDepth = 0.8 * Math.sin(primaryEase * Math.PI) + waveOffset * 0.01;
              const secondaryDepth = 0.6 * Math.sin(secondaryEase * Math.PI) + waveOffset * 0.008;
              const tertiaryDepth = 0.4 * Math.sin(tertiaryEase * Math.PI) + waveOffset * 0.005;
              
              // Update paths with staggered motion
              if (primaryPath) {
                primaryPath.setAttribute('d', createPath(primaryDepth, 0));
              }
              if (secondaryPath) {
                secondaryPath.setAttribute('d', createPath(secondaryDepth, -10));
              }
              if (tertiaryPath) {
                tertiaryPath.setAttribute('d', createPath(tertiaryDepth, -20));
              }
              
              // Smooth container movement
              const yOffset = vh * (0.6 - primaryEase * 0.6);
              gsap.set(container, {
                y: yOffset,
                opacity: 0.9 + (primaryEase * 0.1),
                scale: 1 + (Math.sin(progress * Math.PI) * 0.02)
              });
            }
          }
        });

        return masterTimeline;
      };

      let animation = updateAnimation();

      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (animation) animation.kill();
          ScrollTrigger.refresh();
          animation = updateAnimation();
        }, 250);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
        if (animation) animation.kill();
      };

    }, containerRef);

    return () => ctx.revert();
  }, [height, topColor, bottomColor]);

  const gradientId = `phenomenon-gradient-${Math.random().toString(36).substr(2, 9)}`;
  const shadowId = `phenomenon-shadow-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div 
      ref={containerRef}
      className={`phenomenon-curved-divider relative w-full overflow-hidden ${className}`}
      style={{ 
        height: `${height}px`,
        zIndex: 15,
        pointerEvents: 'none'
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${typeof window !== 'undefined' ? window.innerWidth : 1920} ${height * 2}`}
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} stopOpacity="1" />
            <stop offset="30%" stopColor={topColor} stopOpacity="0.9" />
            <stop offset="70%" stopColor={bottomColor} stopOpacity="0.9" />
            <stop offset="100%" stopColor={bottomColor} stopOpacity="1" />
          </linearGradient>
          
          <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8"/>
            <feOffset dx="0" dy="4" result="offset"/>
            <feFlood floodColor="rgba(0,0,0,0.15)"/>
            <feComposite in2="offset" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Tertiary curve - deepest layer */}
        <path
          ref={tertiaryPathRef}
          fill={bottomColor}
          opacity="0.3"
          style={{
            willChange: 'd, transform',
            transformOrigin: 'center top'
          }}
        />
        
        {/* Secondary curve - middle layer */}
        <path
          ref={secondaryPathRef}
          fill={`url(#${gradientId})`}
          opacity="0.6"
          style={{
            willChange: 'd, transform',
            transformOrigin: 'center top'
          }}
        />
        
        {/* Primary curve - top layer */}
        <path
          ref={primaryPathRef}
          fill={`url(#${gradientId})`}
          filter={`url(#${shadowId})`}
          style={{
            willChange: 'd, transform',
            transformOrigin: 'center top'
          }}
        />
      </svg>
      
      {/* Subtle overlay for enhanced premium feel */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center top, ${topColor}10 0%, transparent 70%)`,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
};

export default CurvedDivider;