import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade Up Animation
      const fadeUps = document.querySelectorAll('.animate-fade-up');
      fadeUps.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        );
      });

      // Stagger Children Animation
      const staggerContainers = document.querySelectorAll('.animate-stagger');
      staggerContainers.forEach((container) => {
        const children = container.children;
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        );
      });

      // Scale In Animation
      const scaleIns = document.querySelectorAll('.animate-scale-in');
      scaleIns.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            }
          }
        );
      });

      // Parallax Effect
      const parallaxEls = document.querySelectorAll('.animate-parallax');
      parallaxEls.forEach((el) => {
        const speed = el.dataset.speed || 0.5;
        gsap.to(el, {
          y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0
          }
        });
      });

    }, elementRef);

    return () => ctx.revert();
  }, []);

  return elementRef;
};