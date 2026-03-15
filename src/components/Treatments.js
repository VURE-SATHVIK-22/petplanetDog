import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Syringe, HeartPulse, Activity, Zap, ShieldCheck, Microscope, Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Treatments = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.treat-reveal', 
        { y: 30, opacity: 0 },
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

  const treatments = [
    { title: "Pet Vaccination", description: "Timely vaccinations for complete protection.", icon: <Syringe size={24} /> },
    { title: "Expert Surgery", description: "Professional bone and soft tissue surgeries.", icon: <Zap size={24} /> },
    { title: "Diagnostic Tests", description: "Accurate blood tests and lab investigations.", icon: <Microscope size={24} /> },
    { title: "Health Monitoring", description: "Regular checkups for your pet's wellbeing.", icon: <Activity size={24} /> },
    { title: "Clean Operation Theatre", description: "Hygienic and safe surgical environment.", icon: <ShieldCheck size={24} /> },
    { title: "Internal Care", description: "Modern treatments for internal health issues.", icon: <HeartPulse size={24} /> }
  ];

  return (
    <section ref={containerRef} className="section-container bg-ios-bg/50">
      <div className="space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-4">
             <span className="treat-reveal text-ios-blue font-bold tracking-[0.3em] uppercase text-[10px] block">Our Specialities</span>
             <h2 className="treat-reveal text-gradient text-5xl">Expert <span className="italic font-normal">Veterinary</span> <br /> Services</h2>
          </div>
          <p className="treat-reveal text-luxury text-lg max-w-md pb-2">
            Professional pet care and surgical services provided in a clean and safe environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {treatments.map((item, index) => (
            <div key={index} className="treat-reveal group relative p-10 glass-premium !bg-transparent !border-ios-label/5 hover:!bg-white hover:z-10 transition-all duration-700">
              <div className="absolute top-8 right-8 text-ios-label/10 group-hover:text-ios-blue/20 transition-colors">
                 <Plus size={32} />
              </div>
              <div className="text-ios-blue mb-10 w-16 h-16 rounded-2xl bg-ios-blue/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                <p className="text-ios-secondaryLabel text-sm font-medium leading-relaxed">{item.description}</p>
                <div className="pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ios-blue opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                   Explore Procedure <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal Import helper
const ChevronRight = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

export default Treatments;
