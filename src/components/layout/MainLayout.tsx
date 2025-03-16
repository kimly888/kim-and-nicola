"use client";

import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/sonner';

interface MainLayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
}

export function MainLayout({ children, transparentHeader = false }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header transparent={transparentHeader} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
} 