"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import Image from "next/image";

interface SectionCardProps {
  id?: string;
  backgroundImage?: string;
  enableParallax?: boolean;
  variant?: "champagne-card" | "overlay" | "minimal";
  sectionNumber?: string;
  title?: string;
  children?: ReactNode;
  tags?: string[];
  icon?: ReactNode;
  className?: string;
  stackIndex?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function SectionCard({
  id,
  backgroundImage,
  sectionNumber,
  title,
  children,
  icon,
  className = "",
  stackIndex = 0,
  backgroundColor = "#F7E6CA", // Default champagne
  textColor = "#653e00", // Default dark text
}: SectionCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Set up parallax effect with enhanced animations for stacking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });

  // Enhanced transforms for stacking effect
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.85, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.6, 1], [0, -50, -120]);
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, stackIndex % 2 === 0 ? -2 : 2, stackIndex % 2 === 0 ? -5 : 5]
  );

  const zIndex = stackIndex;

  return (
    <section
      id={id}
      ref={sectionRef}
      className="sticky top-0 flex items-center justify-center overflow-hidden"
      style={{
        zIndex: zIndex,
        height: "100dvh", // Full viewport height for proper stacking
      }}
    >
      <motion.div
        ref={ref}
        style={{
          scale,
          y,
          rotateZ,
          transformOrigin: "center center",
          backgroundColor,
          color: textColor,
        }}
        className={`relative container rounded-2xl md:rounded-4xl max-w-screen-lg h-fit flex flex-col space-y-4 md:space-y-6 p-6 sm:p-8 md:p-12 lg:p-16 mx-auto border-4 md:border-8 border-white ${className}`}
      >
        {/* Header with title, icon, and number */}
        {(title || icon || sectionNumber) && (
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              {icon && (
                <div className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl flex items-center justify-center">
                  {icon}
                </div>
              )}

              {title && (
                <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  {title}
                </h2>
              )}
            </div>

            {sectionNumber && (
              <span className="text-lg sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-bold rounded-full backdrop-blur-sm">
                {`(${sectionNumber})`}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto font-medium">{children}</div>

        {/* Background Image for card variant */}
        {backgroundImage && (
          <motion.div className="w-full h-full">
            <Image
              src={backgroundImage}
              alt="background"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
