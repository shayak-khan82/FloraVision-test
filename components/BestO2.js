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
    
    <section className="py-20 px-6 md:px-12 bg-[#1B2316] min-h-screen flex flex-col items-center justify-center font-sans select-none">
      <div className="max-w-5xl w-full flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className="relative px-6 py-2 border-t-2 border-b-2 border-l border-r border-transparent before:absolute before:inset-y-0 before:left-0 before:w-3 before:border-t-2 before:border-b-2 before:border-l-2 before:border-green-500/60 after:absolute after:inset-y-0 after:right-0 after:w-3 after:border-t-2 after:border-b-2 after:border-r-2 after:border-green-500/60 rounded-sm">
          <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide px-2">
            Our Best o2
          </h3>
        </div>

        {/* Content Card Container */}
        {/* Adjusted background mesh to bg-[#24301f]/60 for rich glassmorphism contrast */}
        <div className="w-full bg-[#24301f]/60 backdrop-blur-md rounded-[45px] border border-white/5 p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Image Asset Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
                <img 
                  src={currentSlide.image} 
                  alt="Best O2 Plant" 
                  className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Slide Text Details & Navigation Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
              <div>
                <h2 className="text-white text-2xl md:text-3xl font-medium leading-snug tracking-wide mb-6">
                  {currentSlide.title}
                </h2>
                
                <div className="flex flex-col gap-5 text-gray-400 text-sm md:text-base font-normal leading-relaxed max-w-xl">
                  <p>{currentSlide.desc1}</p>
                  <p>{currentSlide.desc2}</p>
                </div>
              </div>

              {/* Action Buttons Footer Row */}
              <div className="flex items-center justify-between mt-10 lg:mt-14 w-full">
                <button className="bg-transparent hover:bg-white/5 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 px-8 py-2.5 rounded-md transition-all duration-300 text-sm font-medium tracking-wide">
                  Explore
                </button>

                {/* Slider Controls */}
                <div className="flex items-center gap-4">
                  <button 
                    onClick={prevSlide}
                    className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <span className="text-gray-400 text-xs tracking-widest font-light min-w-[40px] text-center">
                    {currentSlide.pageString}
                  </span>
                  
                  <button 
                    onClick={nextSlide}
                    className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
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