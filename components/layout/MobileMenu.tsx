"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/motion/MotionProvider";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { num: "01", label: "Home", href: "/" },
  { num: "02", label: "About", href: "/about" },
  { num: "03", label: "Services", href: "/services" },
  { num: "04", label: "Journals", href: "/journals" },
  { num: "05", label: "Apex", href: "/apex" },
  { num: "06", label: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isRouteActive = (route: string) => {
    if (route === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(route);
  };

  const lenis = useLenis();

  // Pause Lenis smooth scrolling when mobile menu is open, resume when closed
  useEffect(() => {
    if (!lenis) return;
    if (isOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isOpen, lenis]);

  // Focus trap inside panel & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        if (!panelRef.current) return;
        const focusableElements =
          panelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus first link on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const firstLink =
          panelRef.current?.querySelector<HTMLElement>("a[href]");
        firstLink?.focus();
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div
      id="mobile-nav-panel"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      aria-hidden={!isOpen}
      inert={!isOpen ? true : undefined}
      tabIndex={-1}
      data-lenis-prevent
      className={`mobile-menu-panel lg:hidden fixed top-[72px] left-0 w-full h-[calc(100dvh-72px)] z-40 bg-[#2C2D3E] text-white flex flex-col justify-between overflow-y-auto overscroll-contain ${
        isOpen ? "is-open" : ""
      }`}
    >
      {/* Faint library photo background matching stats band (~9% opacity, grayscale) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.09] pointer-events-none grayscale"
        style={{ backgroundImage: "var(--img-library)" }}
      />

      <div className="relative z-10 flex flex-col flex-1 justify-between px-6 sm:px-8 py-8 sm:py-10 max-w-lg mx-auto w-full">
        {/* Navigation list */}
        <div>
          {/* Eyebrow */}
          <div className="mobile-nav-eyebrow flex items-center space-x-2.5 mb-5">
            <span className="w-5 h-[1.5px] bg-[#D9A93F] inline-block" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#D9A93F] font-body font-medium">
              MENU
            </p>
          </div>

          {/* Links with 1px white/15% hairlines */}
          <nav className="divide-y divide-white/15 border-t border-b border-white/15">
            {navLinks.map((link, idx) => {
              const isActive = isRouteActive(link.href);
              const delayClass = `mobile-nav-link-${idx + 1}`;

              return (
                <div
                  key={link.num}
                  className={`mobile-nav-link-row ${delayClass} py-3 sm:py-3.5`}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`mobile-nav-link group flex items-baseline py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                      isActive ? "text-brand-gold" : "text-white"
                    }`}
                  >
                    <span className="font-mono text-xs sm:text-sm text-[#D9A93F] tracking-widest mr-4 opacity-90 select-none">
                      {link.num}
                    </span>
                    <span className="font-heading text-[32px] sm:text-4xl leading-none tracking-wide">
                      {link.label}
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom block: contact details & submit manuscript button */}
        <div className="mobile-nav-bottom pt-6 sm:pt-8 mt-6 border-t border-white/15 space-y-4">
          <div className="flex flex-col space-y-2 text-xs font-body text-white/80">
            <a
              href="tel:+919395707581"
              className="hover:text-[#D9A93F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold py-0.5"
            >
              Helpline:{" "}
              <span className="text-white font-medium">+91 9395707581</span>
            </a>
            <a
              href="mailto:editor@edunaazpublication.com"
              className="hover:text-[#D9A93F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold py-0.5"
            >
              editor@edunaazpublication.com
            </a>
            <a
              href="https://wa.me/919395707581"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-medium inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold py-0.5"
            >
              Chat on WhatsApp: +91 9395707581
            </a>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-stretch bg-[#D9A93F] hover:bg-[#C4942B] transition-colors duration-150 text-brand-dark group shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="px-6 py-3 text-xs font-semibold uppercase tracking-wider flex items-center">
                SUBMIT MANUSCRIPT
              </span>
              <span className="w-10 bg-white border-l border-[#D9A93F] flex items-center justify-center text-brand-dark transition-transform duration-200 group-hover:translate-x-0.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
