import React from "react";
import Link from "next/link";
import InquiryButton from "@/components/ui/InquiryButton";
import { COMPANY_INFO } from "@/lib/content";

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  accentWord?: string;
  description?: string;
}

export default function CtaBand({
  eyebrow = "GET IN TOUCH",
  title = "Ready to Publish Your Research?",
  accentWord = "Publish",
  description = "Get expert guidance for your manuscript, from first draft to submission.",
}: CtaBandProps) {
  const renderTitle = () => {
    if (!accentWord) return title;
    const regex = new RegExp(`(${accentWord})`, "i");
    const parts = title.split(regex);
    return parts.map((part, index) => {
      if (part.toLowerCase() === accentWord.toLowerCase()) {
        return (
          <span key={index} className="text-[#C084FC] font-normal">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="relative py-24 bg-brand-slate text-white">
      {/* Full-Width Background Photo with Slate Overlay (matching ContactBand) */}
      <div data-parallax="0.1" className="absolute inset-0 z-0 pointer-events-none scale-105">
        <img
          alt="Books in academic library"
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuAeCSgWJ3Yt_AjZxwKcLHNd1oW2I91bhHyrWOEUHyqQNmlwAPP854uZWnAflbuDwTaVvW-qW1LDl1WazAF_XM4tee6lP1mLtlCc4JwKBzwASciNA0wor0cLdicTOsTcXF0k8l6HczVuw1CB6lHhlBKNL1aoCJMY9KLGedf_04eHUcFnTXxKe0fSez95qHcPZ8J9hE0uvHl_zoanVFC3m3Unbkfw4Uki6MTL3gu9-kGYspIA4tG88"
        />
        <div className="absolute inset-0 bg-[#3F4056]/90" />
        {/* Purple logo glow — left edge */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 55% 60% at 5% 50%, rgba(123,47,190,0.22) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p data-reveal="up" className="text-xs uppercase tracking-eyebrow text-[#C084FC] font-medium mb-3">
          {eyebrow}
        </p>
        {/* Heading */}
        <h2 data-split="lines" className="text-3xl sm:text-4xl font-heading text-white mb-4">
          {renderTitle()}
        </h2>
        {/* Description */}
        <p data-reveal="up" className="text-white/80 font-body text-sm max-w-2xl mx-auto mb-8 font-light">
          {description}
        </p>

        {/* Dual Action Buttons: Book a Consultant & Inquire Now */}
        <div data-reveal="up" className="flex flex-wrap justify-center items-center gap-4 mb-6">
          <Link
            data-magnetic
            href="/contact?type=consultation"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 group shadow-[0_0_20px_rgba(123,47,190,0.4)]"
            style={{ borderRadius: "8px" }}
          >
            <span>BOOK A CONSULTANT</span>
            <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
          <InquiryButton
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white font-bold text-xs uppercase tracking-wider rounded-lg backdrop-blur-sm transition-all duration-200 group cursor-pointer"
            style={{ borderRadius: "8px" }}
          >
            <span>INQUIRE NOW</span>
            <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </InquiryButton>
        </div>

        {/* Direct WhatsApp Link Below Button */}
        <div className="inline-flex items-center space-x-2 text-white/90 text-xs font-medium">
          <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.275-.102-.475-.15-.676.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.235-.244-.589-.493-.51-.676-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.032-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.996h-.008c-1.776 0-3.517-.478-5.045-1.383l-.362-.215-3.75 1.002.999-3.65-.236-.375c-1.005-1.6-1.536-3.456-1.536-5.36 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.186 1.042 7.076 2.932s2.93 4.405 2.928 7.08c-.002 5.52-4.492 10.01-10.014 10.01zM19.78 4.22A11.002 11.002 0 0 0 12.04 1C5.975 1 1.025 5.95 1.022 12.018c0 1.938.505 3.832 1.464 5.495l-1.558 5.69 5.83-1.528A10.98 10.98 0 0 0 12.04 23c6.066 0 11.015-4.95 11.018-11.018 0-2.94-1.144-5.706-3.278-7.762z" />
          </svg>
          <span>Chat on WhatsApp:</span>
          <a
            className="text-[#C084FC] hover:text-white hover:underline font-semibold transition-colors"
            href={COMPANY_INFO.whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
