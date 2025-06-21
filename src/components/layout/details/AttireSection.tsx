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
}

export function AttireSection({
  attire,
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
}: AttireSectionProps) {
  return (
    <SectionCard
      id={id}
      title={attire.title}
      icon={attire.icon}
      
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-serif text-[#653e00]">{attire.women.title}</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#653e00]/80">
            {attire.women.guidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
          <p className="text-[#653e00]/80 italic">{attire.women.note}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-serif text-[#653e00]">{attire.men.title}</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#653e00]/80">
            {attire.men.guidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
        </div>

        <p className="text-[#653e00]/80 mt-4">{attire.note}</p>
      </div>
    </SectionCard>
  );
}
