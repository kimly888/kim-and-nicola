"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import { bgColor } from "@/lib/theme";

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
}

export function SectionCard({
  id,
  backgroundImage,
  enableParallax = false,
  sectionNumber,
  title,
  children,
  icon,
  className = "",
}: SectionCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Set up parallax effect if enabled
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative sticky top-10 flex items-center justify-center overflow-hidden py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
        className={`relative container rounded-3xl min-h-[600px] flex flex-col space-y-6 p-12 lg:p-16 ${bgColor.champagne} shadow-2xl mx-auto ${className}`}
      >
        {/* Header with title, icon, and number */}
        {(title || icon || sectionNumber) && (
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              {icon && (
                <div className="w-12 h-12 flex items-center justify-center text-[#653e00]">
                  {icon}
                </div>
              )}
              {title && (
                <h2 className="text-4xl lg:text-5xl font-bold text-[#653e00] tracking-tight">
                  {title}
                </h2>
              )}
            </div>

            {sectionNumber && (
              <span className="text-2xl lg:text-3xl font-bold text-[#653e00] bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                {sectionNumber}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        {children}

        {/* Background Image for card variant */}
        <div className="relative lg:block">
          {backgroundImage ? (
            <motion.div style={enableParallax ? { y } : {}} className="absolute inset-0">
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
