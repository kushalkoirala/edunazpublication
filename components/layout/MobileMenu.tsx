"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  const [servicesExpanded, setServicesExpanded] = useState(false);
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
      className={`mobile-menu-panel lg:hidden fixed top-[72px] left-0 right-0 w-full max-w-full h-[calc(100dvh-72px)] z-40 bg-[#180A28] text-white flex flex-col justify-between overflow-y-auto overflow-x-hidden overscroll-contain ${
        isOpen ? "is-open" : ""
      }`}
    >
      {/* Faint library photo background matching stats band (~9% opacity, grayscale) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.09] pointer-events-none grayscale"
        style={{ backgroundImage: "var(--img-library)" }}
      />
      {/* Purple logo glow — bottom-right corner */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 100% 100%, rgba(123,47,190,0.35) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 flex flex-col flex-1 justify-between px-6 sm:px-8 py-8 sm:py-10 max-w-lg mx-auto w-full">
        {/* Navigation list */}
        <div>
          {/* Eyebrow with logo & brand */}
          <div className="mobile-nav-eyebrow flex items-center space-x-3 mb-6 p-2 rounded-xl bg-white/5 border border-[#7B2FBE]/30">
            <div
              className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-full bg-[#FFFFFF] p-[2px] shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
              style={{ borderRadius: "50%" }}
            >
              <Image
                src="/logo.png"
                alt="Edunaaz Publication Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-heading text-base text-white tracking-wide leading-tight">
                Edunaaz <span className="text-[#C084FC]">Publication</span>
              </span>
              <span className="block text-[8px] tracking-[0.25em] text-[#C084FC] uppercase font-medium">
                OPC PVT LTD
              </span>
            </div>
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
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`mobile-nav-link group flex items-baseline py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] ${
                        isActive ? "text-[#C084FC]" : "text-white"
                      }`}
                    >
                      <span className="font-mono text-xs sm:text-sm text-[#C084FC] tracking-widest mr-4 opacity-90 select-none">
                        {link.num}
                      </span>
                      <span className="font-heading text-[32px] sm:text-4xl leading-none tracking-wide">
                        {link.label}
                      </span>
                    </Link>

                    {link.href === "/services" && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setServicesExpanded((prev) => !prev);
                        }}
                        aria-label="Toggle Services submenu"
                        aria-expanded={servicesExpanded}
                        className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-[#C084FC] transition-colors rounded-lg bg-white/5 border border-white/10"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesExpanded ? "rotate-180 text-[#C084FC]" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Submenu for Services on Mobile */}
                  {link.href === "/services" && servicesExpanded && (
                    <div className="mt-3 pl-8 sm:pl-10 space-y-2 border-l-2 border-[#7B2FBE]/50 ml-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <Link
                        href="/services"
                        onClick={onClose}
                        className="block text-xs uppercase tracking-wider text-[#C084FC] font-semibold py-1.5 hover:underline"
                      >
                        All Services Overview →
                      </Link>
                      <Link
                        href="/services/research-publication"
                        onClick={onClose}
                        className="block text-sm text-white/90 hover:text-[#C084FC] py-1 transition-colors"
                      >
                        • Research Publication
                      </Link>
                      <Link
                        href="/services/writing-and-editing"
                        onClick={onClose}
                        className="block text-sm text-white/90 hover:text-[#C084FC] py-1 transition-colors"
                      >
                        • Writing & Editing Excellence
                      </Link>
                      <Link
                        href="/services/isbn-book-publication"
                        onClick={onClose}
                        className="block text-sm text-white/90 hover:text-[#C084FC] py-1 transition-colors"
                      >
                        • ISBN Book Publication
                      </Link>
                    </div>
                  )}
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
              className="hover:text-[#C084FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] py-0.5"
            >
              Helpline:{" "}
              <span className="text-white font-medium">+91 9395707581</span>
            </a>
            <a
              href="mailto:editor@edunaazpublication.com"
              className="hover:text-[#C084FC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] py-0.5 break-all"
            >
              editor@edunaazpublication.com
            </a>
            <a
              href="https://wa.me/919395707581"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-medium inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] py-0.5"
            >
              Chat on WhatsApp: +91 9395707581
            </a>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact?type=consultation"
              onClick={onClose}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center shadow-[0_0_15px_rgba(123,47,190,0.4)]"
              style={{ borderRadius: "8px" }}
            >
              BOOK A CONSULTANT →
            </Link>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("open-inquiry-modal", {
                      detail: { category: "General Academic Inquiry" },
                    })
                  );
                }
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white/30 hover:border-[#C084FC] hover:text-[#C084FC] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer"
              style={{ borderRadius: "8px" }}
            >
              INQUIRE NOW →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
