"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import { fadeIn } from "@/lib/animations";
import { TextMaskAnimation } from "@/components/animation/TextMaskAnimation";
import { useRef } from "react";
import Image from "next/image";

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
  // date,
  // location,
  // backgroundImage,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);

  const contentContainer = {
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
    <section ref={sectionRef} className="relative h-screen flex  justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          // src={backgroundImage}
          // src={'https://images.unsplash.com/photo-1654371973188-e7831a51086f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          // src={'https://images.unsplash.com/photo-1556446384-0c6fd6c8e673?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          src={
            "https://cdn.prod.website-files.com/634e5ccdbca7e77e1d981e22/63dce7a0242fd1370f177479_DLP-MEGAN%2BOLIVER-CURATEDMIX(002of922).png"
          }
          fill
          priority
          alt="Background"
          className="object-cover"
          style={{
            objectPosition: "55% center",
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Content */}
      <motion.div
        variants={contentContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center mt-20 text-white px-4 max-w-3xl"
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

        {/* <motion.div variants={fadeIn(0.2)} className="w-24 h-[1px] bg-white/70 mx-auto my-8" />

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
        </div> */}

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
        className="absolute bottom-30 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
      >
        <p className="text-white text-lg   sm:text-2xl mb-2">Scroll Down</p>
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
