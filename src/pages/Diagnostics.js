import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, ArrowUpRight, Microscope, Target, Fingerprint, Database, Cpu } from 'lucide-react';
import CinematicGallery from '../components/CinematicGallery';

gsap.registerPlugin(ScrollTrigger);

const Diagnostics = () => {
    const containerRef = useRef(null);
    const horizontalRef = useRef(null);
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Horizontal Scroll
            const sections = gsap.utils.toArray('.horizontal-item');
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontalRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + horizontalRef.current.offsetWidth
                }
            });

            // Pinning Interaction for Categories
            const categories = gsap.utils.toArray('.pin-category');
            categories.forEach((cat, i) => {
                ScrollTrigger.create({
                    trigger: cat,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    snap: 1,
                    end: "bottom top"
                });
            });

            // Reveal animations
            gsap.utils.toArray('.reveal-text').forEach(text => {
                gsap.from(text, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 90%",
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const diagnosticCategories = [
        {
            id: "01",
            title: "Canine Imaging",
            subtitle: "Precision Bone & Joint Scan",
            desc: "Ultra-high definition digital radiography specifically calibrated for canine anatomy, from toy breeds to giants.",
            icon: Target,
            bg: "bg-slate-900",
            textColor: "text-sand-50",
            image: "/images/WhatsApp Image 2026-01-23 at 11.58.30 PM (1).jpeg"
        },
        {
            id: "02",
            title: "Breed Bio-Analytics",
            subtitle: "Genomic Profiling",
            desc: "Proprietary blood panel analysis that cross-references your dog's DNA with breed-specific health markers.",
            icon: Microscope,
            bg: "bg-gold-500",
            textColor: "text-slate-900",
            image: "/images/WhatsApp Image 2026-01-23 at 11.59.20 PM (1).jpeg"
        },
        {
            id: "03",
            title: "Neural Dog Mapping",
            subtitle: "Behavioral Diagnostics",
            desc: "Non-invasive brain activity monitoring to diagnose anxiety, cognitive dysfunction, and neurological health.",
            icon: Cpu,
            bg: "bg-sand-200",
            textColor: "text-slate-900",
            image: "/images/WhatsApp Image 2026-01-23 at 11.59.20 PM (2).jpeg"
        }
    ];

    const protocols = [
        { title: "Gait Analysis", metric: "0.5ms Latency", desc: "Digital pressure sensing and motion capture to identify early-stage orthopedic issues." },
        { title: "Canine Ultrasound", metric: "8K Resolution", desc: "Advanced organ imaging specifically optimized for the canine abdominal cavity." },
        { title: "Allergy Suite", metric: "99.9% Accuracy", desc: "Automated screening for over 250 common canine environmental and food triggers." },
        { title: "Longevity Data", metric: "AI Synthesis", desc: "Integrating your dog's history with our global database for predictive wellness mapping." }
    ];

    return (
        <div ref={containerRef} className="bg-sand-100 min-h-screen">
            {/* Cinematic Hero */}
            <section ref={heroRef} className="relative h-[110vh] flex items-center justify-center overflow-hidden px-6 lg:px-12">
                <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
                    <img 
                        src="/images/WhatsApp Image 2026-01-24 at 12.00.40 AM.jpeg" 
                        alt="Hero Background" 
                        className="w-full h-full object-cover grayscale brightness-50"
                    />
                </motion.div>
                
                <div className="relative z-10 max-w-screen-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                    >
                        <h1 className="font-display text-[clamp(4rem,15vw,16rem)] leading-[0.75] text-sand-50 tracking-tighter uppercase mb-8">
                            Dog<br />
                            <span className="text-serif italic text-gold-500 lowercase">Diagnostics.</span>
                        </h1>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-sand-200 text-xl md:text-2xl font-light max-w-2xl mb-12">
                            A world-class suite of diagnostic technologies designed for the unique physiology and genetic diversity of the canine world.
                        </p>
                        <div className="w-px h-32 bg-gold-500 animate-pulse" />
                    </motion.div>
                </div>

                <motion.div style={{ y: y2 }} className="absolute bottom-10 right-10 z-20 hidden lg:block">
                    <div className="flex items-center space-x-4 text-gold-500">
                        <span className="text-xs uppercase tracking-[0.3em] font-display">Scroll to explore</span>
                        <div className="w-12 h-px bg-gold-500" />
                    </div>
                </motion.div>
            </section>

            {/* Horizontal Protocol Section */}
            <section ref={horizontalRef} className="h-screen bg-slate-950 overflow-hidden flex flex-col justify-center">
                <div className="px-6 lg:px-12 mb-12">
                    <h2 className="text-sand-50 font-display text-4xl uppercase tracking-widest">The Protocol</h2>
                </div>
                <div className="flex flex-nowrap h-2/3">
                    {protocols.map((p, idx) => (
                        <div key={idx} className="horizontal-item flex-shrink-0 w-screen md:w-[60vw] h-full px-6 lg:px-12 flex flex-col justify-center border-r border-white/10">
                            <span className="text-gold-500 font-serif italic text-6xl mb-8">0{idx + 1}</span>
                            <h3 className="text-sand-50 font-display text-5xl md:text-7xl uppercase mb-6">{p.title}</h3>
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="px-4 py-1 border border-gold-500 text-gold-500 text-xs uppercase tracking-widest font-display">
                                    {p.metric}
                                </div>
                                <div className="h-px flex-grow bg-white/20" />
                            </div>
                            <p className="text-sand-300 text-xl font-light max-w-lg leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pinned Category Showcase */}
            <section className="relative">
                {diagnosticCategories.map((cat, idx) => (
                    <div key={idx} className={`pin-category h-screen w-full flex items-center justify-center overflow-hidden ${cat.bg}`}>
                        <div className="absolute inset-0 opacity-20">
                            <img src={cat.image} alt="" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
                            <div className={cat.textColor}>
                                <span className="font-serif italic text-3xl mb-4 block">{cat.subtitle}</span>
                                <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-8 leading-none">
                                    {cat.title}
                                </h2>
                                <p className="text-xl md:text-2xl font-light max-w-xl mb-12 opacity-80 leading-relaxed">
                                    {cat.desc}
                                </p>
                                <button className={`flex items-center space-x-4 group ${cat.textColor}`}>
                                    <span className="font-display text-sm uppercase tracking-widest border-b border-current pb-2">View Technical Specs</span>
                                    <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </button>
                            </div>
                            <div className="hidden lg:flex justify-end">
                                <div className="relative w-96 h-96 border border-current/20 rounded-full flex items-center justify-center">
                                    <cat.icon className={`w-32 h-32 ${cat.textColor} opacity-20`} />
                                    <div className="absolute inset-0 animate-spin-slow border-t border-current rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-12 left-6 lg:left-12">
                            <span className={`text-[12rem] font-display font-bold leading-none opacity-5 ${cat.textColor}`}>{cat.id}</span>
                        </div>
                    </div>
                ))}
            </section>

            {/* Quantum Tech Grid (Refined) */}
            <section className="px-6 lg:px-12 py-32 bg-sand-100">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <span className="text-gold-500 font-display uppercase tracking-widest text-sm mb-4 block">Hardware Evolution</span>
                            <h2 className="text-slate-900 font-display text-5xl md:text-7xl uppercase tracking-tighter">Quantum Dog Tech</h2>
                        </div>
                        <p className="text-slate-600 max-w-md text-xl font-light italic leading-relaxed">
                            "Bridging the gap between canine intuition and molecular certainty."
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                        {[
                            { icon: Database, title: "Canine Bio-Vault", value: "Secure 256-bit AES", desc: "Encrypted storage for your dog's complete genetic and medical history." },
                            { icon: Activity, title: "Real-time Sync", value: "Multi-point Vitals", desc: "Live monitoring of canine physiology through clinical-grade sensor integration." },
                            { icon: Fingerprint, title: "Paw-ID Bio", value: "DNA Verification", desc: "Unique biometric identification for truly personalized canine medicine." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-sand-100 p-12 hover:bg-white transition-colors duration-700 group cursor-pointer">
                                <item.icon className="w-12 h-12 text-gold-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-slate-900 font-display text-2xl uppercase mb-2">{item.title}</h3>
                                <span className="text-gold-600 text-[10px] uppercase tracking-widest font-bold mb-6 block">{item.value}</span>
                                <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <CinematicGallery images={[
                { url: "/images/WhatsApp Image 2026-01-23 at 11.59.21 PM (1).jpeg", title: "Canine Precision", category: "Digital X-Ray" },
                { url: "/images/WhatsApp Image 2026-01-23 at 11.59.21 PM (2).jpeg", title: "Nutritional Insight", category: "Bio-Analysis" },
                { url: "/images/WhatsApp Image 2026-01-23 at 11.59.22 PM.jpeg", title: "Behavioral Mapping", category: "Neurology" },
                { url: "/images/WhatsApp Image 2026-01-23 at 11.59.22 PM (1).jpeg", title: "Surgical Suite", category: "Orthopedics" },
                { url: "/images/WhatsApp Image 2026-01-23 at 11.59.22 PM (2).jpeg", title: "Wellness Check", category: "Pediatrics" },
                { url: "/images/WhatsApp Image 2026-01-24 at 12.00.39 AM (1).jpeg", title: "Diagnostic Lab", category: "Genetics" }
            ]} title="The Canine Visual Record" />

            {/* Editorial CTA */}
            <section className="py-40 bg-slate-900 text-sand-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent animate-pulse" />
                </div>
                <div className="max-w-screen-2xl mx-auto px-6 text-center relative z-10">
                    <span className="font-serif italic text-3xl text-gold-500 mb-8 block">Ready for certainty?</span>
                    <h2 className="text-display text-[clamp(4rem,10vw,12rem)] tracking-tighter uppercase mb-16 leading-[0.8]">
                        Unlock Your Dog's<br />
                        <span className="text-serif lowercase italic text-gold-500">Biological</span> Data.
                    </h2>
                    <button className="group relative px-12 py-6 overflow-hidden bg-gold-500 text-slate-900 rounded-full font-display font-bold uppercase tracking-[0.2em] transition-transform duration-500 hover:scale-105">
                        <span className="relative z-10">Book Diagnostic Suite</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Diagnostics;
