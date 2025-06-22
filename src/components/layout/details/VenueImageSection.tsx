import { SectionCard } from "./SectionCard";

interface VenueImageSectionProps {
  id?: string;
  backgroundImage?: string;
  stackIndex?: number;
}

export function VenueImageSection({
  id,
  backgroundImage,
  stackIndex = 0,
}: VenueImageSectionProps) {
  return (
    <SectionCard
      id={id}
      backgroundImage={backgroundImage}
      stackIndex={stackIndex}
    >
      <h2 className="text-4xl md:text-7xl font-bold overflow-hidden">Davenport House</h2>
    </SectionCard>
  );
}

export default VenueImageSection;
