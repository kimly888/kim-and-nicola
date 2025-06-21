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
      {schedule.disclaimer && (
        <div className="mb-4 md:mb-6 italic text-sm md:text-base lg:text-lg xl:text-xl font-bold">
          {schedule.disclaimer}
        </div>
      )}

      <div className="space-y-3 md:space-y-4">
        {schedule.items.map((item, index) => (
          <div key={index} className="flex flex-row gap-2 sm:gap-4">
            <div className="font-bold text-sm md:text-base lg:text-lg xl:text-xl max-w-[55px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px]">
              {item.time}
            </div>
            <div className="text-sm md:text-base lg:text-lg xl:text-xl">{item.event}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
