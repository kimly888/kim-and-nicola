"use client";

import { SectionCard } from "./SectionCard";

interface WelcomeSectionProps {
  welcome: {
    title: string;
    sections: {
      id: string;
      text: string;
    }[];
    icon: React.ReactNode;
  };
  stackIndex?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function WelcomeSection({
  welcome,
  stackIndex = 0,
  backgroundColor,
  textColor,
}: WelcomeSectionProps) {
  return (
    <SectionCard
      title={welcome.title}
      icon={welcome.icon}
      stackIndex={stackIndex}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <p className="text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-7xl font-medium leading-tight mb-4">
        {welcome.sections.map((section) => section.text).join(" ")}
      </p>
    </SectionCard>
  );
}
