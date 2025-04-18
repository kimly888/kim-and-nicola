"use client";

import { WelcomeSection } from "./details/WelcomeSection";
import { ScheduleSection } from "./details/ScheduleSection";
import { AttireSection } from "./details/AttireSection";
import { InfoSection } from "./details/InfoSection";

interface DetailsSectionProps {
  details: {
    title: string;
    welcome: {
      title: string;
      message: string;
      icon: React.ReactNode;
    };
    schedule: {
      title: string;
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
      icon: React.ReactNode;
    };
    travel: {
      title: string;
      description: string;
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
    schedule?: string;
    attire?: string;
    accommodation?: string;
    travel?: string;
    gifts?: string;
  };
  parallaxEnabled?: {
    welcome?: boolean;
    schedule?: boolean;
    attire?: boolean;
    accommodation?: boolean;
    travel?: boolean;
    gifts?: boolean;
  };
}

export function DetailsSection({ 
  details, 
  backgrounds = {}, 
  parallaxEnabled = {} 
}: DetailsSectionProps) {
  return (
    <div id="details">
      {/* Welcome Section */}
      <WelcomeSection 
        welcome={details.welcome} 
        backgroundImage={backgrounds.welcome}
        enableParallax={parallaxEnabled.welcome}
        id="welcome"
      />

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
      <InfoSection 
        info={details.accommodation}
        backgroundImage={backgrounds.accommodation}
        enableParallax={parallaxEnabled.accommodation}
        id="accommodation"
      />

      {/* Travel Section */}
      <InfoSection 
        info={details.travel}
        backgroundImage={backgrounds.travel}
        enableParallax={parallaxEnabled.travel} 
        id="travel"
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