"use client";

import { motion } from 'framer-motion';
import { useAnimationOnScroll } from '@/hooks/useAnimationOnScroll';
import { RSVPForm } from '@/components/rsvp/RSVPForm';
import { fadeIn } from '@/lib/animations';

export function RSVPSection() {
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">RSVP</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We would be honored to have you join us on our special day. Please let us know if you can make it.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn(0.3)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <RSVPForm />
        </motion.div>
      </div>
    </section>
  );
} 