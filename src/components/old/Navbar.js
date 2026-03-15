import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle Scroll State
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial Entry Animation
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    const ctx = gsap.context(() => {
      gsap.set([logoRef.current, ctaRef.current], { autoAlpha: 1, y: 0, scale: 1 });
      if (linksRef.current) {
        gsap.set(linksRef.current.children, { autoAlpha: 1, y: 0 });
      }

      if (!hasVisited) {
        const tl = gsap.timeline({
          delay: 0.5,
          onComplete: () => sessionStorage.setItem('hasVisited', 'true')
        });

        tl.from(logoRef.current, {
          y: -50,
          autoAlpha: 0,
          duration: 0.8,
          ease: "expo.out"
        })
          .from(linksRef.current?.children || [], {
            y: -30,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "expo.out"
          }, "-=0.4")
          .from(ctaRef.current, {
            y: -30,
            autoAlpha: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "back.out(1.7)"
          }, "-=0.3");
      }
    }, navRef);

    return () => ctx.revert();
  }, []);

    // Scroll Style Animation
    useEffect(() => {
      const ctx = gsap.context(() => {
        if (isScrolled) {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
            height: "5.5rem",
            duration: 0.5,
            ease: "expo.out"
          });
        } else {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0)",
            backdropFilter: "blur(0px) saturate(100%)",
            WebkitBackdropFilter: "blur(0px) saturate(100%)",
            borderBottom: "1px solid transparent",
            boxShadow: "none",
            height: "7rem",
            duration: 0.5,
            ease: "expo.out"
          });
        }
      }, navRef);

    return () => ctx.revert();
  }, [isScrolled]);

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About', href: '/about', type: 'link' },
    { name: 'Services', href: '/services', type: 'link' },
    { name: 'Diagnostics', href: '/diagnostics', type: 'link' },
    { name: 'Blog', href: '/blog', type: 'link' },
  ];

  const handleLinkClick = (item) => {
    setIsMobileMenuOpen(false);

    if (item.type === 'link') {
      navigate(item.href);
      if (item.href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Scroll type
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector('#reviews');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        const element = document.querySelector('#reviews');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[999] transition-all duration-300"
      style={{ height: '7rem' }}
    >
      <nav className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
            <div
              ref={logoRef}
              className="flex items-center cursor-pointer group"
              onClick={() => handleLinkClick({ type: 'link', href: '/' })}
            >
              <div className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl font-bold text-slate-900 leading-none tracking-tight group-hover:text-gold-500 transition-colors duration-300">Dr. T Suresh Babu</span>
                <span className="text-[9px] font-bold text-gold-500 leading-none tracking-[0.3em] uppercase mt-2">Veterinary Clinic · Vanasthalipuram</span>
              </div>
            </div>

          <div ref={linksRef} className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item)}
                  className={`font-display text-[11px] tracking-[0.25em] uppercase transition-all duration-300 relative group ${isActive(item.href) ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                    }`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-gold-500 transition-all duration-500 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </button>
            ))}
          </div>

          <div ref={ctaRef} className="hidden lg:block">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-display text-[11px] tracking-[0.2em] uppercase flex items-center space-x-3 transition-all duration-500 shadow-xl hover:bg-gold-500 hover:text-white hover:scale-105">
              <Phone className="w-4 h-4" />
              <span>Concierge 24/7</span>
            </button>
          </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-900"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[1000] lg:hidden transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[1001] lg:hidden transform transition-transform duration-500 ease-expo-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} p-8 flex flex-col`}
        style={{ background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(32px) saturate(180%)', WebkitBackdropFilter: 'blur(32px) saturate(180%)', borderLeft: '1px solid rgba(255,255,255,0.5)' }}
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold text-slate-900 leading-none">Dr. T Suresh Babu</span>
            <span className="text-[8px] font-bold text-gold-500 tracking-[0.2em] uppercase mt-1">Veterinary Clinic · Vanasthalipuram</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-900 hover:rotate-90 transition-transform duration-300">
            <X className="w-8 h-8" />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleLinkClick(item)}
              className={`text-left font-display text-4xl font-bold uppercase tracking-tighter transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} ${isActive(item.href) ? 'text-gold-500' : 'text-slate-900 hover:text-gold-500'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        <div className={`mt-auto space-y-6 transition-all duration-500 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="p-6 bg-white/50 rounded-3xl border border-gold-500/10">
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-4 text-center">Clinical Support</p>
              <div className="flex flex-col space-y-4">
                <a href="tel:+91XXXXXXXXXX" className="flex items-center justify-center space-x-3 text-slate-900 group">
                  <Phone className="w-5 h-5 text-gold-500 group-hover:scale-110 transition-transform" />
                  <span className="font-display text-lg font-bold">Call Us</span>
                </a>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center space-x-3 text-[#25D366] group"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="font-display text-lg font-bold">WhatsApp Chat</span>
                </a>
              </div>
            </div>
          <button className="w-full bg-slate-900 text-white py-6 rounded-full font-display text-sm font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors shadow-xl">
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
