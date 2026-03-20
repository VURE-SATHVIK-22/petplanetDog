import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Sparkles, Phone, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

gsap.registerPlugin(ScrollTrigger);

const BranchesPage = () => {
  const containerRef = useRef(null);

  const branches = [
    {
      name: "Vanasthalipuram (Main)",
      type: "Main Hospital & Surgical Center",
      address: "Beside Line Of Vivekanandha Park, Hyderabad, 500070",
      hours: "09:00 AM — 09:00 PM (Everyday)",
      phone: "+91 9848954921",
      featured: true,
      image: "/images/hero_dog_cinematic_1773573246596.png",
    },
    {
      name: "SR Nagar & Hasthinapuram",
      type: "Diagnostic & Wellness Clinic",
      address: "SR Nagar Road / Hasthinapuram Central, Hyderabad",
      hours: "09:30 AM — 09:00 PM",
      phone: "+91 9848954921",
      featured: false,
      image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Pet Planet Dog Clinic",
      type: "Turkayamjal Branch",
      address: "Turkayamjal, Hyderabad",
      hours: "10:00 AM — 08:30 PM",
      phone: "+91 9848954921",
      featured: false,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 0.8 } });
      tl.fromTo('.branch-hero-reveal', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05 }
      );

      gsap.fromTo('.branch-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ios-bg overflow-hidden min-h-screen"
    >
      {/* Cinematic Hero */}
      <section className="relative pt-48 pb-32">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-ios-blue/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="branch-hero-reveal inline-flex items-center gap-2 px-4 py-2 bg-ios-blue/5 backdrop-blur-xl rounded-full border border-ios-blue/10">
              <Sparkles size={14} className="text-ios-blue" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ios-blue">Global Access</span>
            </div>
            <h1 className="branch-hero-reveal text-gradient leading-[0.95] tracking-tight text-6xl md:text-8xl">
              Our Clinical <br />
              <span className="italic font-normal italic-ios">Branches.</span>
            </h1>
            <p className="branch-hero-reveal text-luxury text-xl md:text-2xl leading-snug max-w-2xl">
              Find a Dr. Suresh Pet Care sanctuary near you. Armed with cutting-edge diagnostics and expert staff in every location.
            </p>
          </div>
        </div>
      </section>

      {/* Branches List */}
      <section className="py-20">
        <div className="section-container space-y-32">
          {branches.map((branch, i) => (
            <div key={i} className="branch-card flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              <div className={`w-full lg:w-1/2 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-glass-heavy group">
                  <img src={branch.image} alt={branch.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {branch.featured && (
                    <div className="absolute top-8 right-8 bg-ios-blue text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                      <Star size={12} />
                      Headquarters
                    </div>
                  )}
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2">{branch.type}</p>
                    <h3 className="text-3xl font-display font-bold">{branch.name}</h3>
                  </div>
                </div>
              </div>

              <div className={`w-full lg:w-1/2 space-y-10 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-ios-blue/10 text-ios-blue flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ios-secondaryLabel mb-2">Location</p>
                      <p className="text-lg font-medium leading-relaxed">{branch.address}</p>
                    </div>
                  </div>
                  
                  <div className="h-[1px] w-full bg-ios-label/5" />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-ios-label/5 text-ios-label flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ios-secondaryLabel mb-2">Timing</p>
                      <p className="text-lg font-medium">{branch.hours}</p>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-ios-label/5" />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ios-secondaryLabel mb-2">Contact</p>
                      <p className="text-lg font-medium">{branch.phone}</p>
                    </div>
                  </div>
                </div>

                <GlassButton variant="primary" className="!w-full md:!w-fit !px-12 flex items-center justify-center gap-3">
                  Get Directions <Navigation size={16} />
                </GlassButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Footer Text */}
      <footer className="py-20 opacity-40">
        <div className="section-container text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] max-w-3xl mx-auto leading-relaxed">
            Dr. Suresh Pet Care Branches - Visit our main hospital at Vanasthalipuram or our clinics in SR Nagar, Hasthinapuram and Turkayamjal for expert veterinary services.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default BranchesPage;
