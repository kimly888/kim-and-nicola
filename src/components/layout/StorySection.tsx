"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useAnimationOnScroll } from "@/hooks/useAnimationOnScroll";
import { slideInLeft, slideInRight } from "@/lib/animations";

interface StorySectionProps {
  stories: {
    title: string;
    date: string;
    description: string;
    image: string;
  }[];
}

export function StorySection({ stories }: StorySectionProps) {
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="story" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Story</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The journey that brought us together and led us to this special day.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {stories.map((story, index) => (
            <StoryItem key={index} story={story} isEven={index % 2 === 0} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StoryItemProps {
  story: {
    title: string;
    date: string;
    description: string;
    image: string;
  };
  isEven: boolean;
  index: number;
}

function StoryItem({ story, isEven, index }: StoryItemProps) {
  const [ref, isVisible] = useAnimationOnScroll<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      id={`story-${index}`}
      ref={ref}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
    >
      <motion.div
        variants={isEven ? slideInLeft() : slideInRight()}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="w-full md:w-1/2"
      >
        <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
          <Image src={story.image} alt={story.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </motion.div>

      <motion.div
        variants={isEven ? slideInRight() : slideInLeft()}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="w-full md:w-1/2 space-y-4"
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
            {index + 1}
          </div>
          <div className="h-[1px] flex-1 bg-primary/30 ml-4" />
        </div>

        <h3 className="text-2xl font-serif">{story.title}</h3>
        <p className="text-sm text-muted-foreground">{story.date}</p>
        <p className="text-muted-foreground leading-relaxed">{story.description}</p>
      </motion.div>
    </div>
  );
}
