import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Calendar, Phone, Heart, ArrowRight, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CallToAction = () => {
  const [ctaVisible, setCtaVisible] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCtaVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements animation
      gsap.to('.cta-floating', {
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        rotation: [0, 180, 360],
        duration: 8,
        ease: "power1.inOut",
        repeat: -1,
        stagger: 2
      });

      // Button hover effects
      const ctaButtons = document.querySelectorAll('.cta-button');
      ctaButtons.forEach((button, index) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            y: -8,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Contact cards hover effects
      const contactCards = document.querySelectorAll('.contact-card');
      contactCards.forEach((card, index) => {
        const icon = card.querySelector('.contact-icon');

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 10,
              duration: 0.3,
              ease: "back.out(1.7)"
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-sand-100 curved-section section-with-curve overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000" 
          alt="Modern Canine Clinic" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-sand-100/90 to-white/95"></div>
      </div>

      {/* Wave Animation Overlay */}
      <div
        className="absolute inset-0 bg-cinematic-bg transition-all duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none z-10"
        style={{
          clipPath: ctaVisible
            ? 'ellipse(150% 100% at 50% 100%)'
            : 'ellipse(150% 100% at 50% -10%)',
          opacity: ctaVisible ? 0 : 1
        }}
      ></div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="cta-floating absolute top-20 left-20 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"></div>
        <div className="cta-floating absolute bottom-20 right-20 w-48 h-48 bg-cream-400/10 rounded-full blur-2xl"></div>
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center animate-stagger">
          {/* Main Content */}
          <div className="mb-16 animate-fade-up">
            <div className="inline-flex items-center space-x-3 bg-white/40 backdrop-blur-md border border-slate-200 rounded-full px-6 py-3 mb-10 shadow-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="Specialist" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-slate-600 font-bold text-[10px] uppercase tracking-[0.4em]">
                Uncompromising Canine Care
              </span>
            </div>

            <h2 className="mb-8 font-display">
              <div className="text-5xl md:text-7xl lg:text-9xl text-slate-900 leading-[0.85] tracking-tighter uppercase italic font-black">
                Precision
              </div>
              <div className="text-5xl md:text-7xl lg:text-9xl text-gold-500 leading-[0.85] tracking-tighter uppercase font-black">
                Healing
              </div>
            </h2>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
              Experience the future of veterinary medicine. Where advanced molecular diagnostics meets 
              unwavering devotion to your dog's longevity.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-up">
            <button className="cta-button group relative overflow-hidden bg-slate-900 text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl transition-all duration-300 hover:bg-gold-500">
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <Calendar className="w-4 h-4" />
                <span>Initialize Consult</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="cta-button group bg-white border border-slate-200 text-slate-900 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest shadow-xl transition-all duration-300 hover:border-gold-500 hover:text-gold-500">
              <span className="flex items-center justify-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>Rapid Response</span>
              </span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Phone, label: 'Secure Line', value: '(555) 123-PAWS', sub: '24/7 Clinical Support', color: 'gold' },
              { icon: MapPin, label: 'Location', value: '123 Pet Care Lane', sub: 'Precision Center', color: 'slate' },
              { icon: Heart, label: 'Network', value: '@PetPlanetClinic', sub: 'Global Community', color: 'gold' }
            ].map((item, idx) => (
              <div key={idx} className="contact-card group relative p-10 rounded-3xl bg-white border border-slate-100 hover:border-gold-500/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-20 h-20 text-slate-900" />
                </div>
                <div className="relative z-10 text-left">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:border-gold-500/50 transition-colors">
                    <item.icon className={`contact-icon w-6 h-6 ${item.color === 'gold' ? 'text-gold-500' : 'text-slate-400'}`} />
                  </div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">{item.label}</h3>
                  <p className="text-2xl font-bold text-slate-900 tracking-tight mb-1">{item.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-12 pt-8 border-t border-slate-100 animate-fade-up">
            <p className="text-slate-600 text-lg">
              <span className="font-semibold text-gold-600">New clients receive 20% off</span> their first comprehensive exam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;