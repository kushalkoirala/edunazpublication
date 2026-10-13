"use client";

import React, { FormEvent } from "react";

export default function ContactBand() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      "Inquiry received. An editor from Edunaaz Publication will contact you shortly."
    );
  };

  return (
    /* BEGIN: ContactBandSection */
    <section className="relative py-24 bg-brand-slate text-white" id="contact">
      {/* Full-Width Background Photo with Slate Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Books in academic library"
          className="w-full h-full object-cover opacity-20"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuAeCSgWJ3Yt_AjZxwKcLHNd1oW2I91bhHyrWOEUHyqQNmlwAPP854uZWnAflbuDwTaVvW-qW1LDl1WazAF_XM4tee6lP1mLtlCc4JwKBzwASciNA0wor0cLdicTOsTcXF0k8l6HczVuw1CB6lHhlBKNL1aoCJMY9KLGedf_04eHUcFnTXxKe0fSez95qHcPZ8J9hE0uvHl_zoanVFC3m3Unbkfw4Uki6MTL3gu9-kGYspIA4tG88"
        />
        <div className="absolute inset-0 bg-[#3F4056]/90" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-eyebrow text-brand-gold font-medium mb-3">
          GET IN TOUCH
        </p>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-heading text-white mb-4">
          Ready to <span className="text-brand-gold font-normal">Publish</span> Your Research?
        </h2>
        <p className="text-white/80 font-body text-sm max-w-2xl mx-auto mb-10 font-light">
          Get expert guidance for your manuscript, from first draft to submission. Fill in your inquiry below.
        </p>
        {/* Compact Form Row */}
        <form className="max-w-4xl mx-auto mb-8 text-left" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full bg-white text-brand-dark text-xs px-4 py-3.5 border-0 focus:ring-1 focus:ring-brand-gold placeholder:text-gray-400"
                id="name"
                placeholder="Dr. / Prof. / Scholar Name"
                required
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-white text-brand-dark text-xs px-4 py-3.5 border-0 focus:ring-1 focus:ring-brand-gold placeholder:text-gray-400"
                id="email"
                placeholder="author@university.edu"
                required
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                htmlFor="manuscript"
              >
                Brief Manuscript Details
              </label>
              <input
                className="w-full bg-white text-brand-dark text-xs px-4 py-3.5 border-0 focus:ring-1 focus:ring-brand-gold placeholder:text-gray-400"
                id="manuscript"
                placeholder="Discipline, Title, or Research Scope"
                required
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="inline-flex items-stretch bg-brand-gold hover:bg-brand-goldHover transition-colors duration-150 text-brand-dark group shadow-none cursor-pointer"
              type="submit"
            >
              <span className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center">
                SUBMIT ENQUIRY
              </span>
              <span className="w-11 bg-white border-l border-brand-gold flex items-center justify-center text-brand-dark transition-transform duration-200 group-hover:translate-x-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
        {/* Direct WhatsApp Link Below Form */}
        <div className="inline-flex items-center space-x-2 text-white/90 text-xs font-medium">
          <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.275-.102-.475-.15-.676.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.235-.244-.589-.493-.51-.676-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.032-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.996h-.008c-1.776 0-3.517-.478-5.045-1.383l-.362-.215-3.75 1.002.999-3.65-.236-.375c-1.005-1.6-1.536-3.456-1.536-5.36 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.186 1.042 7.076 2.932s2.93 4.405 2.928 7.08c-.002 5.52-4.492 10.01-10.014 10.01zM19.78 4.22A11.002 11.002 0 0 0 12.04 1C5.975 1 1.025 5.95 1.022 12.018c0 1.938.505 3.832 1.464 5.495l-1.558 5.69 5.83-1.528A10.98 10.98 0 0 0 12.04 23c6.066 0 11.015-4.95 11.018-11.018 0-2.94-1.144-5.706-3.278-7.762z" />
          </svg>
          <span className="">Chat on WhatsApp:</span>
          <a
            className="text-brand-gold hover:underline font-semibold"
            href="https://wa.me/919395707581"
            rel="noopener noreferrer"
            target="_blank"
          >
            +91 9395707581
          </a>
        </div>
      </div>
    </section>
    /* END: ContactBandSection */
  );
}
