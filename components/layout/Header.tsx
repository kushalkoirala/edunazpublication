"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import MobileMenu from "./MobileMenu";
import InquiryButton from "@/components/ui/InquiryButton";

function useHeaderVisibility(mobileOpen: boolean) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (mobileOpen || currentScrollY <= 200) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return isVisible;
}

export default function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHeaderVisible = useHeaderVisibility(mobileOpen);
  const pathname = usePathname();

  const scrollYRef = useRef(0);
  const prevOpenRef = useRef(false);
  const hamburgerBtnRef = useRef<HTMLButtonElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  // Scroll listener for solid background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header entrance on first load: logo, nav links and phone fade down in short stagger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const brandEl = document.getElementById("header-brand");
    const navEl = document.getElementById("header-nav");
    const rightEl = document.getElementById("header-right");

    if (brandEl && navEl && rightEl) {
      gsap.fromTo(
        [brandEl, navEl, rightEl],
        { opacity: 0, y: -16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    }
  }, []);

  // Lock body scroll and restore position on close
  useEffect(() => {
    if (mobileOpen) {
      scrollYRef.current = window.scrollY;
      document.body.classList.add("mobile-menu-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
      if (prevOpenRef.current) {
        hamburgerBtnRef.current?.focus();
      }
    }
    prevOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  // Close menu on resize or orientation change to lg (1024px) and above
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handleMql = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setMobileOpen(false);
      }
    };
    mql.addEventListener("change", handleMql);
    return () => mql.removeEventListener("change", handleMql);
  }, []);

  // Clean up body class if unmounted
  useEffect(() => {
    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    };
  }, []);

  const isRouteActive = (route: string) => {
    if (route === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(route);
  };

  const isHeaderSolid = isSolid || mobileOpen;

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }${isHeaderSolid ? " solid" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand Wordmark & Circle Logo Emblem */}
          <Link
            id="header-brand"
            className="flex items-center space-x-3.5 group text-left flex-shrink-0"
            href="/"
          >
            <div
              className="w-12 h-12 sm:w-[54px] sm:h-[54px] flex items-center justify-center flex-shrink-0 rounded-full bg-[#FFFFFF] p-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-105"
              style={{ borderRadius: "50%" }}
            >
              <Image
                src="/logo.png"
                alt="Edunaaz Publication Logo"
                width={52}
                height={52}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <span className="block font-heading text-lg sm:text-xl text-white tracking-wide leading-tight whitespace-nowrap">
                Edunaaz <span className="text-[#C084FC]">Publication</span>
              </span>
              <span className="block text-[9px] tracking-[0.25em] text-[#C084FC] font-body uppercase font-medium mt-0.5 whitespace-nowrap">
                OPC PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Exactly 6 links on ONE line */}
          <nav
            id="header-nav"
            className="hidden lg:flex items-center space-x-8 text-[12px] font-body font-medium uppercase tracking-[0.08em] whitespace-nowrap"
          >
            <Link
              data-sweep
              className={`hover:text-[#C084FC] transition-colors py-2 ${
                isRouteActive("/") ? "text-[#C084FC]" : "text-white/90"
              }`}
              href="/"
            >
              HOME
            </Link>
            <Link
              data-sweep
              className={`hover:text-[#C084FC] transition-colors py-2 ${
                isRouteActive("/about") ? "text-[#C084FC]" : "text-white/90"
              }`}
              href="/about"
            >
              ABOUT
            </Link>
            <div className="relative inline-flex items-center">
              <Link
                data-sweep
                className={`inline-flex items-center hover:text-[#C084FC] transition-colors py-2 ${
                  isRouteActive("/services") ? "text-[#C084FC]" : "text-white/90"
                }`}
                href="/services"
              >
                <span className="">SERVICES</span>
                <svg
                  className="w-3 h-3 ml-1 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
            <Link
              data-sweep
              className={`hover:text-[#C084FC] transition-colors py-2 ${
                isRouteActive("/journals") ? "text-[#C084FC]" : "text-white/90"
              }`}
              href="/journals"
            >
              JOURNALS
            </Link>
            <Link
              data-sweep
              className={`hover:text-[#C084FC] transition-colors py-2 ${
                isRouteActive("/apex") ? "text-[#C084FC]" : "text-white/90"
              }`}
              href="/apex"
            >
              APEX
            </Link>
            <Link
              data-sweep
              className={`hover:text-[#C084FC] transition-colors py-2 ${
                isRouteActive("/contact") ? "text-[#C084FC]" : "text-white/90"
              }`}
              href="/contact"
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Header: Inquire Now Button & Search */}
          <div
            id="header-right"
            className="hidden md:flex items-center space-x-4 text-xs font-medium flex-shrink-0"
          >
            <InquiryButton
              className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 rounded-lg shadow-[0_0_15px_rgba(123,47,190,0.4)] hover:shadow-[0_0_20px_rgba(123,47,190,0.6)] cursor-pointer"
              style={{ borderRadius: "8px" }}
            >
              INQUIRE NOW
            </InquiryButton>
            <button
              aria-label="Search"
              className="text-white hover:text-[#C084FC] transition-colors p-1"
              type="button"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle Button: Min 44x44px Tap Target with 3 lines animating to X */}
          <button
            id="mobile-menu-btn"
            ref={hamburgerBtnRef}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            className={`lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-white hover:text-[#C084FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] cursor-pointer z-50 ${
              mobileOpen ? "is-active" : ""
            }`}
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="relative w-6 h-[18px] block pointer-events-none">
              <span className="hamburger-line hamburger-line-1" />
              <span className="hamburger-line hamburger-line-2" />
              <span className="hamburger-line hamburger-line-3" />
            </span>
          </button>
        </div>
      </div>

      {/* Premium Animated Mobile Menu Panel */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
