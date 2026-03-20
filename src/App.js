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
import CustomCursor from './components/CustomCursor';

// Pages (To be built with Elite Theme)
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DiagnosticsPage from './pages/DiagnosticsPage';
import SurgeriesPage from './pages/SurgeriesPage';
import BranchesPage from './pages/BranchesPage';
import BlogPage from './pages/BlogPage';

gsap.registerPlugin(ScrollTrigger);

function App() {

  React.useLayoutEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Lower value = smoother, more "parallax" buttery feel
      wheelMultiplier: 0.9,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
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
      <CustomCursor />
      <div className="global-grain" />
      <div className="cinematic-vignette" />
      <ScrollToTop />
      <GlassNavbar />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/diagnostics" element={<DiagnosticsPage />} />
          <Route path="/surgeries" element={<SurgeriesPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </AnimatePresence>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
