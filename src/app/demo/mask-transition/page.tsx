'use client';

import SectionMaskTransition from '@/components/animation/SectionMaskTransition';
import DemoNavigation from '@/components/demo/DemoNavigation';
import { LenisProvider } from '@/components/layout/LenisProvider';

export default function MaskTransitionDemo() {
  return (
    <LenisProvider>
      <DemoNavigation />
      <div className="h-[300vh]">
        {/* First section with normal content */}
        <div className="h-[100vh] bg-slate-900 text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Scroll Down</h1>
          <p className="text-xl">to see the section mask transition</p>
        </div>
        
        {/* Section with mask transition */}
        <SectionMaskTransition 
          firstSectionBgColor="#0f172a" // slate-900
          secondSectionBgColor="#f8fafc" // slate-50
          firstSectionContent={
            <div className="h-full w-full flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">First Section</h2>
            </div>
          }
          secondSectionContent={
            <div className="h-full w-full flex items-center justify-center">
              <h2 className="text-4xl font-bold text-slate-900">Second Section</h2>
            </div>
          }
        />
        
        {/* Third section with normal content */}
        <div className="h-[100vh] bg-slate-50 text-slate-900 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Section After Transition</h1>
          <p className="text-xl">The mask transition is complete</p>
        </div>
      </div>
    </LenisProvider>
  );
} 