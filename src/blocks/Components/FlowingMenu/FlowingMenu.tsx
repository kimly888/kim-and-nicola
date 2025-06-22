"use client";

import React from "react";
import Image from "next/image";
import { colors } from "@/lib/theme/colors";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="flex-1 relative overflow-hidden border-b border-white/20 group">
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-2xl md:text-3xl transition-all duration-300 focus:text-white"
        href={link}
        style={{
          background: `linear-gradient(135deg, ${colors.champagne} 0%, ${colors.mediumTaupe} 100%)`,
          color: colors.darkMaroon
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span 
          className={`relative z-10 font-bold tracking-wider transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ color: colors.darkMaroon }}
        >
          {text}
        </span>
      </a>
      
      {/* Animated background with stickers */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          isHovered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-full'
        }`}
        style={{ backgroundColor: colors.lightTaupe }}
      >
        <div className="h-full w-full flex items-center justify-center overflow-hidden">
          {/* Moving stickers */}
          <div 
            className={`flex items-center space-x-8 transition-transform duration-1000 ${
              isHovered ? 'animate-marquee' : ''
            }`}
          >
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="flex items-center space-x-4 whitespace-nowrap">
                <span 
                  className="uppercase font-bold text-xl tracking-wider"
                  style={{ color: colors.steelBlue }}
                >
                  {text}
                </span>
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;

// Note: this is also needed
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       translate: {
//         '101': '101%',
//       },
//       keyframes: {
//         marquee: {
//           'from': { transform: 'translateX(0%)' },
//           'to': { transform: 'translateX(-50%)' }
//         }
//       },
//       animation: {
//         marquee: 'marquee 15s linear infinite'
//       }
//     }
//   },
//   plugins: [],
// };
