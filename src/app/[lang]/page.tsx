import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/layout/HeroSection";
import { StorySection } from "@/components/layout/StorySection";
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

  // Sample story data
  const stories = [
    {
      title: dictionary.story.howWeMet.title,
      date: dictionary.story.howWeMet.date,
      description: dictionary.story.howWeMet.description,
      image: "/images/0016.jpg",
    },
    {
      title: dictionary.story.firstDate.title,
      date: dictionary.story.firstDate.date,
      description: dictionary.story.firstDate.description,
      image: "/images/0017.jpg",
    },
    {
      title: dictionary.story.proposal.title,
      date: dictionary.story.proposal.date,
      description: dictionary.story.proposal.description,
      image: "/images/0018.jpg",
    },
  ];

  // Sample event details
  const events = [
    {
      title: dictionary.details.ceremony.title,
      date: dictionary.details.ceremony.date,
      time: dictionary.details.ceremony.time,
      location: dictionary.details.ceremony.location,
      description: dictionary.details.ceremony.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
        </svg>
      ),
    },
    {
      title: dictionary.details.reception.title,
      date: dictionary.details.reception.date,
      time: dictionary.details.reception.time,
      location: dictionary.details.reception.location,
      description: dictionary.details.reception.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
          <path d="M19 3v2H5" />
          <path d="M22 6v11" />
        </svg>
      ),
    },
    {
      title: dictionary.details.farewell.title,
      date: dictionary.details.farewell.date,
      time: dictionary.details.farewell.time,
      location: dictionary.details.farewell.location,
      description: dictionary.details.farewell.description,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
  ];

  return (
    <MainLayout transparentHeader={true} dictionary={dictionary}>
      <HeroSection
        title={dictionary.hero.title}
        subtitle={dictionary.hero.subtitle}
        date={dictionary.hero.date}
        location={dictionary.hero.location}
        backgroundImage="/images/1.jpg"
      />
      <StorySection stories={stories} />
      <DetailsSection events={events} />
      <GallerySection images={GALLERY_IMAGES} />
      <RSVPSection />
    </MainLayout>
  );
}
