"use client";

import {Header} from "./Header";
import {Footer} from "./Footer";
import {Dictionary} from "@/dictionaries";

interface MainLayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
  dictionary?: Dictionary;
}

export function MainLayout({
  children,
  transparentHeader = false,
  dictionary,
}: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header transparent={transparentHeader} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
