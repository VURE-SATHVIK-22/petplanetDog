import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LuxuryMinimalistBackground = ({ videoRef }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Animate gradient positions for dynamic lighting
    const ctx = gsap.context(() => {
      gsap.to('#lightingGradient', {
        attr: { cx: '60%', cy: '50%' },
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('#accentGradient', {
        attr: { cx: '30%', cy: '70%' },
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Subtle rotation for geometric elements
      gsap.to('#geometricAccents', {
        rotation: 3,
        transformOrigin: '50% 50%',
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Pulse effect on light circles
      gsap.to('#lightCircles circle', {
        opacity: 'random(0.05, 0.15)',
        duration: 4,
        repeat: -1,
        stagger: 0.5,
        ease: 'sine.inOut',
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Background Video - Professional Veterinary Clinic */}
      {videoRef && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videos.pexels.com/video-files/5632399/5632399-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/7974/7974-hd_1280_720_30fps.mp4"
            type="video/mp4"
          />
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
            alt="Professional Veterinary Clinic - Dr T Suresh Babu"
            className="w-full h-full object-cover"
          />
        </video>
      )}

      {/* SVG Overlay with Advanced Graphics */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Advanced luxury background"
      >
        {/* Define advanced gradients and filters */}
        <defs>
          {/* Animated primary gradient */}
          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#faf8f3', stopOpacity: 0.95 }} />
            <stop offset="50%" style={{ stopColor: '#f5f3f0', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#efefed', stopOpacity: 0.85 }} />
          </linearGradient>

          {/* Dynamic radial gradient for primary lighting */}
          <radialGradient id="lightingGradient" cx="40%" cy="30%" r="70%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.5 }} />
            <stop offset="30%" style={{ stopColor: '#f5f3f0', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#e8e6e1', stopOpacity: 0 }} />
          </radialGradient>

          {/* Secondary accent gradient */}
          <radialGradient id="accentGradient" cx="30%" cy="70%" r="60%">
            <stop offset="0%" style={{ stopColor: '#f0ede8', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#e8e6e1', stopOpacity: 0 }} />
          </radialGradient>

          {/* Advanced blur filter */}
          <filter id="softBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>

          {/* Enhanced glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft shadow filter */}
          <filter id="softShadow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="offsetblur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Mesh gradient effect */}
          <filter id="meshGradient">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Base gradient background */}
        <rect width="1200" height="800" fill="url(#baseGradient)" />

        {/* Primary lighting effect */}
        <rect width="1200" height="800" fill="url(#lightingGradient)" />

        {/* Secondary accent lighting */}
        <rect width="1200" height="800" fill="url(#accentGradient)" />

        {/* Primary flowing curves - organic and elegant */}
        <g filter="url(#softBlur)" opacity="0.7">
          {/* Large C-shaped curve - top to bottom right */}
          <path
            d="M 0 100 Q 300 80 600 150 Q 900 200 1000 400 Q 950 600 800 750 L 1200 800 L 1200 0 Q 900 -50 600 50 Q 300 120 0 200 Z"
            fill="#e8e6e1"
            opacity="0.35"
          />

          {/* Secondary flowing curve - bottom left wave */}
          <path
            d="M 0 500 Q 150 450 300 420 Q 600 380 900 350 Q 1100 340 1200 400 L 1200 800 L 0 800 Z"
            fill="#d9d5ce"
            opacity="0.28"
          />

          {/* Tertiary smooth curve - mid section */}
          <path
            d="M 0 250 Q 200 220 400 240 Q 600 260 800 240 Q 1000 220 1200 280 L 1200 350 Q 800 400 400 360 Q 200 340 0 360 Z"
            fill="#f0ede8"
            opacity="0.32"
          />

          {/* Quaternary subtle curve - upper left */}
          <path
            d="M 0 0 Q 150 50 300 40 Q 450 30 600 60 Q 750 90 900 70 L 900 150 Q 600 120 300 140 Q 150 150 0 100 Z"
            fill="#ede9e2"
            opacity="0.25"
          />
        </g>

        {/* Dynamic accent lines with glow */}
        <g filter="url(#glow)" opacity="0.2">
          {/* Main accent line - organic curve */}
          <path
            d="M 50 200 Q 300 150 600 200 T 1150 180"
            stroke="#c9bfb0"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Secondary accent line */}
          <path
            d="M 850 100 Q 950 250 900 450 Q 850 650 950 750"
            stroke="#d4cdc6"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Tertiary accent line */}
          <path
            d="M 150 600 Q 400 620 700 600 Q 950 580 1150 630"
            stroke="#c9bfb0"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Quaternary subtle line */}
          <path
            d="M 200 350 Q 400 330 600 360 Q 800 390 1000 370"
            stroke="#dbd6cf"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>

        {/* Advanced soft circular light elements - pulsing effect */}
        <g id="lightCircles" opacity="0.1" filter="url(#softShadow)">
          <circle cx="200" cy="150" r="180" fill="#f5f3f0" />
          <circle cx="1000" cy="600" r="220" fill="#e8e6e1" />
          <circle cx="600" cy="50" r="130" fill="#f0ede8" />
          <circle cx="100" cy="700" r="150" fill="#ede9e2" />
          <circle cx="1100" cy="200" r="110" fill="#f5f3f0" />
        </g>

        {/* Modern refined geometric accents */}
        <g id="geometricAccents" opacity="0.12">
          {/* Hexagon pattern 1 - top left */}
          <g filter="url(#meshGradient)">
            <path
              d="M 150 450 L 200 420 L 250 450 L 250 520 L 200 550 L 150 520 Z"
              stroke="#d4cdc6"
              strokeWidth="1.2"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 180 380 L 230 350 L 280 380 L 280 450 L 230 480 L 180 450 Z"
              stroke="#d4cdc6"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </g>

          {/* Hexagon pattern 2 - bottom right */}
          <g filter="url(#meshGradient)">
            <path
              d="M 1050 250 L 1100 220 L 1150 250 L 1150 320 L 1100 350 L 1050 320 Z"
              stroke="#d4cdc6"
              strokeWidth="1.2"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M 980 300 L 1030 270 L 1080 300 L 1080 370 L 1030 400 L 980 370 Z"
              stroke="#d4cdc6"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </g>

          {/* Additional minimal geometric elements */}
          <circle cx="750" cy="150" r="40" fill="none" stroke="#dbd6cf" strokeWidth="0.8" opacity="0.5" />
          <circle cx="350" cy="650" r="35" fill="none" stroke="#dbd6cf" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Elite vignette effect - sophisticated edge darkening */}
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
          <stop offset="85%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.12 }} />
        </radialGradient>
        <rect width="1200" height="800" fill="url(#vignette)" />

        {/* Top light highlight */}
        <radialGradient id="topHighlight" cx="50%" cy="0%" r="50%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
          <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
        </radialGradient>
        <rect width="1200" height="400" fill="url(#topHighlight)" />
      </svg>
    </>
  );
};

export default LuxuryMinimalistBackground;
