"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { textColor } from "@/lib/theme";
import Image from "next/image";
import { useEffect, useState } from "react";
import FlowingMenu from "@/blocks/Components/FlowingMenu/FlowingMenu";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [footerStickers, setFooterStickers] = useState<number[]>([]);

  useEffect(() => {
    // Randomly select 4 stickers for footer decoration
    const stickers = Array.from({ length: 4 }, () => 
      Math.floor(Math.random() * 46) + 1
    );
    setFooterStickers(stickers);
  }, []);

  // Creative flowing menu items with wedding sticker themes
  const flowingMenuItems = [
    {
      link: "/#story",
      text: "Home",
      image: "/images/stickers/Subject 14.png" // Heart-themed sticker
    },
    {
      link: "/#details",
      text: "Event Details",
      image: "/images/stickers/Subject 7.png" // Calendar/event themed
    },
    {
      link: "/#gallery",
      text: "Gallery",
      image: "/images/stickers/Subject 21.png" // Photo/camera themed
    },
    {
      link: "/#rsvp",
      text: "RSVP",
      image: "/images/stickers/Subject 35.png" // Letter/invitation themed
    }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(`relative py-12 px-6 md:px-12 ${textColor.lightTaupe}`, className)}
    >
      {/* Decorative stickers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {footerStickers.map((stickerNum, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 20}%`,
              top: `${10 + (index % 2) * 60}%`,
            }}
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <Image
              src={`/images/stickers/Subject ${stickerNum}.png`}
              alt=""
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Couple Info */}
          {/* <div className="space-y-4 lg:col-span-1">
            <h3 className="text-4xl tracking-wider font-bold">Kim & Nicola</h3>
            <p>We can&apos;t wait to celebrate our special day with you.</p>
          </div> */}

          {/* Flowing Menu Navigation - Takes up 2 columns on large screens */}
          <div className="lg:col-span-4">
            <div className="h-64 rounded-lg overflow-hidden">
              <FlowingMenu items={flowingMenuItems} />
            </div>
          </div>

          {/* Contact Info */}
          
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm">
          <p>© {currentYear} Kim & Nicola. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-70">Made with love and lots of stickers ✨</p>
        </div>
      </div>
    </motion.footer>
  );
}
