import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SuccessStories = () => {
  const sectionRef = useRef(null);
  const [activeStory, setActiveStory] = useState(0);

    const stories = [
      {
        id: 1,
        title: "Max's Recovery",
        subtitle: "ORTHOPEDIC SURGERY",
        description: "After a severe ligament injury, Max underwent TPLO surgery. With our rehabilitation program, he's back to chasing frisbees!",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
        accent: "bg-gold-500"
      },
      {
        id: 2,
        title: "Luna's Journey",
        subtitle: "EMERGENCY CARE",
        description: "Luna arrived in critical condition. Our 24/7 emergency team stabilized her, and today she's a happy, healthy pup.",
        image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
        accent: "bg-slate-700"
      },
      {
        id: 3,
        title: "Bella's Smile",
        subtitle: "DENTAL SURGERY",
        description: "Severe dental disease was affecting Bella's health. A full cleaning and extraction procedure gave her a pain-free life.",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
        accent: "bg-gold-500"
      },
      {
        id: 4,
        title: "Charlie's Diet",
        subtitle: "NUTRITION PLAN",
        description: "Overweight and lethargic, Charlie needed a change. Our custom nutrition plan helped him lose 15lbs and regain his energy.",
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800",
        accent: "bg-slate-700"
      }
    ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current.querySelectorAll('.animate-up'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="animate-up inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Chronicles</span>
          </div>
          <h2 className="animate-up text-5xl md:text-7xl font-display text-slate-900 leading-tight tracking-tighter">
            Inspiring <span className="italic text-gold-500">Recoveries</span>
          </h2>
        </div>

        {/* Stories Accordion */}
        <div className="flex flex-col md:flex-row h-[700px] gap-6">
          {stories.map((story, index) => (
            <div
              key={story.id}
              onMouseEnter={() => setActiveStory(index)}
              className={`animate-up relative rounded-[3.5rem] overflow-hidden cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeStory === index ? 'flex-[4]' : 'flex-[1]'
                }`}
            >
              {/* Background Image */}
              <img
                src={story.image}
                alt={story.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${activeStory === index ? 'scale-105' : 'scale-125 filter grayscale-[0.2]'}`}
              />

              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-1000 ${activeStory === index
                  ? 'bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent'
                  : 'bg-slate-900/40 hover:bg-slate-900/20'
                }`}></div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end overflow-hidden">
                {/* Collapsed state title */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ${activeStory === index ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  <h3 className="text-white font-display text-2xl tracking-[0.2em] uppercase transform -rotate-90 whitespace-nowrap opacity-80">
                    {story.title.split(' ')[0]}
                  </h3>
                </div>

                {/* Expanded state content */}
                <div className={`transition-all duration-700 delay-200 ${activeStory === index ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                  <div className="flex items-start justify-between mb-8">
                    <div className="space-y-4">
                      <div className={`inline-block px-4 py-1.5 ${story.accent} text-white text-[10px] font-bold tracking-[0.2em] rounded-full`}>
                        {story.subtitle}
                      </div>
                      <h3 className="text-white font-display text-5xl lg:text-6xl leading-tight">
                        {story.title}
                      </h3>
                    </div>
                    <div className="p-5 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 text-white shadow-2xl">
                      <Quote className="w-8 h-8 fill-current" />
                    </div>
                  </div>

                  <p className="text-white/90 text-xl font-light leading-relaxed max-w-xl mb-10">
                    {story.description}
                  </p>

                  <button className="flex items-center gap-4 text-white group">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase">Read Story</span>
                    <div className="w-12 h-px bg-white/40 group-hover:w-20 transition-all duration-500"></div>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Indicator */}
              <div className={`absolute bottom-10 right-10 w-1 h-12 bg-white/20 transition-all duration-700 ${activeStory === index ? 'h-24 bg-gold-500' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
