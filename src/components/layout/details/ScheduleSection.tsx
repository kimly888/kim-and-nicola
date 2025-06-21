"use client";

import { SectionCard } from "./SectionCard";

interface ScheduleSectionProps {
  schedule: {
    title: string;
    disclaimer?: string;
    items: {
      time: string;
      event: string;
    }[];
    icon: React.ReactNode;
  };
  backgroundImage?: string;
  enableParallax?: boolean;
  id?: string;
  stackIndex?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function ScheduleSection({
  schedule,
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
  backgroundColor,
  textColor,
}: ScheduleSectionProps) {
  return (
    <SectionCard
      id={id}
      sectionNumber={`${stackIndex}`}
      title={schedule.title}
      icon={schedule.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {schedule.disclaimer && <div className="mb-6 italic">{schedule.disclaimer}</div>}

      <div className="space-y-4">
        {schedule.items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="font-medium min-w-[120px]" style={{ color: textColor }}>
              {item.time}
            </div>
            <div>{item.event}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
