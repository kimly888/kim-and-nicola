"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { TextMaskAnimation } from "@/components/animation/TextMaskAnimation";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  backgroundImage: string;
}

export function HeroSection({
  title,
  subtitle,
  date,
  location,
  backgroundImage,
}: HeroSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center text-white px-4 max-w-3xl"
      >
        <TextMaskAnimation
          phrases={[title]}
          className="text-5xl md:text-7xl font-serif mb-6 tracking-wide"
          threshold={0.5}
          delayMultiplier={0.1}
        />

        <TextMaskAnimation
          phrases={[subtitle]}
          className="text-lg md:text-xl font-light tracking-wider mb-4"
          threshold={0.5}
          delayMultiplier={0.1}
        />

        <motion.div variants={fadeIn(0.2)} className="w-24 h-[1px] bg-white/70 mx-auto my-8" />

        <div className="space-y-2 mb-10">
          <TextMaskAnimation
            phrases={[date]}
            className="text-xl md:text-2xl font-light"
            threshold={0.5}
            delayMultiplier={0.15}
          />

          <TextMaskAnimation
            phrases={[location]}
            className="text-lg md:text-xl font-light"
            threshold={0.5}
            delayMultiplier={0.25}
          />
        </div>

        {/* <motion.div variants={fadeIn(1)}>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/#rsvp">RSVP Now</Link>
          </Button>
        </motion.div> */}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-white text-sm mb-2">Scroll Down</p>
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
