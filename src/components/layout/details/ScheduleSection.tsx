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
}

export function ScheduleSection({ 
  schedule, 
  backgroundImage,
  enableParallax = false,
  id,
  stackIndex = 0,
}: ScheduleSectionProps) {
  return (
    <SectionCard
      id={id}
      title={schedule.title}
      icon={schedule.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
      stackIndex={stackIndex}
    >
      {schedule.disclaimer && (
        <div className="mb-6 italic text-[#653e00]/80">{schedule.disclaimer}</div>
      )}
      
      <div className="space-y-4">
        {schedule.items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="font-medium min-w-[120px] text-[#653e00]">{item.time}</div>
            <div className="text-[#653e00]/80">{item.event}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
} 