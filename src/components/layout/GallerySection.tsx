"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAnimationOnScroll } from '@/hooks/useAnimationOnScroll';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { fadeIn, staggerContainer } from '@/lib/animations';

interface GallerySectionProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export function GallerySection({ images }: GallerySectionProps) {
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of our favorite moments together.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <GalleryItem 
              key={index} 
              image={image} 
              index={index}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full aspect-[3/2] overflow-hidden rounded-lg"
              >
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}

interface GalleryItemProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  index: number;
  onClick: () => void;
}

function GalleryItem({ image, index, onClick }: GalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn(index * 0.05)}
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/30 flex items-center justify-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      </motion.div>
    </motion.div>
  );
} 