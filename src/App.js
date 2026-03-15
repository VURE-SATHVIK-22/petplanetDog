import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import GlassNavbar from './components/GlassNavbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Pages (To be built with Elite Theme)
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DiagnosticsPage from './pages/DiagnosticsPage';
import SurgeriesPage from './pages/SurgeriesPage';
// import BlogPage from './pages/BlogPage';

gsap.registerPlugin(ScrollTrigger);

function App() {

  React.useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger on layout shifts (Safely)
    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    });
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-ios-bg text-ios-label min-h-screen">
      <div className="global-grain" />
      <ScrollToTop />
      <GlassNavbar />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/surgeries" element={<SurgeriesPage />} />
        </Routes>
      </AnimatePresence>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
