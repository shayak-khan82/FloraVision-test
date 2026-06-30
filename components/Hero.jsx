
"use client";
import React from 'react';
import { Play, Star, ChevronRight, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    
    
    <main className="bg-[#1B2316] overflow-x-hidden">
      
      <div className="relative">
       
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-35 mix-blend-lighten pointer-events-none"
          style={{ backgroundImage: "url('/images/main.jpg')" }}
        />
        
        {/* Updated gradient transitions to match the new #1B2316 background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B2316]/40 to-[#1B2316] pointer-events-none" />

        
        <section className="relative min-h-screen pt-20 pb-40 px-6 md:px-12 flex items-center justify-center overflow-hidden">
          <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
           
            <div className="lg:col-span-7 flex flex-col items-start gap-8">
              <div className="flex flex-col">
                <h1 className="font-display font-semibold text-[56px] md:text-[96px] tracking-tight leading-[1.05] text-white">
                  Earth's Exhale
                </h1>
                <p className="mt-8 text-gray-300 text-base md:text-[17px] max-w-lg font-light leading-[1.6]">
                  &ldquo;Earth Exhale&rdquo; symbolizes the purity and vitality of the Earth&rsquo;s natural environment and its essential role in sustaining life.
                </p>
              </div>
              
              <div className="flex items-center gap-6 mt-2">
                <button className="border border-white hover:border-[#a3e635] hover:bg-[#a3e635]/10 text-white font-medium px-8 py-3 rounded-lg transition-all cursor-pointer text-[15px] tracking-wide">
                  Buy Now
                </button>
                <button className="flex items-center gap-3.5 text-white hover:text-[#a3e635] font-medium transition-colors group cursor-pointer text-[15px] tracking-wide">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-[#a3e635] group-hover:bg-[#a3e635]/10 transition-all">
                    <Play className="w-4 h-4 fill-white text-white group-hover:fill-[#a3e635] group-hover:text-[#a3e635] translate-x-[1px]" />
                  </div>
                  Live Demo...
                </button>
              </div>
            
              <div className="bg-white/5 backdrop-blur-md rounded-[24px] p-6 max-w-[380px] mt-12 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-4">
                  <img 
                    src="/images/image.png" 
                    alt="Ronnie Hamill" 
                    className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-lg"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-white text-base">Ronnie Hamill</h4>
                    <div className="flex items-center gap-0.5 mt-0.5 text-[#eab308]">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
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
                  </div>
                </div>
                <p className="mt-4 text-gray-300/90 text-[13px] leading-[1.6] font-light italic">
                  &ldquo;I can&rsquo;t express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.&rdquo;
                </p>
              </div>
            </div>
            {/* Right Column: Floating Plant Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white/5 backdrop-blur-md rounded-[48px] p-8 w-full max-w-[400px] border border-white/10 shadow-2xl relative animate-float">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/images/image-2.png" 
                    alt="Aglaonema plant" 
                    className="max-h-[95%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)] transform hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="mt-8 flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-[13px] font-normal tracking-wide">Indoor Plant</span>
                    <h3 className="font-display font-medium text-[28px] text-white leading-tight">
                      Aglaonema plant
                    </h3>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:border-white hover:bg-white/10 text-white transition-all cursor-pointer">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <button className="border border-white hover:border-[#a3e635] hover:bg-[#a3e635]/10 text-white font-medium px-8 py-3 rounded-lg transition-all text-sm cursor-pointer tracking-wide">
                    Buy Now
                  </button>
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-5 h-1.5 rounded-full bg-white" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SELLING SECTION ==================== */}
        <section className="relative py-20 px-6 md:px-12 flex flex-col items-center z-10">
          <div className="max-w-7xl w-full mx-auto">
            <div className="flex justify-center mb-24">
              <div className="relative inline-block">
                <span className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#a3e635] text-4xl font-light opacity-60">[</span>
                <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#a3e635] text-4xl font-light opacity-60">]</span>
                <h2 className="font-display font-medium text-lg md:text-xl tracking-widest text-white uppercase px-6">
                  Our Trendy plants
                </h2>
              </div>
            </div>
            
            {/* Cards */}
            <div className="flex flex-col gap-24 w-full">
              
              <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-8 md:p-12 md:pl-0 border border-white/10 shadow-2xl relative">
               
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 flex justify-center relative lg:static">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:absolute lg:left-8 lg:-top-16 lg:bottom-8 lg:w-[420px] lg:h-[400px] flex items-center justify-center pointer-events-none">
                      <img src="/images/image-2.png" alt="Desk" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden lg:block lg:w-[350px] lg:h-[280px]" />
                  </div>
                  <div className="lg:col-span-7 flex flex-col items-start gap-6 lg:pl-8">
                    <h3 className="text-white text-2xl md:text-4xl">For Your Desks Decorations</h3>
                    <p className="text-gray-300 font-light">Rs. 599/-</p>
                    <button className="bg-[#1b3d22] text-white px-8 py-3 rounded-lg">Explore</button>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-8 md:p-12 md:pr-0 border border-white/10 shadow-2xl relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 flex flex-col items-start gap-6 order-2 lg:order-1 lg:pr-8">
                    <h3 className="text-white text-2xl md:text-4xl">For Your Desks Decorations</h3>
                    <p className="text-gray-300 font-light">Rs. 399/-</p>
                    <button className="bg-[#1b3d22] text-white px-8 py-3 rounded-lg">Explore</button>
                  </div>
                  <div className="lg:col-span-5 flex justify-center relative lg:static order-1 lg:order-2">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:absolute lg:right-8 lg:-top-16 lg:bottom-8 lg:w-[420px] lg:h-[400px] flex items-center justify-center pointer-events-none">
                      <img src="/images/heroimage.png" alt="Desk" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden lg:block lg:w-[350px] lg:h-[280px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
