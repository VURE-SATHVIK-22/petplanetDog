import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Linkedin, Twitter, Award, Heart } from 'lucide-react';
import { useWaveReveal } from '../hooks/useSmoothScroll';

const Team = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  useWaveReveal(sectionRef, contentRef, '#2A1D17'); // Dark mask for light section

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      // Animate team cards on scroll
      const cards = contentRef.current.querySelectorAll('.team-card');
      
      gsap.set(cards, {
        opacity: 0,
        y: 60,
        scale: 0.9
      });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      // Enhanced hover animations for cards
      cards.forEach((card, index) => {
        const image = card.querySelector('.team-image');
        const overlay = card.querySelector('.team-overlay');
        const social = card.querySelector('.team-social');
        const content = card.querySelector('.p-6');
        
        // Subtle parallax effect on scroll
        gsap.to(card, {
          y: (index % 2 === 0) ? -20 : 20,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 2
          }
        });
        
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -12, duration: 0.4, ease: "power2.out" });
          gsap.to(image, { scale: 1.1, duration: 0.4, ease: "power2.out" });
          gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(social, { y: 0, opacity: 1, duration: 0.3, ease: "back.out(1.7)", delay: 0.1 });
          if (content) gsap.to(content, { y: -4, duration: 0.3, ease: "power2.out" });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
          gsap.to(image, { scale: 1, duration: 0.4, ease: "power2.out" });
          gsap.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" });
          gsap.to(social, { y: 20, opacity: 0, duration: 0.2, ease: "power2.out" });
          if (content) gsap.to(content, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

    }, contentRef);

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      position: "Chief Veterinarian & Founder",
      description: "With over 15 years of experience in veterinary medicine, Dr. Mitchell specializes in advanced surgical procedures and emergency care.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      position: "Senior Veterinarian",
      description: "Dr. Chen brings expertise in internal medicine and diagnostic imaging, ensuring comprehensive care for all our patients.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Veterinary Surgeon",
      description: "Specializing in orthopedic surgery and rehabilitation, Dr. Rodriguez helps pets recover and return to their active lives.",
      image: "https://images.unsplash.com/photo-1594824475317-29bb4b71fa6d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="relative section-padding bg-gradient-to-b from-cream-50 via-white to-cream-50 curved-section section-with-curve">
      
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-6 py-3 bg-brown-100/80 backdrop-blur-sm text-brown-700 rounded-full text-sm font-medium uppercase tracking-[0.2em] border border-brown-200/50">
              <Heart className="w-4 h-4 mr-2" />
              Meet Our Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-brown-900 mb-6 leading-tight">
            Passionate Professionals
            <span className="block gradient-text">Dedicated to Your Pet</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-brown-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our experienced team combines advanced medical expertise with genuine compassion, 
            ensuring your beloved companion receives the finest veterinary care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="team-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <div 
                  className="team-image w-full h-full bg-gradient-to-br from-brown-200 to-gold-200 bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${member.image})`,
                  }}
                >
                  {/* Overlay */}
                  <div className="team-overlay absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 transition-opacity duration-300"></div>
                  
                  {/* Social Links */}
                  <div className="team-social absolute bottom-4 left-4 right-4 flex justify-center space-x-4 opacity-0 transform translate-y-5 transition-all duration-300">
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brown-700 hover:bg-brown-700 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.twitter}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brown-700 hover:bg-brown-700 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-brown-900 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="flex items-center text-brown-600 mb-3">
                    <Award className="w-4 h-4 mr-2 text-gold-500" />
                    <span className="text-sm font-medium uppercase tracking-wider">
                      {member.position}
                    </span>
                  </div>
                </div>
                
                <p className="text-brown-600 leading-relaxed text-sm">
                  {member.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-300 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;