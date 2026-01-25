import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const imageRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 2 } });

            // Initial state
            gsap.set([titleRef.current.children, subtitleRef.current, ctaRef.current], { 
                y: 100, 
                opacity: 0 
            });
            gsap.set(imageRef.current, { scale: 1.2, opacity: 0 });

            // Entrance animation
            tl.to(imageRef.current, { scale: 1, opacity: 1, duration: 3 })
              .to(titleRef.current.children, { y: 0, opacity: 1, stagger: 0.1 }, "-=2.5")
              .to(subtitleRef.current, { y: 0, opacity: 1 }, "-=1.8")
              .to(ctaRef.current, { y: 0, opacity: 1 }, "-=1.5");

            // Parallax effect
            gsap.to(imageRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[110vh] w-full flex items-center px-6 lg:px-20 overflow-hidden bg-sand-100">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-sand-100 z-10" />
                <div className="absolute inset-0 bg-black/10 z-0" />
                <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=2000"
                    alt="Clinical Veterinary Sanctuary"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-20 max-w-screen-2xl mx-auto w-full pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-end">
                    <div className="max-w-4xl">
                        <div ref={titleRef} className="overflow-hidden relative">
                                    <h1 className="font-display text-[clamp(2.5rem,7vw,8rem)] leading-[0.95] text-slate-900 tracking-tight mb-4 relative z-10 font-bold">
                                          <span className="block mb-6 text-gold-600 text-xs md:text-sm tracking-[0.4em] font-semibold uppercase">Dr. T Suresh Babu Presents</span>
                                          <span className="block mb-2">Veterinary</span>
                                          <span className="text-gold-500">Excellence.</span>
                                        </h1>
                          </div>
                          
                          <div ref={subtitleRef} className="mt-8 max-w-xl">
                              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                                  Top-rated <span className="text-slate-900 font-semibold">dog clinic in Vanasthalipuram</span>. Led by Dr. T Suresh Babu, we provide premium veterinary care and advanced diagnostics in Hyderabad.
                              </p>
                          </div>

                        <div ref={ctaRef} className="mt-12 flex flex-wrap items-center gap-8">
                            <button className="premium-button bg-gold-500 text-white border border-gold-500">
                                <span className="relative z-10">Initialize Consult —></span>
                            </button>
                            <button className="group flex items-center space-x-3 text-slate-900 font-display font-bold uppercase tracking-widest text-sm">
                                <span className="relative z-10">Rapid Response</span>
                                <div className="w-10 h-[1px] bg-gold-500 group-hover:w-16 transition-all duration-500" />
                            </button>
                        </div>
                    </div>

                    {/* Aesthetic Floating Detail */}
                      <div className="hidden lg:flex flex-col items-end space-y-8 pb-12">
                          <div className="w-px h-32 bg-gold-500/30" />
                          <div className="rotate-90 origin-right translate-y-32">
                              <span className="font-display text-xs uppercase tracking-[0.5em] text-gold-500/60 whitespace-nowrap">
                                  Standard of Excellence — Sanctuary
                              </span>
                          </div>
                          <div className="flex flex-col items-center space-y-4 pt-48">
                              <div className="w-12 h-12 rounded-full border border-gold-500/20 flex items-center justify-center animate-bounce">
                                  <ArrowDown className="w-5 h-5 text-gold-500" />
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
