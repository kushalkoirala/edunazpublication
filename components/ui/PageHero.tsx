import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  accentWord?: string;
  intro?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHero({
  eyebrow,
  title,
  accentWord,
  intro,
  breadcrumbs,
}: PageHeroProps) {
  // Render title with exactly one gold accent word if matched
  const renderTitle = () => {
    if (!accentWord) {
      return title;
    }

    const regex = new RegExp(`(${accentWord})`, "i");
    const parts = title.split(regex);

    return parts.map((part, index) => {
      if (part.toLowerCase() === accentWord.toLowerCase()) {
        return (
          <span key={index} className="text-[#D9A93F] font-normal">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="relative bg-[#3F4056] text-white overflow-hidden pt-[140px] pb-16 sm:pb-20">
      {/* Faint library photo background (~10% opacity, grayscale, same as stats band) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none grayscale"
        style={{ backgroundImage: "var(--img-library)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center space-x-2 text-xs font-body text-white/60">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={idx} className="flex items-center space-x-2">
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#D9A93F] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-white font-medium" : ""}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <span className="text-white/40">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-eyebrow text-[#D9A93F] font-medium mb-3">
          {eyebrow}
        </p>

        {/* Marcellus H1 with one gold accent word */}
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] text-white font-heading leading-tight max-w-4xl">
          {renderTitle()}
        </h1>

        {/* Optional one-line intro */}
        {intro && (
          <p className="text-white/80 font-body text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-light">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
