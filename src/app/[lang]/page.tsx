import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/layout/HeroSection";
import { DetailsSection } from "@/components/layout/DetailsSection";
import { GallerySection } from "@/components/layout/GallerySection";
import { RSVPSection } from "@/components/layout/RSVPSection";
import { StickerGallery } from "@/components/effects/StickerGallery";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { GALLERY_IMAGES } from "@/lib/constants/images";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  // Await the params object before destructuring
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const detailsWithIcons = {
    ...dictionary.details,
    welcome: {
      ...dictionary.details.welcome,
      icon: "👋",
    },
    venue: {
      ...dictionary.details.venue,
      icon: "🏰",
    },
    schedule: {
      ...dictionary.details.schedule,
      icon: "🗓️",
    },
    attire: {
      ...dictionary.details.attire,
      icon: "👔",
    },
    accommodation: {
      ...dictionary.details.accommodation,
      icon: "🏘️",
    },
    travel: {
      ...dictionary.details.travel,
      icon: "🚗",
    },
    travelSpots: {
      ...dictionary.details.travelSpots,
      icon: "🗺️",
    },
    gifts: {
      ...dictionary.details.gifts,
      icon: "🎁",
    },
  };

  return (
    <MainLayout transparentHeader={true} dictionary={dictionary}>
      <HeroSection />
      <DetailsSection details={detailsWithIcons} />
      <GallerySection images={GALLERY_IMAGES} useParallaxEffect />
      <StickerGallery dictionary={dictionary} />
      <RSVPSection />
    </MainLayout>
  );
}
