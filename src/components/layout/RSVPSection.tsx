"use client";

import { motion } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import { RSVPForm } from "@/components/rsvp/RSVPForm";
import { fadeIn } from "@/lib/animations";
import { textColor } from "@/lib/theme";
import { Dictionary } from "@/dictionaries";

interface RSVPSectionProps {
  dictionary: Dictionary;
}

export function RSVPSection({ dictionary }: RSVPSectionProps) {
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="rsvp" className={`py-20 ${textColor.lightTaupe}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-4 font-bold font-shrikhand">{dictionary.rsvp.title}</h2>
          <p className="max-w-2xl mx-auto">
            {dictionary.rsvp.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <RSVPForm dictionary={dictionary} />
        </motion.div>
      </div>
    </section>
  );
}
