## Project Summary
A premium, cinematic React-based website for Dr. T Suresh Babu Veterinary Clinic (formerly Pet Planet Dog Clinic) located in Hyderabad. The site focuses on advanced canine diagnostics, surgical excellence, and compassionate care, targeting local SEO for dog clinic services in the region.

## Tech Stack
- Frontend: React 18
- Styling: Tailwind CSS
- Animation: GSAP (GreenSock), Framer Motion, Lenis (Smooth Scroll)
- Icons: Lucide React
- Routing: React Router v7

## Architecture
- `src/components/`: Modular UI elements (Hero, Navbar, About, Services, etc.)
- `src/pages/`: Main route components (Home, About, Services, Diagnostics, Blog)
- `src/hooks/`: Custom animation and scroll logic hooks
- `public/`: Static assets, SEO infrastructure (sitemap, robots.txt)

## User Preferences
- Maintenance of a "Cinematic" and "Professional" aesthetic.
- Use of "Space Grotesk" or "Plus Jakarta Sans" for typography (currently using Plus Jakarta Sans and Syne).
- Emphasis on Local SEO for Vanasthalipuram and Hyderabad.
- High-contrast, readable text for biographical sections.

## Project Guidelines
- STRICT: Do not change existing UI/UX, layouts, or colors.
- Use `clamp()` for fluid typography across all viewports.
- Ensure all images have descriptive ALT tags for SEO.
- Maintain GSAP and Lenis for smooth, orchestrated transitions.
- All new content must integrate primary keywords: "dog clinic in Hyderabad", "veterinary clinic in Hyderabad", "Dr. T Suresh Babu".

## Common Patterns
- Scroll-triggered reveal animations using GSAP and `IntersectionObserver`.
- Glassmorphism effects (`glass-card`) for modern UI elements.
- Fluid layout containers using `max-w-screen-2xl`.
- Decorative elements like `cinematic-grain` and `cinematic-vignette` for atmospheric depth.
