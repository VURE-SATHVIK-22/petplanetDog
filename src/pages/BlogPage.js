import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, ArrowRight, Search } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '../components/GlassCard';

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const containerRef = useRef(null);

  const posts = [
    {
      category: "Health & Wellness",
      date: "Mar 18, 2026",
      title: "Essential Vaccination Protocols for Puppies",
      excerpt: "Ensure your pet's protection against Rabies, Parvovirus, and more with our comprehensive guide to early-stage immunity.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      category: "Surgery & Recovery",
      date: "Feb 22, 2026",
      title: "Post-Operative Care: What to Expect",
      excerpt: "A guardian's manual to navigating your dog's recovery phase efficiently at home after major orthopedic or soft tissue surgery.",
      image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      category: "Nutrition",
      date: "Jan 10, 2026",
      title: "Premium Diets for Active Canine Breeds",
      excerpt: "Understanding the balance of proteins and fats required for working dogs and highly active breeds.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      category: "Hygiene",
      date: "Dec 05, 2025",
      title: "Tick & Flea Prevention Strategies",
      excerpt: "Keep your pet safe from vector-borne diseases year-round with clinical-grade anti-tick management.",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
      featured: false
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 0.8 } });
      tl.fromTo('.blog-hero-reveal', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05 }
      );

      gsap.fromTo('.blog-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.blog-grid',
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-ios-bg overflow-hidden min-h-screen"
    >
      {/* Cinematic Hero */}
      <section className="relative pt-48 pb-20">
        <div className="absolute top-0 left-[20%] w-[40vw] h-[40vw] bg-ios-blue/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="blog-hero-reveal inline-flex items-center gap-2 px-4 py-2 bg-ios-blue/5 backdrop-blur-xl rounded-full border border-ios-blue/10">
              <Sparkles size={14} className="text-ios-blue" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-ios-blue">Resource Hub</span>
            </div>
            <h1 className="blog-hero-reveal text-gradient leading-[0.95] tracking-tight text-6xl md:text-8xl">
              Clinical <br />
              <span className="italic font-normal italic-ios">Insights.</span>
            </h1>
            <p className="blog-hero-reveal text-luxury text-xl md:text-2xl leading-snug max-w-2xl">
              Stay updated with the latest in canine healthcare, clinical protocols, and expert advice from Dr. T Suresh Babu.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10">
        <div className="section-container blog-hero-reveal">
          <div className="relative aspect-[4/3] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-glass-heavy group cursor-pointer">
            <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-10 left-10 right-10 md:bottom-20 md:left-20 text-white max-w-3xl">
              <span className="px-4 py-2 bg-ios-blue/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20 mb-6 inline-block">
                Featured Article
              </span>
              <h2 className="text-3xl md:text-6xl font-display font-bold leading-tight mb-4">{posts[0].title}</h2>
              <p className="text-base md:text-lg opacity-80 mb-8 line-clamp-2 md:line-clamp-none">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-white group-hover:text-ios-blue transition-colors">
                Read Full Article <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 blog-grid">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h3 className="text-2xl font-display font-bold">Latest Articles</h3>
            <div className="flex items-center gap-2 text-ios-secondaryLabel bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
               <Search size={16} />
               <input type="text" placeholder="Search insights..." className="bg-transparent border-none outline-none text-xs w-full md:w-48 placeholder:opacity-50" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <GlassCard key={i} className="blog-card flex flex-col !p-6 !rounded-[2.5rem] bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer">
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-8 relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen size={10} />
                    {post.category}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel mb-3">{post.date}</p>
                    <h3 className="text-xl font-display font-bold leading-tight mb-4 group-hover:text-ios-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm opacity-80 line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ios-blue group-hover:gap-4 transition-all">
                    Read More <ArrowRight size={12} />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;
