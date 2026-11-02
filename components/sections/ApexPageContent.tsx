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

const TARGET_PARTICIPANTS = [
  {
    role: "Research Scholars & Academicians",
    details:
      "Researchers who have completed original quantitative or mixed-method research and seek expert, structured guidance to achieve successful journal publication.",
  },
  {
    role: "Doctoral & Postgraduate Researchers",
    details:
      "PhD scholars and master's researchers with completed dissertations, theses, or substantial empirical research projects ready for adaptation into high-impact articles.",
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
      "Mechanical & Manufacturing Engineering",
      "Electrical & Electronics Engineering",
      "Chemical & Process Engineering",
      "Environmental Engineering",
    ],
  },
  {
    category: "Management & Business",
    topics: [
      "Organisational Behaviour & Human Resource Management",
      "Strategic Management & Business Policy",
      "Marketing & Consumer Behaviour",
      "Operations & Quality Management",
      "Entrepreneurship & Innovation Management",
      "Supply Chain Management & Logistics",
    ],
  },
  {
    category: "Economics",
    topics: [
      "Microeconomics & Macroeconomics",
      "Econometrics & Quantitative Empirical Methods",
      "Development Economics & Public Policy",
      "Industrial Economics & Market Analysis",
      "Financial Economics & Investment Analysis",
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

const TIMELINE_WEEKS = [
  {
    month: "Month 1",
    phaseName: "Assessment & Strategy Development",
    weeks: [
      {
        badge: "Weeks 1–2",
        title: "Initial Consultation & Diagnostic Assessment",
        activities: [
          "One-on-one consultation with Dr. Sukhwinder Singh to understand your research background, empirical dataset, and publication goals.",
          "Detailed diagnostic manuscript review and quality assessment.",
          "Identification of methodological strengths, structural gaps, and priority enhancement areas.",
          "Creation of your personalized publication strategy document.",
        ],
      },
      {
        badge: "Weeks 3–4",
        title: "Manuscript Refinement Planning & Software Scheduling",
        activities: [
          "Comprehensive feedback on manuscript structure, narrative cohesion, and analytical rigor.",
          "Prioritized roadmap established for content revisions and statistical validation.",
          "Scheduling of personalized SigmaPlot and CorelDRAW training sessions based on figure needs.",
          "Preliminary journal selection discussion based on manuscript profile and indexing goals.",
        ],
      },
    ],
  },
  {
    month: "Month 2",
    phaseName: "Manuscript Preparation & Journal Selection",
    weeks: [
      {
        badge: "Weeks 5–6",
        title: "Intensive Manuscript Development & Graphic Optimization",
        activities: [
          "Implementation of detailed feedback, methodological refinements, and structural revisions.",
          "Hands-on software support sessions for scientific figure and data visualization optimization.",
          "Academic language enhancement, clarity polish, and scholarly tone refinement.",
          "Citation style verification and reference list formatting.",
        ],
      },
      {
        badge: "Weeks 7–8",
        title: "Strategic Journal Selection & Pre-Submission Packaging",
        activities: [
          "Final evidence-based journal selection matched to your manuscript profile and indexing criteria.",
          "Comprehensive target journal guidelines review and strict formatting compliance check.",
          "Final manuscript preparation, title page assembly, and supplementary file packaging.",
          "Drafting of customized, persuasive cover letter and required author statements.",
        ],
      },
    ],
  },
  {
    month: "Month 3",
    phaseName: "Submission & Post-Submission Navigation",
    weeks: [
      {
        badge: "Weeks 9–10",
        title: "Formal Manuscript Submission",
        activities: [
          "Direct guidance through online submission portals (ScholarOne, Editorial Manager, etc.).",
          "Live submission support, metadata entry, and technical troubleshooting.",
          "Formal verification and confirmation of successful manuscript submission.",
          "Documentation of submission ID, tracking details, and expected editorial milestones.",
        ],
      },
      {
        badge: "Weeks 11–12",
        title: "Post-Submission Navigation & Peer-Review Preparation",
        activities: [
          "Desk-review outcome interpretation and editorial communication guidance.",
          "Comprehensive preparation for the peer-review process.",
          "Reviewer feedback analysis and point-by-point rebuttal strategy formulation if revisions are requested.",
          "Ongoing communication tracking and hands-on revision guidance across applicable review rounds.",
        ],
      },
    ],
  },
];

const PROGRAM_BENEFITS = [
  {
    num: "01",
    title: "Expert Personalized Guidance",
    description:
      "Direct one-on-one mentorship with an experienced research professional. Support is customized specifically to your unique research methodology, academic field, and publication objectives, with ongoing accessibility throughout the three months.",
  },
  {
    num: "02",
    title: "Comprehensive Process Coverage",
    description:
      "Support from initial manuscript conceptualization through post-publication. Every critical stage of the publishing journey is covered with a coordinated, integrated approach that leaves no gaps in guidance.",
  },
  {
    num: "03",
    title: "Technical Skill Development",
    description:
      "Practical, hands-on training in industry-standard software (SigmaPlot and CorelDRAW). Master professional data visualization techniques and figure optimization standards that elevate your ongoing academic career.",
  },
  {
    num: "04",
    title: "Strategic Journal Placement",
    description:
      "Evidence-based journal selection methodology that analyzes scope alignment, desk-rejection risk mitigation, and verified indexing (Scopus, Web of Science) in subscription journals that charge zero author APCs.",
  },
  {
    num: "05",
    title: "Timeline Efficiency & Reduced Revision Cycles",
    description:
      "A structured three-month program with clear bi-weekly milestones. Proactive pre-submission quality assurance resolves potential editorial issues before submission, significantly accelerating the path to acceptance.",
  },
];

const ENROLLMENT_STEPS_DATA = [
  {
    step: "Step 01",
    title: "Initial Inquiry & Registration",
    details:
      "Reach out to Edunaaz Publication with your research background, manuscript draft status, and publication goals to register your interest in joining the APEX program.",
  },
  {
    step: "Step 02",
    title: "Application Submission",
    details:
      "Prepare and submit your current manuscript draft in Microsoft Word (.docx format ONLY), brief abstract and methodology description, timeline expectations, specific guidance requirements, and contact details.",
  },
  {
    step: "Step 03",
    title: "Consultation & Fit Assessment with Dr. Sukhwinder Singh",
    details:
      "Schedule an initial consultation with Program Coordinator Dr. Sukhwinder Singh to discuss your research goals, assess program suitability, review manuscript scope, and confirm enrollment timeline.",
  },
  {
    step: "Step 04",
    title: "Program Initiation & Milestone Onboarding",
    details:
      "Upon enrollment confirmation, receive your detailed 12-week schedule and milestone calendar, complete intake goal-setting, establish regular communication cadence, and begin Month 1 activities immediately.",
  },
];

const FAQS_DATA = [
  {
    q: "How much time commitment is required?",
    a: "The program is designed as a structured 3-month initiative with regular check-ins and work sessions. Typical time commitment ranges from 8–12 hours per week, depending on your manuscript's current state and revision needs.",
  },
  {
    q: "What if my manuscript needs extensive revision?",
    a: "Our program accommodates manuscripts at various stages of development. Dr. Singh will assess your manuscript and develop a customized revision plan. If substantial work is needed, we prioritize the most impactful improvements within the 3-month timeline.",
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
    a: "Software training is integrated into your personalized program based on your specific manuscript needs. During initial assessment, Dr. Singh will determine which software training sessions will benefit your work most.",
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
      <section className="py-20 lg:py-24 bg-white border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual & Mission Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative">
                <div
                  className="absolute -top-3.5 -left-3.5 w-full h-full border-2 border-[#7B2FBE] z-0 pointer-events-none"
                  style={{ borderRadius: "4px" }}
                />
                <div className="relative z-10 w-full h-[380px] overflow-hidden border border-brand-borderHairline bg-brand-bgGray">
                  <img
                    alt="Research Mentorship and Manuscript Consultation"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8SykcoqvFrV2J_Uzthc2tluoOUvgKD3zdM6lpkVpFA6yn9YRIrsaXP1nLNDrt_xmXdlz_-VBxMap6gpY5GYNcxpjf4eezENULgagWpyL3vRitVr3_66lojJdsC-cEfRZDp5T_ybthzx0M8dEKmtZNUHn_Hn57p_uqFESLaQ74MBdcOc5GltlV_jRI8_tAaC0YQEB-J94ea7NJ8PflvjNXiRZUShCfWPvKSgsoFVT2FW8IwRpXwyw"
                  />
                </div>
              </div>

              {/* Official Mission Box from Booklet */}
              <div
                className="p-6 bg-[#FAF8F5] border-l-4 border-[#7B2FBE] border-t border-r border-b border-[#EBE3D6]"
                style={{ borderRadius: "0 12px 12px 0" }}
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE] mb-1.5 font-body">
                  PROGRAM MISSION
                </p>
                <p className="text-sm font-body text-brand-dark italic leading-relaxed">
                  &ldquo;To empower researchers in Science, Engineering, Management, and Economics by
                  providing structured, expert-led support that enhances manuscript quality,
                  accelerates the publication timeline, and ensures successful placement in credible
                  journals aligned with current research standards and best practices.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Program Narrative */}
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-semibold mb-3">
                INTRODUCING APEX
              </p>
              <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-5">
                Your Research Deserves the{" "}
                <span className="text-[#7B2FBE] font-normal">Right Publication Journey.</span>
              </h2>

              <div className="space-y-4 text-brand-muted font-body text-base leading-relaxed mb-6">
                <p>
                  <strong>APEX – Academic Publication Excellence eXpedited Program</strong> is a
                  comprehensive, personalized research mentorship initiative designed to guide
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

              {/* 3 Core Highlight Tenets */}
              <div className="space-y-3 mb-8 text-sm font-medium font-body text-brand-dark">
                <div className="flex items-center gap-3 p-3 bg-brand-bgGray/70 border border-brand-borderHairline rounded-lg">
                  <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0" />
                  <span>Personalized one-on-one research mentorship with experienced professionals.</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-bgGray/70 border border-brand-borderHairline rounded-lg">
                  <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0" />
                  <span>Strategic journal selection targeting reputable subscription journals (Zero APC).</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-bgGray/70 border border-brand-borderHairline rounded-lg">
                  <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0" />
                  <span>Technical manuscript development, SigmaPlot figure optimization, and submission support.</span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => openModal("APEX Program Inquiry")}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7B2FBE] to-[#9333EA] hover:from-[#6620A0] hover:to-[#7B2FBE] transition-all duration-200 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(123,47,190,0.35)] hover:shadow-[0_0_20px_rgba(123,47,190,0.5)] cursor-pointer group"
                  style={{ borderRadius: "8px" }}
                >
                  <span>ENQUIRE ABOUT APEX</span>
                  <span className="ml-2 font-mono transition-transform duration-200 group-hover:translate-x-0.5">
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
      <section className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              PROGRAM OVERVIEW
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              A Structured Approach to Academic Publication
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              From initial manuscript assessment to journal submission and post-submission guidance,
              APEX provides structured support across the essential stages of the academic
              publication process.
            </p>
          </div>

          {/* 4 Spacious Strategic Pillars (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROGRAM_PILLARS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBE3D6] p-8 rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:border-[#7B2FBE]/60 transition-all duration-200 flex gap-6 items-start"
                style={{ borderRadius: "16px" }}
              >
                <span className="font-heading text-3xl font-bold text-[#7B2FBE] flex-shrink-0 leading-none pt-1">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-heading text-xl text-brand-dark mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm font-body text-brand-muted leading-relaxed">
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
      <section className="py-20 lg:py-24 bg-white border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              IDEAL CANDIDATES
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              Who Is <span className="text-[#7B2FBE] font-normal">APEX</span> Designed For?
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              APEX is designed for researchers and scholars who have completed original research and
              are seeking professional guidance to prepare and submit their work to suitable
              academic journals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-8">
            {/* Left 7 Cols: Researcher Profiles */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-heading text-xl text-brand-dark mb-4">
                Eligible Researcher Profiles
              </h3>
              {TARGET_PARTICIPANTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#EBE3D6] rounded-[14px]"
                  style={{ borderRadius: "14px" }}
                >
                  <h4 className="font-heading text-base sm:text-lg text-brand-dark mb-1.5 flex items-center gap-2.5">
                    <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0" />
                    <span>{item.role}</span>
                  </h4>
                  <p className="text-sm font-body text-brand-muted leading-relaxed pl-4">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Right 5 Cols: Ideal Candidate Checklist from Page 3 of Booklet */}
            <div className="lg:col-span-5 bg-brand-bgGray border border-brand-borderHairline p-7 rounded-[18px]">
              <h3 className="font-heading text-lg text-brand-dark uppercase tracking-wider mb-2">
                Ideal Candidate Checklist
              </h3>
              <p className="text-xs text-brand-muted font-body mb-5">
                The program is specifically tailored for scholars who meet the following readiness criteria:
              </p>
              <ul className="space-y-3.5 text-xs sm:text-sm font-body text-brand-dark" role="list">
                {CANDIDATE_CRITERIA.map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Independent Researchers Note */}
          <div
            className="p-5 bg-[#FAF8F5] border border-[#E0D8CB] rounded-xl text-center max-w-3xl mx-auto"
            style={{ borderRadius: "12px" }}
          >
            <p className="text-sm font-body text-brand-dark">
              <span className="text-[#7B2FBE] font-bold">Important Eligibility Note:</span> The program
              is open to eligible independent researchers, clinicians, and industry professionals, and
              is not restricted solely to members of academic institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 4. RESEARCH FIELDS & METHODOLOGIES                      */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-brand-bgGray border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              DISCIPLINARY FOCUS
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              Research Areas We Support
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              APEX welcomes original research across Science, Engineering, Management and Economics,
              including quantitative and mixed-method research approaches.
            </p>
          </div>

          {/* 4 Spacious Disciplinary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {DISCIPLINARY_AREAS.map((field, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-borderHairline p-6 sm:p-7 rounded-[18px] shadow-sm flex flex-col justify-between"
                style={{ borderRadius: "18px" }}
              >
                <div>
                  <h3 className="font-heading text-lg sm:text-xl text-brand-dark mb-4 pb-3 border-b border-brand-borderHairline">
                    {field.category}
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-brand-muted font-body">
                    {field.topics.map((item, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-[#7B2FBE] font-bold mt-0.5">•</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Research Methodologies (Clean 2-Column Table/Card Layout) */}
          <div
            className="p-8 sm:p-10 bg-white border border-[#EBE3D6] rounded-[20px] shadow-sm"
            style={{ borderRadius: "20px" }}
          >
            <div className="max-w-3xl mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B2FBE]">
                EMPIRICAL STANDARDS
              </span>
              <h3 className="font-heading text-2xl text-brand-dark mt-1">
                Supported Research Methodologies
              </h3>
              <p className="text-sm font-body text-brand-muted mt-1">
                We accept manuscripts developed under rigorous academic designs that meet international peer-review expectations:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-body text-brand-dark">
              <div className="p-4 bg-[#FAF8F5] border border-brand-borderHairline rounded-xl flex items-start gap-3">
                <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <strong>Quantitative Research Designs</strong>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Experimental, quasi-experimental, and correlational empirical studies with robust statistical foundations.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-brand-borderHairline rounded-xl flex items-start gap-3">
                <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <strong>Mixed-Method Approaches</strong>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Methodologies combining qualitative context with quantitative data analysis and triangulation.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-brand-borderHairline rounded-xl flex items-start gap-3">
                <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <strong>Original Research Contributions</strong>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Novel findings, rigorous conceptual framing, and substantial empirical contributions to existing literature.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-brand-borderHairline rounded-xl flex items-start gap-3">
                <span className="w-2 h-2 bg-[#7B2FBE] rounded-full flex-shrink-0 mt-2" />
                <div>
                  <strong>Publication Ethics &amp; Academic Standards</strong>
                  <p className="text-xs text-brand-muted mt-0.5">
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
      <section className="py-20 lg:py-24 bg-white border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              WHAT&apos;S INCLUDED
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              Comprehensive Research &amp; Publication Support
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              The APEX program combines personalized mentorship, technical assistance and publication
              strategy to support researchers throughout the journal publication process.
            </p>
          </div>

          {/* Interactive, Spacious Detailed Modules (Expandable) */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {CORE_MODULES.map((comp) => {
              const isExpanded = expandedModule === comp.id;
              return (
                <div
                  key={comp.id}
                  className="border border-[#EBE3D6] rounded-[16px] overflow-hidden bg-[#FAF8F5] transition-all"
                  style={{ borderRadius: "16px" }}
                >
                  <button
                    type="button"
                    onClick={() => toggleModule(comp.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#7B2FBE] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {comp.letter}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl text-brand-dark font-semibold">
                          {comp.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-brand-muted font-body mt-0.5">
                          {comp.summary}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`w-8 h-8 rounded-full bg-white border border-brand-borderHairline flex items-center justify-center text-[#7B2FBE] flex-shrink-0 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 bg-[#7B2FBE] text-white" : ""
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 bg-white border-t border-[#EBE3D6]">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-[#7B2FBE] mb-3">
                        Included Deliverables &amp; Support Scope:
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm font-body text-brand-dark" role="list">
                        {comp.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <svg
                              className="w-4 h-4 text-[#7B2FBE] flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
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
      <section className="py-20 lg:py-24 bg-white border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              PUBLICATION APPROACH
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              Subscription-Based Journals – No APC
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              APEX focuses on identifying suitable subscription-based journals where authors are not
              required to pay Article Processing Charges (APC).
            </p>
          </div>

          {/* Model Comparison Table */}
          <div className="overflow-x-auto border border-brand-borderHairline rounded-xl mb-10 shadow-sm">
            <table className="w-full text-left text-sm font-body">
              <thead>
                <tr className="bg-brand-bgGray text-brand-dark uppercase text-xs tracking-wider border-b border-brand-borderHairline font-semibold">
                  <th className="py-4 px-6">Model Feature</th>
                  <th className="py-4 px-6 text-[#7B2FBE]">Subscription Model (APEX Focus)</th>
                  <th className="py-4 px-6 text-brand-muted">Open Access (Author-Paid)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-borderHairline">
                <tr className="hover:bg-brand-bgGray/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-brand-dark">Author Publishing Cost</td>
                  <td className="py-4 px-6 font-semibold text-[#7B2FBE] bg-[#FAF8F5]">
                    ₹0 / $0 (Zero APC for Authors)
                  </td>
                  <td className="py-4 px-6 text-brand-muted">₹50,000 to ₹3,00,000+ ($1,000–$3,500+)</td>
                </tr>
                <tr className="hover:bg-brand-bgGray/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-brand-dark">Revenue Mechanism</td>
                  <td className="py-4 px-6 text-brand-dark bg-[#FAF8F5]">
                    Institutional library subscriptions &amp; database access
                  </td>
                  <td className="py-4 px-6 text-brand-muted">Direct author publication fees</td>
                </tr>
                <tr className="hover:bg-brand-bgGray/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-brand-dark">Peer-Review Process</td>
                  <td className="py-4 px-6 text-brand-dark bg-[#FAF8F5]">
                    Established, rigorous double-blind peer-review
                  </td>
                  <td className="py-4 px-6 text-brand-muted">Varies; potential volume bias</td>
                </tr>
                <tr className="hover:bg-brand-bgGray/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-brand-dark">Editorial Control</td>
                  <td className="py-4 px-6 text-brand-dark bg-[#FAF8F5]">
                    Strict editorial review with independent criteria
                  </td>
                  <td className="py-4 px-6 text-brand-muted">Commercial publishing targets</td>
                </tr>
                <tr className="hover:bg-brand-bgGray/30 transition-colors">
                  <td className="py-4 px-6 font-semibold text-brand-dark">Academic Prestige</td>
                  <td className="py-4 px-6 text-brand-dark bg-[#FAF8F5]">
                    Reputable international societies and publishers
                  </td>
                  <td className="py-4 px-6 text-brand-muted">Variable indexed standing</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Journal Quality Indicators & Transparency Notice */}
          <div className="p-7 bg-[#FAF8F5] border border-[#EBE3D6] rounded-[18px]">
            <h4 className="font-heading text-lg text-brand-dark mb-3">
              Journal Quality Indicators Evaluated by APEX:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs sm:text-sm text-brand-dark font-body mb-5">
              <div className="p-3 bg-white border border-brand-borderHairline rounded-lg text-center font-medium">
                Scopus &amp; Web of Science Indexing
              </div>
              <div className="p-3 bg-white border border-brand-borderHairline rounded-lg text-center font-medium">
                Assigned Impact Factors &amp; Rankings
              </div>
              <div className="p-3 bg-white border border-brand-borderHairline rounded-lg text-center font-medium">
                Established Editorial Boards
              </div>
              <div className="p-3 bg-white border border-brand-borderHairline rounded-lg text-center font-medium">
                Transparent Peer Review
              </div>
              <div className="p-3 bg-white border border-brand-borderHairline rounded-lg text-center font-medium">
                Clear Publication Ethics Guidelines
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic border-t border-brand-borderHairline pt-4">
              <strong>Important Editorial Notice:</strong> Do not confuse mentorship with guaranteed
              acceptance. Journal selection depends on manuscript suitability and journal eligibility,
              and final acceptance decisions are made exclusively and independently by the respective
              journal editors.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 8. PROGRAM TIMELINE & WORKFLOW (12-Week Roadmap)        */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-brand-bgGray border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              12-WEEK MENTORSHIP
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              Your Three-Month Publication Journey
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              The APEX program follows a structured three-month workflow, guiding researchers through
              manuscript assessment, development, journal selection, submission and post-submission
              support.
            </p>
          </div>

          {/* Three Spacious Month Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {TIMELINE_WEEKS.map((stage, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-borderHairline p-7 sm:p-8 rounded-[20px] shadow-sm flex flex-col justify-between"
                style={{ borderRadius: "20px" }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#7B2FBE] px-3 py-1 rounded">
                      {stage.month}
                    </span>
                    <span className="text-xs font-mono text-brand-muted">Stage 0{idx + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl text-brand-dark leading-snug mb-5 pb-3 border-b border-brand-borderHairline">
                    {stage.phaseName}
                  </h3>

                  <div className="space-y-6">
                    {stage.weeks.map((week, wIdx) => (
                      <div key={wIdx}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-brand-bgGray text-brand-dark border border-brand-borderHairline rounded">
                            {week.badge}
                          </span>
                          <h4 className="text-sm font-semibold text-brand-dark font-heading">
                            {week.title}
                          </h4>
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-brand-muted font-body pl-1">
                          {week.activities.map((act, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <span className="text-[#7B2FBE] font-bold mt-0.5">•</span>
                              <span className="leading-snug">{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Cycle Clarification Box */}
          <div className="p-5 bg-white border border-brand-borderHairline rounded-xl text-xs sm:text-sm text-brand-muted leading-relaxed max-w-4xl mx-auto">
            <p>
              <strong>Submission Cycle Note:</strong> The three-month timeline represents one
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
      <section className="py-20 lg:py-24 bg-white border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              THE APEX ADVANTAGE
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              Why Researchers Choose APEX
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              Designed to eliminate submission uncertainty and enhance academic rigor through dedicated
              one-on-one research mentorship.
            </p>
          </div>

          {/* 5 Authoritative Benefit Panels */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {PROGRAM_BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-[#FAF8F5] border border-[#EBE3D6] rounded-[16px] flex flex-col sm:flex-row items-start gap-5 hover:border-[#7B2FBE]/60 transition-all"
                style={{ borderRadius: "16px" }}
              >
                <span className="w-10 h-10 rounded-lg bg-[#7B2FBE]/10 border border-[#7B2FBE] text-[#7B2FBE] flex items-center justify-center font-mono font-bold text-sm flex-shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl text-brand-dark mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm font-body text-brand-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── */}
      {/* 10. APPLICATION & ENROLLMENT PROCESS                   */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-brand-bgGray border-b border-brand-borderHairline">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-eyebrow text-[#7B2FBE] font-medium mb-3">
              HOW TO GET STARTED
            </p>
            <h2 className="text-3xl sm:text-4xl text-brand-dark font-heading leading-tight mb-4">
              Your APEX Enrollment Journey
            </h2>
            <p className="text-brand-muted font-body text-base leading-relaxed">
              A transparent four-step process from initial contact to structured research onboarding.
            </p>
          </div>

          {/* 4 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {ENROLLMENT_STEPS_DATA.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-borderHairline p-7 rounded-[18px] flex flex-col justify-between shadow-sm"
                style={{ borderRadius: "18px" }}
              >
                <div>
                  <span className="inline-block text-xs font-bold font-mono uppercase tracking-wider text-[#7B2FBE] mb-3">
                    {st.step}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl text-brand-dark leading-snug mb-3 pb-2 border-b border-brand-borderHairline">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-body text-brand-muted leading-relaxed">
                    {st.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Limited Capacity Callout */}
          <div className="p-5 bg-white border border-brand-borderHairline rounded-xl text-center max-w-2xl mx-auto text-xs sm:text-sm font-body text-brand-dark">
            <p>
              <span className="text-[#7B2FBE] font-bold">Limited Enrollment:</span> Program
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
