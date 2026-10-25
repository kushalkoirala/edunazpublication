"use client";

import React, { FormEvent } from "react";

export default function ContactForm() {
  // TODO: A server action or API route plus spam protection is needed before launch.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Inquiry received. An editor from Edunaaz Publication will contact you shortly."
    );
  };

  return (
    <form className="space-y-5 text-left" data-stagger onSubmit={handleSubmit}>
      <div data-reveal="up">
        <label
          className="block text-[11px] uppercase tracking-wider text-brand-dark font-medium mb-1.5"
          htmlFor="contact-name"
        >
          Full Name <span className="text-[#7B2FBE]">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
          id="contact-name"
          name="name"
          placeholder="Dr. / Prof. / Scholar Name"
          required
          type="text"
        />
      </div>

      <div data-reveal="up">
        <label
          className="block text-[11px] uppercase tracking-wider text-brand-dark font-medium mb-1.5"
          htmlFor="contact-email"
        >
          Email Address <span className="text-[#7B2FBE]">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
          id="contact-email"
          name="email"
          placeholder="author@university.edu"
          required
          type="email"
        />
      </div>

      <div data-reveal="up">
        <label
          className="block text-[11px] uppercase tracking-wider text-brand-dark font-medium mb-1.5"
          htmlFor="contact-manuscript"
        >
          Brief Manuscript Details <span className="text-[#7B2FBE]">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-[#7B2FBE] focus:border-[#7B2FBE] placeholder:text-gray-400 rounded-lg"
          id="contact-manuscript"
          name="manuscript"
          placeholder="Discipline, Title, or Research Scope"
          required
          type="text"
        />
      </div>

      <div className="pt-2" data-reveal="up" data-magnetic>
        <button
          className="w-full sm:w-auto inline-flex items-stretch bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] transition-all duration-200 text-white rounded-lg overflow-hidden shadow-[0_0_15px_rgba(123,47,190,0.35)] hover:shadow-[0_0_20px_rgba(123,47,190,0.5)] group cursor-pointer"
          type="submit"
        >
          <span className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center">
            SUBMIT ENQUIRY
          </span>
          <span className="w-11 bg-white/10 border-l border-white/20 flex items-center justify-center text-white transition-transform duration-200 group-hover:translate-x-0.5">
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
  );
}
