import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Stethoscope, 
  Scissors, 
  Syringe,
  Calendar,
  ArrowUpRight,
  CheckCircle,
  Clock
} from 'lucide-react';
import { 
  usePinnedSection, 
  useCaseStudyAnimation, 
  useHoverMicroInteractions,
  useSectionTransition 
} from '../hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = ({ service, index = 0, nextSectionRef }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);

  // Apply hooks with proper indexing to avoid conflicts
  usePinnedSection(sectionRef, imageRef, contentRef, index);
  useCaseStudyAnimation(contentRef);
  useHoverMicroInteractions(buttonRef);
  useSectionTransition(sectionRef, nextSectionRef, index);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center bg-gradient-to-br from-cream-50 to-white relative overflow-hidden"
      style={{ zIndex: 10 - index }} // Proper stacking order
    >
      {/* Refined Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-gold-300 to-brown-300 rounded-full blur-3xl"
          style={{
            top: `${20 + index * 10}%`,
            right: `${20 - index * 5}%`,
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-forest-300 to-cream-400 rounded-full blur-2xl"
          style={{
            bottom: `${20 + index * 8}%`,
            left: `${20 + index * 7}%`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Side - Pinned Image */}
        <div className="relative">
          <div 
            ref={imageRef}
            className="aspect-[4/3] bg-gradient-to-br from-cream-200 via-gold-200 to-brown-200 rounded-3xl overflow-hidden shadow-2xl relative will-change-transform"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <service.icon className="w-24 h-24 text-brown-600 mx-auto mb-6" />
                <div className="text-8xl mb-4">{service.emoji}</div>
                <p className="text-brown-800 font-bold text-xl font-heading">{service.imageTitle}</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-gold-500 to-brown-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
              {service.badge}
            </div>

            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side - Scrolling Content */}
        <div ref={contentRef} className="space-y-10">
          {/* Tag */}
          <div className="animate-element case-tag">
            <span className="inline-block px-8 py-4 bg-forest-100/90 backdrop-blur-sm text-forest-700 rounded-full text-sm font-semibold uppercase tracking-[0.3em] border border-forest-200/50 shadow-sm">
              {service.tag}
            </span>
          </div>

          {/* Title */}
          <h2 className="animate-element case-title font-display text-display-md md:text-display-lg text-brown-900 leading-tight">
            {service.title}
          </h2>

          {/* Subtitle */}
          <p className="animate-element case-subtitle text-xl md:text-2xl text-brown-600 leading-relaxed font-normal max-w-2xl">
            {service.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              ref={buttonRef}
              className="animate-element case-button group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center space-x-3 will-change-transform"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Book Service</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>
            
            <button className="animate-element case-button group border-2 border-brown-900 text-brown-900 hover:text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-500 relative overflow-hidden flex items-center justify-center space-x-3">
              <div className="absolute inset-0 bg-brown-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <span className="relative z-10">Learn More</span>
            </button>
          </div>

          {/* Tech Stack / Features */}
          <div className="space-y-6">
            <h4 className="animate-element text-xl font-semibold text-brown-800 font-heading">What's Included:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="animate-element tech-item flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-cream-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-forest-500 flex-shrink-0" />
                  <span className="text-brown-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="animate-element case-timeline bg-gradient-to-r from-brown-50 to-gold-50 rounded-2xl p-8 border border-brown-200/30 shadow-sm">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-brown-600 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-semibold text-brown-800 text-lg font-heading">Service Duration</h5>
                <p className="text-brown-600 text-lg">{service.duration}</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-3 gap-6">
            {service.results.map((result, idx) => (
              <div key={idx} className="animate-element case-result text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-cream-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-brown-900 mb-2 font-display">{result.value}</div>
                <div className="text-sm text-brown-600 font-medium uppercase tracking-wide">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PremiumServices = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const services = [
    {
      icon: Stethoscope,
      emoji: "🔬",
      tag: "Premium Care",
      title: "Advanced Diagnosis & Treatment",
      description: "State-of-the-art diagnostic equipment and expert veterinary care for comprehensive health assessment and treatment planning.",
      imageTitle: "Diagnostic Excellence",
      badge: "Latest Tech",
      duration: "45-90 minutes",
      features: [
        "Digital X-Ray Imaging",
        "Blood Chemistry Analysis", 
        "Ultrasound Examination",
        "ECG Monitoring",
        "Comprehensive Report",
        "Treatment Planning"
      ],
      results: [
        { value: "99.2%", label: "Accuracy" },
        { value: "< 30min", label: "Results" },
        { value: "24/7", label: "Available" }
      ]
    },
    {
      icon: Scissors,
      emoji: "✨",
      tag: "Luxury Spa",
      title: "Grooming & Spa Care",
      description: "Premium grooming services combining hygiene maintenance with relaxation and stress-free handling for your pet's complete wellbeing.",
      imageTitle: "Spa Experience",
      badge: "Luxury Care",
      duration: "60-120 minutes",
      features: [
        "Full Body Grooming",
        "Nail Trimming & Filing",
        "Ear Cleaning",
        "Aromatherapy Bath",
        "Stress-Free Environment",
        "Premium Products"
      ],
      results: [
        { value: "100%", label: "Satisfaction" },
        { value: "2hrs", label: "Spa Time" },
        { value: "5★", label: "Rating" }
      ]
    },
    {
      icon: Syringe,
      emoji: "🛡️",
      tag: "Prevention First",
      title: "Vaccinations & Preventive Care",
      description: "Comprehensive vaccination programs and preventive care protocols tailored to your dog's lifestyle and risk factors for optimal protection.",
      imageTitle: "Health Protection",
      badge: "Prevention",
      duration: "30-45 minutes",
      features: [
        "Core Vaccinations",
        "Lifestyle Vaccines",
        "Parasite Prevention",
        "Health Screening",
        "Wellness Planning",
        "Follow-up Care"
      ],
      results: [
        { value: "98%", label: "Protection" },
        { value: "1 Year", label: "Coverage" },
        { value: "Safe", label: "Process" }
      ]
    }
  ];

  return (
    <div className="premium-services relative">
      <ServiceSection 
        ref={section1Ref}
        service={services[0]} 
        index={0} 
        nextSectionRef={section2Ref}
      />
      <ServiceSection 
        ref={section2Ref}
        service={services[1]} 
        index={1} 
        nextSectionRef={section3Ref}
      />
      <ServiceSection 
        ref={section3Ref}
        service={services[2]} 
        index={2} 
        nextSectionRef={null}
      />
    </div>
  );
};

export default PremiumServices;