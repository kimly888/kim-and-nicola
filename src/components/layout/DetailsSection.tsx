"use client";

import { WelcomeSection } from "./details/WelcomeSection";
import { VenueSection } from "./details/VenueSection";
import { ScheduleSection } from "./details/ScheduleSection";
import { AttireSection } from "./details/AttireSection";
import { EnhancedAccommodationSection } from "./details/EnhancedAccommodationSection";
import { EnhancedTravelSection } from "./details/EnhancedTravelSection";
import { TravelSpotsSection } from "./details/TravelSpotsSection";
import { InfoSection } from "./details/InfoSection";
import { sectionColors } from "@/lib/theme/colors";

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

export function DetailsSection({ details, backgrounds = {} }: DetailsSectionProps) {
  return (
    <div id="details" className="relative px-4">
      <WelcomeSection
        welcome={details.welcome}
        stackIndex={0}
        backgroundColor={sectionColors.welcome.background}
        textColor={sectionColors.welcome.text}
      />

      <VenueSection
        venue={details.venue}
        backgroundImage={backgrounds.venue}
        id="venue"
        stackIndex={1}
        backgroundColor={sectionColors.venue.background}
        textColor={sectionColors.venue.text}
      />

      <ScheduleSection
        schedule={details.schedule}
        backgroundImage={backgrounds.schedule}
        id="schedule"
        stackIndex={2}
        backgroundColor={sectionColors.schedule.background}
        textColor={sectionColors.schedule.text}
      />

      <AttireSection
        attire={details.attire}
        backgroundImage={backgrounds.attire}
        id="attire"
        stackIndex={3}
        backgroundColor={sectionColors.attire.background}
        textColor={sectionColors.attire.text}
      />

      <EnhancedAccommodationSection
        accommodation={details.accommodation}
        backgroundImage={backgrounds.accommodation}
        id="accommodation"
        stackIndex={4}
        backgroundColor={sectionColors.accommodation.background}
        textColor={sectionColors.accommodation.text}
      />

      <EnhancedTravelSection
        travel={details.travel}
        backgroundImage={backgrounds.travel}
        id="travel"
        stackIndex={5}
        backgroundColor={sectionColors.travel.background}
        textColor={sectionColors.travel.text}
      />

      <TravelSpotsSection
        travelSpots={details.travelSpots}
        backgroundImage={backgrounds.travelSpots}
        id="travelSpots"
        stackIndex={6}
        backgroundColor={sectionColors.travelSpots.background}
        textColor={sectionColors.travelSpots.text}
      />

      {/* Gifts Section */}
      <InfoSection
        info={details.gifts}
        backgroundImage={backgrounds.gifts}
        id="gifts"
        stackIndex={7}
        backgroundColor={sectionColors.gifts.background}
        textColor={sectionColors.gifts.text}
      />
    </div>
  );
}
