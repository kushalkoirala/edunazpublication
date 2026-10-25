"use client";

import React from "react";
import { useInquiryModal } from "@/components/ui/InquiryModal";

interface InquiryButtonProps {
  children?: React.ReactNode;
  className?: string;
  category?: string;
  variant?: "primary" | "secondary" | "link";
  style?: React.CSSProperties;
}

export default function InquiryButton({
  children = "INQUIRE NOW",
  className,
  category,
  variant = "primary",
  style,
}: InquiryButtonProps) {
  const { openModal } = useInquiryModal();

  const defaultClasses = {
    primary:
      "inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 rounded-lg shadow-[0_0_15px_rgba(123,47,190,0.35)] hover:shadow-[0_0_20px_rgba(123,47,190,0.5)] cursor-pointer",
    secondary:
      "inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white font-bold text-xs uppercase tracking-[0.16em] backdrop-blur-sm transition-all duration-200 rounded-lg group cursor-pointer",
    link:
      "inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7B2FBE] hover:text-[#6620A0] transition-colors cursor-pointer",
  };

  const finalClassName = className || defaultClasses[variant];

  return (
    <button
      type="button"
      onClick={() => openModal(category)}
      className={finalClassName}
      style={style}
    >
      {children}
    </button>
  );
}
