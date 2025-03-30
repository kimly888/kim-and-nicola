'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLenis } from '@/hooks/useLenis';

interface SectionMaskTransitionProps {
  firstSectionBgColor?: string;
  secondSectionBgColor?: string;
  maskSvgPath?: string;
  maskSizeMin?: number;
  maskSizeMax?: number;
  firstSectionContent?: ReactNode;
  secondSectionContent?: ReactNode;
}

export default function SectionMaskTransition({
  firstSectionBgColor = '#000000',
  secondSectionBgColor = '#ffffff',
  maskSvgPath = 'M23.9985 0C13.6487 5.75593 10.3483 5.75593 1.90735e-06 -1.04907e-06C6.2773 9.48652 6.2773 12.5135 9.45698e-07 22C10.3498 16.2455 13.6502 16.2455 24 22C17.7212 12.5135 17.7212 9.4879 23.9985 0Z',
  maskSizeMin = 3.375,
  maskSizeMax = 54,
  firstSectionContent,
  secondSectionContent,
}: SectionMaskTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  
  // Set up scroll animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  // Transform the mask size based on scroll position
  const maskSize = useTransform(
    scrollYProgress, 
    [0.3, 0.7], 
    [`${maskSizeMin}rem`, `${maskSizeMax}rem`]
  );

  // Create opacity for content based on scroll position
  const firstContentOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [1, 0]
  );

  const secondContentOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    [0, 1]
  );
  
  // Create the SVG data URL
  const svgUrl = `data:image/svg+xml;base64,${btoa(
    `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${maskSvgPath}" fill="black" /></svg>`
  )}`;
  
  return (
    <div 
      ref={containerRef} 
      className="relative h-[100vh] w-full overflow-hidden"
      onClick={() => {
        // Smooth scroll to the next section when clicked
        if (lenis) {
          const nextSection = containerRef.current?.nextElementSibling;
          if (nextSection && nextSection instanceof HTMLElement) {
            lenis.scrollTo(nextSection);
          }
        }
      }}
    >
      {/* First section (background) */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: firstSectionBgColor }}
      >
        {firstSectionContent && (
          <motion.div 
            className="relative z-10 h-full w-full"
            style={{ opacity: firstContentOpacity }}
          >
            {firstSectionContent}
          </motion.div>
        )}
      </div>
      
      {/* Second section with mask */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundColor: secondSectionBgColor,
          maskImage: `url("${svgUrl}")`,
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url("${svgUrl}")`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskSize,
          WebkitMaskSize: maskSize,
        }}
      >
        {secondSectionContent && (
          <motion.div 
            className="relative z-10 h-full w-full"
            style={{ opacity: secondContentOpacity }}
          >
            {secondSectionContent}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 