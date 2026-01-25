import React, { useRef, useLayoutEffect } from 'react';
import { 
    ArrowUpRight, Zap, Sparkles, Activity, 
    Waves, Microscope, 
    Stethoscope, Brain, Eye
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const techRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Hero Text Reveal - Character Level (Simulated)
            gsap.from('.hero-title span', {
                y: 100,
                opacity: 0,
                rotateX: -45,
                duration: 1.5,
                stagger: 0.1,
                ease: 'expo.out',
            });

            gsap.from('.hero-subtitle', {
                opacity: 0,
                y: 30,
                duration: 1.2,
                delay: 0.8,
                ease: 'power3.out'
            });

            // 2. Parallax Hero Image
            gsap.to('.hero-bg', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // 3. Pinning Services Section
            const sections = gsap.utils.toArray('.service-panel');
            sections.forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    snap: 1,
                    // end: "bottom top",
                });

                // Animate content of each panel
                gsap.from(panel.querySelectorAll('.panel-animate'), {
                    y: 50,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: panel,
                        start: "top 40%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 4. Technology Grid Reveal
            gsap.from('.tech-card', {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: techRef.current,
                    start: "top 70%",
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const mainServices = [
        {
            id: "01",
            title: "Wellness & Longevity",
            category: "Foundational Care",
            description: "A symphony of preventative measures designed to extend vitality. We don't just treat; we architect a lifetime of health.",
            image: "/images/WhatsApp Image 2026-01-23 at 11.58.30 PM.jpeg",
            icon: Activity,
            details: [
                { label: "Predictive Screening", value: "AI-Driven" },
                { label: "Bio-Markers", value: "32+ Points" },
                { label: "Longevity Plan", value: "Custom" }
            ],
            color: "from-gold-500/20 to-transparent"
        },
        {
            id: "02",
            title: "Surgical Mastery",
            category: "Critical Precision",
            description: "Where technology meets steady hands. Our surgical suites are cinematic stages of precision, empathy, and advanced recovery protocols.",
            image: "/images/WhatsApp Image 2026-01-23 at 11.59.20 PM.jpeg",
            icon: Zap,
            details: [
                { label: "Monitoring", value: "Real-time" },
                { label: "Technique", value: "Micro-Invasive" },
                { label: "Recovery", value: "Guided" }
            ],
            color: "from-slate-800/20 to-transparent"
        },
        {
            id: "03",
            title: "Regenerative Therapy",
            category: "Future Medicine",
            description: "Harnessing the body's natural healing powers. From stem cell therapy to advanced laser treatments, we lead the frontier.",
            image: "/images/WhatsApp Image 2026-01-23 at 11.59.21 PM.jpeg",
            icon: Waves,
            details: [
                { label: "Modality", value: "Multi-Wave" },
                { label: "Cellular", value: "Verified" },
                { label: "Impact", value: "Deep Tissue" }
            ],
            color: "from-gold-600/20 to-transparent"
        }
    ];

    const techStack = [
        { icon: Microscope, title: "Quantum Diagnostics", desc: "Molecular level analysis for early detection." },
        { icon: Brain, title: "Neural Imaging", desc: "Advanced neuro-mapping for behavioral and physical health." },
        { icon: Eye, title: "Ocular Precision", desc: "Digital retinal scanning and advanced ophthalmology." },
        { icon: Stethoscope, title: "Acoustic Cardiac", desc: "High-fidelity heart monitoring and 4D imaging." }
    ];

    return (
        <div ref={containerRef} className="bg-slate-950 text-sand-50 selection:bg-gold-500 selection:text-slate-950">
            {/* --- HERO SECTION --- */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/WhatsApp Image 2026-01-24 at 12.00.39 AM.jpeg" 
                        alt="Hero Background" 
                        className="hero-bg w-full h-full object-cover opacity-40 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="mb-8 inline-block"
                    >
                        <span className="px-6 py-2 border border-gold-500/30 rounded-full text-gold-500 font-display tracking-[0.3em] text-sm uppercase bg-gold-500/5 backdrop-blur-md">
                            The Sanctuary Standards
                        </span>
                    </motion.div>
                    
                    <h1 className="hero-title font-display text-[clamp(3.5rem,10vw,12rem)] leading-[0.85] tracking-tighter mb-8 perspective-1000">
                        <span className="block italic font-serif text-gold-500">Mastering</span>
                        <span className="block">VITALITY.</span>
                    </h1>

                    <p className="hero-subtitle text-xl md:text-3xl text-sand-200/60 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        A cinematic convergence of advanced science and soul-deep devotion. 
                        Explore our world-class medical specializations.
                    </p>

                    <div className="hero-subtitle flex flex-wrap justify-center gap-8">
                        {["Emergency 24/7", "Global Expertise", "Ethical Innovation"].map((tag, i) => (
                            <div key={i} className="flex items-center gap-3 text-sand-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                <span className="uppercase tracking-widest text-xs font-bold">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-gold-500 font-bold">Discover</span>
                    <div className="w-px h-16 bg-gradient-to-b from-gold-500 to-transparent" />
                </div>
            </section>

            {/* --- STACKED SERVICES --- */}
            <section className="relative">
                {mainServices.map((service, idx) => (
                    <div 
                        key={service.id} 
                        className="service-panel h-screen w-full relative flex items-center overflow-hidden bg-slate-950"
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover opacity-30"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color}`} />
                            <div className="absolute inset-0 bg-slate-950/60" />
                        </div>

                        <div className="container mx-auto px-6 lg:px-12 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                {/* Left: Content */}
                                <div>
                                    <div className="panel-animate mb-6 inline-flex items-center gap-4">
                                        <div className="w-12 h-px bg-gold-500" />
                                        <span className="font-serif italic text-2xl text-gold-500">{service.category}</span>
                                    </div>
                                    
                                    <h2 className="panel-animate font-display text-6xl md:text-9xl text-sand-50 mb-8 leading-none tracking-tighter uppercase">
                                        {service.title}
                                    </h2>
                                    
                                    <p className="panel-animate text-xl md:text-2xl text-sand-200/70 mb-12 leading-relaxed max-w-xl font-light">
                                        {service.description}
                                    </p>

                                    <div className="panel-animate grid grid-cols-3 gap-8 mb-16">
                                        {service.details.map((detail, i) => (
                                            <div key={i}>
                                                <div className="text-xs uppercase tracking-widest text-gold-500 mb-2 font-bold">{detail.label}</div>
                                                <div className="text-xl font-display text-sand-50">{detail.value}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="panel-animate group flex items-center gap-8 text-sand-50 font-display text-2xl hover:text-gold-500 transition-all uppercase tracking-widest">
                                        <span>View Protocols</span>
                                        <div className="w-16 h-16 rounded-full border border-sand-50/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-slate-950 transition-all duration-500">
                                            <ArrowUpRight className="w-8 h-8" />
                                        </div>
                                    </button>
                                </div>

                                {/* Right: Visual Element */}
                                <div className="hidden lg:block relative">
                                    <div className="panel-animate aspect-square rounded-[3rem] overflow-hidden border border-sand-50/10 relative group">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gold-500/10 group-hover:bg-transparent transition-colors duration-700" />
                                        
                                        {/* Floating Badge */}
                                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-slate-950 border border-gold-500/20 rounded-full flex items-center justify-center p-8 backdrop-blur-xl">
                                            <service.icon className="w-full h-full text-gold-500" />
                                        </div>
                                    </div>
                                    
                                    {/* Service Number Background */}
                                    <div className="absolute -top-20 -right-20 text-[20rem] font-display text-sand-50/5 leading-none select-none pointer-events-none">
                                        {service.id}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* --- TECHNOLOGY SECTION --- */}
            <section ref={techRef} className="py-40 bg-slate-900 px-6 lg:px-12 border-y border-sand-50/5">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-32">
                        <span className="font-serif italic text-3xl text-gold-500 mb-6 block">Quantum Diagnostics</span>
                        <h2 className="font-display text-5xl md:text-8xl text-sand-50 leading-[0.85] tracking-tighter">
                            The Architecture of <br/>
                            <span className="italic font-serif text-gold-500">Unseen Care.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techStack.map((tech, i) => (
                            <div key={i} className="tech-card group p-10 bg-slate-950 border border-sand-50/5 rounded-[2.5rem] hover:border-gold-500/50 transition-all duration-700 hover:-translate-y-4">
                                <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-500 mb-10 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-500">
                                    <tech.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl text-sand-50 mb-4 uppercase tracking-tight">{tech.title}</h3>
                                <p className="text-sand-400 leading-relaxed font-light">
                                    {tech.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CINEMATIC CALL TO ACTION --- */}
            <section className="py-40 relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold-500/20 blur-[150px] rounded-full" />
                </div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="mb-12 inline-block"
                    >
                        <Sparkles className="w-20 h-20 text-gold-500 opacity-50" />
                    </motion.div>
                    
                    <h2 className="font-display text-6xl md:text-[9rem] text-sand-50 mb-12 leading-none tracking-tighter uppercase">
                        BEYOND<br/>
                        <span className="italic text-serif text-gold-500">MEDICINE.</span>
                    </h2>

                    <p className="text-xl md:text-3xl text-sand-200/60 mb-20 max-w-3xl mx-auto font-light leading-relaxed italic font-serif">
                        "We don't just provide services; we curate experiences that celebrate the profound bond between you and your pet."
                    </p>

                    <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                        <button className="group relative px-16 py-8 bg-gold-500 text-slate-950 font-display text-2xl rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 uppercase tracking-widest font-bold">
                            <span className="relative z-10">Schedule Experience</span>
                            <div className="absolute inset-0 bg-sand-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </button>
                        
                        <button className="text-sand-50 font-display text-2xl flex items-center gap-4 hover:text-gold-500 transition-all tracking-widest uppercase">
                            <span>Browse Case Studies</span>
                            <div className="w-12 h-12 rounded-full border border-sand-50/20 flex items-center justify-center">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Background Text Decor */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none">
                    <div className="text-[25vw] font-display whitespace-nowrap leading-none tracking-tighter">
                        UNCOMPROMISING DEVOTION UNCOMPROMISING DEVOTION
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
