import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, FastForward, Activity, Microscope, Heart, Zap, Syringe } from 'lucide-react';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.high-animate', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const highlightItems = [
    { title: "Surgical Expert", icon: <Zap /> },
    { title: "Advance Laboratory", icon: <Microscope /> },
    { title: "X-Ray & Ultrasound", icon: <Activity /> },
    { title: "Critical Care", icon: <Shield /> },
    { title: "Hygienic Grooming", icon: <Heart /> },
    { title: "Preventive Care", icon: <FastForward /> },
    { title: "Vaccination", icon: <Syringe /> }
  ];

  return (
    <section ref={containerRef} className="section-container !py-12 md:!py-20">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="text-center space-y-3">
          <span className="high-animate text-ios-blue font-bold tracking-[0.3em] uppercase text-[10px] block">Our Strengths</span>
          <h2 className="high-animate text-gradient text-5xl">Why Pet Parents <br /> <span className="italic font-normal">Choose Us</span></h2>
        </div>
 
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
          {highlightItems.map((item, index) => (
            <GlassCard key={index} className="high-animate flex flex-col items-center text-center gap-5 !p-8 min-w-[180px] flex-1 !rounded-[2rem] hover:shadow-glass-heavy group transition-all duration-700">
              <div className="text-ios-blue bg-ios-blue/5 p-4 rounded-[1.5rem] group-hover:scale-110 group-hover:bg-ios-blue group-hover:text-white transition-all duration-700">
                {React.cloneElement(item.icon, { size: 24 })}
              </div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.2em]">{item.title}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
