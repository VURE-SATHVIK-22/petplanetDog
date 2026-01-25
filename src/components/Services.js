import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Shield, Zap, Scissors, Apple, Smile, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header Reveal
            gsap.from('.services-header > *', {
                scrollTrigger: {
                    trigger: '.services-header',
                    start: 'top 85%',
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out'
            });

            // Grid Items Reveal
            gsap.from('.service-card', {
                scrollTrigger: {
                    trigger: '.services-grid',
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const services = [
        { icon: Activity, title: 'Wellness', desc: 'Holistic health assessments for every life stage.' },
        { icon: Shield, title: 'Immunity', desc: 'Advanced protection protocols and vaccinations.' },
        { icon: Zap, title: 'Surgery', desc: 'Precision surgical care with empathetic recovery.' },
        { icon: Scissors, title: 'Grooming', desc: 'Therapeutic hygiene for skin and coat vitality.' },
        { icon: Apple, title: 'Nutrition', desc: 'Scientific diet planning for internal harmony.' },
        { icon: Smile, title: 'Dental', desc: 'Comprehensive oral sanctuary for longevity.' }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-sand-50 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="services-header flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="max-w-3xl">
                        <span className="font-serif italic text-2xl text-gold-600 mb-4 block">Our Expertise</span>
                        <h2 className="font-display text-6xl md:text-8xl text-slate-900 leading-[0.85] tracking-tighter">
                            Pet Clinic in <br/>
                            <span className="italic font-serif text-gold-500 lowercase">Vanasthalipuram.</span>
                        </h2>
                    </div>
                    <Link to="/services" className="group flex items-center gap-4 text-slate-900 font-display text-xl hover:text-gold-500 transition-all">
                        <span>All Veterinary Services</span>
                        <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-white transition-all">
                            <ArrowUpRight className="w-8 h-8" />
                        </div>
                    </Link>
                </div>

                {/* Grid */}
                <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="service-card group relative p-12 rounded-[2.5rem] bg-white border border-slate-100 hover:border-gold-500/30 transition-all duration-700 shadow-xl hover:-translate-y-4">
                            <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-600 mb-10 group-hover:bg-gold-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                <service.icon className="w-8 h-8" />
                            </div>
                                <h3 className="font-display text-3xl text-slate-900 mb-4 transition-colors duration-500">{service.title}</h3>
                                <p className="text-slate-500 leading-relaxed group-hover:text-slate-900 transition-colors duration-500">
                                    {service.desc}
                                </p>
                            
                            {/* Decorative number */}
                            <div className="absolute top-10 right-10 text-slate-100 font-display text-6xl select-none group-hover:text-gold-500/10 transition-colors duration-500">
                                0{i + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Visual */}
                <div className="mt-20 relative h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                    <img 
                        src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=2000" 
                        alt="Advanced Dog Clinic Diagnostics in Vanasthalipuram Hyderabad" 
                        className="w-full h-full object-cover scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-12 md:p-20">
                        <div className="max-w-2xl">
                            <h3 className="font-display text-4xl md:text-5xl text-white mb-6">Equipped for the Extraordinary.</h3>
                            <p className="text-slate-200 text-lg leading-relaxed mb-8">
                                Our facility integrates advanced visual monitoring and precision diagnostics to ensure no detail of your pet's health is overlooked.
                            </p>
                            <button className="bg-gold-500 text-white px-10 py-5 rounded-full font-display text-xl hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl">
                                Tour the Sanctuary
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
