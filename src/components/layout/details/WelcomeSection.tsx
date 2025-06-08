"use client";

interface WelcomeSectionProps {
  welcome: {
    title: string;
    sections: {
      id: string;
      text: string;
    }[];
    icon: React.ReactNode;
  };
}

export function WelcomeSection({ welcome }: WelcomeSectionProps) {
  return (
    <p className="text-white text-5xl font-semibold leading-tight mb-4">
      {welcome.sections.map((section) => section.text).join(" ")}
    </p>
  );
}
