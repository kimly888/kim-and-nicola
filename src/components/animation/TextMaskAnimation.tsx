'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TextMaskAnimationProps {
  phrases: string[];
  className?: string;
  threshold?: number;
  delayMultiplier?: number;
  duration?: number;
}

export function TextMaskAnimation({
  phrases,
  className = '',
  threshold = 0.75,
  delayMultiplier = 0.075,
  duration = 0.75,
}: TextMaskAnimationProps) {
  const animation = {
    initial: { y: '100%' },
    enter: (i: number) => ({
      y: '0',
      transition: {
        duration,
        ease: [0.33, 1, 0.68, 1],
        delay: delayMultiplier * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? 'enter' : ''}
            className="m-0"
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
} 