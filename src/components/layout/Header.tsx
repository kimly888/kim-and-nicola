"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { Dictionary } from "@/dictionaries";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useState, useEffect } from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { ReactNode } from "react";

interface HeaderProps {
  transparent?: boolean;
  dictionary?: Dictionary;
}

// interface NavItem {
//   href: string;
//   label: (dictionary?: Dictionary) => string;
//   content?: ReactNode;
// }

export function Header({ transparent = false, dictionary }: HeaderProps) {
  // Navigation items defined as a constant
  // const navItems: NavItem[] = [
  //   {
  //     href: "/#details",
  //     label: (dict) => dict?.navigation.details || "Details",
  //   },
  //   {
  //     href: "/#gallery",
  //     label: (dict) => dict?.navigation.gallery || "Gallery",
  //   },
  //   {
  //     href: "/#rsvp",
  //     label: (dict) => dict?.navigation.rsvp || "RSVP",
  //   },
  // ];

  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    // Always show header when at the top of the page
    const handleScroll = () => {
      setAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update header visibility based on scroll direction
    if (scrollDirection === "down" && !atTop) {
      setIsVisible(false);
    } else if (scrollDirection === "up") {
      setIsVisible(true);
    }
  }, [scrollDirection, atTop]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12",
        transparent && atTop ? "bg-transparent" : "bg-background/80 backdrop-blur-md border-b"
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Link
          href="/"
          className={`${transparent && atTop ? "text-white" : "text-black"} text-2xl font-serif tracking-wider transition-colors duration-300`}
        >
          {dictionary?.hero.title || "Kim & Nicola"}
        </Link>

        {/* Desktop Navigation Menu */}
        {/* <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.content ? (
                  <>
                    <NavigationMenuTrigger>{item.label(dictionary)}</NavigationMenuTrigger>
                    <NavigationMenuContent>{item.content}</NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
                    {item.label(dictionary)}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu> */}

        <div className="md:flex items-center space-x-4">
          {dictionary?.languageSwitcher && <LanguageSwitcher dictionary={dictionary} />}
          {/* <Button asChild variant="outline">
            <Link href="/#rsvp">{"RSVP"}</Link>
          </Button> */}
        </div>

        {/* Mobile Menu Button */}
        {/* <Button variant="ghost" size="icon" className="md:hidden">
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
        </Button> */}
      </div>
    </motion.header>
  );
}
