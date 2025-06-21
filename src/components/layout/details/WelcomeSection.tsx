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
}

export function WelcomeSection({ welcome, stackIndex = 0 }: WelcomeSectionProps) {
  return (
    <SectionCard
      title={welcome.title}
      icon={welcome.icon}
      stackIndex={stackIndex}
    >
      <p className="text-[#653e00] text-3xl lg:text-5xl font-semibold leading-tight mb-4">
        {welcome.sections.map((section) => section.text).join(" ")}
      </p>
    </SectionCard>
  );
}
