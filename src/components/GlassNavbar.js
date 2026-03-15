import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PawPrint, ChevronRight } from 'lucide-react';

const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Surgeries', path: '/surgeries' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ease-expo-in-out ${isScrolled ? 'py-4 px-6' : 'py-8 px-10'}`}>
      <div className={`mx-auto transition-all duration-1000 ease-expo-in-out ${isScrolled ? 'max-w-5xl' : 'max-w-screen-2xl'}`}>
        <div className={`glass-premium rounded-full px-8 py-3 flex items-center justify-between transition-all duration-1000 border-white/20 hover:border-white/40 ${isScrolled ? 'shadow-glass-heavy bg-white/60' : 'bg-white/30'}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none tracking-tight">Petplanet</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-ios-secondaryLabel font-bold opacity-80 mt-0.5">Dog Clinic</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative group ${
                  location.pathname === link.path ? 'text-ios-blue' : 'text-ios-label/70 hover:text-ios-label'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-ios-blue rounded-full" />
                )}
              </Link>
            ))}
            <div className="w-[1px] h-6 bg-ios-label/10 mx-4" />
            <a
              href="tel:08867756183"
              className="glass-button-primary !px-7 !py-2.5 !text-[11px] !tracking-[0.15em] flex items-center gap-2"
            >
              Emergency Call
              <ChevronRight size={14} className="opacity-60" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-ios-blue/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 mx-6 glass-premium rounded-[2.5rem] p-10 flex flex-col gap-8 shadow-glass-heavy border-white/30 animate-fade-in origin-top">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-4xl font-display font-bold tracking-tight ${
                location.pathname === link.path ? 'text-ios-blue' : 'text-ios-label'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-[1px] bg-ios-label/10 w-full" />
          <a
            href="tel:08867756183"
            className="glass-button-primary w-full text-center"
          >
            Sanctuary Hotline
          </a>
        </div>
      )}
    </nav>
  );
};

export default GlassNavbar;
