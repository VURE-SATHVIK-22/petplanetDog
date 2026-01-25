# PawPerfect Veterinary Clinic - Premium Motion Design

A sophisticated, high-end veterinary website featuring **Phenomenon Studio-inspired animations** with pinned sections, smooth scroll, and premium motion design. Built with GSAP, Lenis smooth scroll, and advanced ScrollTrigger techniques.

## 🎬 **Animation System Overview**

This project implements the exact animation style and interaction patterns from **Phenomenon Studio**, featuring:

- **Lenis Smooth Scroll** - Inertial, butter-smooth scrolling
- **Pinned Section Behavior** - Images pin while content scrolls independently  
- **Case Study Animations** - Staggered reveals with premium timing
- **Clip-Path Image Reveals** - Organic vertical reveals with parallax
- **Micro-Interactions** - Subtle hover effects and button animations
- **Section Transitions** - Smooth fade/scale between sections

## 🌊 **Core Animation Features**

### **1. Pinned Section System**
```javascript
// Each service section pins the left image while right content scrolls
ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top top",
  end: "bottom bottom", 
  pin: true,
  pinSpacing: false,
  anticipatePin: 1
});
```

**Behavior:**
- Left image **pins in place** when section enters viewport
- Right content panel **scrolls independently** 
- **No overlapping** between sections
- **Smooth unpinning** when section completes

### **2. Image Reveal Animation**
```javascript
// Clip-path reveal with parallax movement
gsap.set(imageRef.current, {
  clipPath: "inset(100% 0% 0% 0%)" // Start hidden
});

imageTimeline.to(imageRef.current, {
  clipPath: "inset(0% 0% 0% 0%)", // Reveal vertically
  duration: 1,
  ease: "power3.out"
});
```

**Visual Effect:**
- **Vertical clip-path reveal** (top to bottom)
- **Subtle parallax movement** during scroll
- **Soft fade-in** with premium easing
- **Slow, smooth timing** (1-1.2s duration)

### **3. Case Study Text Animation**
```javascript
// Staggered content reveals
const elements = {
  tag: '.case-tag',        // Service category
  title: '.case-title',    // Main heading  
  subtitle: '.case-subtitle', // Description
  buttons: '.case-button', // CTA buttons
  techStack: '.tech-item', // Feature list
  timeline: '.case-timeline', // Duration info
  results: '.case-result'  // Statistics
};

// Animate with 0.2-0.35s stagger
tl.to(elements.tag, { opacity: 1, y: 0, duration: 0.7 })
  .to(elements.title, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
  .to(elements.subtitle, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");
```

**Animation Sequence:**
1. **Tag** fades up first
2. **Title** slides in with slight delay  
3. **Subtitle** fades from opacity 0→1
4. **Buttons** scale from 0.95→1 with bounce
5. **Tech stack** items stagger in
6. **Timeline** and **results** animate sequentially

### **4. Smooth Scroll Integration**
```javascript
// Lenis configuration for premium feel
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  mouseMultiplier: 1,
  touchMultiplier: 2
});

// GSAP integration
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
```

## 🎯 **Service Sections**

### **Service 1: Advanced Diagnosis & Treatment**
- **Image**: Diagnostic equipment showcase
- **Features**: Digital X-Ray, Blood Analysis, Ultrasound, ECG
- **Duration**: 45-90 minutes
- **Results**: 99.2% Accuracy, <30min Results, 24/7 Available

### **Service 2: Grooming & Spa Care** 
- **Image**: Luxury spa environment
- **Features**: Full Grooming, Aromatherapy, Stress-Free Environment
- **Duration**: 60-120 minutes  
- **Results**: 100% Satisfaction, 2hrs Spa Time, 5★ Rating

### **Service 3: Vaccinations & Preventive Care**
- **Image**: Health protection visualization
- **Features**: Core Vaccines, Lifestyle Vaccines, Health Screening
- **Duration**: 30-45 minutes
- **Results**: 98% Protection, 1 Year Coverage, Safe Process

## ⚡ **Performance Optimizations**

### **GPU Acceleration**
```css
.premium-services {
  will-change: transform;
}

.premium-services section {
  will-change: transform, opacity;
}
```

### **GSAP Configuration**
```javascript
gsap.config({
  force3D: true,        // Hardware acceleration
  nullTargetWarn: false // Clean console
});

gsap.defaults({
  ease: "power3.out",   // Premium easing
  duration: 0.7         // Consistent timing
});
```

