import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertCircle,
  Send,
  Heart,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [contactVisible, setContactVisible] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContactVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    ownerName: '',
    petName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    isEmergency: false
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      // Animate form and contact info on scroll
      const formSection = contentRef.current.querySelector('.contact-form');
      const infoSection = contentRef.current.querySelector('.contact-info');

      gsap.set([formSection, infoSection], {
        opacity: 0,
        y: 60
      });

      gsap.to([formSection, infoSection], {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

    }, contentRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setFormStatus({
        type: 'success',
        message: formData.isEmergency
          ? 'Emergency request received! We will contact you immediately.'
          : 'Thank you! We will contact you within 24 hours to schedule your appointment.'
      });

      // Reset form
      setFormData({
        ownerName: '',
        petName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
        isEmergency: false
      });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    'Wellness Exam',
    'Vaccinations',
    'Dental Care',
    'Surgery',
    'Emergency Care',
    'Grooming',
    'Boarding',
    'Other'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'Vanasthalipuram,',
        'Hyderabad, Telangana',
        'India'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Main: (555) 123-PETS',
        'Emergency: (555) 911-HELP'
      ],
      whatsapp: "919876543210"
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@pawperfectclinic.com',
        'emergency@pawperfectclinic.com'
      ]
    },
    {
      icon: Clock,
      title: 'Hours',
      details: [
        'Mon-Fri: 8:00 AM - 7:00 PM',
        'Saturday: 9:00 AM - 5:00 PM',
        'Sunday: 10:00 AM - 4:00 PM'
      ]
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2000" 
          alt="Clinical Consultation" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sand-50/90 to-sand-100/95"></div>
      </div>

      {/* Wave Animation Overlay */}
      <div
        className="absolute inset-0 bg-cinematic-bg transition-all duration-[2500ms] ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none z-10"
        style={{
          clipPath: contactVisible
            ? 'ellipse(150% 100% at 50% 100%)'
            : 'ellipse(150% 100% at 50% -10%)',
          opacity: contactVisible ? 0 : 1
        }}
      ></div>

      <div ref={contentRef} className="max-w-7xl mx-auto px-6 relative z-20">

        {/* Section Header */}
        <div className="text-center mb-24 animate-stagger">
          <div className="inline-block mb-10 animate-fade-up">
            <span className="inline-flex items-center px-8 py-3 bg-slate-50 text-gold-600 rounded-full text-[10px] font-black uppercase tracking-[0.5em] border border-slate-100 shadow-sm">
              <Heart className="w-4 h-4 mr-3 text-gold-500" />
              Initialize Protocol
            </span>
          </div>

            <h2 className="font-display mb-10 animate-fade-up">
              <div className="text-4xl md:text-6xl lg:text-8xl text-slate-900 leading-tight tracking-tight font-bold">
                Veterinary Clinic in
              </div>
              <div className="text-4xl md:text-6xl lg:text-8xl text-gold-500 leading-tight tracking-tight font-bold">
                Vanasthalipuram
              </div>
            </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light animate-fade-up">
            Begin your dog's journey to optimal health. Our specialists are prepared for 
            immediate clinical engagement and personalized care strategies.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 animate-stagger items-start">

          {/* Contact Form */}
          <div className="contact-form animate-fade-up order-2 lg:order-1">
            <div className="bg-white rounded-[40px] p-10 lg:p-14 border border-slate-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
              
              <h3 className="text-3xl font-bold text-slate-900 mb-12 flex items-center">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mr-6 border border-slate-100">
                  <Send className="w-6 h-6 text-gold-500" />
                </div>
                Clinical Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="form-field">
                    <label className="block text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1">Owner Identity</label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-50 text-slate-900 border border-slate-100 rounded-2xl focus:outline-none focus:border-gold-500/50 focus:bg-white transition-all duration-300 placeholder-slate-300"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="block text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1">Patient Name</label>
                    <input
                      type="text"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-50 text-slate-900 border border-slate-100 rounded-2xl focus:outline-none focus:border-gold-500/50 focus:bg-white transition-all duration-300 placeholder-slate-300"
                      placeholder="Breed / Name"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="form-field">
                    <label className="block text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1">Communication Channel</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-50 text-slate-900 border border-slate-100 rounded-2xl focus:outline-none focus:border-gold-500/50 focus:bg-white transition-all duration-300 placeholder-slate-300"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="block text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1">Direct Line</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-50 text-slate-900 border border-slate-100 rounded-2xl focus:outline-none focus:border-gold-500/50 focus:bg-white transition-all duration-300 placeholder-slate-300"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div className="form-field">
                  <label className="block text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1">Service Protocol</label>
                  <div className="relative">
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-6 py-5 bg-slate-50 text-slate-900 border border-slate-100 rounded-2xl focus:outline-none focus:border-gold-500/50 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="bg-white">Identify Service Need</option>
                      {serviceTypes.map(service => (
                        <option key={service} value={service} className="bg-white">
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-gold-500 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="form-field">
                  <label className="block text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 ml-1">Clinical Context</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-6 py-5 bg-slate-50 text-slate-900 border border-slate-100 rounded-2xl focus:outline-none focus:border-gold-500/50 focus:bg-white transition-all duration-300 resize-none placeholder-slate-300"
                    placeholder="Provide details regarding the clinical requirement..."
                  />
                </div>

                {/* Emergency Checkbox */}
                <div className="flex items-center space-x-4 p-6 bg-red-50 rounded-2xl border border-red-100 group cursor-pointer hover:bg-red-100 transition-colors">
                  <input
                    type="checkbox"
                    name="isEmergency"
                    id="isEmergency"
                    checked={formData.isEmergency}
                    onChange={handleInputChange}
                    className="w-6 h-6 text-red-600 bg-white border-slate-200 rounded-lg focus:ring-red-500 cursor-pointer"
                  />
                  <label htmlFor="isEmergency" className="text-slate-900 text-xs flex items-center cursor-pointer font-bold uppercase tracking-widest">
                    <AlertCircle className="w-5 h-5 mr-3 text-red-500" />
                    Priority Clinical Intervention Required
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-6 px-10 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center space-x-4 shadow-2xl ${formData.isEmergency
                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-100'
                    : 'bg-slate-900 hover:bg-gold-500 text-white shadow-slate-100'
                    } disabled:opacity-50 disabled:cursor-not-allowed group`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>{formData.isEmergency ? 'Execute Emergency Protocol' : 'Transmit Inquiry'}</span>
                    </>
                  )
                  }
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info animate-fade-up order-1 lg:order-2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-[32px] p-8 border border-slate-100 hover:border-gold-500/30 transition-all duration-500 group cursor-pointer flex items-center space-x-8 shadow-sm hover:shadow-xl"
                  >
                    <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-slate-100 group-hover:border-gold-500/50">
                      <IconComponent className="w-8 h-8 text-gold-500 group-hover:text-gold-600 transition-colors" />
                    </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-slate-900 text-xl font-bold tracking-tight leading-tight">
                              {detail}
                            </p>
                          ))}
                        </div>
                        {info.whatsapp && (
                          <a 
                            href={`https://wa.me/${info.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-3 text-[#25D366] hover:text-[#128C7E] transition-colors group/wa"
                          >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="text-sm font-bold tracking-widest uppercase group-hover/wa:translate-x-1 transition-transform">WhatsApp Chat</span>
                          </a>
                        )}
                      </div>
                  </div>
                );
              })}

              {/* Advanced Support Card */}
              <div className="bg-slate-900 rounded-[32px] p-10 relative overflow-hidden group hover:bg-slate-800 transition-all duration-500 shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Heart className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-gold-500 animate-pulse fill-gold-500/20" />
                  </div>
                  <h4 className="text-2xl font-display text-white mb-3 uppercase tracking-tighter">Concierge 24/7</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Uninterrupted clinical oversight for your canine companion. 
                    Immediate expert response available across all global clinical nodes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;