"use client";

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
      <div className="flex flex-col md:flex-row flex-1 gap-8">
        <p className="text-md lg:text-xl leading-relaxed max-w-lg mb-4">
          {venue.description}
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.737803607142!2d-2.3648775000000004!3d52.556267500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870870c81731745%3A0xb7fa4eadb3f3997c!2sDavenport%20House!5e0!3m2!1sen!2sjp!4v1750551594885!5m2!1sen!2sjp"
          width="100%"
          height="200px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </SectionCard>
  );
}