### **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .animate-element {
    opacity: 1;
    transform: none;
  }
  
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🎨 **Animation Timing & Easing**

### **Easing Functions**
- **Primary**: `power3.out` - Smooth, premium deceleration
- **Bouncy Elements**: `back.out(1.7)` - Subtle bounce for buttons
- **Parallax**: `none` - Linear movement for scroll effects

### **Duration Scale**
- **Fast**: 0.3-0.4s (micro-interactions)
- **Standard**: 0.6-0.7s (content reveals)  
- **Slow**: 1.0-1.2s (image reveals, section transitions)
- **Stagger**: 0.1-0.35s (between elements)

### **Scroll Trigger Points**
- **Start**: `"top 80%"` - Begin before fully visible
- **Pin Start**: `"top top"` - Pin when section reaches top
- **End**: `"bottom bottom"` - Complete when section exits
- **Scrub**: `0.5-1` - Smooth scroll-linked animations

## 🛠 **Custom Hooks Architecture**

### **useSmoothScroll()**
- Initializes Lenis smooth scrolling
- Integrates with GSAP ScrollTrigger
- Handles cleanup and performance

### **usePinnedSection(triggerRef, imageRef, contentRef)**
- Creates pinned section behavior
- Manages image reveal animations
- Handles parallax effects

### **useCaseStudyAnimation(sectionRef)**
- Orchestrates staggered content reveals
- Manages element timing and sequencing
- Handles scroll-triggered animations

### **useHoverMicroInteractions(elementRef)**
- Adds subtle hover effects
- Scale and rotation micro-animations
- Premium button interactions

### **useSectionTransition(sectionRef, nextSectionRef)**
- Smooth transitions between sections
- Fade out previous, fade in next
- No overlapping or jarring jumps

## 🎭 **Micro-Interactions**

### **Button Hover Effects**
```javascript
// Scale + rotation on hover
gsap.to(element, {
  scale: 1.03,
  rotationY: 2,
  duration: 0.4,
  ease: "power2.out"
});
```

### **Image Tilt Effects**
- **1-2 degree rotation** on hover
- **Subtle scale increase** (1.02-1.05)
- **Smooth transitions** (0.3-0.4s)

### **Icon Animations**
- **12-degree rotation** on hover
- **Scale bounce** for interactive elements
- **Staggered reveals** in lists

## 📱 **Responsive Behavior**

### **Desktop (1024px+)**
- Full pinned section behavior
- All animations enabled
- Maximum visual impact

### **Tablet (768-1023px)**  
- Simplified pinning
- Reduced animation complexity
- Touch-optimized interactions

### **Mobile (<768px)**
- Stack layout (no pinning)
- Essential animations only
- Performance-first approach

## 🚀 **Getting Started**

```bash
# Install dependencies
npm install

# Start development server  
npm start

# Build for production
npm run build
```

## 🎯 **Key Differentiators**

1. **Phenomenon Studio Accuracy** - Exact timing and interaction patterns
2. **Lenis Smooth Scroll** - Premium inertial scrolling experience  
3. **Pinned Section System** - Advanced ScrollTrigger implementation
4. **Case Study Animations** - Staggered reveals with perfect timing
5. **Clip-Path Reveals** - Organic image entrance effects
6. **Micro-Interactions** - Subtle hover effects throughout
7. **Performance Optimized** - 60fps animations with GPU acceleration
8. **Accessibility Compliant** - Reduced motion support included

## 🌟 **Animation Showcase**

- ✅ **Smooth Inertial Scrolling** (Lenis)
- ✅ **Pinned Image Sections** (ScrollTrigger)  
- ✅ **Clip-Path Image Reveals** (Vertical)
- ✅ **Staggered Text Animations** (Case Study Style)
- ✅ **Parallax Image Movement** (Subtle Y-axis)
- ✅ **Section Fade Transitions** (No Overlapping)
- ✅ **Micro-Hover Interactions** (Scale + Rotate)
- ✅ **Premium Easing Curves** (power3.out)
- ✅ **Performance Optimized** (GPU Accelerated)
- ✅ **Reduced Motion Support** (Accessibility)

---

**Built with ❤️ for PawPerfect Veterinary Clinic**

*Featuring Phenomenon Studio-inspired premium motion design and sophisticated scroll-based animations.*