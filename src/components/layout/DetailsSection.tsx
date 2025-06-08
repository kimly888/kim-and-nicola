"use client";

import { WelcomeSection } from "./details/WelcomeSection";
import { VenueSection } from "./details/VenueSection";
import { ScheduleSection } from "./details/ScheduleSection";
import { AttireSection } from "./details/AttireSection";
import { EnhancedAccommodationSection } from "./details/EnhancedAccommodationSection";
import { EnhancedTravelSection } from "./details/EnhancedTravelSection";
import { TravelSpotsSection } from "./details/TravelSpotsSection";
import { InfoSection } from "./details/InfoSection";

interface WelcomeSection {
  id: string;
  text: string;
}

interface DetailsSectionProps {
  details: {
    title: string;
    welcome: {
      title: string;
      sections: WelcomeSection[];
      icon: React.ReactNode;
    };
    venue: {
      title: string;
      description: string;
      icon: React.ReactNode;
    };
    schedule: {
      title: string;
      disclaimer?: string;
      items: {
        time: string;
        event: string;
      }[];
      icon: React.ReactNode;
    };
    attire: {
      title: string;
      note: string;
      women: {
        title: string;
        guidelines: string[];
        note: string;
      };
      men: {
        title: string;
        guidelines: string[];
      };
      icon: React.ReactNode;
    };
    accommodation: {
      title: string;
      description: string;
      alternatives: {
        title: string;
        options: string[];
      };
      icon: React.ReactNode;
    };
    travel: {
      title: string;
      description: string;
      intro: string;
      closestAirport: string;
      options: string[];
      alternatives: {
        title: string;
        options: string[];
      };
      tip: string;
      icon: React.ReactNode;
    };
    travelSpots: {
      title: string;
      intro: string;
      spots: string[];
      icon: React.ReactNode;
    };
    gifts: {
      title: string;
      description: string;
      icon: React.ReactNode;
    };
  };
  backgrounds?: {
    welcome?: string;
    venue?: string;
    schedule?: string;
    attire?: string;
    accommodation?: string;
    travel?: string;
    travelSpots?: string;
    gifts?: string;
  };
  parallaxEnabled?: {
    welcome?: boolean;
    venue?: boolean;
    schedule?: boolean;
    attire?: boolean;
    accommodation?: boolean;
    travel?: boolean;
    travelSpots?: boolean;
    gifts?: boolean;
  };
}

export function DetailsSection({
  details,
  backgrounds = {},
  parallaxEnabled = {},
}: DetailsSectionProps) {
  return (
    <div id="details" className="relative bg-[var(--color-sage-green)] px-4">
      <WelcomeSection welcome={details.welcome} />

      <VenueSection
        venue={details.venue}
        backgroundImage={backgrounds.venue}
        enableParallax={parallaxEnabled.venue}
        id="venue"
      />

      <ScheduleSection
        schedule={details.schedule}
        backgroundImage={backgrounds.schedule}
        enableParallax={parallaxEnabled.schedule}
        id="schedule"
      />

      <AttireSection
        attire={details.attire}
        backgroundImage={backgrounds.attire}
        enableParallax={parallaxEnabled.attire}
        id="attire"
      />

      <EnhancedAccommodationSection
        accommodation={details.accommodation}
        backgroundImage={backgrounds.accommodation}
        enableParallax={parallaxEnabled.accommodation}
        id="accommodation"
      />

      <EnhancedTravelSection
        travel={details.travel}
        backgroundImage={backgrounds.travel}
        enableParallax={parallaxEnabled.travel}
        id="travel"
      />

      <TravelSpotsSection
        travelSpots={details.travelSpots}
        backgroundImage={backgrounds.travelSpots}
        enableParallax={parallaxEnabled.travelSpots}
        id="travelSpots"
      />

      {/* Gifts Section */}
      <InfoSection
        info={details.gifts}
        backgroundImage={backgrounds.gifts}
        enableParallax={parallaxEnabled.gifts}
        id="gifts"
      />
    </div>
  );
}
