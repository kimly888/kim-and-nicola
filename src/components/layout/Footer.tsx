"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { textColor } from "@/lib/theme";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(`py-12 px-6 md:px-12 ${textColor.lightTaupe}`, className)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-4xl tracking-wider font-bold">Kim & Nicola</h3>
            <p>We can&apos;t wait to celebrate our special day with you.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-2xl font-bold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/#story">Our Story</FooterLink>
              <FooterLink href="/#details">Event Details</FooterLink>
              <FooterLink href="/#gallery">Gallery</FooterLink>
              <FooterLink href="/#rsvp">RSVP</FooterLink>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-2xl font-bold">Contact</h4>
            <p>
              Questions? Reach out to us at{" "}
              <a
                href="mailto:hello@kimandnicola.com"
                className="underline hover:text-foreground transition-colors"
              >
                hello@kimandnicola.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm">
          <p>© {currentYear} Kim & Nicola. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link href={href} className=" hover:text-foreground transition-colors duration-200">
      {children}
    </Link>
  );
}
