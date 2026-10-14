// lib/content.ts
// Shared data structures, types, and placeholders for Edunaaz Publication

export interface ServiceItem {
  slug: string;
  title: string;
  heroAccentWord: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "publication" | "editing" | "isbn";
  items: string[];
}

export interface JournalItem {
  slug: string;
  title: string;
  heroAccentWord: string;
  badge: string;
  issn: string;
  description: string;
  scope: string;
  frequency: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ─────────────────────────────────────────────────────────────
// PLACEHOLDERS (Collected for client completion)
// ─────────────────────────────────────────────────────────────
export const PLACEHOLDERS = {
  // Founder signature in About section
  // TODO: Replace with official signature and confirmed name of founder
  FOUNDER_NAME: "Owners name",

  // Journal ISSN numbers
  // TODO: Replace with registered ISSN numbers once granted
  JOURNAL_ISSN: "[258X-XXXX (Online)]",

  // ISBN service list placeholders
  // TODO: Take these four points from the client's ISBN Book Publication page
  ISBN_SERVICE_DETAIL: "[Add detail]",

  // Stats band placeholders
  // TODO: Only fill in with a number and label the client can prove
  STAT_FIGURE: "[--]",
  STAT_LABEL: "[Add label, e.g. Manuscripts supported]",

  // Legal & policy date placeholder
  // TODO: Replace with the official legal review / effective date
  LEGAL_LAST_UPDATED: "[date]",

  // Legal content placeholder
  // TODO: Client to provide legal terms, privacy policy, and editorial ethics
  LEGAL_BODY_CONTENT: "[Content to be provided by client]",

  // Journal structural placeholders
  // TODO: Client to provide author submission guidelines and editorial board roster
  JOURNAL_GUIDELINES: "[Content to be provided]",
  JOURNAL_EDITORIAL_BOARD: "[Content to be provided]",
} as const;

// ─────────────────────────────────────────────────────────────
// SERVICES DATA
// ─────────────────────────────────────────────────────────────
export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "research-publication",
    title: "Research Publication",
    heroAccentWord: "Publication",
    shortDescription:
      "Guidance through journal selection, manuscript preparation, formatting and submission.",
    fullDescription:
      "Comprehensive end-to-end guidance for scholars and researchers navigating academic publishing. Our advisors assist in aligning manuscripts with journal scope, indexing criteria, and strict editorial mandates.",
    iconName: "publication",
    items: [
      "Journal selection guidance",
      "Manuscript preparation",
      "Formatting to journal requirements",
      "Submission support",
    ],
  },
  {
    slug: "writing-and-editing",
    title: "Writing & Editing",
    heroAccentWord: "Editing",
    shortDescription:
      "Writing and editing support for research articles, review papers and theses.",
    fullDescription:
      "Professional technical proofreading, structural editing, and language refinement for research articles, review papers, and dissertations across engineering, pure sciences, medicine, and management.",
    iconName: "editing",
    items: [
      "Research articles",
      "Review papers",
      "Theses",
      "Proofreading and editing",
    ],
  },
  {
    slug: "isbn-book-publication",
    title: "ISBN Book Publication",
    heroAccentWord: "Book",
    shortDescription:
      "Support for publishing academic books and monographs with an ISBN.",
    fullDescription:
      "Dedicated publishing assistance for authored books, edited academic volumes, and scholarly monographs with official ISBN allocation and cataloging support.",
    iconName: "isbn",
    items: [
      PLACEHOLDERS.ISBN_SERVICE_DETAIL,
      PLACEHOLDERS.ISBN_SERVICE_DETAIL,
      PLACEHOLDERS.ISBN_SERVICE_DETAIL,
      PLACEHOLDERS.ISBN_SERVICE_DETAIL,
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// JOURNALS DATA
// ─────────────────────────────────────────────────────────────
export const JOURNALS_DATA: JournalItem[] = [
  {
    slug: "international-journal-of-advanced-engineering-scientific-research",
    title:
      "International Journal of Advanced Engineering & Scientific Research",
    heroAccentWord: "Engineering",
    badge: "PEER REVIEWED",
    issn: PLACEHOLDERS.JOURNAL_ISSN,
    description:
      "Bi-annual multidisciplinary publication dedicated to contemporary engineering designs, computational innovations, and technological models.",
    scope:
      "Contemporary engineering designs, computational innovations, applied informatics, electrical and mechanical systems, and technological modeling across multidisciplinary fields.",
    frequency: "Bi-annual",
  },
  {
    slug: "edunaaz-review-of-global-management-applied-economics",
    title:
      "Edunaaz Review of Global Management & Applied Economics",
    heroAccentWord: "Management",
    badge: "OPEN ACCESS",
    issn: PLACEHOLDERS.JOURNAL_ISSN,
    description:
      "Focuses on empirical investigations, financial strategy, public policy, econometric forecasting, and emerging market paradigms.",
    scope:
      "Empirical investigations, organizational governance, financial strategy, public policy, econometric forecasting, international trade, and emerging market paradigms.",
    frequency: "Bi-annual",
  },
  {
    slug: "journal-of-modern-interdisciplinary-science-humanities",
    title:
      "Journal of Modern Interdisciplinary Science & Humanities",
    heroAccentWord: "Interdisciplinary",
    badge: "SCHOLARLY FORUM",
    issn: PLACEHOLDERS.JOURNAL_ISSN,
    description:
      "Platform fostering collaborative discourse across social sciences, applied sciences, education, and cultural research initiatives.",
    scope:
      "Collaborative discourse uniting social sciences, humanities, applied scientific methodologies, higher education pedagogies, and cultural research initiatives.",
    frequency: "Bi-annual",
  },
];

// ─────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────
export const FAQ_DATA: FaqItem[] = [
  {
    question: "Does Edunaaz guarantee manuscript acceptance?",
    answer:
      "No. Acceptance is decided solely by independent journal editors and blind peer reviewers. Edunaaz provides professional guidance, formatting, similarity reporting, and editorial support only.",
  },
  {
    question: "What is the typical turnaround time for manuscript editing?",
    answer:
      "Standard editorial cycles take between 3 to 7 business days depending on word count, technical complexity, and required citation standardization (IEEE, APA, Harvard, or Nature format).",
  },
  {
    question: "How is similarity and originality checked?",
    answer:
      "Manuscripts undergo systematic plagiarism audits using licensed industry-standard databases. A detailed, line-by-line similarity report is shared alongside constructive paraphrasing recommendations.",
  },
  {
    question: "How does journal scope recommendation work?",
    answer:
      "Our academic advisors evaluate your study’s methodology, core findings, and target audience to suggest verified indexed publications matching your timeline and field of study.",
  },
  {
    question: "What are the consultation and review support options?",
    answer:
      "Authors can opt for structured written critique memos or scheduled one-on-one virtual review sessions with senior editors to discuss peer review rebuttal strategies.",
  },
];

// ─────────────────────────────────────────────────────────────
// COMPANY INFO (From site footer and registered details)
// ─────────────────────────────────────────────────────────────
export const COMPANY_INFO = {
  name: "Edunaaz Publication (OPC) Private Limited",
  shortName: "Edunaaz Publication",
  tagline: "Academic Publishing & Research Support",
  cin: "U85499AS2025OPC028933",
  mcaRegistration:
    "Registered under the Ministry of Corporate Affairs, Government of India",
  address:
    "Room No 8, Ground Floor, AL-HAYAT COMPLEX, Majgaon, Barpeta Road, Assam 781313, India",
  email: "editor@edunaazpublication.com",
  phone: "+91 9395707581",
  whatsappUrl: "https://wa.me/919395707581",
} as const;

// Helper getters
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getJournalBySlug(slug: string): JournalItem | undefined {
  return JOURNALS_DATA.find((j) => j.slug === slug);
}
