"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface FloatingStickersProps {
  count?: number;
  className?: string;
}

export function FloatingStickers({ count = 6, className = "" }: FloatingStickersProps) {
  const [stickers, setStickers] = useState<number[]>([]);

  useEffect(() => {
    // Randomly select stickers from Subject 1-46
    const selectedStickers = Array.from({ length: count }, () => 
      Math.floor(Math.random() * 46) + 1
    );
    setStickers(selectedStickers);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stickers.map((stickerNum, index) => (
        <motion.div
          key={index}
          className="absolute opacity-80 hover:opacity-100 transition-opacity duration-300"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Image
            src={`/images/stickers/Subject ${stickerNum}.png`}
            alt={`Decorative sticker ${stickerNum}`}
            width={150}
            height={150}
            className="w-8 h-8 md:w-fit md:h-fit"
          />
        </motion.div>
      ))}
    </div>
  );
} 