import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = ({
    src,
    alt,
    className = "",
    aspectRatio = "4/3",
    triggerStart = "top 85%"
}) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const image = imageRef.current;

        if (!container || !image) return;

        // Initial state
        gsap.set(container, {
            clipPath: "inset(5% 5% 5% 5%)", // Start slightly clipped for effect
        });

        gsap.set(image, {
            scale: 1.15,
            opacity: 0,
            filter: "blur(10px)"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: triggerStart,
                toggleActions: "play none none none", // Play once
            }
        });

        tl.to(container, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "power3.out"
        })
            .to(image, {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power3.out"
            }, "<"); // Run simultaneously

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [triggerStart]);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden bg-gray-100 ${className} group`}
            style={{ aspectRatio: aspectRatio }}
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
            />
        </div>
    );
};

export default ImageReveal;
