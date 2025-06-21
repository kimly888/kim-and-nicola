/**
 * Tailwind utility classes for custom colors
 * Directly mapped to ensure CSS variable names match globals.css
 */

// Direct mapping to ensure exact CSS variable names
export const textColor = {
  champagne: 'text-[var(--color-champagne)]',
  darkMaroon: 'text-[var(--color-dark-maroon)]',
  mediumBurgundy: 'text-[var(--color-medium-burgundy)]',
  oliveBrown: 'text-[var(--color-olive-brown)]',
  sageGreen: 'text-[var(--color-sage-green)]',
  deepTeal: 'text-[var(--color-deep-teal)]',
  slateBlue: 'text-[var(--color-slate-blue)]',
  steelBlue: 'text-[var(--color-steel-blue)]',
  lightTaupe: 'text-[var(--color-light-taupe)]',
  mediumTaupe: 'text-[var(--color-medium-taupe)]',
  darkTaupe: 'text-[var(--color-dark-taupe)]',
};

export const bgColor = {
  champagne: 'bg-[var(--color-champagne)]',
  darkMaroon: 'bg-[var(--color-dark-maroon)]',
  mediumBurgundy: 'bg-[var(--color-medium-burgundy)]',
  oliveBrown: 'bg-[var(--color-olive-brown)]',
  sageGreen: 'bg-[var(--color-sage-green)]',
  deepTeal: 'bg-[var(--color-deep-teal)]',
  slateBlue: 'bg-[var(--color-slate-blue)]',
  steelBlue: 'bg-[var(--color-steel-blue)]',
  lightTaupe: 'bg-[var(--color-light-taupe)]',
  mediumTaupe: 'bg-[var(--color-medium-taupe)]',
  darkTaupe: 'bg-[var(--color-dark-taupe)]',
};

export const borderColor = {
  champagne: 'border-[var(--color-champagne)]',
  darkMaroon: 'border-[var(--color-dark-maroon)]',
  mediumBurgundy: 'border-[var(--color-medium-burgundy)]',
  oliveBrown: 'border-[var(--color-olive-brown)]',
  sageGreen: 'border-[var(--color-sage-green)]',
  deepTeal: 'border-[var(--color-deep-teal)]',
  slateBlue: 'border-[var(--color-slate-blue)]',
  steelBlue: 'border-[var(--color-steel-blue)]',
  lightTaupe: 'border-[var(--color-light-taupe)]',
  mediumTaupe: 'border-[var(--color-medium-taupe)]',
  darkTaupe: 'border-[var(--color-dark-taupe)]',
};

export const ringColor = {
  champagne: 'ring-[var(--color-champagne)]',
  darkMaroon: 'ring-[var(--color-dark-maroon)]',
  mediumBurgundy: 'ring-[var(--color-medium-burgundy)]',
  oliveBrown: 'ring-[var(--color-olive-brown)]',
  sageGreen: 'ring-[var(--color-sage-green)]',
  deepTeal: 'ring-[var(--color-deep-teal)]',
  slateBlue: 'ring-[var(--color-slate-blue)]',
  steelBlue: 'ring-[var(--color-steel-blue)]',
  lightTaupe: 'ring-[var(--color-light-taupe)]',
  mediumTaupe: 'ring-[var(--color-medium-taupe)]',
  darkTaupe: 'ring-[var(--color-dark-taupe)]',
};

export const shadowColor = {
  champagne: 'shadow-[var(--color-champagne)]',
  darkMaroon: 'shadow-[var(--color-dark-maroon)]',
  mediumBurgundy: 'shadow-[var(--color-medium-burgundy)]',
  oliveBrown: 'shadow-[var(--color-olive-brown)]',
  sageGreen: 'shadow-[var(--color-sage-green)]',
  deepTeal: 'shadow-[var(--color-deep-teal)]',
  slateBlue: 'shadow-[var(--color-slate-blue)]',
  steelBlue: 'shadow-[var(--color-steel-blue)]',
  lightTaupe: 'shadow-[var(--color-light-taupe)]',
  mediumTaupe: 'shadow-[var(--color-medium-taupe)]',
  darkTaupe: 'shadow-[var(--color-dark-taupe)]',
};

// Utility to get all classes for a specific color
export const getColorClasses = (colorName: keyof typeof bgColor) => ({
  text: textColor[colorName],
  bg: bgColor[colorName],
  border: borderColor[colorName],
  ring: ringColor[colorName],
  shadow: shadowColor[colorName],
});

// Export all color utility classes in one object for convenience
export const colorClasses = {
  text: textColor,
  bg: bgColor,
  border: borderColor,
  ring: ringColor,
  shadow: shadowColor,
}; 