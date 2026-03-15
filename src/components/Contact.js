import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MapPin, Clock, Calendar, MessageSquare, Send } from 'lucide-react';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-animate', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-container" id="contact">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-16">
          <div className="space-y-6">
            <span className="contact-animate text-ios-blue font-bold tracking-[0.3em] uppercase text-[10px] block">Contact & Access</span>
            <h2 className="contact-animate text-gradient text-6xl">Visit Our <br /> <span className="italic font-normal">Clinic.</span></h2>
            <p className="contact-animate text-luxury text-xl max-w-md">
              Our experts are ready to provide professional care for your pet.
            </p>
          </div>

          <div className="grid gap-4">
             {[
               { icon: <Phone />, title: "Clinic Hotline", val: "08867756183", sub: "Emergency Support" },
               { icon: <MapPin />, title: "Clinic Address", val: "Beside Line Of Vivekanandha Park", sub: "Hyderabad, India" },
               { icon: <Clock />, title: "Operating Hours", val: "09:00 AM — 09:00 PM", sub: "Open Daily Including Sundays" }
             ].map((item, i) => (
               <div key={i} className="contact-animate group p-8 glass-premium !rounded-[2rem] border-white/20 bg-white/30 hover:bg-white/60 transition-all duration-700 flex items-center gap-8">
                  <div className="w-14 h-14 bg-ios-blue text-white rounded-[1.2rem] flex items-center justify-center shadow-lg shadow-ios-blue/20 group-hover:scale-110 transition-all duration-700">
                     {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <div>
                     <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ios-secondaryLabel">{item.title}</p>
                     <p className="text-xl font-display font-bold text-ios-label mt-0.5">{item.val}</p>
                     <p className="text-[11px] font-bold text-ios-blue uppercase tracking-widest mt-1 opacity-80">{item.sub}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="relative">
           <div className="contact-animate glass-premium !p-12 !rounded-[3.5rem] border-white/30 bg-white shadow-glass-heavy space-y-10 relative z-10">
              <div className="space-y-2">
                 <h3 className="text-3xl font-display font-bold">Book Appointment</h3>
                 <p className="text-luxury text-sm">Submit your details to book a visit.</p>
              </div>

              <form className="space-y-8">
                 <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel ml-2">Guardian Name</label>
                       <input type="text" className="w-full bg-ios-label/5 border-none rounded-2xl p-5 focus:ring-2 focus:ring-ios-blue transition-all" placeholder="Sarah Johnson" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel ml-2">Phone Signature</label>
                       <input type="tel" className="w-full bg-ios-label/5 border-none rounded-2xl p-5 focus:ring-2 focus:ring-ios-blue transition-all" placeholder="+91 XXXX XXX XXX" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel ml-2">Clinical Concern</label>
                    <textarea className="w-full bg-ios-label/5 border-none rounded-3xl p-6 h-40 focus:ring-2 focus:ring-ios-blue transition-all" placeholder="Describe the medical status or surgical requirement..." />
                 </div>

                 <button className="w-full h-16 bg-ios-blue text-white rounded-[1.2rem] font-display font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-ios-blue/20 hover:bg-blue-600 active:scale-95 transition-all duration-500">
                    Submit Details
                    <Send size={18} />
                 </button>
              </form>
           </div>

           {/* Decorative Orb for depth */}
           <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-ios-blue/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Contact;