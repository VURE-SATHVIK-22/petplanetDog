import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Star, Users, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Award,
    title: "Excellence in Veterinary Medicine",
    description: "Recognized for outstanding contributions to canine healthcare and advanced molecular diagnostics.",
    year: "2024"
  },
  {
    icon: Star,
    title: "Top-Rated Pet Clinic in Hyderabad",
    description: "Consistently rated 5 stars by over 10,000 satisfied pet owners in the Vanasthalipuram region.",
    year: "2023"
  },
  {
    icon: Users,
    title: "15+ Years of Clinical Expertise",
    description: "Dr. T Suresh Babu brings over a decade and a half of dedicated experience in complex pet surgeries.",
    year: "Est. 2010"
  },
  {
    icon: ShieldCheck,
    title: "Certified Surgical Specialist",
    description: "Advanced certification in minimally invasive surgical procedures for domestic pets.",
    year: "2022"
  }
];

const petCarePhotos = [
  "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".achievement-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(".photo-frame", {
        scrollTrigger: {
          trigger: ".photo-grid",
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-sand-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block font-serif italic text-2xl text-gold-600 mb-4">
            Legacy of Care
          </span>
            <h2 className="font-display text-4xl md:text-6xl text-slate-900 leading-tight mb-6 tracking-tight font-bold">
              Professional <span className="text-gold-500">Achievements.</span>
            </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            A decade of dedication to the well-being of your companions, marked by excellence and clinical precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="achievement-card bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-gold-500/10 rounded-2xl flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="text-gold-500 font-bold text-xs tracking-widest uppercase mb-2 block">{item.year}</span>
              <h4 className="font-display text-2xl text-slate-900 mb-4 leading-tight">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

          <div className="photo-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {petCarePhotos.map((photo, index) => (
              <div 
                key={index} 
                className="photo-frame relative aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-lg"
              >
                <img 
                  src={photo} 
                  alt={`Pet Care Excellence - Veterinary Success Story ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Achievements;
