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
      <div className="space-y-4 md:space-y-6">
        <p className="text-base lg:text-lg xl:text-xl leading-relaxed">{accommodation.description}</p>

        <div>
          <h3 className="font-medium mb-2 md:mb-3 text-base md:text-lg lg:text-xl xl:text-2xl">{accommodation.alternatives.title}</h3>
          <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-base lg:text-lg xl:text-xl">
            {accommodation.alternatives.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionCard>
  );
}
