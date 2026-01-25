import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Professional easing functions matching Phenomenon Studio
const easings = {
  power2InOut: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
  power3InOut: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  power4InOut: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
  elastic: (t) => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : 
      t < 0.5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c4)) / 2 :
      (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c4)) / 2 + 1;
  }
};

const ProfessionalCurvedDivider = ({ 
  topColor = '#ffffff', 
  bottomColor = '#000000',
  height = 200,
  curveDepth = 0.8,
  animationSpeed = 1.2,
  className = '',
  style = 'phenomenon', // 'phenomenon', 'organic', 'geometric'
  direction = 'down' // 'down', 'up'
}) => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
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

      let animation;

      const createAnimation = () => {
        const vw = window.innerWidth;
        const vh = height;
        
        // Phenomenon Studio style curve calculations
        const createCurvePath = (progress, layer = 0, depth = curveDepth) => {
          const layerOffset = layer * 15;
          const baseY = direction === 'down' ? vh * 0.2 : vh * 0.8;
          
          // Advanced curve mathematics for Phenomenon Studio effect
          const waveProgress = progress * Math.PI;
          const primaryWave = Math.sin(waveProgress) * depth * vh;
          const secondaryWave = Math.sin(waveProgress * 2) * (depth * 0.3) * vh;
          const tertiaryWave = Math.sin(waveProgress * 3) * (depth * 0.1) * vh;
          
          const totalCurve = primaryWave + secondaryWave + tertiaryWave;
          const curveY = baseY + totalCurve + layerOffset;
          
          // Control points for smooth Bézier curves
          const cp1X = vw * 0.25;
          const cp1Y = curveY - (totalCurve * 0.3);
          const cp2X = vw * 0.75;
          const cp2Y = curveY - (totalCurve * 0.3);
          
          const startY = direction === 'down' ? 0 : vh;
          const endY = direction === 'down' ? vh * 2 : -vh;
          
          return `
            M 0,${startY}
            L 0,${baseY + layerOffset}
            C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${vw},${curveY}
            L ${vw},${endY}
            L 0,${endY}
            Z
          `;
        };

        // Set initial states
        if (primaryPath) {
          gsap.set(primaryPath, {
            attr: { d: createCurvePath(0, 0) },
            transformOrigin: 'center center'
          });
        }
        
        if (secondaryPath) {
          gsap.set(secondaryPath, {
            attr: { d: createCurvePath(0, 1, curveDepth * 0.7) },
            transformOrigin: 'center center'
          });
        }
        
        if (tertiaryPath) {
          gsap.set(tertiaryPath, {
            attr: { d: createCurvePath(0, 2, curveDepth * 0.4) },
            transformOrigin: 'center center'
          });
        }

        // Set initial container state
        gsap.set(container, {
          y: direction === 'down' ? vh * 0.3 : -vh * 0.3,
          opacity: 0.9,
          scale: 1.02
        });

        // Professional scroll-triggered animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: animationSpeed,
            refreshPriority: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              
              // Multi-layer easing for premium feel
              const primaryEase = easings.power3InOut(progress);
              const secondaryEase = easings.power2InOut(progress * 0.9 + 0.1);
              const tertiaryEase = easings.power2InOut(progress * 0.8 + 0.2);
              
              // Organic wave motion
              const waveOffset = Math.sin(progress * Math.PI * 2) * 15;
              const breathingEffect = Math.sin(progress * Math.PI * 4) * 3;
              
              // Update paths with sophisticated timing
              if (primaryPath) {
                const primaryCurve = createCurvePath(primaryEase, 0 + breathingEffect);
                primaryPath.setAttribute('d', primaryCurve);
              }
              
              if (secondaryPath) {
                const secondaryCurve = createCurvePath(secondaryEase, 1 + breathingEffect * 0.7, curveDepth * 0.7);
                secondaryPath.setAttribute('d', secondaryCurve);
              }
              
              if (tertiaryPath) {
                const tertiaryCurve = createCurvePath(tertiaryEase, 2 + breathingEffect * 0.4, curveDepth * 0.4);
                tertiaryPath.setAttribute('d', tertiaryCurve);
              }
              
              // Container movement with micro-animations
              const yOffset = direction === 'down' 
                ? vh * (0.3 - primaryEase * 0.4) + waveOffset
                : -vh * (0.3 - primaryEase * 0.4) + waveOffset;
              
              gsap.set(container, {
                y: yOffset,
                opacity: 0.9 + (primaryEase * 0.1),
                scale: 1.02 - (primaryEase * 0.02),
                rotationX: Math.sin(progress * Math.PI) * 0.5
              });
            }
          }
        });

        return tl;
      };

      // Initialize animation
      animation = createAnimation();

      // Professional resize handling
      let resizeTimeout;
      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (animation) animation.kill();
          ScrollTrigger.refresh();
          animation = createAnimation();
        }, 150);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(resizeTimeout);
        if (animation) animation.kill();
      };

    }, containerRef);

    return () => ctx.revert();
  }, [height, curveDepth, animationSpeed, topColor, bottomColor, style, direction]);

  // Generate unique IDs for gradients and filters
  const gradientId = `professional-gradient-${Math.random().toString(36).substr(2, 9)}`;
  const shadowId = `professional-shadow-${Math.random().toString(36).substr(2, 9)}`;
  const glowId = `professional-glow-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div 
      ref={containerRef}
      className={`professional-curved-divider relative w-full overflow-hidden ${className}`}
      style={{ 
        height: `${height}px`,
        zIndex: 20,
        pointerEvents: 'none',
        ...style
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
          {/* Professional gradient system */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} stopOpacity="1" />
            <stop offset="25%" stopColor={topColor} stopOpacity="0.95" />
            <stop offset="75%" stopColor={bottomColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor={bottomColor} stopOpacity="1" />
          </linearGradient>
          
          {/* Advanced shadow system */}
          <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="12"/>
            <feOffset dx="0" dy="8" result="offset"/>
            <feFlood floodColor="rgba(0,0,0,0.15)"/>
            <feComposite in2="offset" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Subtle glow effect */}
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Tertiary layer - deepest */}
        <path
          ref={tertiaryPathRef}
          fill={bottomColor}
          opacity="0.2"
          filter={`url(#${glowId})`}
          style={{
            willChange: 'd, transform',
            transformOrigin: 'center center'
          }}
        />
        
        {/* Secondary layer - middle depth */}
        <path
          ref={secondaryPathRef}
          fill={`url(#${gradientId})`}
          opacity="0.6"
          style={{
            willChange: 'd, transform',
            transformOrigin: 'center center'
          }}
        />
        
        {/* Primary layer - main curve */}
        <path
          ref={primaryPathRef}
          fill={`url(#${gradientId})`}
          filter={`url(#${shadowId})`}
          style={{
            willChange: 'd, transform',
            transformOrigin: 'center center'
          }}
        />
      </svg>
      
      {/* Professional overlay effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center ${direction === 'down' ? 'top' : 'bottom'}, ${topColor}08 0%, transparent 70%)`,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Subtle noise texture for premium feel */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
};

export default ProfessionalCurvedDivider;