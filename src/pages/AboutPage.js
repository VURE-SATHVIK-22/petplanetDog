import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ShieldCheck, Microscope, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline reveal
      gsap.from('.timeline-item', {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: '.timeline-container',
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    { year: '2012', event: 'Sanctuary Foundation', desc: 'Pet Planet Dog Clinic was established by Dr. T Suresh Babu.' },
    { year: '2015', event: 'Surgical Theatre Expansion', desc: 'Integrated high-sterility OT for advanced orthopedic procedures.' },
    { year: '2018', event: 'Diagnostic Mastery', desc: 'Installation of high-precision blood and microscopic lab units.' },
    { year: '2023', event: 'The Excellence Milestone', desc: 'Surpassed 8,000 successful surgical and medical cases.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ios-bg"
      ref={containerRef}
    >
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="section-container">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ios-blue/5 backdrop-blur-md rounded-full border border-ios-blue/10">
              <Award size={14} className="text-ios-blue" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ios-blue">Our Story</span>
            </div>
            <h1 className="text-gradient leading-none">A Legacy of <br /> Expert Care.</h1>
            <p className="text-luxury text-3xl leading-snug">
              Petplanet is where expert surgical skill meets compassionate animal care. Led by Dr. T Suresh Babu's 12+ years of surgical experience.
            </p>
          </div>
        </div>
        {/* Dynamic Art */}
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-ios-blue/5 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* Philosophy */}
      <section className="py-40 border-y border-ios-label/5">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <h2 className="text-5xl leading-tight">Crafting the <br /> <span className="italic font-normal">Sanctuary</span> Bio.</h2>
               <div className="space-y-8 text-luxury text-xl">
                 <p>Located beside Vivekanandha Park in NGO's Colony, our clinic has served as a center for advanced canine treatment for over a decade.</p>
                 <p>Our philosophy is built on three pillars: Radical Hygiene, Diagnostic Depth, and Surgical Resilience. Every case is a testament to our commitment to canine life.</p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck size={32} />, title: 'Certified OT' },
                { icon: <Microscope size={32} />, title: 'Lab Precision' },
                { icon: <Heart size={32} />, title: 'Pure Empathy' },
                { icon: <Award size={32} />, title: 'Merit Rating' }
              ].map((item, i) => (
                <div key={i} className="glass-card-elite !p-10 flex flex-col items-center text-center gap-6">
                   <div className="text-ios-blue">{item.icon}</div>
                   <h4 className="font-bold text-[10px] uppercase tracking-widest">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-40 bg-white">
        <div className="section-container timeline-container">
          <h2 className="text-6xl text-center mb-40">A Journey of <span className="italic font-normal">Impact.</span></h2>
          <div className="space-y-32">
            {milestones.map((item, i) => (
              <div key={i} className="timeline-item flex flex-col md:flex-row gap-12 items-start group">
                 <div className="md:w-1/4">
                    <p className="text-8xl font-display font-bold text-ios-label/10 group-hover:text-ios-blue/20 transition-colors duration-700">{item.year}</p>
                 </div>
                 <div className="md:w-3/4 space-y-6">
                    <h3 className="text-4xl">{item.event}</h3>
                    <p className="text-luxury text-2xl max-w-2xl">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
