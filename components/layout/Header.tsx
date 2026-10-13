"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isSolid, setIsSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50${isSolid ? " solid" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand Wordmark & Circle Logo Emblem */}
          <Link className="flex items-center space-x-3 group text-left flex-shrink-0" href="/#hero">
            <div
              className="w-9 h-9 !rounded-full bg-white flex items-center justify-center text-brand-dark font-heading font-semibold text-lg tracking-wider shadow-none flex-shrink-0"
            >
              E
            </div>
            <div>
              <span
                className="block font-heading text-lg sm:text-xl text-white tracking-wide leading-tight whitespace-nowrap"
              >
                Edunaaz <span className="text-[#D9A93F]">Publication</span>
              </span>
              <span
                className="block text-[9px] tracking-[0.25em] text-white/70 font-body uppercase font-medium mt-0.5 whitespace-nowrap"
              >
                OPC PVT LTD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Exactly 6 links on ONE line */}
          <nav
            className="hidden lg:flex items-center space-x-8 text-[12px] font-body font-medium uppercase tracking-[0.08em] text-white/90 whitespace-nowrap"
          >
            <Link className="hover:text-[#D9A93F] transition-colors py-2 text-[#D9A93F]" href="/#hero">HOME</Link>
            <Link className="hover:text-[#D9A93F] transition-colors py-2" href="/#about">ABOUT</Link>
            <div className="relative inline-flex items-center">
              <Link className="inline-flex items-center hover:text-[#D9A93F] transition-colors py-2" href="/#areas">
                <span className="">SERVICES</span>
                <svg className="w-3 h-3 ml-1 text-white/80" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="square" strokeLinejoin="miter"
                    strokeWidth="2"></path>
                </svg>
              </Link>
            </div>
            <Link className="hover:text-[#D9A93F] transition-colors py-2" href="/#journals">JOURNALS</Link>
            <Link className="hover:text-[#D9A93F] transition-colors py-2" href="/#apex">APEX</Link>
            <Link className="hover:text-[#D9A93F] transition-colors py-2" href="/#contact">CONTACT</Link>
          </nav>

          {/* Right Header: Phone & Search only */}
          <div className="hidden md:flex items-center space-x-6 text-xs text-white/90 font-medium flex-shrink-0">
            <a className="flex items-center space-x-2 hover:text-[#D9A93F] transition-colors whitespace-nowrap"
              href="tel:+919395707581">
              <svg className="w-3.5 h-3.5 text-[#D9A93F] flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2"></path>
              </svg>
              <span className="font-semibold tracking-wider">+91 9395707581</span>
            </a>
            <button aria-label="Search" className="text-white hover:text-[#D9A93F] transition-colors p-1"
              type="button">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="square"
                  strokeLinejoin="miter" strokeWidth="2"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2 text-white hover:text-[#D9A93F] focus:outline-none"
            id="mobile-menu-btn"
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="square" strokeLinejoin="miter"
                strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`${mobileOpen ? "" : "hidden"} lg:hidden bg-[#3F4056] border-b border-brand-slateLight px-4 pt-2 pb-6 space-y-3 font-body uppercase text-xs tracking-wider text-white`}
        id="mobile-nav"
      >
        <Link className="block py-2 text-[#D9A93F] border-b border-white/10" href="/#hero" onClick={closeMobile}>Home</Link>
        <Link className="block py-2 border-b border-white/10" href="/#about" onClick={closeMobile}>About</Link>
        <Link className="block py-2 border-b border-white/10" href="/#areas" onClick={closeMobile}>Services</Link>
        <Link className="block py-2 border-b border-white/10" href="/#journals" onClick={closeMobile}>Journals</Link>
        <Link className="block py-2 border-b border-white/10" href="/#apex" onClick={closeMobile}>Apex</Link>
        <Link className="block py-2 border-b border-white/10" href="/#contact" onClick={closeMobile}>Contact</Link>
        <div className="pt-2 text-[11px] text-white/70 space-y-1 normal-case font-normal">
          <p className="">Helpline: +91 9395707581</p>
          <p className="">Email: editor@edunaazpublication.com</p>
        </div>
      </div>
    </header>
  );
}
