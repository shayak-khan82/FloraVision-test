
"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const O2_PAGES = [
  {
    id: 1,
    title: "We Have Small And Best O2 Plants Collection's",
    desc1: "Oxygen-producing plants, often referred to as \"O2 plants,\" are those that release oxygen into the atmosphere through the process of photosynthesis.",
    desc2: "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
    image: "/images/heroimage.png",
    pageString: "01/04"
  },
];

export default function BestO2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % O2_PAGES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + O2_PAGES.length) % O2_PAGES.length);
  };

  const currentSlide = O2_PAGES[activeIndex];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#1B2316] min-h-screen flex flex-col items-center justify-center font-sans select-none overflow-x-hidden">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center gap-16">
        
        {/* Section Header Brackets */}
        <div className="relative inline-block mb-4">
          <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#a3e635] text-3xl font-light opacity-50">[</span>
          <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#a3e635] text-3xl font-light opacity-50">]</span>
          <h3 className="text-white text-lg md:text-xl font-medium tracking-widest uppercase px-4">
            Our Best o2
          </h3>
        </div>

        {/* Main Content Card Frame Matrix:
          - Width: Max 1600px contextual frame bounds
          - Border: 3px thickness matching user layout specs
          - Radius: 92px corner configuration
          - Overflow: Visible to allow plant leaves to break the container canvas beautifully
        */}
        <div className="w-full bg-[#232F21]/60 backdrop-blur-2xl rounded-[92px] border-[3px] border-white/[0.08] p-8 md:p-14 lg:p-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] overflow-visible relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center overflow-visible">
            
            {/* Left Column Area: Floating Burst Plant Asset Showcase */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start items-center overflow-visible relative">
              {/* Plant scale matching the massive visual ratio footprint */}
              <div className="w-full max-w-[580px] lg:max-w-none lg:w-[680px] xl:w-[740px] aspect-square flex items-center justify-center lg:absolute lg:-left-28 xl:-left-36 lg:top-1/2 lg:-translate-y-1/2 overflow-visible z-20 pointer-events-none select-none">
                <img 
                  src={currentSlide.image} 
                  alt="Best O2 Plant" 
                  className="w-full h-full object-contain filter drop-shadow-[0_30px_45px_rgba(0,0,0,0.7)] transform transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              {/* Responsive Layout Structural Spacer element */}
              <div className="hidden lg:block lg:w-[420px] lg:h-[450px]" />
            </div>

            {/* Right Column Area: Slide Content Copy & Dynamic Navigation Footer Matrix */}
            <div className="lg:col-span-7 flex flex-col justify-center h-full text-white z-10 lg:pl-12">
              <div>
                {/* User Typography Match: Inter, Semi Bold, 38px, Line-height 100% */}
                <h2 className="text-white text-[32px] sm:text-[38px] font-semibold leading-[100%] tracking-tight font-sans mb-8 max-w-2xl">
                  {currentSlide.title}
                </h2>
                
                {/* Context Descriptions */}
                <div className="flex flex-col gap-6 text-gray-300/85 text-base sm:text-[17px] font-normal leading-relaxed max-w-2xl">
                  <p className="font-light">{currentSlide.desc1}</p>
                  <p className="font-light">{currentSlide.desc2}</p>
                </div>
              </div>

              {/* Action Buttons Footer Row Matrix */}
              <div className="flex items-center justify-between mt-12 sm:mt-16 w-full max-w-2xl">
                <button className="bg-transparent hover:bg-white/5 text-white border-2 border-white/60 hover:border-white px-10 py-3 rounded-2xl transition-all duration-300 text-[15px] font-normal tracking-wide cursor-pointer">
                  Explore
                </button>

                {/* Slider Controls Container */}
                <div className="flex items-center gap-5">
                  <button 
                    onClick={prevSlide}
                    className="p-1 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
                  </button>
                  
                  <span className="text-gray-300 font-sans text-sm tracking-widest font-normal min-w-[50px] text-center">
                    {currentSlide.pageString}
                  </span>
                  
                  <button 
                    onClick={nextSlide}
                    className="p-1 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-6 h-6 stroke-[1.5]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}