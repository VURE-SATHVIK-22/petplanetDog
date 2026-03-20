import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Heart, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-animate', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image Parallax
      gsap.to('.about-image', {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: '.about-image-wrap',
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-container" id="about">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-12 mb-20">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <span className="about-animate text-ios-blue font-bold tracking-[0.3em] uppercase text-[10px] block">Our Clinic & Legacy</span>
                <h2 className="about-animate text-gradient text-5xl">Best Veterinary <br /> <span className="italic font-normal">Care in Hyderabad.</span></h2>
              </div>
              <p className="about-animate text-luxury text-xl max-w-md opacity-80">
                With 20+ years of experience, Dr. Suresh Pet Care Hospital and Surgical Center provides top-quality surgical and diagnostic services in Hyderabad.
              </p>
           </div>
        </div>

        <div className="lg:col-span-5 space-y-12">
           <div className="about-animate space-y-6">
              <p className="text-xl leading-relaxed text-ios-label/80 font-medium">
                Under the visionary leadership of <span className="text-ios-blue font-bold">Dr. T Suresh Babu</span>, our clinic has become a benchmark for medical precision and compassionate touch.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                 {[
                   { icon: <Heart className="text-red-500" />, title: "Compassion", desc: "Healing through empathy." },
                   { icon: <Shield className="text-ios-blue" />, title: "Protection", desc: "Advanced life defense." }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col gap-4 p-6 glass-card-elite !rounded-[2rem] bg-white">
                      <div className="bg-white p-3 rounded-[1.2rem] w-fit shadow-sm border border-gray-100">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-lg leading-tight">{item.title}</h4>
                        <p className="text-[11px] text-ios-secondaryLabel font-bold uppercase tracking-widest mt-1">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="about-animate glass-premium p-10 rounded-[2.5rem] bg-ios-blue text-white shadow-glass-heavy border-ios-blue/30 relative group overflow-hidden">
              <div className="hidden" />
              <Quote className="text-white/20 mb-6" size={48} />
              <p className="text-2xl font-display font-medium leading-tight mb-8">
                "We focus on the special bond between you and your pet by providing professional medical care."
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full border border-white/30 overflow-hidden">
                    <img src="/images/WhatsApp Image 2026-01-23 at 11.58.30 PM.jpeg" alt="Dr. T Suresh Babu" className="w-full h-full object-cover" />
                 </div>
                 <span className="text-xs font-bold tracking-widest uppercase opacity-80">— Dr. T Suresh Babu</span>
              </div>
           </div>
        </div>

        <div className="lg:col-span-7">
           <div className="about-image-wrap relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-glass-heavy">
              <img 
                src="/images/WhatsApp Image 2026-01-23 at 11.58.30 PM.jpeg" 
                alt="Expert Surgical Care" 
                className="about-image w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ios-label/40 to-transparent" />
              
              <div className="absolute bottom-12 left-12 grid grid-cols-2 gap-6 w-full pr-24">
                 {[
                   { val: '644+', lbl: 'Reviews' },
                   { val: '4.7', lbl: 'Rating' }
                 ].map((stat, i) => (
                   <div key={i} className="glass-premium bg-black/40 backdrop-blur-xl border-white/20 p-6 rounded-[2rem]">
                      <p className="text-3xl font-bold font-display text-white">{stat.val}</p>
                      <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">{stat.lbl}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
