import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import GlassButton from '../components/GlassButton';
import GlassCard from '../components/GlassCard';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const glassRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intial States Cleanup & Reveal Fix - FASTER LOAD
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 0.8 } });

      tl.fromTo('.hero-reveal',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, clearProps: "all" }
      )
        .fromTo(glassRef.current,
          { rotateY: -15, rotateX: 5, scale: 0.95, opacity: 0 },
          { rotateY: 0, rotateX: 0, scale: 1, opacity: 1, duration: 1.2, clearProps: "transform" },
          "-=0.5"
        );

      // Parallax Orbs (Cinematic Depth)
      gsap.to(orb1Ref.current, {
        y: -150,
        x: -50,
        scale: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(orb2Ref.current, {
        y: 250,
        x: 50,
        scale: 1.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      });

      // Floating Effect with magnetic pull setup
      gsap.to(glassRef.current, {
        y: -30,
        rotation: 2,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      // Hero Image Parallax Layer
      gsap.to('.hero-image-parallax', {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        }
      });
      // Magnetic Mouse Interaction
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        
        const moveX = (clientX - center.x) / 40;
        const moveY = (clientY - center.y) / 40;

        gsap.to(glassRef.current, {
          x: moveX * 0.8,
          y: moveY * 0.8,
          rotateY: moveX * 0.5,
          rotateX: -moveY * 0.5,
          duration: 1,
          ease: "power2.out"
        });

        gsap.to('.hero-magnetic', {
          x: moveX * 0.4,
          y: moveY * 0.4,
          stagger: 0.02,
          duration: 0.8,
          ease: "power2.out"
        });
      };

      containerRef.current.addEventListener('mousemove', handleMouseMove);

      return () => {
        containerRef.current?.removeEventListener('mousemove', handleMouseMove);
        ctx.revert();
      };
    }, containerRef);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-ios-bg">
      {/* Dynamic Background Elements */}
      <div ref={orb1Ref} className="hidden" />
      <div ref={orb2Ref} className="hidden" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 bg-ios-blue/5 backdrop-blur-md rounded-full border border-ios-blue/10">
                <Sparkles size={14} className="text-ios-blue" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ios-blue">Dr. Suresh Pet Care Hospital and Surgical Center</span>
              </div>

              <div ref={titleRef} className="space-y-4">
                <h1 className="hero-reveal text-gradient text-6xl md:text-7xl">
                  Best Dog Clinic for <br />
                  <span className="italic font-normal uppercase tracking-tighter">Surgical Excellence.</span>
                </h1>
                <p className="hero-reveal text-luxury text-xl max-w-lg">
                  #1 Professional canine healthcare in Hyderabad with surgical excellence and diagnostic precision. Led by Dr. T Suresh Babu (MVSc).
                </p>
              </div>
            </div>

            <div className="hero-reveal flex flex-wrap gap-6 items-center">
              <GlassButton variant="primary" className="!px-10">
                Book Appointment
                <ArrowRight size={18} />
              </GlassButton>
              <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-ios-blue transition-colors">
                Learn More
                <div className="w-10 h-[1px] bg-ios-label/20 group-hover:w-16 group-hover:bg-ios-blue transition-all" />
              </button>
            </div>

            <div className="hero-reveal flex gap-12 pt-8">
              <div>
                <p className="text-4xl font-bold font-display">4.7</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel mt-1">Justdial Rating</p>
              </div>
              <div className="w-[1px] h-12 bg-ios-label/10" />
              <div>
                <p className="text-4xl font-bold font-display">20+ Years</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel mt-1">Experience</p>
              </div>
            </div>
          </div>

          <div className="relative perspective-1000">
            <div ref={glassRef} className="relative z-10 glass-card-elite aspect-square p-4 flex items-center justify-center">
              <div className="absolute inset-4 rounded-[2rem] overflow-hidden">
                <img
                  src="/images/hero_dog_cinematic_1773573246596.png"
                  alt="Healthy Puppy at Dr. Suresh Pet Care"
                  className="hero-image-parallax w-full h-full object-cover scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute top-12 -left-8 animate-float hero-magnetic">
                <GlassCard className="!p-6 !rounded-[2rem] shadow-glass-heavy border-white/20" hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="bg-ios-blue text-white p-3 rounded-2xl">
                      <Activity size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold leading-none">8k+</p>
                      <p className="text-[10px] font-bold text-ios-secondaryLabel uppercase tracking-widest mt-1">Success Cases</p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="absolute bottom-12 -right-12 delay-1000 animate-float hero-magnetic" style={{ animationDelay: '2s' }}>
                <GlassCard className="!p-6 !rounded-[2rem] shadow-glass-heavy border-white/20" hover={false}>
                  <div className="flex items-center gap-4">
                    <div className="bg-ios-green text-white p-3 rounded-2xl">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Hygiene Gold</p>
                      <p className="text-[9px] font-bold text-ios-secondaryLabel uppercase tracking-widest mt-1">Certified OT</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
