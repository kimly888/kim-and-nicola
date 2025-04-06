import React from 'react';
import { ColorPalette } from '@/components/ui/color-palette';
import { textColor, bgColor, borderColor } from '@/lib/theme';

export default function ColorsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Color System</h1>
      
      <section className="mb-12">
        <ColorPalette />
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Using Colors</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium mb-2">CSS Variables</h3>
            <p className="mb-2">Access colors directly via CSS variables:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              {`/* As CSS variables */
color: var(--color-dark-maroon);
background-color: var(--color-champagne);
border-color: var(--color-sage-green);`}
            </pre>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">Tailwind Classes</h3>
            <p className="mb-2">Use with Tailwind&apos;s arbitrary value syntax:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              {`<!-- Text colors -->
<p class="${textColor.darkMaroon}">Dark Maroon text</p>
<p class="${textColor.slateBlue}">Slate Blue text</p>

<!-- Background colors -->
<div class="${bgColor.champagne}">Champagne background</div>
<div class="${bgColor.sageGreen}">Sage Green background</div>

<!-- Border colors -->
<div class="border-2 ${borderColor.lightTaupe}">Light Taupe border</div>`}
            </pre>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">TypeScript Imports</h3>
            <p className="mb-2">Import color values directly in your components:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              {`import { colors, textColor, bgColor, borderColor } from '@/lib/theme';

// Use hex values directly
const customStyle = {
  color: colors.darkMaroon,
  backgroundColor: colors.offWhite
};

// Or use with className
return (
  <div className={textColor.slateBlue}>
    Colored text
  </div>
);`}
            </pre>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-lg ${bgColor.champagne}`}>
            <h3 className={`text-xl font-medium mb-2 ${textColor.darkMaroon}`}>
              Card with Champagne Background
            </h3>
            <p className={textColor.slateBlue}>
              This card uses our custom colors for background and text.
            </p>
          </div>
          
          <div className={`p-6 rounded-lg ${bgColor.offWhite} ${borderColor.sageGreen} border-2`}>
            <h3 className={`text-xl font-medium mb-2 ${textColor.sageGreen}`}>
              Card with Borders
            </h3>
            <p className={textColor.lightTaupe}>
              This card has a border using our custom colors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 