import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Shield, Award, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Section Reveal
            gsap.from('.about-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out'
            });

            // Image Parallax
            gsap.to('.about-image', {
                scrollTrigger: {
                    trigger: '.about-image-container',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                },
                yPercent: 15,
                ease: 'none'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Content */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <span className="about-reveal inline-block font-serif italic text-2xl text-gold-600 mb-4">
                            Beyond Medicine
                        </span>
                        <h2 className="about-reveal font-display text-4xl md:text-6xl text-slate-900 leading-tight mb-8 tracking-tight font-bold">
                            Top-Rated <span className="text-gold-500">Veterinary Clinic in Vanasthalipuram</span>, <br/>
                            <span className="text-slate-700">Led by Dr. T Suresh Babu.</span>
                        </h2>
                        
                        <div className="about-reveal space-y-6 mb-10">
                            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-xl opacity-90">
                                As the leading <span className="text-slate-900 font-semibold">dog clinic in Vanasthalipuram, Hyderabad</span>, Dr. T Suresh Babu and his team honor the unique connection between you and your companion through a lens of medical precision and deep empathy.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-600 shrink-0 border border-gold-500/20">
                                        <Heart className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-display text-xl text-slate-900 mb-1">Compassion</h4>
                                        <p className="text-xs text-slate-500 font-medium">Healing through understanding and touch.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 shrink-0 border border-slate-200">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-display text-xl text-slate-900 mb-1">Protection</h4>
                                        <p className="text-xs text-slate-500 font-medium">Advanced defense for every life stage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/about" className="about-reveal group inline-flex items-center gap-6">
                            <div className="bg-slate-900 text-white px-10 py-5 rounded-full font-display text-xl group-hover:bg-gold-500 transition-all duration-500 hover:scale-105 shadow-xl">
                                Explore Our Legacy
                            </div>
                            <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:translate-x-2 transition-all group-hover:border-gold-500 group-hover:text-gold-500">
                                <ArrowRight className="w-7 h-7" />
                            </div>
                        </Link>
                    </div>

                    {/* Right: Visual */}
                    <div className="order-1 lg:order-2">
                        <div className="about-image-container relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                                <img 
                                    src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1500" 
                                    alt="Expert Veterinary Care by Dr. T Suresh Babu in Vanasthalipuram" 
                                    className="about-image w-full h-full object-cover scale-110"
                                />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
                            
                            {/* Floating Quote */}
                            <div className="absolute -bottom-6 -left-6 md:-left-12 p-8 md:p-10 bg-white/80 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block transition-all hover:-translate-y-2">
                                <Quote className="w-10 h-10 text-gold-500 mb-4 opacity-40" />
                                <p className="font-serif italic text-xl text-slate-900 leading-relaxed">
                                    "The greatness of a nation can be judged by the way its animals are treated."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center about-reveal">
                    {[
                        { label: 'Families Served', value: '12k+' },
                        { label: 'Awards Won', value: '18' },
                        { label: 'Expert Vets', value: '24' },
                        { label: 'Years Active', value: '15' }
                    ].map((stat, i) => (
                        <div key={i} className="group transition-all duration-500 hover:-translate-y-2">
                            <div className="text-4xl md:text-5xl font-display text-slate-900 mb-1 tracking-tighter group-hover:text-gold-500 transition-colors">{stat.value}</div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-bold group-hover:text-gold-500 transition-colors">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
