import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Microscope,
  HeartPulse,
  Activity,
  Stethoscope,
  PawPrint,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronRight,
  Clock,
  PhoneCall
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const containerRef = useRef(null);

  const serviceCategories = [
    {
      title: "Clinical Excellence",
      subtitle: "Medical & Diagnostic Precision",
      desc: "Headed by Dr. T Suresh Babu (MVSc), we provide advanced medical care using the latest diagnostic technologies and surgical protocols.",
      icon: <Stethoscope size={32} />,
      color: "bg-ios-blue",
      items: [
        { name: "Veterinary Physician", desc: "Expert clinical consultation for all canine breeds." },
        { name: "Diagnostic Services", desc: "Digital microscopy and accurate blood investigation." },
        { name: "Cat Medicine Available", desc: "Specialized healthcare tailored for feline patients." },
        { name: "Surgical Excellence", desc: "Orthopedic and soft tissue surgical procedures." }
      ],
      image: "/images/clinic/dr_suresh_consultation.png",
      badge: "Expert Care"
    },
    {
      title: "Surgical & Emergency",
      subtitle: "Critical Response Unit",
      desc: "Our high-sterility OT is equipped for major and minor surgeries, backed by emergency response for critical canine cases.",
      icon: <HeartPulse size={32} />,
      color: "bg-red-500",
      items: [
        { name: "Emergency Service", desc: "24/7 priority care for life-threatening situations." },
        { name: "Major & Minor Surgeries", desc: "Sterile operative theater for complex procedures." },
        { name: "Post-Op Recovery", desc: "Monitored recovery protocols and pain management." },
        { name: "Trauma Care", desc: "Immediate stabilization and emergency diagnostics." }
      ],
      image: "/images/clinic/surgical_equipment.png",
      badge: "24/7 Response"
    },
    {
      title: "Wellness & Hygiene",
      subtitle: "Aesthetic & Preventative Care",
      desc: "Preventative management and grooming services to keep your pet healthy, clean, and free from parasitic infestations.",
      icon: <Scissors size={32} />,
      color: "bg-ios-gold",
      items: [
        { name: "Pet Grooming", desc: "Professional aesthetic care and hygiene maintenance." },
        { name: "Anti-Tick Management", desc: "Advanced treatments for parasite prevention." },
        { name: "Bathing for Mange & Scabies", desc: "Specialized medicated baths for skin health." },
        { name: "Hygiene Consultation", desc: "Expert advice on domestic pet sanitation." }
      ],
      image: "/images/clinic/grooming_services.png",
      badge: "Spa & Care"
    },
    {
      title: "Essentials & Nutrition",
      subtitle: "The Petplanet Boutique",
      desc: "A curated range of high-quality nutrition, safety gear, and lifestyle accessories for modern pet parenting.",
      icon: <ShoppingBag size={32} />,
      color: "bg-green-500",
      items: [
        { name: "Pet Care", desc: "Daily essential products for comprehensive wellbeing." },
        { name: "Pet Food Available", desc: "Premium nutritional brands for varied dietary needs." },
        { name: "Pet Accessories", desc: "Quality collars, leashes, and safety equipment." },
        { name: "Healthcare Supplements", desc: "Vitamin and mineral support for growing pets." }
      ],
      image: "/images/clinic/pharmacy_shop.png",
      badge: "Boutique"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 0.8 } });
      tl.fromTo('.service-hero-reveal', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05 }
      );

      // Category Section Animations
      gsap.utils.toArray('.service-category').forEach((section) => {
        gsap.fromTo(section.querySelectorAll('.category-animate'),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ios-bg overflow-x-hidden"
    >
      {/* Cinematic Hero */}
      <section className="relative pt-48 pb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ios-blue/5 to-transparent pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="service-hero-reveal inline-flex items-center gap-2 px-4 py-2 bg-ios-blue/5 backdrop-blur-xl rounded-full border border-ios-blue/10">
              <Sparkles size={14} className="text-ios-blue" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ios-blue">Our Capabilities</span>
            </div>
            <h1 className="service-hero-reveal text-gradient leading-[0.95] tracking-tight">
              Best Dog Clinic for <br />
              <span className="italic font-normal italic-ios">Expert Clinical Care.</span>
            </h1>
            <p className="service-hero-reveal text-luxury text-2xl leading-snug max-w-2xl">
              Professional canine healthcare and surgical excellence in Hyderabad. Guided by 12+ years of surgical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="section-container space-y-40 lg:space-y-64">
          {serviceCategories.map((cat, i) => (
            <div key={i} className={`service-category flex flex-col lg:items-center gap-16 lg:gap-32 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              
              {/* Content Side */}
              <div className="lg:w-1/2 space-y-12">
                <div className="space-y-6">
                  <div className="category-animate inline-flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center text-white shadow-lg shadow-black/5`}>
                      {cat.icon}
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-ios-label text-white bg-opacity-90 backdrop-blur-md`}>
                      {cat.badge}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <span className="category-animate block text-ios-blue font-bold tracking-[0.3em] uppercase text-[10px]">{cat.subtitle}</span>
                    <h2 className="category-animate text-5xl tracking-tight leading-tight">{cat.title}</h2>
                    <p className="category-animate text-luxury text-xl max-w-xl">{cat.desc}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.items.map((item, j) => (
                    <GlassCard key={j} className="category-animate !p-6 !rounded-[2rem] border-white/30 bg-white/40 hover:!bg-white/60 transition-all duration-500 group">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-sm tracking-tight">{item.name}</h3>
                          <ChevronRight size={14} className="text-ios-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-[11px] text-ios-secondaryLabel font-medium leading-relaxed italic">{item.desc}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <GlassButton variant="secondary" className="category-animate !w-fit !px-10">
                  Detailed Protocol
                </GlassButton>
              </div>

              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="category-animate relative">
                  <div className="glass-premium !p-5 !rounded-[4rem] shadow-glass-heavy border-white/40 aspect-[4/5] md:aspect-[16/11] overflow-hidden group">
                    <img 
                      src={cat.image} 
                      alt={`Dr. T Suresh Babu ${cat.title} - Best Dog Clinic in Hyderabad`} 
                      className="w-full h-full object-cover rounded-[2.8rem] scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Floating Stat Card */}
                  <div className="absolute -bottom-8 -right-8 glass-premium !p-8 !rounded-[2.5rem] shadow-glass-heavy border-white/60 backdrop-blur-2xl hidden md:block">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center text-white`}>
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel">Quality Assurance</p>
                        <p className="text-xl font-bold font-display">Certified OT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="py-40">
        <div className="section-container">
          <GlassCard className="!bg-ios-label !border-ios-label/5 !p-12 md:!p-24 !rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-16 shadow-glass-heavy relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-ios-blue/10 blur-[100px] rounded-full group-hover:bg-ios-blue/20 transition-colors duration-1000" />
            
            <div className="space-y-8 relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <Clock size={14} className="text-ios-blue" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Emergency Protocol</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-5xl md:text-6xl text-white">Need Urgent <br /> <span className="italic font-normal italic-ios">Assistance?</span></h3>
                <p className="text-white/40 text-xl max-w-xl mx-auto lg:mx-0">
                  Our critical response team is on standby for emergency surgeries and trauma stabilisation.
                </p>
              </div>
              <GlassButton className="!bg-white !text-ios-label !px-12 !h-16 text-sm font-bold tracking-widest">
                <PhoneCall size={18} className="mr-2" /> CALL NOW
              </GlassButton>
            </div>

            <div className="grid grid-cols-2 gap-8 relative z-10 w-full lg:w-fit">
              <div className="p-8 glass-premium !bg-white/5 !border-white/10 !rounded-[2.5rem] space-y-2">
                <p className="text-5xl font-display font-bold text-white">12y</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Clinical Legacy</p>
              </div>
              <div className="p-8 glass-premium !bg-white/5 !border-white/10 !rounded-[2.5rem] space-y-2">
                <p className="text-5xl font-display font-bold text-ios-blue">24/7</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Emergency Support</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SEO Footer Text */}
      <footer className="py-20 opacity-40">
        <div className="section-container text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] max-w-3xl mx-auto leading-relaxed">
            Petplanet Dog Clinic - The Best Veterinary Clinic in Hyderabad. Directed by Dr. T Suresh Babu. Specializing in Dog Health, Cat Medicine, and Emergency Canine Surgery. Top-rated Pet Hospital for Vaccinations, Orthopedic Surgery, and Clinical Diagnostics.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default ServicesPage;
