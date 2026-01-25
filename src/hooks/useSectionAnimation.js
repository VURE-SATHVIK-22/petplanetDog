import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSectionAnimation = (containerRef) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const sections = document.querySelectorAll('.animate-section');
            const isMobile = window.innerWidth < 768;

            sections.forEach((section) => {
                const image = section.querySelector('.section-image');
                const textItems = section.querySelectorAll('.section-text-item');

                if (!image || textItems.length === 0) return;

                // Initial States
                gsap.set(image, {
                    opacity: 0,
                    y: isMobile ? 32 : 48,
                    scale: 0.97
                });

                gsap.set(textItems, {
                    opacity: 0,
                    y: isMobile ? 16 : 24
                });

                // Timeline
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                });

                // Image Animation
                tl.to(image, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: isMobile ? 0.7 : 0.9,
                    ease: "cubic-bezier(0.22, 1, 0.36, 1)"
                });

                // Text Animation (Staggered)
                tl.to(textItems, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.09,
                    ease: "power2.out"
                }, isMobile ? "-=0.5" : "-=0.75"); // Overlap with image animation
            });

        }, containerRef);

        return () => ctx.revert();
    }, [containerRef]);
};
