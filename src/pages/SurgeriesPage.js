```
import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  Sparkles,
  ChevronRight,
  X,
  Calendar,
  PhoneCall,
  ArrowUpRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

gsap.registerPlugin(ScrollTrigger);

const SurgeriesPage = () => {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const [activeGallery, setActiveGallery] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const surgeries = [
    {
      title: "Orthopedic Surgery",
      subtitle: "Bone & Joint Excellence",
      desc: "Specialized procedures for fractures, ligament repairs, and joint stabilizations using advanced surgical instrumentation.",
      image: "/images/WhatsApp Image 2026-01-23 at 11.59.22 PM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-23 at 11.59.22 PM.jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.59.22 PM (1).jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.59.22 PM (2).jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.58.30 PM.jpeg"
      ],
      stat: "Success",
      statVal: "98%"
    },
    {
      title: "Elite Surgical Team",
      subtitle: "Safety First Protocol",
      desc: "Led by Dr. T Suresh Babu, our team follows strict international standards for surgical hygiene and patient safety.",
      image: "/images/WhatsApp Image 2026-01-23 at 11.58.30 PM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-23 at 11.58.30 PM.jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.58.30 PM (1).jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.59.20 PM.jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.59.20 PM (2).jpeg"
      ],
      stat: "Safety",
      statVal: "Gold"
    },
    {
      title: "Advanced Diagnostics",
      subtitle: "Internal Medicine",
      desc: "State-of-the-art X-ray and imaging facilities to provide precise pre-operative assessments and diagnosis.",
      image: "/images/WhatsApp Image 2026-01-23 at 11.59.20 PM (1).jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-23 at 11.59.20 PM (1).jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.59.21 PM.jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.59.21 PM (1).jpeg",
        "/images/WhatsApp Image 2026-01-23 at 11.59.21 PM (2).jpeg"
      ],
      stat: "Precision",
      statVal: "Elite"
    },
    {
      title: "Post-Op Recovery",
      subtitle: "Compassionate Care",
      desc: "Dedicated monitoring and pain management to ensure your pet's comfort and quick return to health.",
      image: "/images/WhatsApp Image 2026-01-24 at 12.00.40 AM.jpeg",
      gallery: [
        "/images/WhatsApp Image 2026-01-24 at 12.00.40 AM.jpeg",
        "/images/WhatsApp Image 2026-01-24 at 12.00.40 AM (1).jpeg",
        "/images/WhatsApp Image 2026-01-24 at 12.00.39 AM.jpeg",
        "/images/WhatsApp Image 2026-01-24 at 12.00.39 AM (1).jpeg"
      ],
      stat: "Care",
      statVal: "24/7"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.reveal-up', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "expo.out" }
      );

      // Horizontal Scroll Gallery (Premium Interaction)
      if (window.innerWidth > 1024) {
        let sections = gsap.utils.toArray(".surgery-card-horizontal");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: galleryRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + galleryRef.current.offsetWidth
          }
        });
      }

      // Card Stagger (Mobile)
      if (window.innerWidth <= 1024) {
          gsap.fromTo('.surgery-card-horizontal', 
            { y: 40, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.2, 
                scrollTrigger: {
                    trigger: '.surgery-card-horizontal',
                    start: "top 80%"
                }
            }
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (index, surgery) => {
    setActiveGallery(surgery.gallery);
    setCurrentImgIndex(0);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ios-bg overflow-x-hidden pt-32"
    >
      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-20"
          >
            <button 
              onClick={() => setActiveGallery(null)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <Expand size={32} className="rotate-45" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center">
               <motion.img
                 key={currentImgIndex}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 src={activeGallery[currentImgIndex]}
                 alt="Gallery Detail"
                 className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl"
               />
               
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                 {activeGallery.map((_, i) => (
                   <button
                    key={i}
                    onClick={() => setCurrentImgIndex(i)}
                    className={`w-12 h-1 bg-white transition-all rounded-full ${i === currentImgIndex ? 'opacity-100' : 'opacity-20'}`}
                   />
                 ))}
               </div>

               <button 
                onClick={() => setCurrentImgIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length)}
                className="absolute left-0 w-20 h-full flex items-center justify-center text-white/20 hover:text-white transition-all"
               >
                 <ChevronLeft size={48} />
               </button>

               <button 
                onClick={() => setCurrentImgIndex((prev) => (prev + 1) % activeGallery.length)}
                className="absolute right-0 w-20 h-full flex items-center justify-center text-white/20 hover:text-white transition-all"
               >
                 <ChevronRight size={48} />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl space-y-8">
            <div className="reveal-up inline-flex items-center gap-2 px-4 py-2 bg-ios-blue/5 backdrop-blur-xl rounded-full border border-ios-blue/10">
              <Sparkles size={14} className="text-ios-blue" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ios-blue text-white/60">Surgical Excellence</span>
            </div>
            <h1 className="reveal-up text-gradient leading-none tracking-tight">
              Advanced Veterinary <br />
              <span className="italic font-normal">Surgical Theatre.</span>
            </h1>
            <p className="reveal-up text-luxury text-2xl leading-snug max-w-2xl">
              Equipped with elite surgical instrumentation and a high-sterility environment, we specialize in life-saving procedures for canine health.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Gallery */}
      <section ref={galleryRef} className="lg:h-screen flex items-center bg-black/5 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:absolute lg:top-0 lg:left-0 lg:h-full lg:px-[10vw] items-center py-20 lg:py-0">
          {surgeries.map((item, i) => (
            <div key={i} className="surgery-card-horizontal w-full lg:w-[45vw] lg:h-[70vh] flex-shrink-0 px-4 lg:px-12 group cursor-pointer" onClick={() => openLightbox(i, item)}>
              <div className="relative h-full glass-premium !p-6 !rounded-[3rem] border-white/40 shadow-glass-heavy overflow-hidden transition-all duration-700 group-hover:bg-white/50">
                <div className="absolute top-8 left-8 z-20 space-y-2">
                   <div className="flex items-center gap-3">
                      <span className="px-3 py-1 bg-ios-blue/10 backdrop-blur-md rounded-full text-[9px] font-bold text-ios-blue uppercase tracking-widest border border-ios-blue/10">
                         {item.stat}: {item.statVal}
                      </span>
                      <span className="flex items-center gap-1 text-[9px] font-bold text-ios-blue/60 uppercase tracking-widest">
                         <Expand size={10} /> View Gallery
                      </span>
                   </div>
                   <h3 className="text-4xl font-bold tracking-tight text-ios-label group-hover:text-ios-blue transition-colors">{item.title}</h3>
                   <p className="text-ios-secondaryLabel text-sm max-w-xs font-medium">{item.subtitle}</p>
                </div>

                <div className="mt-28 relative aspect-video lg:aspect-auto lg:h-[calc(100%-120px)] rounded-[2rem] overflow-hidden">
                   <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                   
                   <div className="absolute bottom-6 left-6 right-6 p-6 glass-premium !bg-white/20 !border-white/20 !rounded-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                      <p className="text-xs text-white leading-relaxed font-medium italic">
                        {item.desc}
                      </p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Post-Op Info */}
      <section className="py-40">
        <div className="section-container grid md:grid-cols-3 gap-8">
           {[
             { icon: <HeartPulse className="text-ios-blue" />, title: "Pre-Op Prep", desc: "Comprehensive blood work and health screening before any surgical procedure." },
             { icon: <ShieldCheck className="text-ios-green" />, title: "Sterile OT", desc: "Ultra-sanitized surgical theater following international safety standards." },
             { icon: <Activity className="text-ios-gold" />, title: "Monitoring", desc: "24/7 post-operative monitoring to ensure smooth recovery and pain management." }
           ].map((info, i) => (
             <GlassCard key={i} className="!p-10 !rounded-[2.5rem] border-white/30 space-y-6 hover:shadow-glass-heavy transition-all">
                <div className="w-16 h-16 rounded-2xl bg-ios-blue/5 flex items-center justify-center">
                   {info.icon}
                </div>
                <h4 className="text-2xl font-bold">{info.title}</h4>
                <p className="text-ios-secondaryLabel text-sm leading-relaxed">{info.desc}</p>
             </GlassCard>
           ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="pb-40">
        <div className="section-container">
           <GlassCard className="!bg-ios-label !border-ios-label/5 !p-20 !rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left shadow-glass-heavy relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-ios-blue/10 blur-[100px] pointer-events-none" />
              <div className="space-y-6 relative z-10">
                 <h3 className="text-5xl text-white tracking-tight">Emergency Surgery <br /><span className="italic font-normal">Available 24/7.</span></h3>
                 <p className="text-white/40 text-xl max-w-md">Our trauma team is ready for immediate surgical intervention and care.</p>
              </div>
              <GlassButton className="!bg-white !text-ios-label !px-12 !h-16 text-sm font-bold tracking-widest relative z-10">
                 BOOK SURGERY NOW
              </GlassButton>
           </GlassCard>
        </div>
      </section>
    </motion.div>
  );
};

export default SurgeriesPage;
