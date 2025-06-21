"use client";

import { SectionCard } from "./SectionCard";

interface TravelSpotsSectionProps {
  travelSpots: {
    title: string;
    intro: string;
    spots: string[];
    icon: React.ReactNode;
  };
  backgroundImage?: string;
  enableParallax?: boolean;
  id?: string;
  stackIndex?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function TravelSpotsSection({ 
  travelSpots, 
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
  backgroundColor,
  textColor,
}: TravelSpotsSectionProps) {
  return (
    <SectionCard
      id={id}
      sectionNumber={`${stackIndex}`}
      title={travelSpots.title}
      icon={travelSpots.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div className="space-y-4 md:space-y-6">
        <p className="text-base lg:text-lg xl:text-xl leading-relaxed">{travelSpots.intro}</p>
        
        <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-base lg:text-lg xl:text-xl">
          {travelSpots.spots.map((spot, index) => (
            <li key={index}>{spot}</li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
} 