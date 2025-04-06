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

export const ColorPalette: React.FC = () => {
  return (
    <div className="p-6 bg-card rounded-lg shadow-sm">
      <h2 className="text-xl font-medium mb-4">Color Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {Object.entries(colors).map(([key, value]) => (
          <ColorSwatch 
            key={key}
            colorValue={value} 
            colorName={colorNames[key as keyof typeof colorNames]} 
          />
        ))}
      </div>
    </div>
  );
}; 