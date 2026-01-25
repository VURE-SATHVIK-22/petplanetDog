import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {

  useEffect(() => {
    // Disable Lenis for now - use native scrolling
    console.log('🚀 Using native smooth scrolling for better responsiveness...');
    
    // Enable native smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
    
    // Add CSS for smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth !important;
      }
      * {
        scroll-behavior: smooth !important;
      }
    `;
    document.head.appendChild(style);

    // Just refresh ScrollTrigger for animations
    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log('✅ Native smooth scrolling ready!');
    }, 100);

    // Cleanup
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null; // Return null since we're not using Lenis
};

export const usePinnedSection = (triggerRef, imageRef, contentRef, index = 0) => {
  useEffect(() => {
    if (!triggerRef?.current || !imageRef?.current || !contentRef?.current) return;

    const ctx = gsap.context(() => {
      // Simple animations without pinning for now
      gsap.fromTo(imageRef.current, 
        {
          opacity: 0,
          scale: 1.1
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      const contentElements = contentRef.current.querySelectorAll('.animate-element');
      
      if (contentElements.length > 0) {
        gsap.fromTo(contentElements, 
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    }, triggerRef);

    return () => ctx.revert();
  }, [triggerRef, imageRef, contentRef, index]);
};

export const useCaseStudyAnimation = (sectionRef) => {
  useEffect(() => {
    if (!sectionRef?.current) return;

    const ctx = gsap.context(() => {
      // Simple, reliable animation for all elements
      const allElements = sectionRef.current.querySelectorAll('.animate-element');
      
      if (allElements.length > 0) {
        gsap.set(allElements, {
          opacity: 0,
          y: 40,
          scale: 0.95
        });

        gsap.to(allElements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
};

export const useHoverMicroInteractions = (elementRef) => {
  useEffect(() => {
    if (!elementRef?.current) return;

    const element = elementRef.current;
    let hoverTween;
    
    const handleMouseEnter = () => {
      if (hoverTween) hoverTween.kill();
      hoverTween = gsap.to(element, {
        scale: 1.05,
        rotationY: 3,
        z: 20,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      if (hoverTween) hoverTween.kill();
      hoverTween = gsap.to(element, {
        scale: 1,
        rotationY: 0,
        z: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (hoverTween) hoverTween.kill();
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef]);
};

export const useSectionTransition = (sectionRef, nextSectionRef, index = 0) => {
  useEffect(() => {
    if (!nextSectionRef?.current) return;

    const ctx = gsap.context(() => {
      // Simple entrance animation for next section
      gsap.fromTo(nextSectionRef.current, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: nextSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
            id: `transition-${index}`,
          }
        }
      );

    }, nextSectionRef);

    return () => ctx.revert();
  }, [sectionRef, nextSectionRef, index]);
};

// ENHANCED: Phenomenon Studio style curved reveal - Ultra Smooth & Responsive
export const useWaveReveal = (triggerRef, contentRef, maskColor = null) => {
  const maskRef = useRef(null);

  useEffect(() => {
    if (!triggerRef?.current || !contentRef?.current) return;

    const ctx = gsap.context(() => {
      // Determine mask color with better detection
      let sectionBg = maskColor || '#2A1D17';
      
      if (!maskColor) {
        const section = triggerRef.current;
        const computedStyle = window.getComputedStyle(section);
        const bgImage = computedStyle.backgroundImage;
        
        // Better detection for dark sections
        if (section.classList.contains('bg-gradient-to-br') || 
            section.classList.contains('bg-brown-800') ||
            section.classList.contains('bg-brown-900') ||
            bgImage.includes('brown-800') ||
            bgImage.includes('brown-900')) {
          sectionBg = '#FFFCF7'; // Light mask for dark sections
        }
      }
      
      // Create ultra-smooth curved mask container
      const maskContainer = document.createElement('div');
      maskContainer.className = 'phenomenon-curved-mask';
      maskContainer.style.cssText = `
        position: absolute;
        top: -15%;
        left: -2%;
        width: 104%;
        height: 140%;
        background: ${sectionBg};
        z-index: 5;
        pointer-events: none;
        transform-origin: center top;
        clip-path: polygon(0% 0%, 100% 0%, 100% 92%, 50% 100%, 0% 92%);
        will-change: transform, clip-path;
        backface-visibility: hidden;
        transform: translateZ(0);
        filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.12));
      `;
      
      // Enhanced secondary curve with gradient
      const secondaryCurve = document.createElement('div');
      secondaryCurve.className = 'secondary-curve';
      secondaryCurve.style.cssText = `
        position: absolute;
        top: -8%;
        left: 0;
        width: 100%;
        height: 115%;
        background: linear-gradient(180deg, ${sectionBg}00 0%, ${sectionBg}30 50%, ${sectionBg}60 100%);
        z-index: 4;
        pointer-events: none;
        clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 96%, 0% 90%);
        will-change: transform, clip-path;
        transform: translateZ(0);
      `;
      
      // Add tertiary curve for even more depth
      const tertiaryCurve = document.createElement('div');
      tertiaryCurve.className = 'tertiary-curve';
      tertiaryCurve.style.cssText = `
        position: absolute;
        top: -3%;
        left: 0;
        width: 100%;
        height: 108%;
        background: linear-gradient(180deg, ${sectionBg}00 0%, ${sectionBg}15 100%);
        z-index: 3;
        pointer-events: none;
        clip-path: polygon(0% 0%, 100% 0%, 100% 88%, 50% 94%, 0% 88%);
        will-change: transform, clip-path;
        transform: translateZ(0);
      `;
      
      maskContainer.appendChild(secondaryCurve);
      maskContainer.appendChild(tertiaryCurve);
      
      // Ensure proper section setup
      triggerRef.current.style.position = 'relative';
      triggerRef.current.style.isolation = 'isolate';
      triggerRef.current.style.overflow = 'hidden';
      triggerRef.current.appendChild(maskContainer);
      maskRef.current = maskContainer;

      // Set initial content state
      gsap.set(contentRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.98
      });

      // ULTRA-ENHANCED: Phenomenon Studio curved reveal with perfect smoothness
      const revealAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 95%",
          end: "top 5%",
          scrub: 2.2, // Smoother scrub
          ease: "power2.inOut",
          refreshPriority: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            
            // ULTRA-SMOOTH: Enhanced wave calculation with multiple harmonics
            const primaryWave = Math.sin(progress * Math.PI) * 25;
            const secondaryWave = Math.sin(progress * Math.PI * 2) * 8;
            const tertiaryWave = Math.sin(progress * Math.PI * 3) * 3;
            
            const baseDepth = 98 - (progress * 88); // From 98% to 10%
            const totalWave = primaryWave + secondaryWave + tertiaryWave;
            
            const centerDepth = Math.max(8, baseDepth + totalWave);
            const sideDepth = Math.max(8, baseDepth - (totalWave * 0.3));
            
            // Ultra-smooth curved polygon with 12 control points
            const clipPath = `polygon(
              0% 0%, 
              100% 0%, 
              100% ${sideDepth}%, 
              91.7% ${Math.max(10, centerDepth - 18)}%,
              83.3% ${Math.max(12, centerDepth - 12)}%,
              75% ${Math.max(14, centerDepth - 8)}%,
              66.7% ${Math.max(16, centerDepth - 4)}%,
              58.3% ${Math.max(18, centerDepth - 2)}%,
              50% ${Math.max(20, centerDepth)}%, 
              41.7% ${Math.max(18, centerDepth - 2)}%,
              33.3% ${Math.max(16, centerDepth - 4)}%,
              25% ${Math.max(14, centerDepth - 8)}%,
              16.7% ${Math.max(12, centerDepth - 12)}%,
              8.3% ${Math.max(10, centerDepth - 18)}%,
              0% ${sideDepth}%
            )`;
            
            maskContainer.style.clipPath = clipPath;
            
            // Enhanced transform with subtle breathing and rotation
            const breathe = Math.sin(progress * Math.PI * 4) * 1.5;
            const rotate = Math.sin(progress * Math.PI * 2) * 0.5;
            const translateY = progress * 115;
            
            maskContainer.style.transform = `
              translateY(${translateY}%) 
              scale(${1 + breathe * 0.008}) 
              rotate(${rotate}deg)
              translateZ(0)
            `;
            
            // Animate secondary curve with offset
            const secondaryCurve = maskContainer.querySelector('.secondary-curve');
            if (secondaryCurve) {
              const secondaryDepth = baseDepth + (totalWave * 0.6);
              const secondaryClip = `polygon(
                0% 0%, 100% 0%, 
                100% ${Math.max(8, secondaryDepth - 8)}%, 
                75% ${Math.max(10, secondaryDepth - 4)}%,
                50% ${Math.max(12, secondaryDepth)}%, 
                25% ${Math.max(10, secondaryDepth - 4)}%,
                0% ${Math.max(8, secondaryDepth - 8)}%
              )`;
              secondaryCurve.style.clipPath = secondaryClip;
              secondaryCurve.style.transform = `translateY(${progress * 5}%) translateZ(0)`;
            }
            
            // Animate tertiary curve with different offset
            const tertiaryCurve = maskContainer.querySelector('.tertiary-curve');
            if (tertiaryCurve) {
              const tertiaryDepth = baseDepth + (totalWave * 0.3);
              const tertiaryClip = `polygon(
                0% 0%, 100% 0%, 
                100% ${Math.max(8, tertiaryDepth - 4)}%, 
                50% ${Math.max(10, tertiaryDepth)}%, 
                0% ${Math.max(8, tertiaryDepth - 4)}%
              )`;
              tertiaryCurve.style.clipPath = tertiaryClip;
              tertiaryCurve.style.transform = `translateY(${progress * -3}%) translateZ(0)`;
            }
          }
        }
      });

      // Enhanced content reveal with stagger
      revealAnimation
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out"
        }, 0.4);

    }, triggerRef);

    return () => {
      ctx.revert();
      if (maskRef.current && maskRef.current.parentNode) {
        maskRef.current.parentNode.removeChild(maskRef.current);
      }
    };
  }, [triggerRef, contentRef, maskColor]);

  return maskRef;
};