"use client";
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    
    <footer className="bg-[#1B2316] border-t border-white/10 text-gray-300 py-20 px-6 relative overflow-hidden">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-lime/5 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column: Brand & Social Info */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3 cursor-pointer group">
            <Image src="/images/headerimage.png" alt="alt" width={60} height={10} />
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              FloraVision<span className="text-neon-lime">.</span>
            </span>
          </div>
          <p className="text-sm font-light leading-relaxed max-w-sm text-gray-400">
            &ldquo;From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.&rdquo;
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-11 h-11 rounded-lg border border-white/20 hover:border-white hover:bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="w-11 h-11 rounded-lg border border-white/20 hover:border-white hover:bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="w-11 h-11 rounded-lg border border-white/20 hover:border-white hover:bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center Column: Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-display font-medium text-white text-base tracking-wide">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3.5 text-sm font-light text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Type&rsquo;s Of plant&rsquo;s</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </li>
          </ul>
        </div>

        {/* Right Column: Newsletter Subscription */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="font-display font-medium text-white text-base tracking-wide">
            For Every Update.
          </h4>
          
          <div className="flex flex-col sm:flex-row items-stretch gap-2.5 w-full">
            <input 
              type="email" 
              placeholder="Enter Email"
              className="bg-transparent border border-white/20 hover:border-white/40 focus:border-white rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none flex-grow transition-colors"
            />
            <button className="bg-[#1b3d22] hover:bg-[#275330] text-white border border-white/10 font-medium text-[13px] tracking-wider uppercase px-6 py-3.5 rounded-lg transition-all shadow-lg cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Subfooter Copyright Row */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-500 font-light relative z-10">
        FloraVision &copy; all right reserve
      </div>
    </footer>
  );
}