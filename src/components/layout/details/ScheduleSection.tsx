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
}

export function ScheduleSection({ 
  schedule, 
  backgroundImage,
  enableParallax = false,
  id
}: ScheduleSectionProps) {
  return (
    <SectionCard
      id={id}
      title={schedule.title}
      icon={schedule.icon}
      backgroundImage={backgroundImage}
      enableParallax={enableParallax}
    >
      {schedule.disclaimer && (
        <div className="mb-6 italic text-muted-foreground">{schedule.disclaimer}</div>
      )}
      
      <div className="space-y-4">
        {schedule.items.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="font-medium min-w-[120px]">{item.time}</div>
            <div className="text-muted-foreground">{item.event}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
} 