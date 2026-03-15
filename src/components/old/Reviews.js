import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Star, Quote, Sparkles } from 'lucide-react';

const Reviews = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const reviews = [
    {
      text: "A masterclass in veterinary science and empathy. The diagnostic precision here is unmatched.",
      author: "Sarah Johnson",
      role: "Dog Owner"
    },
    {
      text: "The most cinematic veterinary experience I've ever had. Truly advanced care for my companion.",
      author: "Michael Chen",
      role: "Cat Lover"
    },
    {
      text: "Their 24/7 concierge service is a lifesaver. Compassion that transcends traditional medicine.",
      author: "Emily Rodriguez",
      role: "Pet Parent"
    },
    {
      text: "Modern diagnostics combined with a heart of gold. The best place for your best friend.",
      author: "David Thompson",
      role: "Business Owner"
    },
    {
      text: "Elegance in pet care is not just a slogan here. It's a reality in every interaction.",
      author: "Jessica Lee",
      role: "Busy Mom"
    }
  ];

  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(row1Ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 50,
        repeat: -1
      });

      gsap.fromTo(row2Ref.current,
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 60,
          repeat: -1
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const ReviewCard = ({ review }) => (
    <div className="flex-shrink-0 w-[450px] mx-6">
      <div className="relative bg-white p-12 rounded-[3rem] border border-cinematic-dark/5 shadow-[0_30px_60px_-15px_rgba(26,44,44,0.05)] h-full flex flex-col justify-between group hover:bg-cinematic-dark transition-all duration-700">
        <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity duration-700">
          <Quote className="w-16 h-16 group-hover:text-white" />
        </div>

        <div>
          <div className="flex gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-cinematic-accent fill-current" />
            ))}
          </div>
          <p className="text-2xl font-light leading-relaxed mb-10 text-cinematic-dark group-hover:text-white transition-colors duration-700">
            "{review.text}"
          </p>
        </div>

        <div className="flex items-center pt-8 border-t border-cinematic-dark/5 group-hover:border-white/10 transition-colors duration-700">
          <div className="w-12 h-12 rounded-2xl bg-cinematic-accent flex items-center justify-center text-lg font-bold text-white shadow-xl">
            {review.author.charAt(0)}
          </div>
          <div className="ml-4">
            <div className="font-bold text-cinematic-dark group-hover:text-white transition-colors duration-700">{review.author}</div>
            <div className="text-xs text-cinematic-accent uppercase tracking-widest mt-1">{review.role}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-40 bg-cinematic-bg overflow-hidden relative">
      <div className="text-center mb-24 px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cinematic-dark/5 backdrop-blur-md rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-cinematic-accent" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cinematic-dark/60">Voices of Merit</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-display text-cinematic-dark leading-tight">
          Client <span className="italic text-cinematic-accent">Confessions</span>
        </h2>
      </div>

      <div className="mb-16 flex overflow-hidden">
        <div ref={row1Ref} className="flex">
          {marqueeReviews.map((review, index) => (
            <ReviewCard key={`row1-${index}`} review={review} />
          ))}
        </div>
      </div>

      <div className="flex overflow-hidden">
        <div ref={row2Ref} className="flex">
          {marqueeReviews.map((review, index) => (
            <ReviewCard key={`row2-${index}`} review={review} />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-cinematic-bg to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-cinematic-bg to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Reviews;
