"use client";

import { SectionCard } from "./SectionCard";

interface InfoSectionProps {
  info: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  backgroundImage?: string;
  enableParallax?: boolean;
  id?: string;
  stackIndex?: number;
}

export function InfoSection({ 
  info, 
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
}: InfoSectionProps) {
  return (
    <SectionCard
      id={id}
      title={info.title}
      icon={info.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
    >
      <div className="space-y-4">
        <p className="text-[#653e00]/80 text-lg leading-relaxed">{info.description}</p>
      </div>
    </SectionCard>
  );
} 