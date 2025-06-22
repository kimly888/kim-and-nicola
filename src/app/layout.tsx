import type { Metadata } from "next";
import { Shrikhand, Young_Serif, Righteous, Chicle, Caprasimo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { i18n } from "@/i18n-config";

const shrikhand = Shrikhand({
  subsets: ["latin"],
  variable: "--font-shrikhand",
  weight: "400",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-young-serif",
  weight: "400",
});

const righteous = Righteous({
  subsets: ["latin"],
  variable: "--font-righteous",
  weight: "400",
});

const chicle = Chicle({
  subsets: ["latin"],
  variable: "--font-chicle",
  weight: "400",
});

const caprasimo = Caprasimo({
  subsets: ["latin"],
  variable: "--font-caprasimo",
  weight: "400",
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
      <body
        className={`${shrikhand.variable} ${youngSerif.variable} ${righteous.variable} ${chicle.variable} ${caprasimo.variable} font-young-serif antialiased`}
      >
        <LenisProvider>
          {children}
          <Toaster position="bottom-right" />
        </LenisProvider>
      </body>
    </html>
  );
}
