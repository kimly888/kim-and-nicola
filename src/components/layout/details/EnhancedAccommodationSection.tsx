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
  stackIndex?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function EnhancedAccommodationSection({
  accommodation,
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
  backgroundColor,
  textColor,
}: EnhancedAccommodationSectionProps) {
  return (
    <SectionCard
      id={id}
      sectionNumber={`${stackIndex}`}
      title={accommodation.title}
      icon={accommodation.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div className="space-y-6">
        <p>{accommodation.description}</p>

        <div>
          <h3 className="font-medium mb-3">{accommodation.alternatives.title}</h3>
          <ul className="list-disc pl-5 space-y-2">
            {accommodation.alternatives.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionCard>
  );
}
