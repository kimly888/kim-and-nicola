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
}

export function AttireSection({
  attire,
  backgroundImage,
  enableParallax = false,
  id,
}: AttireSectionProps) {
  return (
    <SectionCard
      id={id}
      title={attire.title}
      icon={attire.icon}
      
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-serif">{attire.women.title}</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            {attire.women.guidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
          <p className="text-muted-foreground italic">{attire.women.note}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-serif">{attire.men.title}</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            {attire.men.guidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
        </div>

        <p className="text-muted-foreground mt-4">{attire.note}</p>
      </div>
    </SectionCard>
  );
}
