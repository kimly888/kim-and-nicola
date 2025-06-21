"use client";

import { SectionCard } from "./SectionCard";

interface AttireSectionProps {
  attire: {
    title: string;
    note: string;
    women: {
      title: string;
      guidelines: string[];
      note: string;
    };
    men: {
      title: string;
      guidelines: string[];
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

export function AttireSection({
  attire,
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
  backgroundColor,
  textColor,
}: AttireSectionProps) {
  return (
    <SectionCard
      id={id}
      sectionNumber={`${stackIndex}`}
      title={attire.title}
      icon={attire.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{attire.women.title}</h3>
          <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm md:text-base lg:text-lg xl:text-xl">
            {attire.women.guidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
          <p className="italic text-sm md:text-base lg:text-lg xl:text-xl">{attire.women.note}</p>
        </div>

        <div className="space-y-3 md:space-y-4">
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{attire.men.title}</h3>
          <ul className="list-disc pl-4 md:pl-6 space-y-1 md:space-y-2 text-sm md:text-base lg:text-lg xl:text-xl">
            {attire.men.guidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
        </div>

        <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg xl:text-xl">{attire.note}</p>
      </div>
    </SectionCard>
  );
}
