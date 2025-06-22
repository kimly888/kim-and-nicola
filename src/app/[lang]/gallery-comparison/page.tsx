"use client";

import { useState } from "react";
import { GallerySection } from "@/components/layout/GallerySection";
import { Button } from "@/components/ui/button";

// Demo images - limit to 7 images to match the original implementation
const galleryImages = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
  width: 800,
  height: 600,
}));

export default function GalleryComparisonPage() {
  const [useParallaxEffect, setUseParallaxEffect] = useState(false);

  return (
    <main className="min-h-screen">
      <div className="h-[50vh] flex flex-col items-center justify-center bg-muted/5">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-serif mb-6">Gallery Comparison</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            Compare our traditional gallery grid with the new zoom parallax effect.
          </p>
          
          <Button 
            className="text-lg px-6 py-2 transition-all duration-300"
            onClick={() => setUseParallaxEffect(!useParallaxEffect)}
          >
            {useParallaxEffect ? "Switch to Grid Gallery" : "Switch to Parallax Effect"}
          </Button>
        </div>
      </div>

      <GallerySection 
        images={galleryImages}
        title={useParallaxEffect ? "Parallax Gallery" : "Traditional Gallery"}
        description={
          useParallaxEffect 
            ? "Experience the depth and motion of our new parallax effect." 
            : "A classic grid layout showcasing our favorite moments."
        }
        useParallaxEffect={useParallaxEffect}
      />
      
      <div className="h-[30vh] flex items-center justify-center bg-muted/5">
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4">Which Do You Prefer?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Both gallery styles offer unique ways to showcase your precious memories.
          </p>
        </div>
      </div>
    </main>
  );
} 