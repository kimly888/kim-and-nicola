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
  backgroundColor?: string;
  textColor?: string;
}

export function InfoSection({
  info,
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
  backgroundColor,
  textColor,
}: InfoSectionProps) {
  return (
    <SectionCard
      id={id}
      sectionNumber={`${stackIndex}`}
      title={info.title}
      icon={info.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <div className="space-y-3 md:space-y-4">
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">{info.description}</p>
      </div>
    </SectionCard>
  );
}
