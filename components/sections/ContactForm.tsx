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
          Full Name <span className="text-brand-gold">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-brand-gold focus:border-brand-gold placeholder:text-gray-400"
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
          Email Address <span className="text-brand-gold">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-brand-gold focus:border-brand-gold placeholder:text-gray-400"
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
          Brief Manuscript Details <span className="text-brand-gold">*</span>
        </label>
        <input
          className="w-full bg-brand-bgGray text-brand-dark text-xs px-4 py-3.5 border border-brand-borderHairline focus:ring-1 focus:ring-brand-gold focus:border-brand-gold placeholder:text-gray-400"
          id="contact-manuscript"
          name="manuscript"
          placeholder="Discipline, Title, or Research Scope"
          required
          type="text"
        />
      </div>

      <div className="pt-2" data-reveal="up" data-magnetic>
        <button
          className="w-full sm:w-auto inline-flex items-stretch bg-brand-gold hover:bg-brand-goldHover transition-colors duration-150 text-brand-dark group shadow-none cursor-pointer"
          type="submit"
        >
          <span className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider flex items-center justify-center">
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
  );
}
