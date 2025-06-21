"use client";

import React from 'react';
import { colors, colorNames } from '@/lib/theme';

interface ColorSwatchProps {
  colorValue: string;
  colorName: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ colorValue, colorName }) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-24 h-24 rounded-md shadow-md mb-2" 
        style={{ backgroundColor: colorValue }}
      />
      <div className="text-sm font-medium">{colorName}</div>
      <div className="text-xs text-muted-foreground">{colorValue}</div>
    </div>
  );
};

interface PaletteGroupProps {
  title: string;
  colorKeys: string[];
}

const PaletteGroup: React.FC<PaletteGroupProps> = ({ title, colorKeys }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4 text-center">{title}</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        {colorKeys.map((key) => (
          <ColorSwatch 
            key={key}
            colorValue={colors[key as keyof typeof colors]} 
            colorName={colorNames[key as keyof typeof colorNames]} 
          />
        ))}
      </div>
    </div>
  );
};

export const ColorPalette: React.FC = () => {
  const paletteGroups = [
    {
      title: "Burgundy/Maroon Palette",
      colorKeys: ['champagne', 'darkMaroon', 'mediumBurgundy', 'oliveBrown']
    },
    {
      title: "Teal/Green Palette", 
      colorKeys: ['champagne', 'sageGreen', 'deepTeal', 'darkTaupe']
    },
    {
      title: "Blue/Gray Palette",
      colorKeys: ['champagne', 'slateBlue', 'steelBlue', 'lightTaupe']
    },
    {
      title: "Neutral/Taupe Palette",
      colorKeys: ['champagne', 'lightTaupe', 'mediumTaupe', 'darkTaupe']
    }
  ];

  return (
    <div className="p-6 bg-card rounded-lg shadow-sm">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-medium mb-2">Wedding Color Palettes</h2>
        <p className="text-sm text-muted-foreground">1700s Manor House • Worfield, Bridgnorth, UK</p>
      </div>
      
      {paletteGroups.map((group, index) => (
        <PaletteGroup 
          key={index}
          title={group.title}
          colorKeys={group.colorKeys}
        />
      ))}
      
      <div className="mt-8 pt-6 border-t">
        <h3 className="text-lg font-medium mb-4 text-center">Complete Color Set</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(colors).map(([key, value]) => (
            <ColorSwatch 
              key={key}
              colorValue={value} 
              colorName={colorNames[key as keyof typeof colorNames]} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 