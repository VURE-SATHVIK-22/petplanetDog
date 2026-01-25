import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  AlertCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock
} from 'lucide-react';
// Removed unused import

const Footer = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Social icons hover animation
      const socialIcons = document.querySelectorAll('.social-icon');
      socialIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            y: -5,
            rotation: 10,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });

        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Footer links hover animation
      const footerLinks = document.querySelectorAll('.footer-link');
      footerLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
          gsap.to(link, {
            x: 5,
            duration: 0.2,
            ease: "power2.out"
          });
        });

        link.addEventListener('mouseleave', () => {
          gsap.to(link, {
            x: 0,
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });

      // Emergency button pulse animation
      gsap.to('.emergency-button', {
        scale: 1.02,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
    'FAQ'
  ];

  const services = [
    'General Checkups',
    'Vaccinations',
    'Surgery',
    'Preventive Care',
    'Grooming',
    'Emergency Care'
  ];

  return (
    <footer ref={sectionRef} className="bg-gradient-to-br from-charcoal-900 via-brown-900 to-charcoal-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-forest-400 rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Clinic Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold leading-none text-white tracking-tight">Dr. T Suresh Babu</span>
                    <span className="text-sm font-medium text-gold-500 leading-none mt-1">Veterinary Sanctuary</span>
                  </div>
              </div>

              <p className="text-sand-300 text-sm leading-relaxed">
                Where Your Dog's Health Comes First. Providing exceptional veterinary care with compassion and expertise since 2008.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="footer-link flex items-center space-x-3 group cursor-pointer">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sand-100 text-sm group-hover:text-white transition-colors duration-200">
                    Vanasthalipuram, Hyderabad, Telangana, India
                  </span>
                </div>
                <div className="footer-link flex items-center space-x-3 group cursor-pointer">
                  <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sand-100 text-sm group-hover:text-white transition-colors duration-200">
                    (555) 123-PAWS
                  </span>
                </div>
                <div className="footer-link flex items-center space-x-3 group cursor-pointer">
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sand-100 text-sm group-hover:text-white transition-colors duration-200">
                    hello@petplanetclinic.com
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold-300">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button className="footer-link text-sand-300 hover:text-gold-300 text-sm transition-colors duration-200 text-left group flex items-center space-x-2">
                      <span>{link}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold-300">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="footer-link text-sand-300 hover:text-gold-300 text-sm transition-colors duration-200 text-left group flex items-center space-x-2">
                      <span>{service}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Hours & Emergency */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gold-300">Clinic Hours</h3>

              {/* Hours */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-sand-300 flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Mon - Fri:</span>
                  </span>
                  <span className="text-sand-100 font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-sand-300 flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Sat - Sun:</span>
                  </span>
                  <span className="text-sand-100 font-medium">9:00 AM - 6:00 PM</span>
                </div>
              </div>

              {/* Emergency Button */}
              <div className="mb-6">
                <button className="emergency-button block w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-3 rounded-xl font-semibold text-sm text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Emergency Care 24/7</span>
                  </div>
                </button>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-sand-100">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-charcoal-800 text-white px-3 py-2 rounded-l-lg text-sm border border-charcoal-700 focus:outline-none focus:border-gold-500 transition-colors duration-200"
                  />
                  <button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 px-3 py-2 rounded-r-lg transition-colors duration-200 hover:scale-105">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-700 relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-sm text-sand-400">
                © 2024 Pet Planet Veterinary Clinic. All rights reserved.
              </div>

                {/* Social Icons */}
                <div className="flex items-center space-x-4">
                  {[
                    { Icon: Facebook, color: 'hover:text-blue-500' },
                    { Icon: Instagram, color: 'hover:text-pink-500' },
                    { Icon: Twitter, color: 'hover:text-blue-400' },
                    { Icon: Linkedin, color: 'hover:text-blue-700' },
                    { 
                      Icon: () => (
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      ), 
                      color: 'hover:text-[#25D366]' 
                    }
                  ].map(({ Icon, color }, index) => (
                    <button
                      key={index}
                      className="social-icon w-10 h-10 bg-charcoal-800 hover:bg-charcoal-700 rounded-full flex items-center justify-center transition-colors duration-200 group"
                    >
                      <div className={`text-sand-400 transition-colors duration-200 ${color}`}>
                        <Icon />
                      </div>
                    </button>
                  ))}
                </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm text-sand-400">
              <button className="footer-link hover:text-gold-300 transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="footer-link hover:text-gold-300 transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;