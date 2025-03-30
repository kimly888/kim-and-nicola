import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SVG Mask Section Transition Demo',
  description: 'A demo showcasing a scroll animation using an SVG mask to create a section transition with Framer Motion.',
};

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 