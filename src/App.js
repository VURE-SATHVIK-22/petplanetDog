import { useEffect, useRef, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './pages/About';
import Services from './components/Services';
import ServicesPage from './pages/Services';
import DiagnosticsPage from './pages/Diagnostics';
import BlogPage from './pages/Blog';
import SuccessStories from './components/SuccessStories';
import BlogHighlight from './components/BlogHighlight';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import WhatsAppButton from './components/WhatsAppButton';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  const mainRef = useRef(null);

  return (
    <main ref={mainRef} className="relative">
      <Hero />
      <About />
      <Achievements />
      <Services />
      <SuccessStories />
      <BlogHighlight />
      <CallToAction />
      <Contact />
    </main>
  );
}

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out'
      });
    };

    const handlePointerOver = (e) => {
      if (e.target.closest('button, a, .cursor-pointer')) {
        cursor.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handlePointerOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handlePointerOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden lg:block" />;
}

function App() {
    useLayoutEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      lenis.on('scroll', ScrollTrigger.update);

      // Remove gsap ticker sync if we use manual raf, or vice versa. 
      // Using manual raf is usually more reliable for Lenis.

      return () => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, []);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="App">
          <div className="cinematic-grain"></div>
          <div className="cinematic-vignette"></div>
          <CustomCursor />
          <Navbar />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/diagnostics" element={<DiagnosticsPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
