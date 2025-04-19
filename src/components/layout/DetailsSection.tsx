"use client";

import { WelcomeSection } from "./details/WelcomeSection";
import { VenueSection } from "./details/VenueSection";
import { ScheduleSection } from "./details/ScheduleSection";
import { AttireSection } from "./details/AttireSection";
import { InfoSection } from "./details/InfoSection";
import { EnhancedAccommodationSection } from "./details/EnhancedAccommodationSection";
import { EnhancedTravelSection } from "./details/EnhancedTravelSection";
import { TravelSpotsSection } from "./details/TravelSpotsSection";

// Define specific types for the enhanced sections
interface EnhancedAccommodationType {
  title: string;
  description: string;
  alternatives: {
    title: string;
    options: string[];
  };
  icon: React.ReactNode;
}

interface EnhancedTravelType {
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
}

interface DetailsSectionProps {
  details: {
    title: string;
    welcome: {
      title: string;
      message: string;
      icon: React.ReactNode;
    };
    venue?: {
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
      alternatives?: {
        title: string;
        options: string[];
      };
      icon: React.ReactNode;
    };
    travel: {
      title: string;
      description?: string;
      intro?: string;
      closestAirport?: string;
      options?: string[];
      alternatives?: {
        title: string;
        options: string[];
      };
      tip?: string;
      icon: React.ReactNode;
    };
    travelSpots?: {
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
  parallaxEnabled = {} 
}: DetailsSectionProps) {
  // Check if travel section has the new structure
  const hasEnhancedTravel = Boolean(
    details.travel.intro && 
    details.travel.closestAirport && 
    details.travel.options &&
    details.travel.alternatives
  );

  // Check if accommodation section has the new structure
  const hasEnhancedAccommodation = Boolean(details.accommodation.alternatives);

  return (
    <div id="details">
      {/* Welcome Section */}
      <WelcomeSection 
        welcome={details.welcome} 
        backgroundImage={backgrounds.welcome}
        enableParallax={parallaxEnabled.welcome}
        id="welcome"
      />

      {/* Venue Section */}
      {details.venue && (
        <VenueSection 
          venue={details.venue} 
          backgroundImage={backgrounds.venue}
          enableParallax={parallaxEnabled.venue}
          id="venue"
        />
      )}

      {/* Schedule Section */}
      <ScheduleSection 
        schedule={details.schedule} 
        backgroundImage={backgrounds.schedule}
        enableParallax={parallaxEnabled.schedule}
        id="schedule"
      />

      {/* Attire Section */}
      <AttireSection 
        attire={details.attire} 
        backgroundImage={backgrounds.attire}
        enableParallax={parallaxEnabled.attire}
        id="attire"
      />

      {/* Accommodation Section */}
      {hasEnhancedAccommodation ? (
        <EnhancedAccommodationSection 
          accommodation={details.accommodation as EnhancedAccommodationType}
          backgroundImage={backgrounds.accommodation}
          enableParallax={parallaxEnabled.accommodation}
          id="accommodation"
        />
      ) : (
        <InfoSection 
          info={{
            title: details.accommodation.title,
            description: details.accommodation.description,
            icon: details.accommodation.icon
          }}
          backgroundImage={backgrounds.accommodation}
          enableParallax={parallaxEnabled.accommodation}
          id="accommodation"
        />
      )}

      {/* Travel Section */}
      {hasEnhancedTravel ? (
        <EnhancedTravelSection 
          travel={details.travel as EnhancedTravelType}
          backgroundImage={backgrounds.travel}
          enableParallax={parallaxEnabled.travel} 
          id="travel"
        />
      ) : (
        <InfoSection 
          info={{
            title: details.travel.title,
            description: details.travel.description || "",
            icon: details.travel.icon
          }}
          backgroundImage={backgrounds.travel}
          enableParallax={parallaxEnabled.travel} 
          id="travel"
        />
      )}

      {/* Travel Spots Section */}
      {details.travelSpots && (
        <TravelSpotsSection 
          travelSpots={details.travelSpots}
          backgroundImage={backgrounds.travelSpots}
          enableParallax={parallaxEnabled.travelSpots}
          id="travelSpots"
        />
      )}

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