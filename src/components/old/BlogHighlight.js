import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const BlogHighlight = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.blog-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const featuredPosts = [
        {
            title: "Next-Gen Canine Longevity",
            category: "Advanced Tech",
            image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
            desc: "Utilizing CRISPR-inspired diagnostics to enhance breed vitality."
        },
        {
            title: "Neuro-Acoustic Therapy",
            category: "Wellness",
            image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
            desc: "Reducing anxiety through clinical sound frequency treatments."
        },
        {
            title: "Molecular Dog Nutrition",
            category: "Nutrition",
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
            desc: "Deconstructing breed requirements for peak condition."
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 bg-sand-50 overflow-hidden relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl blog-reveal">
                        <span className="font-serif italic text-2xl text-gold-600 mb-4 block">The Archive</span>
                        <h2 className="font-display text-6xl md:text-8xl text-slate-900 leading-[0.85] tracking-tighter">
                            CANINE <br/>
                            <span className="italic font-serif text-gold-500">INSIGHTS.</span>
                        </h2>
                    </div>
                    <Link to="/blog" className="blog-reveal group flex items-center gap-4 text-slate-900 font-display text-xl hover:text-gold-500 transition-all">
                        <span>The Full Journal</span>
                        <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-white transition-all">
                            <ArrowUpRight className="w-8 h-8" />
                        </div>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {featuredPosts.map((post, i) => (
                        <div key={i} className="blog-reveal group cursor-pointer">
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute top-8 left-8">
                                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                    <p className="text-white text-sm font-light leading-relaxed mb-4">{post.desc}</p>
                                    <div className="flex items-center gap-2 text-gold-500 text-xs font-bold uppercase tracking-widest">
                                        Read Insight <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-display text-3xl text-slate-900 group-hover:text-gold-500 transition-colors duration-500 uppercase tracking-tight">
                                {post.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogHighlight;
