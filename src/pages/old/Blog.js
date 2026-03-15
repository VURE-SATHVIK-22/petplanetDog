import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Bookmark, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal animations for blog cards
            gsap.utils.toArray('.blog-card').forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    delay: i * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    }
                });
            });

            // Text reveal
            gsap.utils.toArray('.reveal-text').forEach(text => {
                gsap.from(text, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 90%",
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const categories = ["All", "Canine Wellness", "Dog Nutrition", "Advanced Tech", "Clinic Life"];

    const posts = [
        {
            id: 1,
            title: "How to Take Care of Dogs in Summer in Hyderabad: Essential Tips",
            excerpt: "Vanasthalipuram summers can be brutal for pets. Learn how to keep your dogs cool, hydrated, and safe during the intense Hyderabad heatwaves.",
            category: "Canine Wellness",
            author: "Dr. T Suresh Babu",
            date: "Jan 23, 2026",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1200",
            featured: true
        },
        {
            id: 2,
            title: "Dog Vaccination Schedule in India – A Complete Guide for Pet Owners",
            excerpt: "Stay updated with the essential dog vaccination schedule in India. Ensure your pet's protection against Rabies, Parvovirus, and more at our Vanasthalipuram clinic.",
            category: "Clinic Life",
            author: "Dr. T Suresh Babu",
            date: "Jan 20, 2026",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Common Dog Diseases and Treatments: What Every Hyderabad Pet Owner Should Know",
            excerpt: "From tick fever to gastrointestinal issues, understand the common dog diseases prevalent in Hyderabad and their advanced treatments available at Pet Planet.",
            category: "Advanced Tech",
            author: "Dr. T Suresh Babu",
            date: "Jan 15, 2026",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 4,
            title: "Advanced Diagnostics: Why Your Pet Needs More Than a Physical Exam",
            excerpt: "Explore how our veterinary clinic in Vanasthalipuram utilizes molecular diagnostics to detect underlying conditions before they become critical.",
            category: "Advanced Tech",
            author: "Dr. T Suresh Babu",
            date: "Jan 10, 2026",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const featuredPost = posts.find(p => p.featured);
    const recentPosts = posts.filter(p => !p.featured);

    return (
        <div ref={containerRef} className="bg-sand-100 min-h-screen">
            {/* Cinematic Hero */}
            <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6 lg:px-12">
                <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=2000" 
                        alt="Hero Background" 
                        className="w-full h-full object-cover grayscale brightness-[0.3]"
                    />
                </motion.div>
                
                <div className="relative z-10 max-w-screen-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                    >
                        <span className="text-gold-500 font-display uppercase tracking-[0.5em] text-sm mb-6 block">The Digital Archive</span>
                        <h1 className="font-display text-[clamp(4rem,10vw,14rem)] leading-[0.75] text-sand-50 tracking-tighter uppercase mb-8">
                            Canine<br />
                            <span className="text-serif italic text-gold-500 lowercase">Insights.</span>
                        </h1>
                    </motion.div>
                </div>

            </section>

            {/* Journal Header & Filters */}
            <section className="px-6 lg:px-12 py-20">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-12">
                        <div className="max-w-2xl">
                            <h2 className="text-slate-900 font-display text-5xl md:text-7xl uppercase tracking-tighter mb-8 reveal-text">The Canine Journal</h2>
                            <p className="text-slate-600 text-xl font-light italic leading-relaxed reveal-text">
                                Documenting the frontier of canine medicine, from genetic breakthroughs to the fine art of rehabilitative care.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 lg:mb-4">
                            {categories.map((cat, idx) => (
                                <button 
                                    key={idx} 
                                    className={`px-6 py-2 rounded-full border border-slate-200 text-xs font-display uppercase tracking-widest transition-all duration-300 hover:border-gold-500 hover:text-gold-500 ${idx === 0 ? 'bg-slate-900 text-sand-50 border-slate-900' : 'text-slate-600'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Post */}
                    {featuredPost && (
                        <div className="group relative w-full h-[70vh] rounded-3xl overflow-hidden mb-32 blog-card cursor-pointer">
                            <div className="absolute inset-0">
                                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                            </div>
                            
                            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="bg-gold-500 text-slate-900 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Featured Insight</span>
                                    <span className="text-sand-200/60 text-xs uppercase tracking-widest font-display">{featuredPost.readTime}</span>
                                </div>
                                <h3 className="text-sand-50 font-display text-4xl md:text-6xl uppercase tracking-tighter mb-6 max-w-4xl group-hover:text-gold-500 transition-colors">
                                    {featuredPost.title}
                                </h3>
                                <p className="text-sand-200/80 text-lg md:text-xl font-light max-w-2xl mb-8 line-clamp-2">
                                    {featuredPost.excerpt}
                                </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500">
                                                <img src="https://images.unsplash.com/photo-1559839734-2b71f1e3c7e0?auto=format&fit=crop&q=80&w=100" alt={featuredPost.author} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sand-50 text-sm font-display uppercase tracking-widest">{featuredPost.author}</p>
                                                <p className="text-sand-200/40 text-[10px] uppercase tracking-widest">{featuredPost.date}</p>
                                            </div>
                                        </div>
                                        <div className="w-16 h-16 rounded-full border border-sand-50/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-500">
                                            <ArrowUpRight className="w-6 h-6 text-sand-50 group-hover:text-slate-900" />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    )}

                    {/* Grid Posts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {recentPosts.map((post) => (
                            <div key={post.id} className="group blog-card cursor-pointer">
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-6 left-6">
                                        <span className="glass-card text-slate-900 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4 mb-4 text-[10px] uppercase tracking-[0.2em] text-gold-600 font-bold">
                                    <span>{post.date}</span>
                                    <div className="w-1 h-1 rounded-full bg-gold-500" />
                                    <span>{post.readTime}</span>
                                </div>
                                
                                <h4 className="text-slate-900 font-display text-2xl uppercase mb-4 group-hover:text-gold-600 transition-colors leading-tight">
                                    {post.title}
                                </h4>
                                
                                <p className="text-slate-600 font-light leading-relaxed mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                                                <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="text-slate-900 text-[10px] font-display uppercase tracking-widest">{post.author}</span>
                                        </div>
                                        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Bookmark className="w-4 h-4 text-slate-400 hover:text-gold-500" />
                                            <Share2 className="w-4 h-4 text-slate-400 hover:text-gold-500" />
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / Cinematic CTA */}
            <section className="py-40 bg-slate-950 text-sand-50 relative overflow-hidden mt-20">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=2000" alt="" className="w-full h-full object-cover" />
                </div>
                
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="font-serif italic text-3xl text-gold-500 mb-8 block reveal-text">Stay Informed.</span>
                    <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-12 reveal-text">
                        Subscribe to our<br />
                        <span className="text-serif italic lowercase text-gold-500">Monthly</span> Dossier.
                    </h2>
                    
                    <div className="relative max-w-xl mx-auto reveal-text">
                        <input 
                            type="email" 
                            placeholder="Email address for high-level updates" 
                            className="w-full bg-white/5 border-b border-white/20 px-0 py-6 text-xl font-light focus:outline-none focus:border-gold-500 transition-colors text-center"
                        />
                        <button className="mt-12 group flex items-center space-x-4 mx-auto text-gold-500">
                            <span className="font-display text-sm uppercase tracking-[0.3em] border-b border-gold-500 pb-2">Join the archive</span>
                            <div className="w-12 h-12 rounded-full border border-gold-500 flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 transition-all">
                                <ArrowUpRight className="w-5 h-5 group-hover:text-slate-900" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
