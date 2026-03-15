import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Microscope, HeartPulse, Activity, Sparkles, ChevronRight } from 'lucide-react';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      title: "Diagnostic Services",
      icon: <Microscope className="text-ios-blue" />,
      services: ["Blood Investigation", "Microscopic Analysis", "Rapid Tests", "Radiology"],
      color: "bg-ios-blue/10"
    },
    {
      title: "Expert Pet Care",
      icon: <HeartPulse className="text-red-500" />,
      services: ["Emergency Service", "Cat Medicine Available", "Veterinary Physician", "Anti-Tick Management"],
      color: "bg-red-500/10"
    },
    {
      title: "Grooming & Wellness",
      icon: <Activity className="text-ios-green" />,
      services: ["Bathing (Mange & Scabies)", "Pet Grooming", "Pet Food Available", "Pet Accessories"],
      color: "bg-ios-green/10"
    }
  ];

  return (
    <section ref={containerRef} className="section-container" id="services">
      <div className="space-y-20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ios-blue/5 backdrop-blur-md rounded-full border border-ios-blue/10">
            <Sparkles size={14} className="text-ios-blue" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ios-blue">Our Expertise</span>
          </div>
          <h2 className="text-gradient text-5xl">Professional <br /> <span className="italic font-normal">Pet Services.</span></h2>
          <p className="text-luxury text-xl">
            Complete pet care services including advanced lab tests and expert surgeries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <GlassCard key={i} className="service-card group !p-10 hover:!bg-white/60 !rounded-[2.5rem] border-white/20 transition-all duration-700">
               <div className={`w-16 h-16 rounded-[1.5rem] ${cat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700`}>
                  {React.cloneElement(cat.icon, { size: 30 })}
               </div>
               
               <div className="space-y-6">
                  <h3 className="text-2xl font-display font-bold leading-tight">{cat.title}</h3>
                  <ul className="space-y-3">
                     {cat.services.map((item, j) => (
                       <li key={j} className="flex items-center justify-between text-ios-secondaryLabel font-bold text-[10px] uppercase tracking-widest border-b border-ios-label/5 pb-3 group/item hover:text-ios-blue transition-colors">
                          {item}
                          <ChevronRight size={12} className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                       </li>
                     ))}
                  </ul>
               </div>
 
               <button className="mt-8 w-full py-3.5 rounded-xl bg-ios-label/5 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-ios-blue hover:text-white transition-all duration-500">
                  View Specifications
               </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
