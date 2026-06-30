
"use client";
import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Shelly Russel",
    stars: 4.5,
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    avatar: "/images/men.png"
  },
  {
    id: 2,
    name: "Lula Rolfson",
    stars: 4.5,
    text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    avatar: "/images/men1.jpg"
  },
  {
    id: 3,
    name: "Carol Huels",
    stars: 4.5,
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    avatar: "/images/men2.png"
  }
];


function StarRating() {
  return (
    <div className="flex items-center gap-1 text-[#eab308]">
      {/* Renders 4 full stars */}
      {[...Array(4)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-current stroke-current" />
      ))}
      {/* Renders the 0.5 half-filled star asset */}
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="half-star">
            <stop offset="50%" stopColor="#eab308"/>
            <stop offset="50%" stopColor="transparent"/>
          </linearGradient>
        </defs>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half-star)"/>
      </svg>
    </div>
  );
}

export default function Reviews() {
  return (
    
    <section className="py-24 px-6 md:px-12 bg-[#1B2316] flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Header with Bracket Styling */}
        <div className="mb-20 flex justify-center">
          <div className="relative inline-block">
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-[#a3e635] text-3xl font-light opacity-60">[</span>
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-[#a3e635] text-3xl font-light opacity-60">]</span>
            <h2 className="font-display font-medium text-2xl md:text-3xl tracking-wide text-white px-4">
              Customer Review
            </h2>
          </div>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              /* Lightened card panels up to a complimentary green-tint tint (#24301f/60) to contrast safely against the deep backdrop */
              className="bg-[#24301f]/60 backdrop-blur-xl p-8 md:p-10 border border-white/[0.06] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative flex flex-col gap-6 transition-all duration-300 hover:border-white/[0.12]
                rounded-[50px_35px_45px_30px] custom-fluid-shape"
              style={{ minHeight: '340px' }}
            >
              {/* Header: Avatar, Name, Rating */}
              <div className="flex items-center gap-4.5">
                <div className="relative">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border border-white/10 shadow-inner bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-display font-medium text-white text-[20px] tracking-wide">
                    {review.name}
                  </h3>
                  <StarRating />
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-300/90 text-[15px] leading-[1.6] font-light">
                {review.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}