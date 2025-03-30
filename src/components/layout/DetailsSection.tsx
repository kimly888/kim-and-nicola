"use client";

import { motion } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { staggerContainer } from "@/lib/animations";

interface DetailsSectionProps {
  details: {
    title: string;
    welcome: {
      title: string;
      message: string;
      icon: React.ReactNode;
    };
    schedule: {
      title: string;
      items: {
        time: string;
        event: string;
      }[];
      icon: React.ReactNode;
    };
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
    accommodation: {
      title: string;
      description: string;
      icon: React.ReactNode;
    };
    travel: {
      title: string;
      description: string;
      icon: React.ReactNode;
    };
    gifts: {
      title: string;
      description: string;
      icon: React.ReactNode;
    };
  };
}

export function DetailsSection({ details }: DetailsSectionProps) {
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
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{details.title}</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
        >
          {/* Welcome Section */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center text-primary">
                  {details.welcome.icon}
                </div>
                <CardTitle className="text-2xl font-serif">{details.welcome.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{details.welcome.message}</p>
            </CardContent>
          </Card>

          {/* Schedule Section */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center text-primary">
                  {details.schedule.icon}
                </div>
                <CardTitle className="text-2xl font-serif">{details.schedule.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {details.schedule.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="font-medium min-w-[120px]">{item.time}</div>
                    <div className="text-muted-foreground">{item.event}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Attire Section */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center text-primary">
                  {details.attire.icon}
                </div>
                <CardTitle className="text-2xl font-serif">{details.attire.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-serif">{details.attire.women.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {details.attire.women.guidelines.map((guideline, index) => (
                    <li key={index}>{guideline}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground italic">{details.attire.women.note}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif">{details.attire.men.title}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {details.attire.men.guidelines.map((guideline, index) => (
                    <li key={index}>{guideline}</li>
                  ))}
                </ul>
              </div>

              <p className="text-muted-foreground mt-4">{details.attire.note}</p>
            </CardContent>
          </Card>

          {/* Additional Information Cards */}
          {[details.accommodation, details.travel, details.gifts].map((section, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center text-primary">
                    {section.icon}
                  </div>
                  <CardTitle className="text-2xl font-serif">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
