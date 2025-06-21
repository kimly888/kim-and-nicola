"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

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
        height: "100dvh" // Full viewport height for proper stacking
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
          color: textColor
        }}
        className={`relative container rounded-4xl min-h-[600px] flex flex-col space-y-6 p-12 lg:p-16 mx-auto border-8 border-white ${className}`}
      >
        {/* Header with title, icon, and number */}
        {(title || icon || sectionNumber) && (
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {icon && (
                <div className="w-12 h-12 flex items-center justify-center" style={{ color: textColor }}>
                  {icon}
                </div>
              )}
              {title && (
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: textColor }}>
                  {title}
                </h2>
              )}
            </div>

            {sectionNumber && (
              <span 
                className="text-2xl lg:text-3xl font-bold bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
                style={{ color: textColor }}
              >
                {`(${sectionNumber})`}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        {children}

        {/* Background Image for card variant */}
        <div className="relative lg:block">
          {backgroundImage ? (
            <motion.div 
              className="absolute inset-0"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
              <div className="absolute inset-0" />
            </motion.div>
          ) : (
            <div className="absolute inset-0 opacity-30" />
          )}
        </div>
      </motion.div>
    </section>
  );
}
