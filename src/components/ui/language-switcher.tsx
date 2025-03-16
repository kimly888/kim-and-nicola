'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n-config';
import { Button } from './button';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Define flag emojis for each locale
const flagEmojis: Record<string, string> = {
  en: '🇬🇧',
  fr: '🇫🇷',
  ja: '🇯🇵',
  cy: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
  es: '🇪🇸',
  'pt-BR': '🇧🇷',
};

export default function LanguageSwitcher({ 
  dictionary 
}: { 
  dictionary?: { 
    languageSwitcher: { 
      label: string; 
      en: string; 
      fr: string; 
      ja: string;
      cy: string;
      es: string;
      'pt-BR': string;
    } 
  } 
}) {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    
    const segments = pathName.split('/');
    segments[1] = locale;
    
    return segments.join('/');
  };

  const currentLocale = pathName.split('/')[1] || i18n.defaultLocale;
  const localeNames: Record<string, string> = {
    en: dictionary?.languageSwitcher.en || 'English',
    fr: dictionary?.languageSwitcher.fr || 'French',
    ja: dictionary?.languageSwitcher.ja || '日本語',
    cy: dictionary?.languageSwitcher.cy || 'Cymraeg',
    es: dictionary?.languageSwitcher.es || 'Español',
    'pt-BR': dictionary?.languageSwitcher['pt-BR'] || 'Português (Brasil)',
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center gap-1 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{flagEmojis[currentLocale]}</span>
        <span className="ml-1">{localeNames[currentLocale]}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {i18n.locales.map((locale) => (
              <Link
                key={locale}
                href={redirectedPathName(locale)}
                className={`flex items-center px-4 py-2 text-sm ${
                  locale === currentLocale
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{flagEmojis[locale]}</span>
                {localeNames[locale]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 