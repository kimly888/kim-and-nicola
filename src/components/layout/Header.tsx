"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { Dictionary } from '@/dictionaries';

interface HeaderProps {
  transparent?: boolean;
  dictionary?: Dictionary;
}

export function Header({ transparent = false, dictionary }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12',
        transparent ? 'bg-transparent' : 'bg-background/80 backdrop-blur-md border-b'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-wider">
          {dictionary?.hero.title || 'Kim & Nicola'}
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/#story">{dictionary?.navigation.story}</NavLink>
          <NavLink href="/#details">{dictionary?.navigation.details}</NavLink>
          <NavLink href="/#gallery">{dictionary?.navigation.gallery}</NavLink>
          <NavLink href="/#rsvp">{dictionary?.navigation.rsvp}</NavLink>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          {dictionary?.languageSwitcher && (
            <LanguageSwitcher dictionary={dictionary} />
          )}
          <Button asChild variant="outline">
            <Link href="/#rsvp">{'RSVP'}</Link>
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </motion.header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
} 