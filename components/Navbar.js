
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Search,
  ShoppingBag,
  X,
  ChevronDown,
} from "lucide-react";
// 1. Import Indie Flower from Next.js built-in Google Fonts loader
import { Indie_Flower } from "next/font/google";

// 2. Initialize the font with weight 400
const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Plants Type",
    href: "#",
    dropdown: true,
  },
  {
    name: "More",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full z-50 bg-[#1B2316]">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image src="/images/headerimage.png" alt="Logo" width={45} height={8} />

            <h1 className="text-2xl font-bold">
              FloraVision.
            </h1>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // 3. Injected the font class, set text to 24px (text-[24px]), and line-height 100% (leading-none)
                className={`${indieFlower.className} flex items-center gap-1 text-[24px] leading-none text-white/80 hover:text-lime-400 transition`}
              >
                {item.name}

                {item.dropdown && (
                  <ChevronDown size={18} /> 
                )}
              </Link>
            ))}

          </nav>

          {/* Icons */}

          <div className="hidden lg:flex items-center gap-6">

            <button className="hover:text-lime-400 transition">
              <Search size={20} />
            </button>

            <button className="hover:text-lime-400 transition">
              <ShoppingBag size={20} />
            </button>

            <button className="hover:text-lime-400 transition">
              <Menu size={22} />
            </button>

          </div>

          {/* Mobile */}

          <div className="lg:hidden flex items-center gap-4">

            <Search />

            <button onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-[#1B2316] border-t border-white/10">

          <div className="container mx-auto px-4 py-5 flex flex-col gap-5">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                // Also applied the handwritten style to mobile links so it looks consistent
                className={`${indieFlower.className} text-[24px] leading-none text-white/80 hover:text-lime-400 transition`}
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>
      </div>

    </header>
  );
}