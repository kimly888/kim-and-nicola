"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import LanguageSwitcher from "@/components/ui/language-switcher";
import {Dictionary} from "@/dictionaries";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {ReactNode} from "react";

interface HeaderProps {
  transparent?: boolean;
  dictionary?: Dictionary;
}

interface NavItem {
  href: string;
  label: (dictionary?: Dictionary) => string;
  content?: ReactNode;
}

export function Header({transparent = false, dictionary}: HeaderProps) {
  // Navigation items defined as a constant
  const navItems: NavItem[] = [
    {
      href: "/#story",
      label: (dict) => dict?.navigation.story || "Our Story",
      content: (
        <div className="p-4 w-[350px] md:w-[400px] lg:w-[500px]">
          <div className="mb-3">
            <h4 className="text-sm font-medium mb-1">
              {dictionary?.story.title || "Our Story"}
            </h4>
            <p className="text-xs text-muted-foreground mb-3">
              The journey that brought us together and led us to this special
              day.
            </p>
          </div>

          <div className="grid gap-3">
            {/* How We Met Section */}
            <Link
              href="/#story-0"
              className="group block p-2 rounded-md hover:bg-muted"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-sm">
                  1
                </div>
                <div>
                  <h5 className="text-sm font-medium group-hover:text-primary transition-colors">
                    {dictionary?.story.howWeMet.title || "How We Met"}
                  </h5>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {dictionary?.story.howWeMet.date || "June 15, 2018"}
                  </p>
                </div>
              </div>
            </Link>

            {/* First Date Section */}
            <Link
              href="/#story-1"
              className="group block p-2 rounded-md hover:bg-muted"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-sm">
                  2
                </div>
                <div>
                  <h5 className="text-sm font-medium group-hover:text-primary transition-colors">
                    {dictionary?.story.firstDate.title || "Our First Date"}
                  </h5>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {dictionary?.story.firstDate.date || "July 3, 2018"}
                  </p>
                </div>
              </div>
            </Link>

            {/* Proposal Section */}
            <Link
              href="/#story"
              className="group block p-2 rounded-md hover:bg-muted"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-sm">
                  3
                </div>
                <div>
                  <h5 className="text-sm font-medium group-hover:text-primary transition-colors">
                    {dictionary?.story.proposal.title || "The Proposal"}
                  </h5>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {dictionary?.story.proposal.date || "December 24, 2022"}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ),
    },
    {
      href: "/#details",
      label: (dict) => dict?.navigation.details || "Details",
    },
    {
      href: "/#gallery",
      label: (dict) => dict?.navigation.gallery || "Gallery",
    },
    {
      href: "/#rsvp",
      label: (dict) => dict?.navigation.rsvp || "RSVP",
    },
  ];

  return (
    <motion.header
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5, ease: "easeOut"}}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12",
        transparent
          ? "bg-transparent"
          : "bg-background/80 backdrop-blur-md border-b"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-wider">
          {dictionary?.hero.title || "Kim & Nicola"}
        </Link>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.content ? (
                  <>
                    <NavigationMenuTrigger>
                      {item.label(dictionary)}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.content}
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.label(dictionary)}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center space-x-4">
          {dictionary?.languageSwitcher && (
            <LanguageSwitcher dictionary={dictionary} />
          )}
          <Button asChild variant="outline">
            <Link href="/#rsvp">{"RSVP"}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </motion.header>
  );
}
