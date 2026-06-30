"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

const ALL_PLANTS = [
  {
    id: 1,
    name: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese evergreen, is a popular low-maintenance houseplant.",
    price: "Rs.300/-",
    image: "/images/heroimage.png",
  },
  {
    id: 2,
    name: "Plantain Lilies",
    description:
      "Hostas are widely grown for their decorative foliage.",
    price: "Rs.380/-",
    image: "/images/image-2.png",
  },
  {
    id: 3,
    name: "Cactus",
    description:
      "A popular vertical desert succulent perfect for indoor decoration.",
    price: "Rs.259/-",
    image: "/images/PLANT3.png",
  },
  {
    id: 4,
    name: "Swiss Cheese Plant",
    description:
      "Popular tropical houseplant known for perforated leaves.",
    price: "Rs.400/-",
    image: "/images/tree3.png",
  },
  {
    id: 5,
    name: "Sansevieria Plant",
    description:
      "Low maintenance indoor plant with beautiful sword leaves.",
    price: "Rs.450/-",
    image: "/images/tree2.png",
  },
  {
    id: 6,
    name: "Agave Plant",
    description:
      "Architectural succulent with thick fleshy leaves.",
    price: "Rs.380/-",
    image: "/images/tree.png",
  },
];

export default function TopSelling() {
  const [currentPage, setCurrentPage] = useState(0);
  
  return (
    
    <section className="pt-30 pb-30 px-6 md:px-12 bg-[#1B2316] flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-28">
          <div className="custom-brackets">
            <h2 className="font-display font-medium text-lg md:text-xl tracking-widest text-white uppercase">
              Our Top Selling Plants
            </h2>
          </div>
        </div>

        {/* Grid of Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
          {ALL_PLANTS.map((plant) => (
            <div
              key={plant.id}
              /* Adjusted card panel container token to bg-[#24301f]/50 for proper visual balance against the background */
              className="group relative overflow-hidden rounded-[36px]
              bg-[#24301f]/50 backdrop-blur-xl
              border border-white/10
              transition duration-300
              hover:border-[#B7A347]
              hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-[340px] flex items-center justify-center">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-[280px] object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <h3 className="text-white text-4xl font-light mb-4">
                  {plant.name}
                </h3>

                <p className="text-gray-400 leading-8 text-lg mb-8">
                  {plant.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-3xl text-white font-semibold">
                    {plant.price}
                  </span>

                  <button
                    className="w-14 h-14 rounded-xl
                    border border-[#B7A347]
                    flex items-center justify-center
                    hover:bg-[#B7A347]
                    transition"
                  >
                    <ShoppingBag className="text-white w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Selector */}
        
      </div>
    </section>
  );
}