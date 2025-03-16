import { i18n } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  // Await the params object
  await params;
  
  // This layout should not include html or body tags
  // as they are already defined in the root layout
  return (
    <>
      {children}
    </>
  );
} 