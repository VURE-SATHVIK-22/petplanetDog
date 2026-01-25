import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  Monitor,
  Zap,
  Search,
  Activity,
  CheckCircle,
  ArrowUpRight,
  Microscope,
  Camera,
  Heart
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Diagnostics = () => {
  const [diagnosticsVisible, setDiagnosticsVisible] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDiagnosticsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Equipment showcase animation
      const equipmentContainer = document.querySelector('.equipment-showcase');
      if (equipmentContainer) {
        gsap.from(equipmentContainer, {
          opacity: 0,
          scale: 0.8,
          rotateY: -15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        });

        equipmentContainer.addEventListener('mouseenter', () => {
          gsap.to(equipmentContainer, {
            rotationY: 5,
            rotationX: 2,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        equipmentContainer.addEventListener('mouseleave', () => {
          gsap.to(equipmentContainer, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      }

      // Technology list animation
      const techItems = document.querySelectorAll('.tech-item');
      if (techItems.length > 0) {
        gsap.from(techItems, {
          opacity: 0,
          x: -50,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Stats animation
      const statsCards = document.querySelectorAll('.stats-card');
      if (statsCards.length > 0) {
        gsap.from(statsCards, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom 80%",
            toggleActions: "play none none reverse"
          }
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technologies = [
    {
      icon: Monitor,
      title: 'Digital X-Ray',
      description: 'High-resolution digital radiography for immediate, detailed imaging with reduced radiation exposure and instant results for faster diagnosis.'
    },
    {
      icon: Activity,
      title: 'Ultrasound',
      description: 'Real-time ultrasound imaging for comprehensive soft tissue examination and advanced cardiac assessment capabilities with 3D visualization.'
    },
    {
      icon: Microscope,
      title: 'Laboratory Testing',
      description: 'In-house blood chemistry, hematology, and urinalysis with rapid, accurate results for immediate diagnosis and treatment planning.'
    },
    {
      icon: Zap,
      title: 'ECG Monitoring',
      description: 'Advanced cardiac monitoring and arrhythmia detection for comprehensive heart health assessment and continuous monitoring capabilities.'
    }
  ];

  const stats = [
    { value: '< 30', unit: 'min', label: 'Average Diagnosis Time', gradient: 'from-blue-500 to-cyan-500' },
    { value: '99.2', unit: '%', label: 'Diagnostic Accuracy', gradient: 'from-green-500 to-emerald-500' },
    { value: '24/7', unit: '', label: 'Emergency Diagnostics', gradient: 'from-purple-500 to-violet-500' }
  ];

  // Split text into characters for animation
  const splitTextIntoChars = (text, className) => {
    return text.split('').map((char, index) => (
      <span key={index} className={`${className} inline-block`}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  // Split text into words for animation
  const splitTextIntoWords = (text, className) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className={`${className} inline-block mr-2`}>
        {word}
      </span>
    ));
  };

  return (
    <section id="diagnostics" ref={sectionRef} className="relative section-padding bg-gradient-to-b from-cream-50 via-white to-cream-50 overflow-hidden">
      {/* Wave Animation Overlay */}
      <div
        className="absolute inset-0 bg-white transition-all duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none z-10"
        style={{
          clipPath: diagnosticsVisible
            ? 'ellipse(150% 100% at 50% 100%)'
            : 'ellipse(150% 100% at 50% -10%)',
          opacity: diagnosticsVisible ? 0 : 1
        }}
      ></div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="diagnostics-floating animate-parallax absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-forest-300 to-gold-300 rounded-full blur-3xl" data-speed="0.1"></div>
        <div className="diagnostics-floating animate-parallax absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-brown-300 to-cream-400 rounded-full blur-2xl" data-speed="0.2"></div>
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-20 animate-stagger">
          <span className="inline-block px-8 py-4 bg-forest-100/80 backdrop-blur-sm text-forest-700 rounded-full text-sm font-semibold uppercase tracking-[0.3em] mb-8 border border-forest-200/50 animate-fade-up">
            Advanced Technology
          </span>

          <h2 className="mb-8 font-display animate-fade-up">
            <div className="text-display-md md:text-display-lg lg:text-display-xl text-brown-900 mb-4">
              State-of-the-Art
            </div>
            <div className="text-display-md md:text-display-lg lg:text-display-xl gradient-text">
              Diagnostic Equipment
            </div>
          </h2>

          <p className="text-xl md:text-2xl lg:text-3xl text-brown-600 max-w-5xl mx-auto leading-relaxed font-normal animate-fade-up">
            Our cutting-edge diagnostic technology enables precise, rapid diagnosis for better treatment outcomes and complete peace of mind.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Left Side - Equipment Visual (5 columns) */}
          <div className="lg:col-span-5 relative animate-scale-in">
            <div className="equipment-showcase relative bg-gradient-to-br from-white to-cream-100 rounded-3xl p-8 shadow-2xl border border-cream-200/50 overflow-hidden cursor-pointer">
              {/* Main Equipment Display */}
              <div className="aspect-video bg-gradient-to-br from-brown-100 via-gold-100 to-cream-200 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="text-center relative z-10">
                  <Monitor className="w-24 h-24 text-brown-600 mx-auto mb-4 animate-pulse" />
                  <p className="text-brown-800 font-bold text-xl">Advanced Imaging Suite</p>
                  <p className="text-brown-600 text-sm">Real-time Diagnostics</p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gold-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-forest-400 rounded-full opacity-60 animate-pulse"></div>
              </div>

              {/* Equipment Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-4 text-center group cursor-pointer border border-gold-200/50 hover:scale-105 transition-transform duration-300">
                  <Camera className="w-8 h-8 text-gold-600 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-sm font-bold text-brown-800">Digital Imaging</p>
                </div>
                <div className="bg-gradient-to-br from-forest-50 to-forest-100 rounded-xl p-4 text-center group cursor-pointer border border-forest-200/50 hover:scale-105 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-forest-600 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-sm font-bold text-brown-800">Instant Results</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-gold-500 to-brown-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl z-10 animate-bounce">
              Latest Technology 2024
            </div>
          </div>

          {/* Right Side - Content (7 columns) */}
          <div className="lg:col-span-7 space-y-8 animate-stagger">
            <div className="mb-8 animate-fade-up">
              <h3 className="text-heading-lg md:text-heading-xl lg:text-display-sm font-heading text-brown-900 mb-6">
                Precision Diagnostics for Accurate Treatment
              </h3>
              <p className="text-xl md:text-2xl text-brown-600 leading-relaxed font-light">
                Our investment in cutting-edge diagnostic equipment ensures we can
                quickly and accurately identify health issues, leading to more
                effective treatments and better outcomes for your pet.
              </p>
            </div>

            {/* Technology List */}
            <div className="space-y-6 animate-stagger">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="tech-item group flex items-start space-x-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-cream-200/50 cursor-pointer animate-fade-up"
                  >
                    <div className="flex-shrink-0">
                      <div className="tech-icon w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center group-hover:from-gold-200 group-hover:to-gold-300 transition-all duration-300 shadow-md border border-gold-200/50">
                        <IconComponent className="w-8 h-8 text-gold-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                        {tech.title}
                      </h4>
                      <p className="text-brown-600 leading-relaxed font-light">
                        {tech.description}
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-forest-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-brown-600 hover:from-gold-400 hover:to-brown-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-up">
              <span className="relative z-10 flex items-center space-x-3">
                <Search className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Schedule Diagnostic Exam</span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-card group relative text-center bg-gradient-to-br from-white to-cream-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-cream-200/50 overflow-hidden cursor-pointer hover:-translate-y-4 animate-fade-up"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <Heart className="w-8 h-8 text-white" />
              </div>

              {/* Stats */}
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors duration-300 tracking-tight">
                  {stat.value}
                  <span className="text-3xl text-gold-600">{stat.unit}</span>
                </div>
                <div className="text-brown-600 font-semibold uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diagnostics;