import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const ReviewsSection = () => {
  const containerRef = useRef(null);

  const reviews = [
    {
      name: "Sandeep V",
      date: "Jan 2024",
      rating: 5,
      text: "Dr. Suresh Babu is exceptionally skilled. He performed a complex orthopedic surgery on my dog and the recovery was amazing. Highly recommend this clinic.",
      source: "Google"
    },
    {
      name: "Priyanka R",
      date: "Nov 2023",
      rating: 5,
      text: "Very professional and hygienic clinic. They have all lab facilities inside. The staff is caring and the response is very quick.",
      source: "Google"
    },
    {
      name: "Rahul G",
      date: "Feb 2024",
      rating: 4,
      text: "Experienced doctor. My pet got cured within 2 days of treatment. Highly recommend for any emergency situations.",
      source: "Google"
    },
    {
      name: "Anil Kumar",
      date: "Mar 2024",
      rating: 5,
      text: "Best boarding and surgical facility for dogs. Dr. Suresh treats every pet like his own. The clinic is very spacious and clean.",
      source: "Google"
    },
    {
      name: "Madhavi L",
      date: "Dec 2023",
      rating: 5,
      text: "I was worried about my pet's skin infection for months. After visiting Dr. Suresh's, it cleared up in two weeks. Amazing care.",
      source: "Google"
    },
    {
      name: "Vikas T",
      date: "Jan 2024",
      rating: 5,
      text: "Highly equipped OT and diagnostic lab. The blood test results were very accurate and explained clearly by the doctor.",
      source: "Google"
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.review-reveal', 
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
          ease: "expo.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-container relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-ios-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="grid lg:grid-cols-12 gap-12 relative z-10 items-start">
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
          <div className="space-y-4">
            <span className="review-reveal text-ios-gold font-bold tracking-[0.3em] uppercase text-[10px] block">Testimonials</span>
            <h2 className="review-reveal text-gradient text-5xl">What Our <br /> <span className="italic font-normal">Clients Say</span></h2>
          </div>
          <div className="review-reveal space-y-2">
            <p className="text-6xl font-bold font-display leading-none">4.7</p>
            <div className="flex gap-1 text-ios-gold">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-luxury font-bold uppercase tracking-widest text-[9px] opacity-60">Verified Google Reviews</p>
          </div>
          
          <div className="review-reveal flex gap-3">
             <button className="w-12 h-12 rounded-full border border-ios-label/10 flex items-center justify-center hover:bg-ios-label hover:text-white transition-all duration-500">
                <ChevronLeft size={18} />
             </button>
             <button className="w-12 h-12 rounded-full border border-ios-label/10 flex items-center justify-center hover:bg-ios-label hover:text-white transition-all duration-500">
                <ChevronRight size={18} />
             </button>
          </div>
        </div>
 
        <div className="lg:col-span-8">
           <div className="grid md:grid-cols-2 gap-6">
             {reviews.slice(0, 4).map((review, index) => (
               <GlassCard key={index} className="review-reveal !p-8 !rounded-[2.5rem] bg-white border-gray-100 shadow-sm space-y-8">
                 <div className="flex justify-between items-start">
                    <div className="bg-ios-gold/10 p-3 rounded-xl text-ios-gold">
                       <Quote size={20} />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={12} className="text-ios-gold fill-ios-gold" />
                      ))}
                    </div>
                 </div>
                 
                 <p className="text-xl font-display font-medium leading-relaxed italic text-ios-label/80">
                   "{review.text}"
                 </p>
 
                 <div className="pt-6 border-t border-ios-label/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-ios-gold rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-ios-gold/20">
                          {review.name.charAt(0)}
                       </div>
                       <div>
                          <p className="font-bold text-sm leading-none">{review.name}</p>
                          <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-ios-secondaryLabel mt-1">{review.date}</p>
                       </div>
                    </div>
                    <span className="px-2.5 py-0.5 bg-ios-label text-[8px] font-bold uppercase tracking-widest rounded-full text-white">{review.source}</span>
                 </div>
               </GlassCard>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
