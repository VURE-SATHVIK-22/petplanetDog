import React from 'react';

const CurvedDividerDocs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display text-brown-900 mb-6">
          Professional Curved Dividers
          <span className="block text-gold-600">Implementation Guide</span>
        </h1>
        <p className="text-xl text-brown-600 max-w-4xl mx-auto leading-relaxed">
          Phenomenon Studio-quality curved section dividers with advanced animations and professional-grade implementation.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-brown-900 mb-8">Basic Usage</h2>
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`import ProfessionalCurvedDivider from './components/ProfessionalCurvedDivider';

// Basic implementation
<ProfessionalCurvedDivider 
  topColor="#ffffff"
  bottomColor="#000000"
  height={200}
  curveDepth={0.8}
  animationSpeed={1.2}
  direction="down"
/>`}
          </pre>
        </div>
      </section>

      {/* Props Documentation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-brown-900 mb-8">Props & Configuration</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Visual Props */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-brown-900 mb-6">Visual Properties</h3>
            <div className="space-y-4">
              <div>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">topColor</code>
                <p className="text-gray-600 mt-1">Top section color (hex, rgb, or CSS color)</p>
                <p className="text-sm text-gray-500">Default: "#ffffff"</p>
              </div>
              <div>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">bottomColor</code>
                <p className="text-gray-600 mt-1">Bottom section color</p>
                <p className="text-sm text-gray-500">Default: "#000000"</p>
              </div>
              <div>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">height</code>
                <p className="text-gray-600 mt-1">Divider height in pixels</p>
                <p className="text-sm text-gray-500">Default: 200</p>
              </div>
              <div>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">direction</code>
                <p className="text-gray-600 mt-1">Curve direction: "down" or "up"</p>
                <p className="text-sm text-gray-500">Default: "down"</p>
              </div>
            </div>
          </div>

          {/* Animation Props */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-brown-900 mb-6">Animation Properties</h3>
            <div className="space-y-4">
              <div>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">curveDepth</code>
                <p className="text-gray-600 mt-1">Curve intensity (0.1 - 2.0)</p>
                <p className="text-sm text-gray-500">Default: 0.8</p>
              </div>
              <div>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">animationSpeed</code>
                <p className="text-gray-600 mt-1">ScrollTrigger scrub speed</p>
                <p className="text-sm text-gray-500">Default: 1.2</p>
              </div>
              <div>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">className</code>
                <p className="text-gray-600 mt-1">Additional CSS classes</p>
                <p className="text-sm text-gray-500">Default: ""</p>
              </div>
              <div>
                <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">style</code>
                <p className="text-gray-600 mt-1">Inline styles object</p>
                <p className="text-sm text-gray-500">Default: {}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-brown-900 mb-8">Advanced Examples</h2>
        
        {/* Light to Dark */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-brown-900 mb-4">Light to Dark Transition</h3>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <pre className="text-sm text-gray-800 overflow-x-auto">
{`<ProfessionalCurvedDivider 
  topColor="#FFFCF7"
  bottomColor="#2A1D17"
  height={250}
  curveDepth={1.0}
  animationSpeed={1.8}
  direction="down"
/>`}
            </pre>
          </div>
        </div>

        {/* Gradient Transition */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-brown-900 mb-4">Gradient Transition</h3>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <pre className="text-sm text-gray-800 overflow-x-auto">
{`<ProfessionalCurvedDivider 
  topColor="#667eea"
  bottomColor="#764ba2"
  height={300}
  curveDepth={1.2}
  animationSpeed={2.0}
  direction="down"
/>`}
            </pre>
          </div>
        </div>

        {/* Subtle Curve */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-brown-900 mb-4">Subtle Curve</h3>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <pre className="text-sm text-gray-800 overflow-x-auto">
{`<ProfessionalCurvedDivider 
  topColor="#F8F6F0"
  bottomColor="#FFFCF7"
  height={150}
  curveDepth={0.4}
  animationSpeed={1.0}
  direction="down"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Performance Tips */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-brown-900 mb-8">Performance & Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">✅ Best Practices</h3>
            <ul className="space-y-3 text-green-700">
              <li>• Use consistent color schemes between sections</li>
              <li>• Vary curve depth for visual interest (0.4 - 1.2)</li>
              <li>• Adjust animation speed based on content length</li>
              <li>• Test on mobile devices for performance</li>
              <li>• Use semantic section wrappers</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4">🚀 Performance Tips</h3>
            <ul className="space-y-3 text-blue-700">
              <li>• GPU acceleration is automatically enabled</li>
              <li>• Responsive heights reduce mobile load</li>
              <li>• Custom debounce prevents resize issues</li>
              <li>• Will-change properties optimize rendering</li>
              <li>• Containment prevents layout thrashing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-brown-900 mb-8">Technical Implementation</h2>
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <h3 className="text-lg font-bold text-brown-900 mb-4">Animation System</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• GSAP ScrollTrigger integration</li>
                <li>• Custom easing functions</li>
                <li>• Multi-harmonic wave calculations</li>
                <li>• Bézier curve control points</li>
                <li>• 60fps smooth animations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-brown-900 mb-4">Visual Effects</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Three-layer depth system</li>
                <li>• Advanced gradient blending</li>
                <li>• Professional shadow effects</li>
                <li>• Subtle noise textures</li>
                <li>• Breathing micro-animations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-brown-900 mb-4">Optimization</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• GPU-accelerated transforms</li>
                <li>• CSS containment properties</li>
                <li>• Efficient resize handling</li>
                <li>• Memory leak prevention</li>
                <li>• Mobile-optimized rendering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Support */}
      <section>
        <h2 className="text-3xl font-bold text-brown-900 mb-8">Browser Support</h2>
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🌐</div>
              <div className="font-semibold text-gray-800">Chrome</div>
              <div className="text-sm text-gray-600">Latest</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🦊</div>
              <div className="font-semibold text-gray-800">Firefox</div>
              <div className="text-sm text-gray-600">Latest</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🧭</div>
              <div className="font-semibold text-gray-800">Safari</div>
              <div className="text-sm text-gray-600">14+</div>
            </div>
            <div>
              <div className="text-2xl mb-2">📱</div>
              <div className="font-semibold text-gray-800">Mobile</div>
              <div className="text-sm text-gray-600">iOS/Android</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurvedDividerDocs;