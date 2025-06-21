"use client";

import { SectionCard } from "./SectionCard";

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
  stackIndex?: number;
}

export function EnhancedTravelSection({ 
  travel, 
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
}: EnhancedTravelSectionProps) {
  return (
    <SectionCard
      id={id}
      title={travel.title}
      icon={travel.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
    >
      <div className="space-y-6">
        <p className="text-[#653e00]/80">{travel.intro}</p>
        
        <div>
          <h3 className="font-medium mb-2 text-[#653e00]">{travel.closestAirport}</h3>
          <ul className="list-disc pl-5 text-[#653e00]/80 space-y-1">
            {travel.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium mb-2 text-[#653e00]">{travel.alternatives.title}</h3>
          <ul className="list-disc pl-5 text-[#653e00]/80 space-y-1">
            {travel.alternatives.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
        
        <p className="text-[#653e00]/80 italic">{travel.tip}</p>
      </div>
    </SectionCard>
  );
} 