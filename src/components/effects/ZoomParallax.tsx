"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import styles from "./ZoomParallax.module.scss";

interface ZoomParallaxProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  
  // Define different scale factors for dramatic effect
  const scales = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 8]),
    useTransform(scrollYProgress, [0, 1], [1, 9]),
  ];
  
  // Create pictures array with image src and scale
  const pictures = images.map((image, i) => ({
    src: image.src,
    alt: image.alt,
    scale: scales[i % scales.length]
  }));

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, alt, scale }, index) => (
          <motion.div 
            key={`img-${index}`}
            className={styles.el}
            style={{ scale }}
          >
            <div className={styles.imageContainer}>
              <Image 
                src={src} 
                alt={alt}
                fill
                className={styles.image}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 