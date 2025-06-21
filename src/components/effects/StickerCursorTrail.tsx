"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Trail {
  id: number;
  x: number;
  y: number;
  stickerNum: number;
}

export function StickerCursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [enabled, setEnabled] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastTrailTime = useRef(0);
  const minDistance = 100; // Minimum pixels to move
  const throttleDelay = 100; // Minimum milliseconds between trails

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!enabled) return;

      const now = Date.now();
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastPosition.current.x, 2) +
          Math.pow(e.clientY - lastPosition.current.y, 2)
      );

      // Require both time AND distance thresholds to be met
      if (distance < minDistance || now - lastTrailTime.current < throttleDelay) return;

      const newTrail: Trail = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        stickerNum: Math.floor(Math.random() * 46) + 1,
      };

      setTrails((prev) => [...prev.slice(-4), newTrail]); // Reduced from 8 to 4
      lastPosition.current = { x: e.clientX, y: e.clientY };
      lastTrailTime.current = now;
    };

    // Enable trail on hero section or specific areas
    const handleScroll = () => {
      const heroSection = document.querySelector("[data-hero-section]");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setEnabled(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [enabled, minDistance]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{
              x: trail.x - 16,
              y: trail.y - 16,
              opacity: 0.8,
            }}
            animate={{
              opacity: 0,
              scale: 1.2,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 4,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <Image
              src={`/images/stickers/Subject ${trail.stickerNum}.png`}
              alt=""
              width={100}
              height={100}
              className="w-8 h-8 md:w-fit md:h-fit"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
