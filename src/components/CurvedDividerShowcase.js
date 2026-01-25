import React from 'react';
import { PhenomenonCurvedDivider } from './CurvedDivider';

const CurvedDividerShowcase = () => {
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

    </div>
  );
};

export default CurvedDividerShowcase;