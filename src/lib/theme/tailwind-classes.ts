/**
 * Dynamically generated Tailwind utility classes for custom colors
 * This file automatically generates classes based on the colors defined in colors.ts
 */

import { colors } from './colors';

// Helper function to convert camelCase to kebab-case for CSS variables
const toKebabCase = (str: string): string => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

// Helper function to create CSS variable reference
const createCssVar = (colorName: string): string => {
  return `var(--color-${toKebabCase(colorName)})`;
};

// Type for color keys
type ColorKey = keyof typeof colors;

// Dynamically generate text color classes
export const textColor: Record<ColorKey, string> = Object.keys(colors).reduce((acc, colorName) => {
  const key = colorName as ColorKey;
  acc[key] = `text-[${createCssVar(colorName)}]`;
  return acc;
}, {} as Record<ColorKey, string>);

// Dynamically generate background color classes
export const bgColor: Record<ColorKey, string> = Object.keys(colors).reduce((acc, colorName) => {
  const key = colorName as ColorKey;
  acc[key] = `bg-[${createCssVar(colorName)}]`;
  return acc;
}, {} as Record<ColorKey, string>);

// Dynamically generate border color classes
export const borderColor: Record<ColorKey, string> = Object.keys(colors).reduce((acc, colorName) => {
  const key = colorName as ColorKey;
  acc[key] = `border-[${createCssVar(colorName)}]`;
  return acc;
}, {} as Record<ColorKey, string>);

// Additional utility classes
export const ringColor: Record<ColorKey, string> = Object.keys(colors).reduce((acc, colorName) => {
  const key = colorName as ColorKey;
  acc[key] = `ring-[${createCssVar(colorName)}]`;
  return acc;
}, {} as Record<ColorKey, string>);

export const shadowColor: Record<ColorKey, string> = Object.keys(colors).reduce((acc, colorName) => {
  const key = colorName as ColorKey;
  acc[key] = `shadow-[${createCssVar(colorName)}]`;
  return acc;
}, {} as Record<ColorKey, string>);

// Utility to get all classes for a specific color
export const getColorClasses = (colorName: ColorKey) => ({
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