import { useRef } from 'react';
import { PhenomenonCurvedDivider } from './CurvedDivider';

const CurvedDividerDemo = () => {
  return (
    <div className="curved-divider-showcase">
      
      {/* Demo Section 1 - Light */}
      <section className="section-with-divider relative min-h-screen bg-gradient-to-br from-cream-50 via-white to-cream-100 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-display text-brown-900 mb-6">
            Premium Curved
            <span className="block text-gold-600">Divider Animation</span>
          </h2>
          <p className="text-xl text-brown-600 leading-relaxed">
            Scroll down to see the beautiful curved divider animation in action. 
            Notice how smoothly it morphs and reveals the next section.
          </p>
        </div>
      </section>

      {/* Curved Divider 1: Light to Dark */}
      <PhenomenonCurvedDivider 
        topColor="#FFFCF7"
        bottomColor="#2A1D17"
        height={200}
        className="z-10"
      />

      {/* Demo Section 2 - Dark */}
      <section className="section-with-divider relative min-h-screen bg-gradient-to-br from-brown-800 via-brown-700 to-brown-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-display text-white mb-6">
            Smooth Morphing
            <span className="block text-gold-400">Section Transitions</span>
          </h2>
          <p className="text-xl text-cream-200 leading-relaxed">
            Each divider smoothly morphs as you scroll, creating a premium feel 
            exactly like Phenomenon Studio's website transitions.
          </p>
        </div>
      </section>

      {/* Curved Divider 2: Dark to Gold */}
      <PhenomenonCurvedDivider 
        topColor="#2A1D17"
        bottomColor="#D4AF37"
        height={250}
        className="z-10"
      />

      {/* Demo Section 3 - Gold */}
      <section className="section-with-divider relative min-h-screen bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-display text-brown-900 mb-6">
            Multi-Layer Depth
            <span className="block text-brown-800">Professional Quality</span>
          </h2>
          <p className="text-xl text-brown-700 leading-relaxed">
            Three-layer curved animation system with independent motion, 
            shadows, and gradients for maximum visual impact.
          </p>
        </div>
      </section>

      {/* Curved Divider 3: Gold to Light */}
      <PhenomenonCurvedDivider 
        topColor="#D4AF37"
        bottomColor="#F8F6F0"
        height={180}
        className="z-10"
      />

      {/* Demo Section 4 - Light */}
      <section className="section-with-divider relative min-h-screen bg-gradient-to-br from-cream-100 via-cream-50 to-white flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-display text-brown-900 mb-6">
            Responsive Design
            <span className="block text-gold-600">All Screen Sizes</span>
          </h2>
          <p className="text-xl text-brown-600 leading-relaxed">
            Perfectly responsive curved dividers that scale beautifully 
            on desktop, tablet, and mobile devices.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brown-200/50">
              <h3 className="text-xl font-bold text-brown-900 mb-3">Smooth Motion</h3>
              <p className="text-brown-600">GSAP-powered animations with ScrollTrigger for buttery smooth performance</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brown-200/50">
              <h3 className="text-xl font-bold text-brown-900 mb-3">Premium Feel</h3>
              <p className="text-brown-600">Multi-layer depth with shadows and gradients for professional quality</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brown-200/50">
              <h3 className="text-xl font-bold text-brown-900 mb-3">Easy Integration</h3>
              <p className="text-brown-600">Drop-in component with customizable colors and curve intensity</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CurvedDividerDemo;