import { ParallaxGallery } from "@/components/layout/ParallaxGallery";

// Demo images - limit to 7 images to match original implementation
const galleryImages = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
  width: 800,
  height: 600,
}));

export default function GalleryParallaxPage() {
  return (
    <main className="min-h-screen">
      <div className="h-screen flex items-center justify-center bg-muted/5">
        <div className="text-center">
          <h1 className="text-5xl font-serif mb-6">Gallery Parallax Effect</h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Scroll down to experience the zoom parallax effect with our gallery images.
          </p>
        </div>
      </div>

      <ParallaxGallery 
        images={galleryImages} 
        title="Our Memories" 
        description="Explore our journey together through these special moments."
      />
      
      <div className="h-screen flex items-center justify-center bg-muted/5">
        <div className="text-center">
          <h2 className="text-3xl font-serif mb-4">Continue Exploring</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The parallax effect adds depth and engagement to your photo gallery.
          </p>
        </div>
      </div>
    </main>
  );
} 