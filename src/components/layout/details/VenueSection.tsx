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
}

export function VenueSection({
  venue,
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
}: VenueSectionProps) {
  const venueKeywords = ["Ceremony", "Reception", "Celebration", "Gathering", "Memories", "Love"];

  return (
    <SectionCard
      id={id}
      sectionNumber="(01)"
      icon={venue.icon}
      title={venue.title}
      tags={venueKeywords}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
    >
      <div className="flex-1">
        <p className="text-[#653e00] text-lg lg:text-xl leading-relaxed max-w-lg font-medium">
          {venue.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-6 max-w-sm">
          {venueKeywords?.map((keyword, index) => (
            <motion.span
              key={keyword}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="px-4 py-2 bg-white/50 backdrop-blur-sm text-[#653e00] font-medium rounded-full text-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
