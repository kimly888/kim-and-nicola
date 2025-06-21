"use client";

import { motion } from "framer-motion";
import { SectionCard } from "./SectionCard";

interface VenueSectionProps {
  venue: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  backgroundImage?: string;
  enableParallax?: boolean;
  id?: string;
  stackIndex?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function VenueSection({
  venue,
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
  backgroundColor,
  textColor,
}: VenueSectionProps) {
  const venueKeywords = ["Ceremony", "Reception", "Celebration", "Gathering", "Memories", "Love"];

  return (
    <SectionCard
      id={id}
      sectionNumber={`${stackIndex}`}
      icon={venue.icon}
      title={venue.title}
      tags={venueKeywords}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div className="flex-1">
        <p className="text-lg lg:text-xl leading-relaxed max-w-lg font-medium" style={{ color: textColor }}>
          {venue.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-6 max-w-sm">
          {venueKeywords?.map((keyword, index) => (
            <motion.span
              key={keyword}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="px-4 py-2 bg-white/50 backdrop-blur-sm font-medium rounded-full text-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
              style={{ color: textColor }}
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
