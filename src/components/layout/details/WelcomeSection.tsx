"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";

interface WelcomeSectionProps {
  welcome: {
    title: string;
    sections: {
      id: string;
      text: string;
    }[];
    icon: React.ReactNode;
  };
  id?: string;
}

export function WelcomeSection({ welcome, id }: WelcomeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id={id} ref={sectionRef} className="relative py-20">
      <div className="container  z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <p className="text-white text-5xl font-semibold leading-tight mb-4">
            {welcome.sections.map((section) => section.text).join(" ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
