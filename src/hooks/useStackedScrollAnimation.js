import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useStackedScrollAnimation = (containerRef) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const items = document.querySelectorAll('.service-item');

            items.forEach((item, index) => {
                // Set z-index
                gsap.set(item, { zIndex: index + 1 });

                // Initial State
                // First item should be visible immediately
                if (index === 0) {
                    gsap.set(item, { opacity: 1, y: 0, scale: 1 });
                } else {
                    gsap.set(item, { opacity: 0, y: 80, scale: 0.96 });
                }

                // Entry Animation (Skip for first item)
                if (index !== 0) {
                    gsap.to(item, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 100%", // Start earlier
                            end: "top 20%",
                            scrub: true,
                            toggleActions: "play none none reverse"
                        }
                    });
                }

                // Exit Animation (while sticky)
                // Delay the fade out so it stays visible while being covered
                const exitTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top 15%", // When it sticks
                        end: "+=100%", // Scroll distance
                        scrub: true,
                        toggleActions: "play none none reverse"
                    }
                });

                exitTl
                    .to(item, {
                        scale: 0.96,
                        y: -60,
                        duration: 1,
                        ease: "none"
                    }, 0)
                    .to(item, {
                        opacity: 0,
                        duration: 0.5, // Fade out only in the last half
                        ease: "none"
                    }, 0.5); // Start fade halfway through the scroll distance
            });

        }, containerRef);

        return () => ctx.revert();
    }, [containerRef]);
};
