export const colors = {
  // Colors extracted from Wedding Color Palette Image
  champagne: '#F2E6D3',      // Cream/champagne base (consistent across all palettes)
  darkMaroon: '#562A29',     // Deep burgundy from palette 1
  mediumBurgundy: '#744648', // Medium burgundy from palette 1
  oliveBrown: '#5F5B40',     // Olive brown from palette 1
  sageGreen: '#4A6350',      // Forest green from palette 2
  deepTeal: '#253C34',       // Deep teal from palette 2
  slateBlue: '#6B8CAE',      // Slate blue from palette 3
  steelBlue: '#4F6B85',      // Steel blue from palette 3
  lightTaupe: '#FCF8EF',     // Light taupe from palette 4
  mediumTaupe: '#D7C8B5',    // Medium taupe from palette 4
  darkTaupe: '#8C857B',      // Dark taupe from palette 4
};

// Color names with their descriptions
export const colorNames = {
  champagne: 'Champagne',
  darkMaroon: 'Dark Maroon',
  mediumBurgundy: 'Medium Burgundy',
  oliveBrown: 'Olive Brown',
  sageGreen: 'Sage Green',
  deepTeal: 'Deep Teal',
  slateBlue: 'Slate Blue',
  steelBlue: 'Steel Blue',
  lightTaupe: 'Light Taupe',
  mediumTaupe: 'Medium Taupe',
  darkTaupe: 'Dark Taupe',
};

// Section-specific color combinations - Updated with image colors only
export const sectionColors = {
  welcome: {
    background: colors.champagne,
    text: '#8B5A00', // Darker champagne
  },
  venue: {
    background: colors.lightTaupe,
    text: '#5A3F2A', // Darker taupe
  },
  schedule: {
    background: colors.mediumTaupe,
    text: '#3E2F23', // Dark brown text
  },
  attire: {
    background: colors.slateBlue,
    text: '#E8F5E8', // Darker slate blue
  },
  accommodation: {
    background: colors.sageGreen,
    text: '#E8F5E8', // Light text for dark background
  },
  travel: {
    background: colors.darkMaroon,
    text: '#E8F5E8', // Light text for dark background
  },
  travelSpots: {
    background: colors.steelBlue,
    text: '#E8F5E8', // Light text for dark background
  },
  gifts: {
    background: colors.darkTaupe,
    text: '#E8F5E8', // Light text for dark background
  },
}; 