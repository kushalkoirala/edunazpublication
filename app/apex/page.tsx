import type { Metadata } from "next";
import Link from "next/link";
import ApexPageContent from "@/components/sections/ApexPageContent";

export const metadata: Metadata = {
  title: "APEX – Academic Publication Excellence eXpedited Program",
  description:
    "A personalized three-month research mentorship program designed to guide researchers through manuscript development, journal selection, submission and post-submission support.",
};

export default function ApexPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#3F4056] text-white overflow-hidden pt-[140px] pb-16 sm:pb-20">
        {/* Faint library photo background */}
        <div
          data-pagehero-bg
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none grayscale scale-105"
          style={{ backgroundImage: "var(--img-library)" }}
        />
        {/* Atmospheric purple radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 95% 10%, rgba(123,47,190,0.22) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav data-reveal="fade" aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-xs font-body text-white/60">
              <li className="flex items-center space-x-2">
                <Link href="/" className="hover:text-[#C084FC] transition-colors">
                  Home
                </Link>
                <span className="text-white/40">/</span>
              </li>
              <li className="text-white font-medium">APEX Program</li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <p
            data-reveal="up"
            className="text-xs uppercase tracking-eyebrow text-[#C084FC] font-semibold mb-3"
          >
            APEX RESEARCH SUPPORT PROGRAM
          </p>

          {/* Title */}
          <h1
            data-split="lines"
            className="text-3xl sm:text-4xl lg:text-[46px] text-white font-heading leading-tight max-w-4xl"
          >
            APEX –{" "}
            <span className="text-[#C084FC] font-normal">
              Academic Publication Excellence
            </span>{" "}
            eXpedited Program
          </h1>

          {/* Subtitle */}
          <p
            data-reveal="up"
            className="text-lg sm:text-xl text-[#E5D4F8] font-heading mt-3 max-w-3xl"
          >
            A Personalized Research Support and Academic Publication Mentorship Program.
          </p>

          {/* Description */}
          <p
            data-reveal="up"
            className="text-white/80 font-body text-sm sm:text-base max-w-3xl mt-4 leading-relaxed font-light"
          >
            A personalized three-month research mentorship program designed to guide researchers through
            manuscript development, journal selection, submission and post-submission support.
          </p>
        </div>
      </section>

      {/* Main APEX Program Content */}
      <ApexPageContent />
    </main>
  );
}
