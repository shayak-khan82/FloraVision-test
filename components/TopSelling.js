// "use client";
// import React, { useState } from 'react';
// import { ShoppingBag } from 'lucide-react';

// const ALL_PLANTS = [
//   {
//     id: 1,
//     name: "Aglaonema plant",
//     description:
//       "The Aglaonema plant, commonly known as Chinese evergreen, is a popular low-maintenance houseplant.",
//     price: "Rs.300/-",
//     image: "/images/heroimage.png",
//   },
//   {
//     id: 2,
//     name: "Plantain Lilies",
//     description:
//       "Hostas are widely grown for their decorative foliage.",
//     price: "Rs.380/-",
//     image: "/images/image-2.png",
//   },
//   {
//     id: 3,
//     name: "Cactus",
//     description:
//       "A popular vertical desert succulent perfect for indoor decoration.",
//     price: "Rs.259/-",
//     image: "/images/PLANT3.png",
//   },
//   {
//     id: 4,
//     name: "Swiss Cheese Plant",
//     description:
//       "Popular tropical houseplant known for perforated leaves.",
//     price: "Rs.400/-",
//     image: "/images/tree3.png",
//   },
//   {
//     id: 5,
//     name: "Sansevieria Plant",
//     description:
//       "Low maintenance indoor plant with beautiful sword leaves.",
//     price: "Rs.450/-",
//     image: "/images/tree2.png",
//   },
//   {
//     id: 6,
//     name: "Agave Plant",
//     description:
//       "Architectural succulent with thick fleshy leaves.",
//     price: "Rs.380/-",
//     image: "/images/tree.png",
//   },
// ];

// export default function TopSelling() {
//   const [currentPage, setCurrentPage] = useState(0);
  
//   return (
    
//     <section className="pt-30 pb-30 px-6 md:px-12 bg-[#1B2316] flex flex-col items-center justify-center">
//       <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        
//         {/* Section Header */}
//         <div className="mb-28">
//           <div className="custom-brackets">
//             <h2 className="font-display font-medium text-lg md:text-xl tracking-widest text-white uppercase">
//               Our Top Selling Plants
//             </h2>
//           </div>
//         </div>

//         {/* Grid of Cards (3 Columns) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
//           {ALL_PLANTS.map((plant) => (
//             <div
//               key={plant.id}
//               /* Adjusted card panel container token to bg-[#24301f]/50 for proper visual balance against the background */
//               className="group relative overflow-hidden rounded-[36px]
//               bg-[#24301f]/50 backdrop-blur-xl
//               border border-white/10
//               transition duration-300
//               hover:border-[#B7A347]
//               hover:-translate-y-2"
//             >
//               {/* Image */}
//               <div className="h-[340px] flex items-center justify-center">
//                 <img
//                   src={plant.image}
//                   alt={plant.name}
//                   className="h-[280px] object-contain transition duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Content */}
//               <div className="px-8 pb-8">
//                 <h3 className="text-white text-4xl font-light mb-4">
//                   {plant.name}
//                 </h3>

//                 <p className="text-gray-400 leading-8 text-lg mb-8">
//                   {plant.description}
//                 </p>

//                 <div className="flex items-center justify-between">
//                   <span className="text-3xl text-white font-semibold">
//                     {plant.price}
//                   </span>

//                   <button
//                     className="w-14 h-14 rounded-xl
//                     border border-[#B7A347]
//                     flex items-center justify-center
//                     hover:bg-[#B7A347]
//                     transition"
//                   >
//                     <ShoppingBag className="text-white w-6 h-6" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>        
//       </div>
//     </section>
//   );
// }
"use client";
import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const ALL_PLANTS = [
  {
    id: 1,
    name: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: "Rs. 300/-",
    image: "/images/heroimage.png",
  },
  {
    id: 2,
    name: "Plantain Lilies",
    description:
      "Hostas are widely grown for their decorative foliage.",
    price: "Rs. 380/-",
    image: "/images/image-2.png",
  },
  {
    id: 3,
    name: "Cactus",
    description:
      "A popular vertical desert succulent perfect for indoor decoration.",
    price: "Rs. 259/-",
    image: "/images/PLANT3.png",
  },
  {
    id: 4,
    name: "Swiss Cheese Plant",
    description:
      "Popular tropical houseplant known for perforated leaves.",
    price: "Rs. 400/-",
    image: "/images/tree3.png",
  },
  {
    id: 5,
    name: "Sansevieria Plant",
    description:
      "Low maintenance indoor plant with beautiful sword leaves.",
    price: "Rs. 450/-",
    image: "/images/tree2.png",
  },
  {
    id: 6,
    name: "Agave Plant",
    description:
      "Architectural succulent with thick fleshy leaves.",
    price: "Rs. 380/-",
    image: "/images/tree.png",
  },
];

export default function TopSelling() {
  const [currentPage, setCurrentPage] = useState(0);
  
  return (
    <section className="pt-32 pb-32 px-6 md:px-12 bg-[#1B2316] flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-32">
          <div className="relative inline-block">
            <h2 className="font-sans font-medium text-lg md:text-xl tracking-widest text-white uppercase text-center">
              Our Top Selling Plants
            </h2>
          </div>
        </div>

        {/* Grid of Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-24 w-full mt-12">
          {ALL_PLANTS.map((plant) => (
            <div
              key={plant.id}
              className="group relative rounded-[75px] bg-[#232F21]/60 backdrop-blur-2xl border border-white/[0.06] shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between pt-0 px-9 pb-10 overflow-visible"
            >
              {/* Plant Image Burst Layer allowed to pop out from card top margin boundary */}
              <div className="w-full flex items-center justify-center -mt-24 mb-6 overflow-visible select-none pointer-events-none">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-[320px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Meta Content Block */}
              <div className="flex flex-col gap-5">
                <h3 className="text-white text-[38px] font-sans font-normal tracking-normal leading-none align-middle">
                  {plant.name}
                </h3>

                <p className="text-gray-300/75 text-[24px] font-sans font-normal leading-snug tracking-normal align-middle">
                  {plant.description}
                </p>
              </div>

              {/* Action Segment Wrapper */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <span className="text-[38px] text-white font-sans font-normal leading-none align-middle tracking-normal">
                  {plant.price}
                </span>

                <button
                  className="rounded-[18px] border border-white/40 p-4 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-white cursor-pointer"
                  aria-label={`Add ${plant.name} to bag`}
                >
                  <ShoppingBag className="w-[28px] h-[28px] stroke-[1.25]" />
                </button>
              </div>
            </div>
          ))}
        </div>        
      </div>
    </section>
  );
}