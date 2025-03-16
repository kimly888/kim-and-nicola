"use client";

import { useEffect, useState, useRef, MutableRefObject } from "react";

interface UseAnimationOnScrollOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useAnimationOnScroll<T extends HTMLElement>(
  options: UseAnimationOnScrollOptions = {}
): [MutableRefObject<T | null>, boolean] {
  const { threshold = 0.1, triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
}
