"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface StickerLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export function StickerLoader({ isLoading, onComplete }: StickerLoaderProps) {
  const [loadingStickers, setLoadingStickers] = useState<number[]>([]);

  useEffect(() => {
    // Randomly select 6 stickers for loading animation
    const stickers = Array.from({ length: 6 }, () => 
      Math.floor(Math.random() * 46) + 1
    );
    setLoadingStickers(stickers);
  }, []);

  useEffect(() => {
    if (!isLoading && onComplete) {
      const timer = setTimeout(onComplete, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      {/* Loading text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
      >
        Loading our memories...
      </motion.h2>

      {/* Sticker loading animation */}
      <div className="relative w-32 h-32">
        {loadingStickers.map((stickerNum, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: 360,
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              rotate: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "linear",
              },
              scale: {
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              },
            }}
            style={{
              transformOrigin: `${50 + 30 * Math.cos((index * 60) * Math.PI / 180)}% ${50 + 30 * Math.sin((index * 60) * Math.PI / 180)}%`,
            }}
          >
            <Image
              src={`/images/stickers/Subject ${stickerNum}.png`}
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </motion.div>
        ))}
      </div>

      {/* Loading dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex space-x-2 mt-8"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-primary rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
} 