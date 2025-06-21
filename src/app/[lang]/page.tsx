import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/layout/HeroSection";
import { DetailsSection } from "@/components/layout/DetailsSection";
import { GallerySection } from "@/components/layout/GallerySection";
import { RSVPSection } from "@/components/layout/RSVPSection";
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
      icon: <span className="text-4xl">👋</span>,
    },
    venue: {
      ...dictionary.details.venue,
      icon: <span className="text-4xl">🏰</span>,
    },
    schedule: {
      ...dictionary.details.schedule,
      icon: <span className="text-4xl">🗓️</span>,
    },
    attire: {
      ...dictionary.details.attire,
      icon: <span className="text-4xl">👔</span>,
    },
    accommodation: {
      ...dictionary.details.accommodation,
      icon: <span className="text-4xl">🏘️</span>,
    },
    travel: {
      ...dictionary.details.travel,
      icon: <span className="text-4xl">🚗</span>,
    },
    travelSpots: dictionary.details.travelSpots
      ? {
          ...dictionary.details.travelSpots,
          icon: <span className="text-4xl">🗺️</span>,
        }
      : undefined,
    gifts: {
      ...dictionary.details.gifts,
      icon: <span className="text-4xl">🎁</span>,
    },
  };

  return (
    <MainLayout transparentHeader={true} dictionary={dictionary}>
      <HeroSection />
      <DetailsSection details={detailsWithIcons} />
      <GallerySection images={GALLERY_IMAGES} useParallaxEffect />
      <RSVPSection />
    </MainLayout>
  );
}
