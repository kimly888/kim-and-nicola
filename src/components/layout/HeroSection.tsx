"use client";

import { motion, Variants } from "framer-motion";
import { TextMaskAnimation } from "@/components/animation/TextMaskAnimation";
import { useRef } from "react";
import { textColor } from "@/lib/theme";
import Image from "next/image";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation variants for the container
  const containerVariants: Variants = {
    initial: {
      scale: 0.5,
      top: "50%",
      y: "-50%",
      x: "-50%",
    },
    animate: {
      scale: [0.5, 1, 1],
      top: ["50%", "50%", "5%"],
      y: ["-50%", "-50%", "0%"],
      x: "-50%",
      transition: {
        duration: 2.5,
        times: [0, 0.4, 1],
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className={`relative h-screen flex justify-center overflow-hidden`}
      data-hero-section
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/1.jpg"
          alt="Kim and Nicola"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Floating Stickers */}
      {/* <FloatingStickers count={8} className="z-5" /> */}

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
          className={`text-5xl md:text-8xl tracking-wide font-shrikhand ${textColor.lightTaupe} `}
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
