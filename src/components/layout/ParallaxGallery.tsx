"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ZoomParallax from "@/components/effects/ZoomParallax";
import { DialogTitle } from "@radix-ui/react-dialog";

interface ParallaxGalleryProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  title?: string;
  description?: string;
}

export function ParallaxGallery({
  images,
  title = "Our Gallery",
  description = "A collection of our favorite moments together.",
}: ParallaxGalleryProps) {
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Limit to 7 images max for the parallax effect
  const parallaxImages = images.slice(0, 7).map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <section id="gallery" className="bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center py-20"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </motion.div>
      </div>

      {/* ZoomParallax effect - now outside the container for full-width effect */}
      <ZoomParallax images={parallaxImages} />

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogTitle></DialogTitle>
        <DialogContent className="h-full max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-[3/2] overflow-hidden rounded-lg"
            >
              <img src={selectedImage} alt="Gallery image" className="w-full h-full object-cover" />
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
