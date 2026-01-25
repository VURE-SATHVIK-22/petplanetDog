import React from 'react';
import ProfessionalCurvedDivider from './ProfessionalCurvedDivider';

const ProfessionalShowcase = () => {
  return (
    <div className="professional-showcase">
      
      {/* Showcase Section 1 - Light Premium */}
      <section className="phenomenon-section phenomenon-section-light section-with-professional-divider min-h-screen flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-6">
          <div className="inline-block mb-8">
            <span className="inline-flex items-center px-8 py-4 bg-brown-100/80 backdrop-blur-sm text-brown-700 rounded-full text-sm font-medium uppercase tracking-[0.3em] border border-brown-200/50">
              Professional Grade
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display text-brown-900 mb-8 leading-[0.85] tracking-tight">
            Phenomenon Studio
            <span className="block gradient-text">Curved Dividers</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-brown-600 max-w-5xl mx-auto leading-relaxed font-light mb-12">
            Professional-grade curved section dividers with advanced animations, 
            multi-layer depth, and premium visual effects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-brown-200/30">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Advanced Mathematics</h3>
              <p className="text-brown-600 leading-relaxed">Multi-harmonic wave calculations with Bézier curve control points for organic motion.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-brown-200/30">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Performance Optimized</h3>
              <p className="text-brown-600 leading-relaxed">GPU-accelerated animations with containment and will-change optimizations.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-brown-200/30">
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Multi-Layer Depth</h3>
              <p className="text-brown-600 leading-relaxed">Three-layer system with independent timing and sophisticated visual effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Curved Divider 1: Light to Dark Gradient */}
      <ProfessionalCurvedDivider 
        topColor="#FFFCF7"
        bottomColor="#1a1a2e"
        height={300}
        curveDepth={1.2}
        animationSpeed={2.0}
        direction="down"
      />

      {/* Showcase Section 2 - Dark Premium */}
      <section className="phenomenon-section phenomenon-section-dark section-with-professional-divider min-h-screen flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-6">
          <div className="inline-block mb-8">
            <span className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white/80 rounded-full text-sm font-medium uppercase tracking-[0.3em] border border-white/20">
              Smooth Transitions
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-display text-white mb-8 leading-[0.85] tracking-tight">
            Organic Motion
            <span className="block text-gold-400">Premium Feel</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed font-light mb-12">
            Each curve morphs with sophisticated timing, creating the premium 
            organic motion that defines high-end web experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="text-left">
              <h3 className="text-3xl font-bold text-white mb-6">Technical Excellence</h3>
              <ul className="space-y-4 text-white/70 text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>ScrollTrigger integration with custom easing functions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Multi-layer SVG paths with independent animation timing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Advanced gradient systems and shadow effects</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Responsive design with performance optimizations</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-white mb-6">Visual Impact</h3>
              <ul className="space-y-4 text-white/70 text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Phenomenon Studio inspired curve mathematics</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Breathing effects and micro-animations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Professional noise textures and overlays</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Seamless section transitions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Curved Divider 2: Dark to Gradient */}
      <ProfessionalCurvedDivider 
        topColor="#1a1a2e"
        bottomColor="#667eea"
        height={280}
        curveDepth={0.9}
        animationSpeed={1.6}
        direction="down"
      />

      {/* Showcase Section 3 - Gradient Premium */}
      <section className="phenomenon-section phenomenon-section-gradient section-with-professional-divider min-h-screen flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-6">
          <div className="inline-block mb-8">
            <span className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium uppercase tracking-[0.3em] border border-white/30">
              Premium Quality
            </span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-display text-white mb-8 leading-[0.85] tracking-tight">
            Professional Grade
            <span className="block text-white/90">Web Development</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light mb-12">
            Delivering the same level of sophistication and attention to detail 
            that defines the world's most premium web experiences.
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mt-16">
            <h3 className="text-3xl font-bold text-white mb-8">Implementation Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">3</div>
                <div className="text-white/70">Layer System</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">60fps</div>
                <div className="text-white/70">Smooth Animation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/70">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-white/70">Customizable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Curved Divider 3: Gradient to Light */}
      <ProfessionalCurvedDivider 
        topColor="#764ba2"
        bottomColor="#F8F6F0"
        height={250}
        curveDepth={0.7}
        animationSpeed={1.4}
        direction="down"
      />

      {/* Final Section */}
      <section className="phenomenon-section phenomenon-section-light section-with-professional-divider min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-display text-brown-900 mb-8 leading-tight">
            Ready to Elevate
            <span className="block gradient-text">Your Web Experience?</span>
          </h2>
          
          <p className="text-xl text-brown-600 leading-relaxed mb-12">
            Professional curved dividers that bring the same level of sophistication 
            as the world's most premium websites.
          </p>
          
          <button className="inline-flex items-center px-12 py-6 bg-brown-900 text-white rounded-full font-semibold text-lg hover:bg-brown-800 transition-all duration-300 hover:scale-105 shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>

    </div>
  );
};

export default ProfessionalShowcase;