import React from 'react';
import { motion } from 'framer-motion';

// Elite Components
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Treatments from '../components/Treatments';
import Highlights from '../components/Highlights';
import ReviewsSection from '../components/ReviewsSection';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Hero />
      <div className="relative z-10 bg-ios-bg">
        <About />
        <Services />
        <Treatments />
        <Highlights />
        <ReviewsSection />
        <Contact />
      </div>
    </motion.div>
  );
};

export default Home;
