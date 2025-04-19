"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

interface EnhancedTravelSectionProps {
  travel: {
    title: string;
    intro: string;
    closestAirport: string;
    options: string[];
    alternatives: {
      title: string;
      options: string[];
    };
    tip: string;
    icon: React.ReactNode;
  };
  backgroundImage?: string;
  enableParallax?: boolean;
  id?: string;
}

export function EnhancedTravelSection({ 
  travel, 
  backgroundImage,
  enableParallax = false,
  id
}: EnhancedTravelSectionProps) {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background with optional parallax effect */}
      {backgroundImage && (
        <motion.div 
          style={enableParallax ? { y } : {}} 
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>
      )}

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="max-w-4xl mx-auto bg-background/90 backdrop-blur-sm p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              {travel.icon}
            </div>
            <h2 className="text-2xl font-serif">{travel.title}</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">{travel.intro}</p>
            
            <div>
              <h3 className="font-medium mb-2">{travel.closestAirport}</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                {travel.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">{travel.alternatives.title}</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                {travel.alternatives.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-muted-foreground italic">{travel.tip}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 