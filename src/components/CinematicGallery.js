import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CinematicGallery = ({ images, title }) => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = galleryRef.current.querySelectorAll('.gallery-item');
            
            items.forEach((item, index) => {
                gsap.fromTo(item, 
                    { 
                        y: 100, 
                        opacity: 0,
                        scale: 0.9
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1.5,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Parallax effect on the images inside
                const img = item.querySelector('img');
                gsap.to(img, {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }, galleryRef);

        return () => ctx.revert();
    }, [images]);

    return (
        <section ref={galleryRef} className="py-32 px-6 lg:px-12 bg-sand-200">
            <div className="max-w-screen-2xl mx-auto">
                {title && (
                    <div className="mb-20">
                        <h2 className="text-display text-5xl md:text-7xl text-slate-900 tracking-tighter uppercase">
                            {title}
                        </h2>
                        <div className="w-24 h-1 bg-gold-500 mt-6" />
                    </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, idx) => (
                        <div 
                            key={idx} 
                            className={`gallery-item relative overflow-hidden rounded-2xl aspect-[4/5] group ${
                                idx % 3 === 1 ? 'lg:translate-y-12' : idx % 3 === 2 ? 'lg:translate-y-24' : ''
                            }`}
                        >
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-700 z-10" />
                            <img 
                                src={img.url} 
                                alt={img.alt || 'Gallery image'} 
                                className="w-full h-full object-cover scale-110"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo-out bg-gradient-to-t from-slate-900/80 to-transparent text-sand-50">
                                <p className="text-display text-xs uppercase tracking-widest mb-2 opacity-70">{img.category}</p>
                                <h3 className="text-2xl font-serif italic">{img.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CinematicGallery;
