import { i18n } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  // This layout should not include html or body tags
  // as they are already defined in the root layout
  return (
    <>
      {children}
    </>
  );
} 