import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const containerRef = useRef(null);

  const posts = [
    {
      category: "Health",
      date: "Mar 18, 2026",
      title: "Essential Vaccination Protocols for Puppies",
      excerpt: "Ensure your pet's protection against Rabies, Parvovirus, and more with our comprehensive guide.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "Surgery",
      date: "Feb 22, 2026",
      title: "Post-Operative Care: What to Expect",
      excerpt: "A guardian's manual to navigating your dog's recovery phase efficiently at home.",
      image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800&auto=format&fit=crop"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-reveal', 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-container relative" id="blog">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4">
          <span className="blog-reveal text-ios-blue font-bold tracking-[0.3em] uppercase text-[10px] block">Resource Hub</span>
          <h2 className="blog-reveal text-gradient text-5xl">Clinical <br /> <span className="italic font-normal">Insights.</span></h2>
        </div>
        <Link to="/blog" className="blog-reveal flex flex-col items-center justify-center w-24 h-24 rounded-full border border-ios-label/10 hover:bg-ios-blue hover:text-white hover:border-ios-blue transition-all duration-500 group">
          <ArrowUpRight size={20} className="mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-[8px] font-bold uppercase tracking-widest text-center leading-none">All<br/>Articles</span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {posts.map((post, index) => (
          <GlassCard key={index} className="blog-reveal !p-4 !rounded-[2.5rem] bg-white border-gray-100 group hover:!bg-gray-50 transition-all duration-700">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-2/5 aspect-[4/3] rounded-[2rem] overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen size={10} />
                  {post.category}
                </div>
              </div>
              <div className="w-full sm:w-3/5 py-4 pr-4 flex flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-ios-secondaryLabel mb-3">{post.date}</p>
                <h3 className="text-xl font-display font-bold leading-tight mb-3 group-hover:text-ios-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm opacity-80 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
