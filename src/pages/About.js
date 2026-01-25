import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Award, Users, ArrowRight, Medal, Star, Globe, Zap, Dog } from 'lucide-react';
import CinematicGallery from '../components/CinematicGallery';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    const containerRef = useRef(null);
    const horizontalRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Reveal
            const tl = gsap.timeline();
            tl.from('.hero-title-line', {
                y: 200,
                skewY: 10,
                opacity: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: 'expo.out'
            })
            .from('.hero-sub', {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.8')
            .from('.hero-visual', {
                scale: 1.2,
                opacity: 0,
                duration: 2,
                ease: 'expo.out'
            }, '-=1.2');

            // Parallax Images
            gsap.utils.toArray('.parallax-img').forEach(img => {
                gsap.to(img, {
                    yPercent: 20,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            });

            // Section Header Animations
            gsap.utils.toArray('.cinematic-header').forEach(header => {
                gsap.from(header.querySelectorAll('.header-item'), {
                    scrollTrigger: {
                        trigger: header,
                        start: 'top 85%',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: 'power4.out'
                });
            });

            // Doctor Cards Reveal
            gsap.from('.doctor-card', {
                scrollTrigger: {
                    trigger: '.doctors-grid',
                    start: 'top 80%',
                },
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.3,
                ease: 'expo.out'
            });

            // Horizontal Scroll Section
            const horizontalSection = horizontalRef.current;
            if (horizontalSection) {
                const scrollWidth = horizontalSection.scrollWidth - window.innerWidth;
                gsap.to(horizontalSection, {
                    x: -scrollWidth,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.horizontal-wrapper',
                        start: 'top top',
                        end: () => `+=${scrollWidth}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    }
                });
            }

            // Achievement Cards Stagger
            gsap.from('.achievement-card', {
                scrollTrigger: {
                    trigger: '.achievements-section',
                    start: 'top 75%',
                },
                scale: 0.9,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const milestones = [
        { year: '2008', title: 'The Alpha Vision', desc: 'Pet Planet was born in a small studio with one mission: uncompromising canine care.' },
        { year: '2012', title: 'Canine Excellence', desc: 'Awarded "Best Dog Clinic in the Region" for our breakthroughs in canine genetics.' },
        { year: '2015', title: 'Breed Wing', desc: 'Opened our state-of-the-art diagnostic wing with breed-specific imaging protocols.' },
        { year: '2019', title: '10k Paws', desc: 'Celebrated a decade of service, having touched the lives of over 10,000 dogs.' },
        { year: '2023', title: 'Global Dog Network', desc: 'Launching our nationwide mobile-care initiative specifically for working dog communities.' },
    ];

    const achievements = [
        { icon: Medal, title: 'IAVH Gold Standard', year: '2022', desc: 'Recognized for excellence in canine hospital management and ethics.' },
        { icon: Star, title: 'K9 Innovation', year: '2021', desc: 'For pioneering minimally invasive robotic orthopedic surgery for dogs.' },
        { icon: Globe, title: 'Global Impact', year: '2023', desc: 'Leadership in international canine health and vaccination protocols.' },
        { icon: Heart, title: 'Rescue Ally', year: '2020', desc: 'Dedicated service to local dog rescue and rehabilitation organizations.' },
    ];

    return (
        <div ref={containerRef} className="bg-[#FAF7F2] text-[#141E1E] selection:bg-[#C5A572] selection:text-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A572]/20 via-transparent to-transparent" />
                </div>
                
                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <div className="mb-8 overflow-hidden">
                        <span className="hero-sub inline-block font-serif italic text-2xl text-[#C5A572] tracking-wide">
                            The Canine Sanctuary of Medical Excellence
                        </span>
                    </div>
                    
                    <h1 className="font-display text-[10vw] lg:text-[8vw] leading-[0.9] tracking-tight mb-12 font-bold text-slate-900">
                        <div className="overflow-hidden">
                            <span className="hero-title-line block">Beyond</span>
                        </div>
                        <div className="overflow-hidden flex justify-center gap-[3vw]">
                            <span className="hero-title-line block text-gold-500">Canine,</span>
                            <span className="hero-title-line block">Within</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="hero-title-line block">Heart.</span>
                        </div>
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16 max-w-5xl mx-auto">
                        <div className="hero-visual w-full md:w-1/2 aspect-[16/9] rounded-[2rem] overflow-hidden cinematic-shadow">
                            <img 
                                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=2000" 
                                alt="Dog Surgical Excellence" 
                                className="w-full h-full object-cover parallax-img scale-110"
                            />
                        </div>
                        <div className="text-left md:w-1/2">
                            <p className="hero-sub text-xl lg:text-2xl text-[#4F5761] leading-relaxed font-light">
                                We are the synthesis of advanced canine science and deep-rooted empathy. 
                                A collective of specialists dedicated to the health of man's best friend.
                            </p>
                            <div className="hero-sub mt-8 flex items-center gap-6">
                                <div className="h-[1px] w-24 bg-[#C5A572]" />
                                <span className="uppercase tracking-[0.3em] text-xs font-bold text-[#C5A572]">EST. 2008</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Doctors Section */}
            <section className="py-40 bg-[#141E1E] text-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="cinematic-header mb-24">
                        <span className="header-item block font-serif italic text-[#C5A572] text-xl mb-4">The Canine Visionaries</span>
                        <h2 className="header-item block font-display text-4xl md:text-6xl leading-none tracking-tight font-bold">The Minds <br/> Behind the Care.</h2>
                    </div>

                    <div className="doctors-grid grid lg:grid-cols-1 max-w-4xl mx-auto gap-20">
                        {/* Dr. T Suresh Babu */}
                        <div className="doctor-card group">
                            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1559839734-2b71f1e3c7e0?auto=format&fit=crop&q=80&w=1500" 
                                    alt="Dr. T Suresh Babu" 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-10 left-10">
                                    <h3 className="font-display text-4xl md:text-6xl mb-2 text-white font-bold tracking-tight">Dr. T Suresh Babu</h3>
                                    <span className="text-gold-500 uppercase tracking-[0.4em] font-bold text-sm">Lead Veterinarian & Clinic Director</span>
                                </div>
                            </div>
                            <div className="px-4 text-center max-w-3xl mx-auto">
                                <p className="text-2xl text-slate-300 leading-relaxed font-light mb-8">
                                    With decades of experience in Vanasthalipuram, Hyderabad, Dr. T Suresh Babu has established a legacy of clinical excellence and compassionate care. He specializes in advanced canine diagnostics and dedicated surgical procedures, ensuring every pet receives world-class medical attention.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <div className="px-6 py-3 rounded-full border border-slate-200 text-xs uppercase tracking-widest bg-white text-[#141E1E] font-bold shadow-sm">Advanced Canine Surgery</div>
                                    <div className="px-6 py-3 rounded-full border border-slate-200 text-xs uppercase tracking-widest bg-white text-[#141E1E] font-bold shadow-sm">Diagnostic Expert</div>
                                    <div className="px-6 py-3 rounded-full border border-slate-200 text-xs uppercase tracking-widest bg-white text-[#141E1E] font-bold shadow-sm">Compassionate Care Specialist</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="achievements-section py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="cinematic-header text-center mb-16">
                        <span className="header-item block font-serif italic text-gold-600 text-xl mb-4">Our Legacy of Excellence</span>
                        <h2 className="header-item block font-display text-4xl md:text-5xl tracking-tight font-bold text-slate-900">Achievements</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((item, i) => (
                            <div key={i} className="achievement-card group p-10 rounded-[2.5rem] bg-[#FAF7F2] border border-[#141E1E]/5 hover:border-[#C5A572]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C5A572]/10">
                                <div className="w-16 h-16 bg-[#C5A572]/10 rounded-2xl flex items-center justify-center text-[#C5A572] mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div className="text-[#C5A572] font-display text-xl mb-2 tracking-[0.2em]">{item.year}</div>
                                <h3 className="font-display text-3xl mb-4 text-[#141E1E] leading-none">{item.title}</h3>
                                <p className="text-[#4F5761] font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transitional Gallery */}
            <CinematicGallery 
                title="The Clinical Canvas"
                images={[
                    { url: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800", title: "Precision Theater", category: "Surgery" },
                    { url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800", title: "Molecular Lab", category: "Genetics" },
                    { url: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800", title: "Advanced Suite", category: "Diagnostics" }
                ]}
            />

            {/* Horizontal Timeline */}
            <section className="horizontal-wrapper relative h-screen bg-[#141E1E] overflow-hidden">
                <div ref={horizontalRef} className="flex h-full items-center px-[10vw]">
                    <div className="flex-shrink-0 w-[50vw] mr-[10vw]">
                        <span className="font-serif italic text-[#C5A572] text-3xl mb-8 block">Our Journey</span>
                        <h2 className="font-display text-[10vw] text-white leading-none tracking-tighter">CHRONICLES <br/> OF CARE.</h2>
                    </div>
                    
                    {milestones.map((milestone, i) => (
                        <div key={i} className="flex-shrink-0 w-[40vw] mr-[10vw]">
                            <div className="flex items-center gap-8 mb-12">
                                <span className="text-[12vw] font-display text-[#C5A572] opacity-20 leading-none">{milestone.year}</span>
                                <div className="h-[2px] flex-grow bg-[#C5A572]/30" />
                            </div>
                            <h3 className="font-display text-5xl text-white mb-6 tracking-tight">{milestone.title}</h3>
                            <p className="text-2xl text-white/50 leading-relaxed font-light">
                                {milestone.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Standards Section */}
            <section className="py-40 relative overflow-hidden bg-[#FAF7F2]">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="cinematic-header mb-12">
                                <span className="header-item block font-serif italic text-[#C5A572] text-2xl mb-4">Uncompromising Quality</span>
                                <h2 className="header-item block font-display text-6xl md:text-7xl leading-none tracking-tighter">GLOBAL <br/> STANDARDS.</h2>
                            </div>
                            
                            <div className="space-y-12">
                                {[
                                    { icon: Zap, title: 'Canine Bio-Analytics', desc: 'Real-time biological analysis that predicts dog health trends years in advance.' },
                                    { icon: Globe, title: 'Ethical K9 Care', desc: 'Every medicine and tool is sourced from carbon-neutral providers specifically for dogs.' },
                                    { icon: Dog, title: 'The Breed Expert Collective', desc: 'A worldwide network of on-call dog breed specialists available via holographic link.' }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#141E1E] text-[#C5A572] flex items-center justify-center group-hover:bg-[#C5A572] group-hover:text-white transition-all duration-500">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-display text-2xl text-[#141E1E] mb-2">{feature.title}</h4>
                                            <p className="text-[#4F5761] leading-relaxed font-light">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden cinematic-shadow group">
                            <img 
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
                                alt="Modern K9 Laboratory" 
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A572]/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-40 bg-[#141E1E] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <img 
                        src="https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?auto=format&fit=crop&q=80&w=2000" 
                        alt="Join the dog sanctuary" 
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
                
                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-6xl md:text-[9vw] leading-[0.85] text-white tracking-tighter mb-16">
                            TRUST THE <br/>
                            <span className="italic font-serif text-[#C5A572]">DOG SANCTUARY.</span>
                        </h2>
                        <p className="text-2xl text-white/60 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
                            Your dog's health is a masterpiece in progress. Let us provide the canvas of medical excellence they deserve.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <button className="w-full sm:w-auto bg-[#C5A572] text-[#141E1E] px-16 py-8 rounded-full font-display text-2xl hover:bg-white transition-all duration-500 hover:scale-105 shadow-2xl">
                                Become a Member
                            </button>
                            <button className="group flex items-center gap-6 text-white font-display text-2xl hover:text-[#C5A572] transition-colors">
                                <span>Learn our Methods</span>
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C5A572] group-hover:border-[#C5A572] transition-all">
                                    <ArrowRight className="w-8 h-8" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
