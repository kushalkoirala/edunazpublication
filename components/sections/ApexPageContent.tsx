"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useInquiryModal } from "@/components/ui/InquiryModal";

// ─────────────────────────────────────────────────────────────
// DATA FROM OFFICIAL APEX INFORMATION BOOKLET
// ─────────────────────────────────────────────────────────────

const PROGRAM_PILLARS = [
  {
    num: "01",
    title: "Personalized Research Mentorship",
    description:
      "One-on-one guidance tailored directly to your specific manuscript, research background, empirical methodology, and publication objectives.",
  },
  {
    num: "02",
    title: "Manuscript Quality Enhancement",
    description:
      "Comprehensive structural, methodological, linguistic, and content review to identify strengths, resolve vulnerabilities, and ensure rigorous scientific presentation.",
  },
  {
    num: "03",
    title: "Evidence-Based Journal Selection",
    description:
      "Strategic targeting of reputable subscription-based journals (free/no APC) with verified indexing in Scopus and Web of Science, aligned with your research scope.",
  },
  {
    num: "04",
    title: "Submission & Post-Submission Support",
    description:
      "Step-by-step navigation of journal submission portals, reviewer feedback interpretation, rebuttal documentation, and revision management through to final acceptance.",
  },
];

const PILLAR_ICONS: React.ReactNode[] = [
  // 01: Mentorship (Users)
  (
    <svg
      key="icon-mentorship"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  // 02: Manuscript Enhancement (File with pencil)
  (
    <svg
      key="icon-manuscript"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="13" y2="13" />
      <line x1="8" y1="17" x2="11" y2="17" />
      <path d="M14.5 18.5 18 15l2 2-3.5 3.5-2 .5z" />
    </svg>
  ),
  // 03: Journal Selection (Layers)
  (
    <svg
      key="icon-journal"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 flex-shrink-0"
      aria-hidden="true"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  // 04: Submission Support (Upload / Tray arrow)
  (
    <svg
      key="icon-submission"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  ),
];

const PROFILE_ICONS: React.ReactNode[] = [
  // 01: Graduation Cap / Mortarboard
  (
    <svg
      key="prof-cap"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  // 02: Stack of Books
  (
    <svg
      key="prof-books"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M4 14.5A2.5 2.5 0 0 1 6.5 12H20" />
      <path d="M4 9.5A2.5 2.5 0 0 1 6.5 7H20" />
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5a2.5 2.5 0 0 1-2.5-2.5v-13Z" />
    </svg>
  ),
  // 03: Independent Researchers / Two People
  (
    <svg
      key="prof-independent"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
];

const DISCIPLINARY_ICONS: React.ReactNode[] = [
  // 01: Science & Life Sciences (Beaker / Flask)
  (
    <svg
      key="disc-science"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M10 2v7.31L4.17 19.33A2 2 0 0 0 5.89 22h12.22a2 2 0 0 0 1.72-2.67L14 9.31V2" />
      <line x1="8.5" y1="2" x2="15.5" y2="2" />
      <line x1="14" y1="9" x2="10" y2="9" />
    </svg>
  ),
  // 02: Engineering & Technology (Gear / Cog)
  (
    <svg
      key="disc-eng"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  // 03: Management & Business (Layers)
  (
    <svg
      key="disc-mgmt"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  // 04: Economics (Trending Analytics Chart with Bars)
  (
    <svg
      key="disc-econ"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
      <line x1="2" y1="21" x2="22" y2="21" />
      <line x1="6" y1="21" x2="6" y2="18" />
      <line x1="10" y1="21" x2="10" y2="15" />
      <line x1="14" y1="21" x2="14" y2="17" />
      <line x1="18" y1="21" x2="18" y2="11" />
    </svg>
  ),
];

const TARGET_PARTICIPANTS = [
  {
    role: "Research Scholars & Academicians",
    details:
      "Researchers who have completed original quantitative or mixed-method research and seek expert, structured guidance to achieve successful journal publication.",
  },
  {
    role: "Doctoral & Postgraduate Researchers",
    details:
      "PhD scholars and master's researchers with completed dissertations, thesis, or substantial empirical research projects ready for adaptation into high-impact articles.",
  },
  {
    role: "Independent Researchers & Practitioners",
    details:
      "Independent scholars, clinicians, and industry practitioners with original empirical research who need structured publication guidance outside traditional university pipelines.",
  },
  {
    role: "Faculty Members & Research Professionals",
    details:
      "University professors, lecturers, and institutional researchers requiring technical assistance, manuscript refinement, statistical graphics optimization, and journal placement strategy.",
  },
];

const CANDIDATE_CRITERIA = [
  "Have completed original quantitative or mixed-method research in Science, Engineering, Management, or Economics.",
  "Hold a completed dissertation, thesis, draft paper, or substantial empirical research project ready for publication.",
  "Seek professional, hands-on guidance through the peer-review and journal publication process.",
  "Require technical assistance with scientific data visualization (SigmaPlot/CorelDRAW) and manuscript presentation.",
  "Want personalized journal selection and a targeted submission strategy tailored to their profile.",
  "Are committed to achieving publication in reputable subscription-model (free/no APC) journals within a structured 3-month timeline.",
];

const DISCIPLINARY_AREAS = [
  {
    category: "Science & Life Sciences",
    topics: [
      "Physical Sciences & Applied Chemistry",
      "Biological & Life Sciences",
      "Environmental Science & Ecology",
      "Material Science & Nanotechnology",
    ],
  },
  {
    category: "Engineering & Technology",
    topics: [
      "Computer Science & Information Technology",
      "Civil & Structural Engineering",
      "Mechanical & Manufacturing",
      "Electrical & Electronics",
      "Chemical & Process",
      "Environmental Engineering",
    ],
  },
  {
    category: "Management & Business",
    topics: [
      "Organisational Behaviour & HRM",
      "Strategic Management & Business Policy",
      "Marketing & Consumer Behaviour",
      "Operations & Quality Management",
      "Entrepreneurship & Innovation",
      "Supply Chain & Logistics",
    ],
  },
  {
    category: "Economics",
    topics: [
      "Microeconomics & Macroeconomics",
      "Econometrics & Quantitative Methods",
      "Development Economics & Public Policy",
      "Industrial Economics & Market Analysis",
      "Financial Economics & Investment",
      "Environmental & Resource Economics",
    ],
  },
];

const CORE_MODULES = [
  {
    id: "module-a",
    letter: "A",
    title: "Manuscript Review & Quality Assessment",
    summary:
      "Rigorous diagnostic review of your complete draft to establish methodological soundness and structural readiness.",
    deliverables: [
      "Comprehensive structural and content review of your entire manuscript draft.",
      "Assessment of research methodology rigor, sample validity, and empirical design soundness.",
      "Identification of key manuscript strengths and priority developmental areas.",
      "Alignment verification against current international publication standards and ethical guidelines.",
      "Delivery of a detailed written feedback report with specific, prioritized revision recommendations.",
    ],
  },
  {
    id: "module-b",
    letter: "B",
    title: "Software Support & Technical Assistance (SigmaPlot & CorelDRAW)",
    summary:
      "Hands-on technical training and graphic optimization for high-impact statistical plots and scientific figures.",
    deliverables: [
      "SigmaPlot Training: Statistical graphics, scientific data visualization, advanced curve fitting, and figure optimization for journal submission.",
      "CorelDRAW Training: Professional figure design, technical schematics, infographics, and diagram enhancement for visual communication.",
      "Technical support for high-quality, print-ready figure and illustration production.",
      "Optimization of all visual elements according to target journal DPI, color space, and formatting specifications.",
    ],
  },
  {
    id: "module-c",
    letter: "C",
    title: "Pre-Submission Support & Editorial Refinement",
    summary:
      "Intensive language editing, academic flow enhancement, and strict compliance formatting.",
    deliverables: [
      "Comprehensive line-by-line manuscript editing, clarity enhancement, and academic tone refinement.",
      "Verification of citation style and bibliography formatting (APA, IEEE, Harvard, Vancouver, Chicago, etc.).",
      "Full compliance check against the target journal's specific Author Guidelines and word limits.",
      "Preparation of a professional, tailored Cover Letter to the Editor-in-Chief.",
      "Drafting of Author Statements, Contribution Declarations, and Conflict of Interest Disclosures.",
    ],
  },
  {
    id: "module-d",
    letter: "D",
    title: "Journal Selection Strategy (Subscription-Based / No APC)",
    summary:
      "Evidence-based targeting of credible, high-visibility subscription journals without author charges.",
    deliverables: [
      "Strategic identification of the most suitable, credible journal targets aligned with manuscript scope.",
      "Detailed analysis of journal scope, target audience, readership reach, and editorial focus.",
      "Impact Factor (JCR), CiteScore, SJR, and journal ranking evaluation.",
      "Verification of indexing databases (Scopus, Web of Science, UGC CARE, PubMed, etc.).",
      "Analysis of peer-review timelines, acceptance rates, and editorial turnaround speeds.",
      "Identification of subscription-based journals where publication is 100% free for authors (no APC).",
      "Alternative tiered journal recommendations to mitigate desk-rejection risk and maximize visibility.",
    ],
  },
  {
    id: "module-e",
    letter: "E",
    title: "Manuscript Submission Support & Portal Management",
    summary:
      "Step-by-step technical guidance through online journal submission platforms.",
    deliverables: [
      "Hands-on guidance through online submission portals (Editorial Manager, ScholarOne, OJS, etc.).",
      "Preparation, formatting, and verification of all required submission metadata and blinded manuscripts.",
      "Selection of search-optimized keywords, classifications, and subject categories.",
      "Real-time technical submission troubleshooting and file verification.",
      "Confirmation and formal documentation of successful submission receipt and tracking credentials.",
    ],
  },
  {
    id: "module-f",
    letter: "F",
    title: "Post-Submission Support & Peer-Review Navigation",
    summary:
      "Expert assistance in interpreting editorial decisions, analyzing reviewer comments, and crafting rebuttals.",
    deliverables: [
      "Expert interpretation of initial editorial and desk-review decisions.",
      "Detailed analysis of peer-review feedback and formulation of a structured revision plan.",
      "Drafting of persuasive, point-by-point rebuttal letters and author-response documentation.",
      "Negotiation and strategic revision guidance for addressing challenging reviewer critique.",
      "Ongoing tracking and guidance across revision rounds through to final editorial acceptance.",
    ],
  },
];

const ENROLLMENT_STEPS_DATA = [
  {
    step: "STEP 01",
    title: "Initial Inquiry & Registration",
    details:
      "Reach out to EduNaaz Publication with your research background, manuscript draft status, and publication goals to register your interest in the APEX program.",
    image: "/images/apex-included.jpg",
    imageFocus: "object-bottom",
  },
  {
    step: "STEP 02",
    title: "Application Submission",
    details:
      "Prepare and submit your current manuscript with a Microsoft Word (.docx format ONLY), brief abstract and methodology description, timeline expectations, specific guidance requirements, and contact details.",
    image: "/images/apex-included.jpg",
    imageFocus: "object-center",
  },
  {
    step: "STEP 03",
    title: "Consultation & Fit Assessment",
    details:
      "Schedule an initial consultation with our program mentor to discuss your research goals, assess program suitability, review manuscript scope, and confirm enrollment.",
    image: "/images/apex-included.jpg",
    imageFocus: "object-top",
  },
  {
    step: "STEP 04",
    title: "Program Initiation & Milestone Onboarding",
    details:
      "Upon enrollment confirmation, receive your detailed 12-week schedule and milestone calendar, complete intake goal-settings, establish regular communication cadence, and begin Month 1 activities immediately.",
    image: "/images/apex-scope.jpg",
    imageFocus: "object-center",
  },
];

const FAQS_DATA = [
  {
    q: "How much time commitment is required?",
    a: "The program is designed as a structured 3-month initiative with regular check-ins and work sessions. Typical time commitment ranges from 8–12 hours per week, depending on your manuscript's current state and revision needs.",
  },
  {
    q: "What if my manuscript needs extensive revision?",
    a: "Our program accommodates manuscripts at various stages of development. Our mentor will assess your manuscript and develop a customized revision plan. If substantial work is needed, we prioritize the most impactful improvements within the 3-month timeline.",
  },
  {
    q: "What if my manuscript gets desk-rejected?",
    a: "Post-submission support includes guidance if your manuscript receives a desk rejection. We have a portfolio of alternative journals tailored to your research profile and can help you understand the rejection reason and develop a resubmission strategy.",
  },
  {
    q: "What happens after 3 months?",
    a: "The structured program concludes in 3 months. However, depending on journal timelines, your manuscript may still be in review. We can discuss extended post-publication support or additional mentorship as needed.",
  },
  {
    q: "Can I use this program if I'm not from an academic institution?",
    a: "Yes! This program is open to independent researchers, practitioners, and professionals from any background who have original research to publish.",
  },
  {
    q: "What if my research is interdisciplinary?",
    a: "We welcome interdisciplinary research that bridges the covered disciplines (Science, Engineering, Management, Economics). We strategize for your specific research focus.",
  },
  {
    q: "How do I know if software training (SigmaPlot/CorelDRAW) is included?",
    a: "Software training is integrated into your personalized program based on your specific manuscript needs. During initial assessment, our mentor will determine which software training sessions will benefit your work most.",
  },
  {
    q: "Is there a possibility of earlier publication before 3 months?",
    a: "Yes, timeline can vary based on journal desk-review decisions. If your manuscript receives an expedited review or quick acceptance, we celebrate that success! Extended timeline may also occur if revisions are requested.",
  },
  {
    q: "Is publication guaranteed within three months?",
    a: "No. APEX provides structured mentorship, manuscript improvement, journal selection and submission support. Final editorial decisions and publication timelines are controlled exclusively by the respective journals.",
  },
  {
    q: "Is journal publication free?",
    a: "The program focuses on suitable subscription-based journals without author-paid APCs. Journal eligibility and publication arrangements depend on the target journal.",
  },
];

export default function ApexPageContent() {
  const { openModal } = useInquiryModal();
  const [expandedModule, setExpandedModule] = useState<string | null>("module-a");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleModule = (id: string) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-brand-dark">
      {/* ─────────────────────────────────────────────────────── */}
      {/* 1. PROGRAM INTRODUCTION & MISSION SECTION               */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-white border-b border-brand-borderHairline overflow-hidden">
        {/* Decorative subtle purple background waves at bottom-right (matching reference design) */}
        <div
          className="absolute -bottom-6 -right-10 w-[520px] h-[220px] pointer-events-none select-none opacity-25 z-0"
          aria-hidden="true"
        >
          <svg className="w-full h-full" viewBox="0 0 520 220" fill="none" preserveAspectRatio="none">
            <path
              d="M 0 170 C 140 190 260 90 400 130 C 460 148 495 120 520 100 L 520 220 L 0 220 Z"
              fill="url(#apex-wave-gradient-1)"
            />
            <path
              d="M 80 180 C 200 195 300 120 440 150 C 480 158 505 140 520 130 L 520 220 L 80 220 Z"
              fill="url(#apex-wave-gradient-2)"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="apex-wave-gradient-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="apex-wave-gradient-2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0.35" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Visual & Mission Card */}
            <div className="lg:col-span-5 space-y-6" data-reveal="up">
              {/* Outer Image Container with Custom Curved Purple Contour Accents */}
              <div className="relative group">
                {/* Top-Left Contoured Purple Bracket */}
                <div
                  className="absolute -top-2.5 -left-2.5 w-32 h-32 border-t-[7px] border-l-[7px] border-[#7B2FBE] rounded-tl-[36px] pointer-events-none z-20 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                {/* Bottom-Right Contoured Purple Bracket */}
                <div
                  className="absolute -bottom-2.5 -right-2.5 w-32 h-32 border-b-[7px] border-r-[7px] border-[#7B2FBE] rounded-br-[36px] pointer-events-none z-20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />

                {/* Soft Corner Glows */}
                <div
                  className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-[#7B2FBE] to-transparent rounded-tl-[36px] pointer-events-none opacity-30 z-0"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-tl from-[#7B2FBE] to-transparent rounded-br-[36px] pointer-events-none opacity-30 z-0"
                  aria-hidden="true"
                />

                {/* Inner Card & Photo */}
                <div className="relative z-10 p-2 sm:p-2.5 bg-white rounded-[28px] sm:rounded-[32px] shadow-[0_14px_36px_rgba(123,47,190,0.08)] border border-[#ECE7F4] overflow-hidden">
                  <div className="w-full h-[320px] sm:h-[350px] lg:h-[370px] overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#F3EFE9]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Research Mentorship and Manuscript Consultation"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8SykcoqvFrV2J_Uzthc2tluoOUvgKD3zdM6lpkVpFA6yn9YRIrsaXP1nLNDrt_xmXdlz_-VBxMap6gpY5GYNcxpjf4eezENULgagWpyL3vRitVr3_66lojJdsC-cEfRZDp5T_ybthzx0M8dEKmtZNUHn_Hn57p_uqFESLaQ74MBdcOc5GltlV_jRI8_tAaC0YQEB-J94ea7NJ8PflvjNXiRZUShCfWPvKSgsoFVT2FW8IwRpXwyw"
                    />
                  </div>
                </div>
              </div>

              {/* Official Mission Box from Reference Design */}
              <div
                className="p-6 bg-[#FAF8FC] border border-[#EBE3F5] rounded-[22px] shadow-[0_8px_24px_rgba(123,47,190,0.04)]"
                style={{ borderRadius: "22px" }}
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <div
                    className="w-9 h-9 rounded-xl bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0"
                    style={{ borderRadius: "10px" }}
                  >
                    {/* Target / Bullseye Mission Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-[#7B2FBE]"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.93 4.93 4.24 4.24" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7B2FBE] font-body">
                    PROGRAM MISSION
                  </span>
                </div>

                <div className="pl-4 border-l-2 border-[#7B2FBE]">
                  <p className="text-xs sm:text-[13px] text-brand-dark/90 italic font-body leading-relaxed">
                    &ldquo;To empower researchers in Science, Engineering, Management, and Economics by
                    providing structured, expert-led support that enhances manuscript quality,
                    accelerates the publication timeline, and ensures successful placement in credible
                    journals aligned with current research standards and best practices.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Program Narrative */}
            <div className="lg:col-span-7" data-reveal="up">
              {/* Eyebrow Header with purple line flourishes */}
              <div className="flex items-center gap-3 mb-3.5">
                <span className="w-8 h-px bg-[#7B2FBE]/70" />
                <span className="text-xs uppercase tracking-[0.22em] text-[#7B2FBE] font-semibold font-body">
                  INTRODUCING APEX
                </span>
                <span className="w-8 h-px bg-[#7B2FBE]/70" />
              </div>

              {/* Headline matching reference styling with Marcellus serif font */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-brand-dark font-heading leading-[1.2] mb-5">
                Your Research Deserves the{" "}
                <span className="text-[#7B2FBE]">Right</span>
                <br className="hidden sm:inline" />{" "}
                <span className="text-[#7B2FBE]">Publication Journey.</span>
              </h2>

              {/* Explanatory Narrative Paragraphs */}
              <div className="space-y-3.5 text-brand-muted font-body text-sm sm:text-[14.5px] leading-relaxed mb-7">
                <p>
                  <strong className="text-brand-dark font-semibold">
                    APEX — Academic Publication Excellence eXpedited Program
                  </strong>{" "}
                  is a comprehensive, personalized research mentorship initiative designed to guide
                  individual researchers and academicians from manuscript conceptualization through
                  successful journal publication.
                </p>
                <p>
                  This intensive three-month program provides one-on-one mentorship and technical
                  assistance to help researchers improve manuscript quality, develop an effective
                  publication strategy and navigate the peer-review process.
                </p>
                <p>
                  The program focuses on identifying suitable reputable subscription-based journals
                  that do not charge authors Article Processing Charges (APC), subject to journal
                  eligibility and selection.
                </p>
              </div>

              {/* 3 Core Highlight Tenets as sleek Pill Rows */}
              <div className="space-y-3.5 mb-8">
                {/* Feature 1 */}
                <div
                  className="flex items-center p-3.5 sm:p-4 bg-[#F8F7FA] border border-[#EBE7F2] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#7B2FBE]/50 hover:bg-white hover:shadow-[0_4px_16px_rgba(123,47,190,0.08)] transition-all duration-200 group"
                  style={{ borderRadius: "16px" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#7B2FBE]/10 flex items-center justify-center flex-shrink-0 text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="h-5 w-px bg-[#7B2FBE]/30 mx-3.5 sm:mx-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-[13.5px] font-medium font-body text-brand-dark leading-snug">
                    Personalized one-on-one research mentorship with experienced professionals.
                  </span>
                </div>

                {/* Feature 2 */}
                <div
                  className="flex items-center p-3.5 sm:p-4 bg-[#F8F7FA] border border-[#EBE7F2] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#7B2FBE]/50 hover:bg-white hover:shadow-[0_4px_16px_rgba(123,47,190,0.08)] transition-all duration-200 group"
                  style={{ borderRadius: "16px" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#7B2FBE]/10 flex items-center justify-center flex-shrink-0 text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <span className="h-5 w-px bg-[#7B2FBE]/30 mx-3.5 sm:mx-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-[13.5px] font-medium font-body text-brand-dark leading-snug">
                    Strategic journal selection targeting reputable subscription journals (Zero APC).
                  </span>
                </div>

                {/* Feature 3 */}
                <div
                  className="flex items-center p-3.5 sm:p-4 bg-[#F8F7FA] border border-[#EBE7F2] rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#7B2FBE]/50 hover:bg-white hover:shadow-[0_4px_16px_rgba(123,47,190,0.08)] transition-all duration-200 group"
                  style={{ borderRadius: "16px" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#7B2FBE]/10 flex items-center justify-center flex-shrink-0 text-[#7B2FBE] group-hover:bg-[#7B2FBE] group-hover:text-white transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <line x1="12" y1="20" x2="12" y2="10" />
                      <line x1="18" y1="20" x2="18" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="16" />
                    </svg>
                  </div>
                  <span className="h-5 w-px bg-[#7B2FBE]/30 mx-3.5 sm:mx-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-[13.5px] font-medium font-body text-brand-dark leading-snug">
                    Technical manuscript development, SigmaPlot figure optimization, and submission support.
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => openModal("APEX Program Inquiry")}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] transition-all duration-200 text-white font-bold text-xs uppercase tracking-[0.16em] rounded-xl shadow-[0_4px_18px_rgba(123,47,190,0.35)] hover:shadow-[0_6px_25px_rgba(123,47,190,0.5)] cursor-pointer group"
                  style={{ borderRadius: "12px" }}
                >
                  <span>ENQUIRE ABOUT APEX</span>
                  <span className="font-mono transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 2. PROGRAM OVERVIEW (A Structured Approach)              */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#FAF9FC] via-white to-[#FAF9FC] border-b border-brand-borderHairline overflow-hidden">
        {/* Decorative curved purple vector line flourishes at top-left (matching reference image) */}
        <div
          className="absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none select-none opacity-20 z-0"
          aria-hidden="true"
        >
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <path d="M -60 120 C 80 50 200 180 380 90" stroke="#7B2FBE" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M -40 150 C 100 80 220 210 400 120" stroke="#A855F7" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M -20 180 C 120 110 240 240 420 150" stroke="#C084FC" strokeWidth="1" strokeLinecap="round" />
            <path d="M 0 210 C 140 140 260 270 440 180" stroke="#7B2FBE" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Decorative soft purple blur glow at bottom-right */}
        <div
          className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-tl from-[#7B2FBE]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            {/* Eyebrow with decorative horizontal lines */}
            <div className="flex items-center justify-center gap-3 mb-3.5" data-reveal="up">
              <span className="w-8 h-px bg-[#7B2FBE]/70" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#7B2FBE] font-semibold font-body">
                PROGRAM OVERVIEW
              </span>
              <span className="w-8 h-px bg-[#7B2FBE]/70" />
            </div>

            {/* Heading matching reference image: Academic in dark, Publication in italic purple */}
            <h2
              data-split="lines"
              className="text-3xl sm:text-4xl lg:text-[44px] text-brand-dark font-heading leading-tight mb-4"
            >
              A Structured Approach to{" "}
              <br className="hidden sm:inline" />
              Academic{" "}
              <span className="italic font-normal text-[#7B2FBE]">Publication</span>
            </h2>

            {/* Subtitle */}
            <p
              data-reveal="up"
              className="text-brand-muted font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            >
              From initial manuscript assessment to journal submission and post-submission guidance,
              APEX provides structured support across the essential stages of the academic
              publication process.
            </p>
          </div>

          {/* 4 Cards (2x2 Grid) matching reference design with soft squircle icon boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {PROGRAM_PILLARS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBE7F2] p-7 sm:p-8 rounded-[22px] sm:rounded-[24px] shadow-[0_4px_20px_rgba(123,47,190,0.03)] hover:shadow-[0_12px_32px_rgba(123,47,190,0.09)] hover:border-[#7B2FBE]/50 transition-all duration-300 flex items-start gap-5 sm:gap-6 group"
                style={{ borderRadius: "22px" }}
              >
                {/* Rounded Icon Squircle Box */}
                <div
                  className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F6F2FB] border border-[#E9DFF6] text-[#7B2FBE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7B2FBE] group-hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(123,47,190,0.04)]"
                  style={{ borderRadius: "16px" }}
                >
                  {PILLAR_ICONS[idx]}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg sm:text-xl text-brand-dark mb-2 leading-snug group-hover:text-[#7B2FBE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] font-body text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 3. WHO SHOULD APPLY? (Intended Candidates)              */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-white border-b border-brand-borderHairline overflow-hidden">
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            {/* Eyebrow with decorative horizontal lines */}
            <div className="flex items-center justify-center gap-3 mb-3.5" data-reveal="up">
              <span className="w-8 h-px bg-[#7B2FBE]/70" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#7B2FBE] font-semibold font-body">
                IDEAL CANDIDATES
              </span>
              <span className="w-8 h-px bg-[#7B2FBE]/70" />
            </div>

            {/* Headline */}
            <h2
              data-split="lines"
              className="text-3xl sm:text-4xl lg:text-[44px] text-brand-dark font-heading leading-tight mb-4"
            >
              Who Is <span className="text-[#7B2FBE]">APEX</span> Designed For?
            </h2>

            {/* Subtitle */}
            <p
              data-reveal="up"
              className="text-brand-muted font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            >
              APEX is designed for researchers and scholars who have completed original research and
              are seeking professional guidance to prepare and submit their work to suitable
              academic journals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Eligible Researcher Profiles (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between" data-reveal="up">
              <div className="mb-5 sm:mb-6">
                <h3 className="font-heading text-xl sm:text-2xl text-brand-dark inline-block relative pb-2.5">
                  Eligible Researcher Profiles
                  <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#7B2FBE]" />
                </h3>
              </div>

              {/* 3 Profile Cards matching reference design */}
              <div className="space-y-4 sm:space-y-4.5 flex-1 flex flex-col justify-between">
                {TARGET_PARTICIPANTS.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#EBE7F2] p-5 sm:p-6 rounded-[22px] sm:rounded-[24px] shadow-[0_4px_18px_rgba(123,47,190,0.03)] hover:shadow-[0_8px_25px_rgba(123,47,190,0.08)] hover:border-[#7B2FBE]/50 transition-all duration-300 flex items-center gap-4 sm:gap-5 group flex-1"
                    style={{ borderRadius: "22px" }}
                  >
                    {/* Rounded Squircle Icon Box */}
                    <div
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F6F2FB] border border-[#E9DFF6] text-[#7B2FBE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7B2FBE] group-hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(123,47,190,0.04)]"
                      style={{ borderRadius: "16px" }}
                    >
                      {PROFILE_ICONS[idx]}
                    </div>

                    {/* Thin Vertical Accent Line */}
                    <span className="h-10 sm:h-12 w-px bg-[#7B2FBE]/25 flex-shrink-0" aria-hidden="true" />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-base sm:text-lg text-brand-dark mb-1 leading-snug group-hover:text-[#7B2FBE] transition-colors">
                        {item.role}
                      </h4>
                      <p className="text-xs sm:text-[13px] font-body text-brand-muted leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Ideal Candidate Checklist Card (5 cols) */}
            <div className="lg:col-span-5 h-full" data-reveal="up">
              <div
                className="bg-[#FAF9FC] border border-[#EBE7F2] p-7 sm:p-9 rounded-[24px] sm:rounded-[28px] shadow-[0_4px_24px_rgba(123,47,190,0.03)] h-full flex flex-col justify-between"
                style={{ borderRadius: "24px" }}
              >
                <div>
                  <h3 className="font-heading text-lg sm:text-xl text-brand-dark uppercase tracking-wider mb-2.5 font-bold">
                    IDEAL CANDIDATE CHECKLIST
                  </h3>
                  <p className="text-xs sm:text-[13px] text-brand-muted font-body mb-6 leading-relaxed">
                    The program is specifically tailored for scholars who meet the following readiness criteria:
                  </p>

                  <ul className="space-y-3.5 sm:space-y-4 text-xs sm:text-[13px] font-body text-brand-dark" role="list">
                    {CANDIDATE_CRITERIA.map((criterion, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        {/* Styled Purple Checkmark */}
                        <div className="w-5 h-5 rounded-md bg-[#7B2FBE]/10 text-[#7B2FBE] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#7B2FBE] group-hover:text-white transition-colors">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-relaxed text-brand-dark/90">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 4. RESEARCH FIELDS & METHODOLOGIES                      */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-[#FAF9FC]/50 to-white border-b border-brand-borderHairline overflow-hidden">
        {/* Decorative subtle purple curved line flourish at top-left (matching reference image) */}
        <div
          className="absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none select-none opacity-20 z-0"
          aria-hidden="true"
        >
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <path d="M -60 120 C 80 50 200 180 380 90" stroke="#7B2FBE" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M -40 150 C 100 80 220 210 400 120" stroke="#A855F7" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M -20 180 C 120 110 240 240 420 150" stroke="#C084FC" strokeWidth="1" strokeLinecap="round" />
            <path d="M 0 210 C 140 140 260 270 440 180" stroke="#7B2FBE" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Decorative soft purple wave flourish at bottom-right (matching reference image) */}
        <div
          className="absolute -bottom-6 -right-10 w-[520px] h-[220px] pointer-events-none select-none opacity-25 z-0"
          aria-hidden="true"
        >
          <svg className="w-full h-full" viewBox="0 0 520 220" fill="none" preserveAspectRatio="none">
            <path
              d="M 0 170 C 140 190 260 90 400 130 C 460 148 495 120 520 100 L 520 220 L 0 220 Z"
              fill="url(#scope-wave-gradient-1)"
            />
            <path
              d="M 80 180 C 200 195 300 120 440 150 C 480 158 505 140 520 130 L 520 220 L 80 220 Z"
              fill="url(#scope-wave-gradient-2)"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="scope-wave-gradient-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="scope-wave-gradient-2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            {/* Eyebrow with decorative horizontal lines matching reference image */}
            <div className="flex items-center justify-center gap-3 mb-3.5" data-reveal="up">
              <span className="w-8 h-px bg-[#7B2FBE]/70" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#7B2FBE] font-semibold font-body">
                OUR RESEARCH SCOPE
              </span>
              <span className="w-8 h-px bg-[#7B2FBE]/70" />
            </div>

            {/* Headline */}
            <h2
              data-split="lines"
              className="text-3xl sm:text-4xl lg:text-[44px] text-brand-dark font-heading leading-tight mb-4"
            >
              Research Areas We <span className="text-[#7B2FBE]">Support</span>
            </h2>

            {/* Subtitle */}
            <p
              data-reveal="up"
              className="text-brand-muted font-body text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            >
              APEX welcomes original research across Science, Engineering, Management and Economics,
              including quantitative and mixed-method research approaches.
            </p>
          </div>

          {/* Main 2-Column Layout matching reference image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
            {/* Left Column: Graduation Cap Visual Asset (4.5 / 12 cols) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start" data-reveal="up">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
                {/* Image asset with custom curved outline */}
                <div className="relative rounded-[28px] overflow-hidden drop-shadow-[0_16px_36px_rgba(123,47,190,0.12)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/apex-scope.jpg"
                    alt="Academic Research Graduation Cap on Books"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Connected Timeline Cards (8 / 12 cols) */}
            <div className="lg:col-span-8 relative pl-7 sm:pl-9 space-y-4 sm:space-y-4.5" data-reveal="up">
              {/* Vertical Timeline Connecting Line */}
              <div
                className="absolute top-7 bottom-7 left-[11px] sm:left-[15px] w-px bg-gradient-to-b from-[#7B2FBE] via-[#A855F7]/40 to-[#7B2FBE]"
                aria-hidden="true"
              />

              {/* 4 Connected Cards */}
              {DISCIPLINARY_AREAS.map((field, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Circular Connector Node */}
                  <div
                    className="absolute -left-7 sm:-left-9 top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full border-2 border-[#7B2FBE] bg-white flex items-center justify-center z-10 transition-transform duration-200 group-hover:scale-115 shadow-sm"
                    style={{ borderRadius: "9999px" }}
                    aria-hidden="true"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#7B2FBE]" />
                  </div>

                  {/* Horizontal Card Container */}
                  <div
                    className="bg-white border border-[#EBE7F2] p-4 sm:p-5 rounded-[18px] sm:rounded-[20px] shadow-[0_2px_12px_rgba(123,47,190,0.03)] hover:shadow-[0_8px_24px_rgba(123,47,190,0.08)] hover:border-[#7B2FBE]/50 transition-all duration-300 flex items-center gap-4 sm:gap-5"
                    style={{ borderRadius: "18px" }}
                  >
                    {/* Soft Squircle Icon Box */}
                    <div
                      className="w-12 h-12 rounded-2xl bg-[#F6F2FB] border border-[#E9DFF6] text-[#7B2FBE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#7B2FBE] group-hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(123,47,190,0.04)]"
                      style={{ borderRadius: "14px" }}
                    >
                      {DISCIPLINARY_ICONS[idx]}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-base sm:text-lg text-brand-dark mb-1 leading-snug group-hover:text-[#7B2FBE] transition-colors font-bold">
                        {field.category}
                      </h3>
                      <p className="text-xs sm:text-[12.5px] font-body text-brand-muted leading-relaxed">
                        {field.topics.map((topic, tIdx) => (
                          <React.Fragment key={tIdx}>
                            <span>{topic}</span>
                            {tIdx < field.topics.length - 1 && (
                              <span className="text-[#7B2FBE]/40 mx-2 select-none font-light">|</span>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Methodologies (Clean 2-Column Elevated Card Layout) */}
          <div
            className="p-8 sm:p-10 bg-white border border-[#EBE7F2] rounded-[24px] sm:rounded-[28px] shadow-[0_4px_24px_rgba(123,47,190,0.03)]"
            style={{ borderRadius: "24px" }}
          >
            <div className="max-w-3xl mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE] font-body">
                EMPIRICAL STANDARDS
              </span>
              <h3 className="font-heading text-2xl text-brand-dark mt-1">
                Supported Research Methodologies
              </h3>
              <p className="text-sm font-body text-brand-muted mt-1 leading-relaxed">
                We accept manuscripts developed under rigorous academic designs that meet international peer-review expectations:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-body text-brand-dark">
              <div className="p-4 sm:p-5 bg-[#FAF9FC] border border-[#EBE7F2] rounded-[16px] flex items-start gap-3.5">
                <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0 mt-1.5" />
                <div>
                  <strong className="text-brand-dark font-semibold">Quantitative Research Designs</strong>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Experimental, quasi-experimental, and correlational empirical studies with robust statistical foundations.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#FAF9FC] border border-[#EBE7F2] rounded-[16px] flex items-start gap-3.5">
                <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0 mt-1.5" />
                <div>
                  <strong className="text-brand-dark font-semibold">Mixed-Method Approaches</strong>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Methodologies combining qualitative context with quantitative data analysis and triangulation.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#FAF9FC] border border-[#EBE7F2] rounded-[16px] flex items-start gap-3.5">
                <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0 mt-1.5" />
                <div>
                  <strong className="text-brand-dark font-semibold">Original Research Contributions</strong>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Novel findings, rigorous conceptual framing, and substantial empirical contributions to existing literature.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#FAF9FC] border border-[#EBE7F2] rounded-[16px] flex items-start gap-3.5">
                <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0 mt-1.5" />
                <div>
                  <strong className="text-brand-dark font-semibold">Publication Ethics &amp; Academic Standards</strong>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Research strictly aligned with international publication ethics, plagiarism standards, and authorship guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 5. CORE PROGRAM COMPONENTS (Expandable Detailed Modules) */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-brand-borderHairline relative overflow-hidden">

        {/* Atmospheric: soft purple wave bottom-right */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-[520px] h-[320px] opacity-[0.07]">
          <svg viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M520 320 C400 260, 300 160, 180 200 C60 240, 0 180, 0 320 Z" fill="#7B2FBE" />
            <path d="M520 320 C420 280, 340 200, 220 240 C100 280, 40 220, 40 320 Z" fill="#A855F7" />
          </svg>
        </div>

        {/* Atmospheric: faint top-left curved lines */}
        <div className="pointer-events-none absolute top-0 left-0 w-[260px] h-[260px] opacity-[0.05]">
          <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 200 Q80 80 200 0" stroke="#7B2FBE" strokeWidth="40" fill="none" strokeLinecap="round" />
            <path d="M0 240 Q100 110 240 0" stroke="#7B2FBE" strokeWidth="30" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            {/* Eyebrow with accent lines */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
              <p className="text-xs uppercase tracking-[0.18em] text-[#7B2FBE] font-semibold font-body">
                WHAT&apos;S INCLUDED
              </p>
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-brand-dark font-heading leading-tight mb-5">
              Comprehensive Research &amp;{" "}
              <span className="text-[#7B2FBE] italic">Publication Support</span>
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed max-w-xl mx-auto">
              The APEX program combines personalized mentorship, technical assistance and publication
              strategy to support researchers throughout the journal publication process.
            </p>
          </div>

          {/* Two-column layout: image left, accordion right */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Image */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[380px] lg:max-w-none">
                {/* Soft purple blob behind image */}
                <div className="absolute -top-6 -left-6 w-[180px] h-[180px] rounded-full bg-[#EDE0FF] opacity-60 blur-2xl" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/apex-included.jpg"
                  alt="APEX Program - Research Publication Support"
                  className="relative w-full rounded-[28px] shadow-[0_20px_60px_rgba(123,47,190,0.15)] object-cover"
                  style={{ borderRadius: "28px" }}
                />
              </div>
            </div>

            {/* Right: Accordion modules */}
            <div className="lg:col-span-8 space-y-3.5">
              {CORE_MODULES.map((comp, idx) => {
                const isExpanded = expandedModule === comp.id;
                // Module-specific icons
                const moduleIcons = [
                  // A: Manuscript Review — document + magnifying glass
                  <svg key="a" className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
                  // B: Software Support — code brackets
                  <svg key="b" className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
                  // C: Pre-Submission — document + pencil
                  <svg key="c" className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
                  // D: Journal Selection — layers/stack
                  <svg key="d" className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
                  // E: Submission Support — upload arrow
                  <svg key="e" className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>,
                  // F: Post-Submission — refresh/reply arrows
                  <svg key="f" className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
                ];
                return (
                  <div
                    key={comp.id}
                    className={`bg-white border rounded-[20px] overflow-hidden shadow-[0_2px_12px_rgba(123,47,190,0.07)] transition-all duration-300 ${
                      isExpanded
                        ? "border-[#7B2FBE] shadow-[0_4px_24px_rgba(123,47,190,0.14)]"
                        : "border-[#EBE7F2] hover:border-[#C084FC] hover:shadow-[0_4px_18px_rgba(123,47,190,0.10)]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleModule(comp.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-4">
                        {/* Squircle icon box */}
                        <span className="w-11 h-11 rounded-[12px] bg-[#F3EAFF] flex items-center justify-center flex-shrink-0">
                          {moduleIcons[idx] ?? moduleIcons[0]}
                        </span>
                        <div>
                          <h3 className="font-body font-semibold text-[15px] sm:text-base text-brand-dark leading-snug">
                            {comp.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-brand-muted font-body mt-0.5 leading-relaxed">
                            {comp.summary}
                          </p>
                        </div>
                      </div>
                      {/* Chevron */}
                      <span
                        className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isExpanded
                            ? "bg-[#7B2FBE] border-[#7B2FBE] text-white rotate-180"
                            : "bg-white border-[#DDD6F3] text-[#7B2FBE]"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 sm:px-7 sm:pb-7 pt-2 border-t border-[#EBE7F2]">
                        <h4 className="text-[10px] uppercase tracking-[0.14em] font-bold text-[#7B2FBE] mb-3">
                          Included Deliverables &amp; Support Scope
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm font-body text-brand-dark" role="list">
                          {comp.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-[#EDE0FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 6. FREE ISBN E-BOOK PUBLICATION BENEFIT (HIGHLIGHT)     */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-white via-[#F8F2FD] to-white border-2 border-[#7B2FBE] rounded-[24px] shadow-[0_16px_45px_rgba(123,47,190,0.1)] relative overflow-hidden"
            style={{ borderRadius: "24px" }}
          >
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#7B2FBE] text-white text-xs font-bold uppercase tracking-wider rounded mb-4">
              EXCLUSIVE APEX BENEFIT
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[38px] text-brand-dark leading-tight mb-4">
              One Free ISBN E-Book Publication
            </h2>

            <p className="text-brand-dark font-body text-base leading-relaxed max-w-3xl mb-8">
              As part of the APEX Academic Publication Excellence eXpedited Program, enrolled
              researchers and academicians receive the opportunity to publish one ISBN-registered
              e-book completely free through Naaz Publication.
            </p>

            {/* Included Book Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm font-body text-brand-dark">
              <div className="p-4 bg-white/90 border border-[#E5D4F8] rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>ISBN and Barcode Allocation:</strong> Official registration and cataloging support.</span>
              </div>

              <div className="p-4 bg-white/90 border border-[#E5D4F8] rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Professional Editorial Review:</strong> Comprehensive editing, typography, and proofreading.</span>
              </div>

              <div className="p-4 bg-white/90 border border-[#E5D4F8] rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Custom Book Cover Design:</strong> High-impact academic cover artwork and layout.</span>
              </div>

              <div className="p-4 bg-white/90 border border-[#E5D4F8] rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>E-Book Creation &amp; Publication:</strong> Professional digital publication under Naaz Publication.</span>
              </div>

              <div className="p-4 bg-white/90 border border-[#E5D4F8] rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Global Platform Distribution:</strong> Availability on Google Books, Google Play Store, Amazon, and Flipkart (subject to platform policies).</span>
              </div>

              <div className="p-4 bg-white/90 border border-[#E5D4F8] rounded-xl flex items-start gap-3">
                <svg className="w-5 h-5 text-[#7B2FBE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>50% Author Royalty:</strong> Disbursed as per the Standard Operating Procedure (SOP) and publication agreement.</span>
              </div>
            </div>

            {/* Highlighted Disclaimer Banner */}
            <div className="p-5 bg-white border-l-4 border-[#7B2FBE] border-t border-r border-b border-brand-borderHairline text-xs sm:text-sm font-body text-brand-dark leading-relaxed rounded-r-lg">
              <p className="font-bold text-[#7B2FBE] uppercase tracking-wider mb-1">
                Author Recognition Notice:
              </p>
              <p>
                This is a complimentary e-book publication benefit included in the APEX program,
                subject to the applicable publication agreement and royalty terms. Please note that
                this author benefit is distinct from the primary peer-reviewed journal publication process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 7. PUBLICATION MODEL (Subscription-Based / No APC)      */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF9FC] border-b border-brand-borderHairline relative overflow-hidden">

        {/* Atmospheric: soft purple wave top-left */}
        <div className="pointer-events-none absolute top-0 left-0 w-[380px] h-[260px] opacity-[0.08]">
          <svg viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 0 C120 60, 200 160, 380 260" stroke="#7B2FBE" strokeWidth="80" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
              <p className="text-xs uppercase tracking-[0.18em] text-[#7B2FBE] font-semibold font-body">
                PUBLICATION APPROACH
              </p>
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-brand-dark font-heading leading-tight mb-5">
              Subscription-Based Journals –{" "}
              <span className="text-[#7B2FBE] italic">No APC</span>
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed max-w-xl mx-auto">
              APEX focuses on identifying suitable subscription-based journals where authors are not
              required to pay Article Processing Charges (APC).
            </p>
          </div>

          {/* 4 Feature Pills Row */}
          <div className="flex flex-wrap justify-center items-center gap-0 mb-12">
            {[
              {
                label: "Zero APC\nfor Authors",
                icon: (
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
              },
              {
                label: "Reputable\nJournals",
                icon: (
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                label: "Rigorous\nPeer Review",
                icon: (
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                label: "Greater\nAcademic Prestige",
                icon: (
                  <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map((pill, idx, arr) => (
              <div key={idx} className="flex items-center">
                <div className="flex items-center gap-3 px-6 py-3">
                  <span className="w-10 h-10 rounded-[10px] bg-[#F3EAFF] flex items-center justify-center flex-shrink-0">
                    {pill.icon}
                  </span>
                  <span className="text-sm font-semibold text-brand-dark font-body whitespace-pre-line leading-tight">
                    {pill.label}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <span className="w-px h-10 bg-[#DDD6F3] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Model Comparison Table — redesigned */}
          <div className="overflow-x-auto rounded-[20px] border border-[#EBE7F2] shadow-[0_4px_24px_rgba(123,47,190,0.08)] mb-10 bg-white">
            <table className="w-full text-left text-sm font-body">
              <thead>
                <tr>
                  {/* Col 1 header */}
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-[0.12em] text-brand-dark bg-[#F9F7FC] border-b border-[#EBE7F2] rounded-tl-[20px]">
                    Model Feature
                  </th>
                  {/* Col 2 header — purple highlight */}
                  <th className="py-5 px-6 bg-[#7B2FBE] border-b border-[#6620A0]">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-[8px] bg-white/15 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                      </span>
                      <span className="text-white font-bold text-sm">Subscription Model (APEX Focus)</span>
                      <span className="ml-1 px-2 py-0.5 bg-white text-[#7B2FBE] text-[10px] font-bold uppercase rounded-full tracking-wide">
                        Recommended
                      </span>
                    </div>
                  </th>
                  {/* Col 3 header */}
                  <th className="py-5 px-6 bg-[#F9F7FC] border-b border-[#EBE7F2] rounded-tr-[20px]">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-[8px] bg-[#EBE7F2] flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </span>
                      <span className="text-brand-dark font-bold text-sm">Open Access (Author-Paid)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Author Publishing Cost",
                    icon: <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
                    apex: "₹0 / $0 (Zero APC for Authors)",
                    apexBold: true,
                    open: "₹50,000 to ₹3,00,000+ ($1,000 – $3,500+)",
                  },
                  {
                    feature: "Revenue Mechanism",
                    icon: <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                    apex: "Institutional library subscriptions & database access",
                    apexBold: false,
                    open: "Direct author publication fees",
                  },
                  {
                    feature: "Peer-Review Process",
                    icon: <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                    apex: "Established, rigorous double-blind peer-review",
                    apexBold: false,
                    open: "Varies; potential volume bias",
                  },
                  {
                    feature: "Editorial Control",
                    icon: <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
                    apex: "Strict editorial review with independent criteria",
                    apexBold: false,
                    open: "Commercial publishing targets",
                  },
                  {
                    feature: "Academic Prestige",
                    icon: <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                    apex: "Reputable international societies and publishers",
                    apexBold: false,
                    open: "Variable indexed standing",
                  },
                ].map((row, rIdx, arr) => (
                  <tr key={rIdx} className={rIdx < arr.length - 1 ? "border-b border-[#EBE7F2]" : ""}>
                    <td className="py-4 px-6 bg-[#F9F7FC]">
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-[7px] bg-[#EDE0FF] flex items-center justify-center flex-shrink-0">
                          {row.icon}
                        </span>
                        <span className="font-semibold text-brand-dark text-sm">{row.feature}</span>
                      </div>
                    </td>
                    <td className={`py-4 px-6 bg-[#F3EAFF] border-x border-[#DDD6F3] ${row.apexBold ? "font-bold text-[#7B2FBE]" : "text-brand-dark"} text-sm`}>
                      {row.apex}
                    </td>
                    <td className="py-4 px-6 text-brand-muted text-sm bg-white">
                      {row.open}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Journal Quality Indicators — redesigned */}
          <div className="p-7 sm:p-8 bg-white border border-[#EBE7F2] rounded-[20px] shadow-[0_4px_20px_rgba(123,47,190,0.07)]">
            {/* Header row */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-12 rounded-full bg-[#EDE0FF] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              <div className="border-l-2 border-[#7B2FBE] pl-4">
                <h4 className="font-heading text-xl text-brand-dark">
                  Journal Quality Indicators Evaluated by APEX:
                </h4>
              </div>
            </div>

            {/* 5 indicator cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
              {[
                {
                  label: "Scopus & Web of Science Indexing",
                  icon: <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                },
                {
                  label: "Assigned Impact Factors & Rankings",
                  icon: <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                },
                {
                  label: "Established Editorial Boards",
                  icon: <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                },
                {
                  label: "Transparent Peer Review",
                  icon: <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                },
                {
                  label: "Clear Publication Ethics Guidelines",
                  icon: <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
                },
              ].map((ind, iIdx) => (
                <div
                  key={iIdx}
                  className="p-4 bg-[#FAF9FC] border border-[#EBE7F2] rounded-[14px] flex flex-col items-center text-center gap-2.5 hover:border-[#C084FC] hover:shadow-[0_2px_12px_rgba(123,47,190,0.10)] transition-all"
                >
                  <span className="w-9 h-9 rounded-[9px] bg-[#EDE0FF] flex items-center justify-center flex-shrink-0">
                    {ind.icon}
                  </span>
                  <span className="text-xs font-semibold text-brand-dark font-body leading-snug">
                    {ind.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Editorial notice */}
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic border-t border-[#EBE7F2] pt-5">
              <strong className="text-brand-dark not-italic">Important Editorial Notice:</strong>{" "}
              Do not confuse mentorship with guaranteed acceptance. Journal selection depends on
              manuscript suitability and journal eligibility, and final acceptance decisions are made
              exclusively and independently by the respective journal editors.
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 8. PROGRAM TIMELINE & WORKFLOW (12-Week Roadmap)        */}
      {/* ─────────────────────────────────────────────────────── */}
      <section id="timeline" className="py-20 lg:py-28 bg-[#FAF9FC] border-b border-brand-borderHairline relative overflow-hidden">

        {/* Atmospheric: faint top-left curved lines */}
        <div className="pointer-events-none absolute top-0 left-0 w-[280px] h-[280px] opacity-[0.06]">
          <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 240 Q100 100 240 0" stroke="#7B2FBE" strokeWidth="40" fill="none" strokeLinecap="round" />
            <path d="M0 280 Q120 120 280 0" stroke="#7B2FBE" strokeWidth="30" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Atmospheric: soft purple glow bottom-right */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-[480px] h-[300px] opacity-[0.07]">
          <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M480 300 C360 240, 280 140, 160 180 C60 220, 0 160, 0 300 Z" fill="#7B2FBE" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
              <p className="text-xs uppercase tracking-[0.18em] text-[#7B2FBE] font-semibold font-body">
                12-WEEK MENTORSHIP
              </p>
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-brand-dark font-heading leading-tight mb-4">
              Three-Stage <span className="text-[#7B2FBE]">Research Mentorship</span>
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed max-w-2xl mx-auto">
              A structured 12-week program that guides you from research planning to successful submission with expert support at every stage.
            </p>
          </div>

          {/* Three Stage Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                slug: "stage-1",
                month: "Month 1",
                stage: "Stage 01",
                title: "Assessment & Strategy Development",
                description:
                  "Build a strong research foundation with expert assessment, detailed review, and a personalized publication strategy.",
                weeks: "Weeks 1 – 4",
                guidance: "1-on-1 Guidance",
                image: "/images/apex-scope.jpg",
                guidanceIcon: (
                  <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                focusAreas: [
                  "Initial consultation & diagnostic assessment",
                  "Manuscript review and quality evaluation",
                  "Identify methodological strengths & gaps",
                  "Personalized publication strategy document",
                ],
                isPrimary: true,
              },
              {
                slug: "stage-2",
                month: "Month 2",
                stage: "Stage 02",
                title: "Manuscript Preparation & Journal Selection",
                description:
                  "Develop a high-quality manuscript, refine its structure and presentation, and identify the most suitable target journal.",
                weeks: "Weeks 5 – 8",
                guidance: "Manuscript Development",
                image: "/images/apex-included.jpg",
                guidanceIcon: (
                  <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                focusAreas: [
                  "Detailed manuscript development & refinement",
                  "Data visualization & figure optimization",
                  "Language enhancement & academic polishing",
                  "Journal selection & pre-submission packaging",
                ],
                isPrimary: false,
              },
              {
                slug: "stage-3",
                month: "Month 3",
                stage: "Stage 03",
                title: "Submission & Post-Submission Navigation",
                description:
                  "Get complete support for journal submission, tracking, peer-review responses, and revision to achieve successful acceptance.",
                weeks: "Weeks 9 – 12",
                guidance: "Submission Support",
                image: "/images/apex-scope.jpg",
                guidanceIcon: (
                  <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
                focusAreas: [
                  "Guidance for formal manuscript submission",
                  "Metadata entry & technical troubleshooting",
                  "Confirmation and tracking of submission",
                  "Peer-review preparation & revision guidance",
                ],
                isPrimary: false,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBE7F2] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(123,47,190,0.06)] hover:shadow-[0_8px_32px_rgba(123,47,190,0.12)] hover:border-[#C084FC] transition-all relative overflow-hidden group"
              >
                {/* Decorative Faded Corner Image (Top Right) */}
                <div className="absolute top-0 right-0 w-36 h-28 overflow-hidden pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{
                      maskImage: "linear-gradient(to bottom left, rgba(0,0,0,0.9) 30%, transparent 85%)",
                      WebkitMaskImage: "linear-gradient(to bottom left, rgba(0,0,0,0.9) 30%, transparent 85%)",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  {/* Top Bar: Month Badge & Stage Number */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F3EAFF] rounded-full text-xs font-semibold text-[#7B2FBE]">
                      <svg className="w-3.5 h-3.5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {card.month}
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-brand-dark font-body bg-white/80 px-2 py-0.5 rounded">
                      {card.stage}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-[22px] text-brand-dark font-semibold leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-brand-muted font-body leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Dual-Pill Container */}
                  <div className="bg-[#FAF9FC] border border-[#EBE7F2] rounded-[12px] py-2.5 px-4 flex items-center justify-between text-xs font-medium text-brand-dark mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#7B2FBE] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{card.weeks}</span>
                    </div>
                    <span className="w-px h-4 bg-[#DDD6F3] flex-shrink-0" />
                    <div className="flex items-center gap-2">
                      {card.guidanceIcon}
                      <span>{card.guidance}</span>
                    </div>
                  </div>

                  {/* Section Label: KEY FOCUS AREAS */}
                  <div className="bg-[#F3EAFF] text-[#7B2FBE] text-[10px] font-bold tracking-[0.14em] uppercase py-1.5 px-3 rounded-[8px] mb-4 text-center">
                    KEY FOCUS AREAS
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-3 mb-8">
                    {card.focusAreas.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-brand-dark">
                        <span className="w-4 h-4 rounded-full border border-[#7B2FBE] text-[#7B2FBE] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button linking to dedicated details page */}
                <div className="relative z-10 pt-2 border-t border-[#F0ECF8]">
                  <Link
                    href={`/apex/stage/${card.slug}`}
                    className={`w-full py-3.5 px-5 rounded-[12px] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      card.isPrimary
                        ? "bg-[#7B2FBE] hover:bg-[#6620A0] text-white shadow-[0_4px_16px_rgba(123,47,190,0.25)]"
                        : "border border-[#7B2FBE] text-[#7B2FBE] hover:bg-[#7B2FBE] hover:text-white"
                    }`}
                  >
                    <span>Learn More</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Cycle Clarification Box */}
          <div className="p-5 bg-white border border-[#EBE7F2] rounded-[16px] text-xs sm:text-sm text-brand-muted leading-relaxed max-w-4xl mx-auto shadow-sm">
            <p>
              <strong className="text-brand-dark">Submission Cycle Note:</strong> The three-month timeline represents one
              structured submission cycle. If a manuscript is not selected for review, the submission
              strategy may be repeated with an alternative suitable journal within the program&apos;s
              available support framework. Actual journal review and acceptance timelines are determined
              by the journal.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 9. WHY CHOOSE APEX?                                     */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-brand-borderHairline relative overflow-hidden">

        {/* Atmospheric: faint bottom-right purple glow */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[320px] opacity-[0.06]">
          <svg viewBox="0 0 500 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M500 320 C380 260, 260 160, 160 200 C60 240, 0 160, 0 320 Z" fill="#7B2FBE" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
              <p className="text-xs uppercase tracking-[0.18em] text-[#7B2FBE] font-semibold font-body">
                THE APEX ADVANTAGE
              </p>
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-brand-dark font-heading leading-tight mb-4">
              Why Researchers Choose <span className="text-[#7B2FBE]">APEX</span>
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed max-w-2xl mx-auto">
              Designed to eliminate submission uncertainty and enhance academic rigor through dedicated
              one-on-one research mentorship.
            </p>
          </div>

          {/* Two-Column Grid: Image Left + 5 Cards Right */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Arched Image Frame with Floating Overlays */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[420px] pb-6 sm:pb-8">
                {/* Lavender arched backing shadow */}
                <div
                  className="absolute -top-5 -left-5 w-full h-[460px] sm:h-[500px] bg-[#EDE0FF] opacity-70"
                  style={{
                    borderRadius: "140px 28px 28px 28px",
                  }}
                />

                {/* Main Image with Soft Bottom Gradient */}
                <div className="relative overflow-hidden shadow-[0_20px_50px_rgba(123,47,190,0.14)]" style={{ borderRadius: "130px 24px 24px 24px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/apex-advantage.jpg"
                    alt="Why Researchers Choose APEX"
                    className="w-full h-[460px] sm:h-[500px] object-cover"
                  />
                  {/* Subtle vignette gradient at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Top-Left Floating Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#7B2FBE] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-[0_4px_16px_rgba(123,47,190,0.4)]">
                    <svg className="w-3 h-3 text-[#F3EAFF]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    12-Week Fast-Track
                  </span>
                </div>

                {/* Top-Right Floating Glass Badge */}
                <div className="absolute top-6 -right-3 sm:-right-5 z-20 bg-white/95 backdrop-blur-md border border-[#EBE7F2] rounded-[18px] py-2.5 px-3.5 sm:px-4 shadow-[0_12px_32px_rgba(123,47,190,0.18)] flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#EDE0FF] text-[#7B2FBE] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#7B2FBE] tracking-wider block leading-none mb-1">
                      ZERO APC FOCUS
                    </span>
                    <span className="text-xs font-semibold text-brand-dark block leading-tight">
                      100% Free for Authors
                    </span>
                  </div>
                </div>

                {/* Bottom Floating Glass Card */}
                <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:-right-4 z-20 bg-white/95 backdrop-blur-md border border-[#EBE7F2] rounded-[20px] p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(123,47,190,0.20)] flex items-center gap-3.5">
                  <span className="w-11 h-11 rounded-[13px] bg-gradient-to-br from-[#7B2FBE] to-[#9333EA] text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_14px_rgba(123,47,190,0.35)]">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-brand-dark font-heading leading-tight mb-0.5">
                      1-on-1 Research Mentorship
                    </h4>
                    <p className="text-[11px] text-brand-muted font-body leading-tight">
                      Scopus &amp; Web of Science Indexing
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: 5 Benefit Cards */}
            <div className="lg:col-span-7 space-y-3.5">
              {[
                {
                  title: "Expert Personalized Guidance",
                  description:
                    "Direct one-on-one mentorship with an experienced research professional tailored to your methodology, field, and publication objectives.",
                  icon: (
                    <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                },
                {
                  title: "Comprehensive Process Coverage",
                  description:
                    "End-to-end support from initial concept to post-publication, with a coordinated and integrated approach.",
                  icon: (
                    <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ),
                },
                {
                  title: "Technical Skill Development",
                  description:
                    "Hands-on training in industry-standard tools (SigmaPlot, CorelDRAW), data visualization, and figure optimization.",
                  icon: (
                    <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
                {
                  title: "Strategic Journal Placement",
                  description:
                    "Evidence-based journal selection with scope alignment, desk-rejection risk mitigation, and verified indexing (Scopus, Web of Science).",
                  icon: (
                    <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                },
                {
                  title: "Timeline Efficiency & Reduced Revision Cycles",
                  description:
                    "A structured three-month program with clear milestones and proactive quality assurance to expedite acceptance.",
                  icon: (
                    <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#EBE7F2] rounded-[18px] p-5 sm:p-5.5 flex items-start gap-4 sm:gap-4.5 shadow-[0_2px_12px_rgba(123,47,190,0.04)] hover:shadow-[0_4px_20px_rgba(123,47,190,0.10)] hover:border-[#C084FC] transition-all"
                >
                  <span className="w-11 h-11 rounded-[13px] bg-[#F3EAFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-base sm:text-[17px] text-brand-dark mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-body text-brand-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 10. APPLICATION & ENROLLMENT PROCESS                   */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF9FC] border-b border-brand-borderHairline relative overflow-hidden">

        {/* Atmospheric: faint top-left curved lines */}
        <div className="pointer-events-none absolute top-0 left-0 w-[280px] h-[280px] opacity-[0.06]">
          <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0 240 Q100 100 240 0" stroke="#7B2FBE" strokeWidth="40" fill="none" strokeLinecap="round" />
            <path d="M0 280 Q120 120 280 0" stroke="#7B2FBE" strokeWidth="30" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
              <p className="text-xs uppercase tracking-[0.18em] text-[#7B2FBE] font-semibold font-body">
                HOW TO GET STARTED
              </p>
              <span className="h-px w-10 bg-[#7B2FBE] opacity-50 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] text-brand-dark font-heading leading-tight mb-4">
              Your <span className="text-[#7B2FBE]">APEX</span> Enrollment Journey
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed max-w-2xl mx-auto">
              A transparent four-step process from initial contact to structured research onboarding.
            </p>
          </div>

          {/* Connected timeline curved line with nodes (desktop) */}
          <div className="hidden lg:block relative w-full h-10 mb-3 px-12">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 40" fill="none" preserveAspectRatio="none">
              <path
                d="M125 32 C 220 12, 300 42, 375 22 C 450 6, 550 32, 625 16 C 700 0, 780 28, 875 10"
                stroke="#C084FC"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 4"
                opacity="0.8"
              />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center px-6 pointer-events-none">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-[#7B2FBE] bg-white translate-y-1 shadow-[0_0_8px_rgba(123,47,190,0.4)]" />
              <span className="w-3.5 h-3.5 rounded-full border-2 border-[#7B2FBE] bg-white -translate-y-1 shadow-[0_0_8px_rgba(123,47,190,0.4)]" />
              <span className="w-3.5 h-3.5 rounded-full border-2 border-[#7B2FBE] bg-white -translate-y-2.5 shadow-[0_0_8px_rgba(123,47,190,0.4)]" />
              <span className="w-3.5 h-3.5 rounded-full border-2 border-[#7B2FBE] bg-white -translate-y-3.5 shadow-[0_0_8px_rgba(123,47,190,0.4)]" />
            </div>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
            {ENROLLMENT_STEPS_DATA.map((st, idx) => {
              // Floating vertical offset per card
              const verticalOffsets = [
                "lg:translate-y-2",
                "lg:translate-y-0",
                "lg:-translate-y-2",
                "lg:-translate-y-3",
              ];
              return (
                <div
                  key={idx}
                  className={`bg-white border border-[#EBE7F2] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(123,47,190,0.06)] hover:shadow-[0_8px_32px_rgba(123,47,190,0.12)] hover:border-[#C084FC] transition-all group relative overflow-hidden ${verticalOffsets[idx]}`}
                >
                  <div>
                    {/* Badge */}
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE] bg-[#F3EAFF] px-3 py-1 rounded-full mb-3.5 font-body">
                      {st.step}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-lg sm:text-[19px] text-brand-dark leading-snug font-semibold mb-2">
                      {st.title}
                    </h3>

                    {/* Purple accent underline */}
                    <span className="block w-7 h-0.5 bg-[#7B2FBE] rounded-full mb-3.5" />

                    {/* Description */}
                    <p className="text-xs sm:text-sm font-body text-brand-muted leading-relaxed mb-6">
                      {st.details}
                    </p>
                  </div>

                  {/* Bottom Image Container */}
                  <div className="w-full h-28 sm:h-32 rounded-[16px] overflow-hidden bg-[#FAF9FC] border border-[#F0ECF8] relative mt-auto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={st.image}
                      alt={st.title}
                      className={`w-full h-full object-cover ${st.imageFocus} group-hover:scale-105 transition-transform duration-300`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Limited Capacity Callout Banner */}
          <div className="max-w-3xl mx-auto p-4 sm:p-5 bg-white border border-[#EBE7F2] rounded-[20px] shadow-[0_4px_20px_rgba(123,47,190,0.06)] flex items-center gap-4 text-left">
            <span className="w-10 h-10 rounded-full bg-[#F3EAFF] text-[#7B2FBE] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#7B2FBE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </span>
            <p className="text-xs sm:text-sm font-body text-brand-muted leading-relaxed">
              <strong className="text-brand-dark font-semibold">Limited Enrollment:</strong> Program
              enrollment is strictly limited to ensure personalized, high-quality mentorship. Early
              application is strongly recommended.
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 11. FREQUENTLY ASKED QUESTIONS                         */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-brand-borderHairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              HAVE QUESTIONS?
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              Frequently Asked Questions About APEX
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              Find answers to common questions regarding program duration, commitments, software
              training, and journal publication.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3.5">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#EBE3D6] rounded-[14px] overflow-hidden transition-colors bg-[#FAF8F5]"
                  style={{ borderRadius: "14px" }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base sm:text-lg text-brand-dark font-semibold">
                      {idx + 1}. {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white border border-brand-borderHairline flex items-center justify-center text-[#7B2FBE] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#7B2FBE] text-white" : ""
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm font-body text-brand-muted leading-relaxed border-t border-brand-borderHairline/60 pt-4 bg-white">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 12. FINAL CTA SECTION & PROGRAM CONTACT                 */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#3F4056] text-white overflow-hidden">
        {/* Background Academic Photo */}
        <div data-parallax="0.1" className="absolute inset-0 z-0 pointer-events-none scale-105">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Books in academic library"
            className="w-full h-full object-cover opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuAeCSgWJ3Yt_AjZxwKcLHNd1oW2I91bhHyrWOEUHyqQNmlwAPP854uZWnAflbuDwTaVvW-qW1LDl1WazAF_XM4tee6lP1mLtlCc4JwKBzwASciNA0wor0cLdicTOsTcXF0k8l6HczVuw1CB6lHhlBKNL1aoCJMY9KLGedf_04eHUcFnTXxKe0fSez95qHcPZ8J9hE0uvHl_zoanVFC3m3Unbkfw4Uki6MTL3gu9-kGYspIA4tG88"
          />
          <div className="absolute inset-0 bg-[#3F4056]/90" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 50% 50%, rgba(123,47,190,0.25) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-eyebrow text-[#C084FC] font-medium mb-3">
            START YOUR RESEARCH JOURNEY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading text-white leading-tight mb-4">
            Ready to Take Your Research Towards Publication?
          </h2>
          <p className="text-white/80 font-body text-base max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Get personalized research mentorship, manuscript development support and strategic
            journal selection guidance through the APEX Academic Publication Excellence eXpedited Program.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            <Link
              href="/contact?type=consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 group shadow-[0_0_20px_rgba(123,47,190,0.4)]"
              style={{ borderRadius: "8px" }}
            >
              <span>BOOK A CONSULTANT</span>
              <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <button
              type="button"
              onClick={() => openModal("APEX Program Inquiry")}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white font-bold text-xs uppercase tracking-wider rounded-lg backdrop-blur-sm transition-all duration-200 group cursor-pointer"
              style={{ borderRadius: "8px" }}
            >
              <span>INQUIRE ABOUT APEX</span>
              <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>

          {/* Contact & Support Details from Booklet */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs sm:text-sm text-white/90 font-medium">
            <div className="inline-flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.98-.275-.102-.475-.15-.676.15-.2.301-.776.98-.952 1.18-.176.2-.351.226-.652.076-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.785-1.674-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.235-.244-.589-.493-.51-.676-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.032-1.429.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12.042 21.996h-.008c-1.776 0-3.517-.478-5.045-1.383l-.362-.215-3.75 1.002.999-3.65-.236-.375c-1.005-1.6-1.536-3.456-1.536-5.36 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.186 1.042 7.076 2.932s2.93 4.405 2.928 7.08c-.002 5.52-4.492 10.01-10.014 10.01zM19.78 4.22A11.002 11.002 0 0 0 12.04 1C5.975 1 1.025 5.95 1.022 12.018c0 1.938.505 3.832 1.464 5.495l-1.558 5.69 5.83-1.528A10.98 10.98 0 0 0 12.04 23c6.066 0 11.015-4.95 11.018-11.018 0-2.94-1.144-5.706-3.278-7.762z" />
              </svg>
              <span>Chat on WhatsApp:</span>
              <a
                className="text-[#C084FC] hover:text-white hover:underline transition-colors font-semibold"
                href="https://wa.me/919395707581"
                rel="noopener noreferrer"
                target="_blank"
              >
                +91 9395707581
              </a>
            </div>

            <div className="hidden sm:inline-block text-white/40">•</div>

            <div className="inline-flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#C084FC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email:</span>
              <a
                className="text-[#C084FC] hover:text-white hover:underline transition-colors font-semibold"
                href="mailto:editor@edunaazpublication.com"
              >
                editor@edunaazpublication.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
