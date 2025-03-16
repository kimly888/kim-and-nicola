import { MainLayout } from '@/components/layout/MainLayout';
import { HeroSection } from '@/components/layout/HeroSection';
import { StorySection } from '@/components/layout/StorySection';
import { DetailsSection } from '@/components/layout/DetailsSection';
import { GallerySection } from '@/components/layout/GallerySection';
import { RSVPSection } from '@/components/layout/RSVPSection';

export default function Home() {
  // Sample story data
  const stories = [
    {
      title: 'How We Met',
      date: 'June 15, 2018',
      description: 'We first crossed paths at a mutual friend\'s birthday party. What started as a casual conversation about our shared love for travel turned into hours of talking and laughing. We exchanged numbers that night, and the rest, as they say, is history.',
      image: '/images/0016.jpg',
    },
    {
      title: 'Our First Date',
      date: 'July 3, 2018',
      description: 'For our first date, we went to a small Italian restaurant downtown. We talked for hours over pasta and wine, losing track of time completely. The waiter had to politely let us know they were closing!',
      image: '/images/0017.jpg',
    },
    {
      title: 'The Proposal',
      date: 'December 24, 2022',
      description: 'On Christmas Eve, during a trip to the mountains, we went for a sunset hike to a beautiful overlook. As the sky turned pink and gold, I got down on one knee and asked the most important question of my life. And she said yes!',
      image: '/images/0018.jpg',
    },
  ];

  // Sample event details
  const events = [
    {
      title: 'Ceremony',
      date: 'Sunday, January 5, 2026',
      time: '3:00 PM - 4:00 PM',
      location: 'Davenport House,Worfield, Bridgnorth WV15 5LE, United Kingdom',
      description: 'Join us as we exchange vows and begin our journey together as a married couple.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
        </svg>
      ),
    },
    {
      title: 'Reception',
      date: 'Sunday, January 5, 2026',
      time: '5:00 PM - 11:00 PM',
      location: 'Worfield, Bridgnorth WV15 5LE, United Kingdom',
      description: 'Celebrate with us with dinner, dancing, and festivities throughout the evening.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
          <path d="M19 3v2H5" />
          <path d="M22 6v11" />
        </svg>
      ),
    },
    {
      title: 'Farewell Brunch',
      date: 'Monday, January 6, 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'Davenport House, Worfield, Bridgnorth WV15 5LE, United Kingdom',
      description: 'Join us for a casual brunch to say goodbye before we depart for our honeymoon.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
  ];

  // Sample gallery images
  const galleryImages = [
    {
      src: '/images/0019.jpg',
      alt: 'Kim and Nicola at the beach',
      width: 800,
      height: 800,
    },
    {
      src: '/images/0020.jpg',
      alt: 'Kim and Nicola hiking',
      width: 800,
      height: 800,
    },
    {
      src: '/images/0021.jpg',
      alt: 'Kim and Nicola at a restaurant',
      width: 800,
      height: 800,
    },
    {
      src: '/images/0022.jpg',
      alt: 'Kim and Nicola traveling',
      width: 800,
      height: 800,
    },
    {
      src: '/images/0023.jpg',
      alt: 'Kim and Nicola at a concert',
      width: 800,
      height: 800,
    },
    {
      src: '/images/0024.jpg',
      alt: 'Kim and Nicola at home',
      width: 800,
      height: 800,
    },
    {
      src: '/images/0025.jpg',
      alt: 'Kim and Nicola with friends',
      width: 800,
      height: 800,
    },
    {
      src: '/images/0026.jpg',
      alt: 'Kim and Nicola engagement photo',
      width: 800,
      height: 800,
    },
  ];

  return (
    <MainLayout transparentHeader={true}>
      <HeroSection
        title="Kim & Nicola"
        subtitle="WE'RE GETTING MARRIED"
        date="January 5, 2026"
        location="Worfield, Bridgnorth WV15 5LE, United Kingdom"
        backgroundImage="/images/0027.jpg"
      />
      <StorySection stories={stories} />
      <DetailsSection events={events} />
      <GallerySection images={galleryImages} />
      <RSVPSection />
    </MainLayout>
  );
}
