"use client";

import { SectionCard } from "./SectionCard";

interface EnhancedAccommodationSectionProps {
  accommodation: {
    title: string;
    description: string;
    alternatives: {
      title: string;
      options: string[];
    };
    icon: React.ReactNode;
  };
  backgroundImage?: string;
  enableParallax?: boolean;
  id?: string;
}

export function EnhancedAccommodationSection({ 
  accommodation, 
  backgroundImage,
  enableParallax = false,
  id
}: EnhancedAccommodationSectionProps) {
  return (
    <SectionCard
      id={id}
      title={accommodation.title}
      icon={accommodation.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
    >
      <div className="space-y-6">
        <p className="text-muted-foreground">{accommodation.description}</p>
        
        <div>
          <h3 className="font-medium mb-3">{accommodation.alternatives.title}</h3>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            {accommodation.alternatives.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionCard>
  );
} 