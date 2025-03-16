"use client";

import { motion } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

interface DetailsSectionProps {
  events: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

export function DetailsSection({ events }: DetailsSectionProps) {
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="details" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Event Details</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our wedding day.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface EventCardProps {
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
}

function EventCard({ event, index }: EventCardProps) {
  const [ref] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div ref={ref} variants={fadeIn(index * 0.1)} className="h-full">
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 flex items-center justify-center text-primary">
              {event.icon}
            </div>
            <CardTitle className="text-xl font-serif">{event.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">{event.date}</p>
            <p className="text-sm text-muted-foreground">{event.time}</p>
            <p className="text-sm text-muted-foreground">{event.location}</p>
          </div>
          <p className="text-muted-foreground text-sm">{event.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
