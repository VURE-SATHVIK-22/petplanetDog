import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Navigation, Clock } from 'lucide-react';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const Branches = () => {
  const containerRef = useRef(null);

  const branches = [
    {
      name: "Vanasthalipuram (Main)",
      address: "Beside Line Of Vivekanandha Park, Hyderabad, 500070",
      hours: "09:00 AM — 09:00 PM (Everyday)",
      featured: true
    },
    {
      name: "SR Nagar & Hasthinapuram",
      address: "SR Nagar Road / Hasthinapuram Central, Hyderabad",
      hours: "09:30 AM — 09:00 PM",
      featured: false
    },
    {
      name: "Pet Planet Dog Clinic",
      address: "Turkayamjal, Hyderabad",
      hours: "10:00 AM — 08:30 PM",
      featured: false
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.branch-reveal', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-container relative" id="branches">
      <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-ios-blue/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="text-center space-y-4 mb-20 relative z-10">
        <span className="branch-reveal text-ios-blue font-bold tracking-[0.3em] uppercase text-[10px] block">Global Access</span>
        <h2 className="branch-reveal text-gradient text-5xl">Our Clinical <br /> <span className="italic font-normal">Branches.</span></h2>
        <p className="branch-reveal text-luxury text-xl max-w-xl mx-auto mt-6">
          Find a Dr. Suresh Pet Care sanctuary near you. Armed with cutting-edge diagnostics and expert staff in every location.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {branches.map((branch, i) => (
          <GlassCard 
            key={i} 
            className={`branch-reveal !p-10 !rounded-[2.5rem] transition-all duration-700 flex flex-col justify-between h-full ${
              branch.featured ? '!bg-white border-ios-blue/30 shadow-glass-heavy transform lg:-translate-y-4' : '!bg-white border-gray-100 hover:!bg-gray-50'
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${branch.featured ? 'bg-ios-blue text-white' : 'bg-ios-label text-white'}`}>
                  <MapPin size={24} />
                </div>
                {branch.featured && (
                  <span className="px-3 py-1 bg-ios-blue/10 text-ios-blue border border-ios-blue/20 text-[9px] font-bold uppercase tracking-widest rounded-full">HQ</span>
                )}
              </div>
              
              <h3 className="text-2xl font-display font-bold leading-tight mb-4">{branch.name}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                   <MapPin size={16} className="text-ios-secondaryLabel mt-0.5 shrink-0" />
                   <p className="text-sm font-medium opacity-80 leading-relaxed">{branch.address}</p>
                </div>
                <div className="flex items-center gap-3">
                   <Clock size={16} className="text-ios-secondaryLabel shrink-0" />
                   <p className="text-sm font-medium opacity-80">{branch.hours}</p>
                </div>
              </div>
            </div>

            <button className={`w-full py-4 rounded-xl flex justify-center items-center gap-2 font-bold uppercase tracking-widest text-[10px] transition-all ${
              branch.featured ? 'bg-ios-blue text-white hover:bg-blue-600 shadow-xl shadow-ios-blue/20' : 'bg-white text-ios-label hover:bg-ios-bg shadow-sm'
            }`}>
              Get Directions
              <Navigation size={14} />
            </button>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Branches;
