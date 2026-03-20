/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Clean Professional Clinic Palette
        ios: {
          bg: '#FFFFFF',
          secondaryBg: '#F8FAFC',
          label: '#0B1120',
          secondaryLabel: '#475569',
          blue: '#2563EB',
          green: '#10B981',
          gold: '#F59E0B',
          accent: '#2563EB',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.45)',
          heavy: 'rgba(255, 255, 255, 0.75)',
          border: 'rgba(255, 255, 255, 0.35)',
          borderHeavy: 'rgba(255, 255, 255, 0.65)',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'glass-sm': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-heavy': '0 12px 64px 0 rgba(0, 0, 0, 0.12)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.5)',
      },
      backdropBlur: {
        'ultra': '120px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'subtle-zoom': 'subtleZoom 20s ease-in-out infinite',
        'fade-reveal': 'fadeReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        subtleZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        fadeReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        'section-y': 'clamp(2rem, 5vw, 4rem)',
      }
    },
  },
  plugins: [],
};
