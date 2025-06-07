"use client";

import { motion } from "framer-motion";
import { TextMaskAnimation } from "@/components/animation/TextMaskAnimation";
import { useRef } from "react";

interface HeroSectionProps {
  headline: string;
}

export function HeroSection({ headline }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation variants for the container
  const containerVariants = {
    initial: {
      scale: 0.5,
      top: "50%",
      translateY: "-50%",
      translateX: "-50%",
    },
    animate: {
      scale: [0.5, 1, 1],
      top: ["50%", "50%", "5%"],
      translateY: ["-50%", "-50%", "0%"],
      translateX: "-50%",
      transition: {
        duration: 2.5,
        times: [0, 0.4, 1],
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative h-screen flex justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Text container that animates from center to top */}
      <motion.div
        className="absolute left-1/2 z-10"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{ position: "absolute" }}
      >
        <TextMaskAnimation
          phrases={["WELCOME"]}
          className="text-5xl md:text-7xl tracking-wide text-white"
          threshold={0.1}
          delayMultiplier={0.1}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <p className="text-white text-lg sm:text-2xl mb-2">Scroll Down</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
