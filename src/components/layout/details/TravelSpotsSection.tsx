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
}

export function TravelSpotsSection({ 
  travelSpots, 
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
}: TravelSpotsSectionProps) {
  return (
    <SectionCard
      id={id}
      title={travelSpots.title}
      icon={travelSpots.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
    >
      <div className="space-y-6">
        <p className="text-[#653e00]/80">{travelSpots.intro}</p>
        
        <ul className="list-disc pl-5 text-[#653e00]/80 space-y-2">
          {travelSpots.spots.map((spot, index) => (
            <li key={index}>{spot}</li>
          ))}
        </ul>
      </div>
    </SectionCard>
  );
} 