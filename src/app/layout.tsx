import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { LenisProvider } from '@/components/layout/LenisProvider';
import { i18n } from "@/i18n-config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kim & Nicola | Wedding RSVP",
  description: "Join us for our special day. RSVP to Kim and Nicola's wedding celebration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={i18n.defaultLocale}>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <LenisProvider>
          {children}
          <Toaster position="bottom-right" />
        </LenisProvider>
      </body>
    </html>
  );
}
