"use client";

import { motion, Variants } from "framer-motion";
import { TextMaskAnimation } from "@/components/animation/TextMaskAnimation";
import { useRef, useState, useEffect, useMemo } from "react";
import { textColor } from "@/lib/theme";
import Image from "next/image";
import Counter from "@/blocks/Components/Counter/Counter";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const weddingDate = useMemo(() => new Date("2026-01-05T00:00:00"), []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

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
          phrases={["You're Invited"]}
          className={`text-6xl md:text-7xl tracking-wide font-shrikhand ${textColor.lightTaupe} `}
          threshold={0.1}
          delayMultiplier={0.1}
        />
      </motion.div>

      {/* Wedding Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center space-y-6"
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-white">
          To Our Big Day
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {/* Days */}
          <div className="flex flex-col items-center space-y-2">
            <Counter
              value={countdown.days}
              fontSize={28}
              places={[100, 10, 1]}
              textColor="white"
              containerStyle={{ 
                backgroundColor: "rgba(0, 0, 0, 0.4)", 
                borderRadius: "12px", 
                padding: "12px",
                backdropFilter: "blur(10px)"
              }}
              gradientFrom="transparent"
              gradientTo="transparent"
            />
            <span className="text-sm md:text-base font-semibold text-white">Days</span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center space-y-2">
            <Counter
              value={countdown.hours}
              fontSize={28}
              places={[10, 1]}
              textColor="white"
              containerStyle={{ 
                backgroundColor: "rgba(0, 0, 0, 0.4)", 
                borderRadius: "12px", 
                padding: "12px",
                backdropFilter: "blur(10px)"
              }}
              gradientFrom="transparent"
              gradientTo="transparent"
            />
            <span className="text-sm md:text-base font-semibold text-white">Hours</span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center space-y-2">
            <Counter
              value={countdown.minutes}
              fontSize={28}
              places={[10, 1]}
              textColor="white"
              containerStyle={{ 
                backgroundColor: "rgba(0, 0, 0, 0.4)", 
                borderRadius: "12px", 
                padding: "12px",
                backdropFilter: "blur(10px)"
              }}
              gradientFrom="transparent"
              gradientTo="transparent"
            />
            <span className="text-sm md:text-base font-semibold text-white">Minutes</span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center space-y-2">
            <Counter
              value={countdown.seconds}
              fontSize={28}
              places={[10, 1]}
              textColor="white"
              containerStyle={{ 
                backgroundColor: "rgba(0, 0, 0, 0.4)", 
                borderRadius: "12px", 
                padding: "12px",
                backdropFilter: "blur(10px)"
              }}
              gradientFrom="transparent"
              gradientTo="transparent"
            />
            <span className="text-sm md:text-base font-semibold text-white">Seconds</span>
          </div>
        </div>

        <p className="text-sm md:text-base text-center font-medium text-white mt-2">
          January 5th, 2026
        </p>
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
