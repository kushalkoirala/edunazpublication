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
  indexing?: string;
  citeScore?: string;
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
      "Guidance through journal selection, manuscript preparation, formatting and submission, ensuring higher chances of acceptance.",
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
    title: "Writing & Editing Excellence",
    heroAccentWord: "Editing",
    shortDescription:
      "Professional academic writing, editing, proofreading, and language refinement services for research articles, review papers, thesis, dissertations, and research proposals.",
    fullDescription:
      "EduNaaz Publication provides comprehensive academic writing and editorial support to researchers, scholars, and students. Our experienced team of subject specialists and academic editors helps improve the clarity, structure, language, and presentation of scholarly manuscripts while maintaining academic integrity and research quality.",
    iconName: "editing",
    items: [
      "Research articles",
      "Review papers",
      "Thesis & dissertations",
      "Proofreading and editing",
    ],
  },
  {
    slug: "isbn-book-publication",
    title: "ISBN Book Publication",
    heroAccentWord: "Book",
    shortDescription:
      "Support for publishing academic books and monographs with an ISBN, from manuscript preparation to final publication.",
    fullDescription:
      "Dedicated publishing assistance for authored books, edited academic volumes, and scholarly monographs with official ISBN allocation and cataloging support.",
    iconName: "isbn",
    items: [
      "ISBN application assistance",
      "Book formatting & layout design",
      "Cover design support",
      "Publication and distribution support",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// JOURNALS DATA
// ─────────────────────────────────────────────────────────────
export const JOURNALS_DATA: JournalItem[] = [
  {
    slug: "acta-innovations",
    title: "Acta Innovations",
    heroAccentWord: "Innovations",
    badge: "SCOPUS Q1",
    issn: "e-ISSN: 2300-5599",
    indexing: "Scopus Q1",
    description:
      "Peer-reviewed multidisciplinary journal indexed in Scopus (Q1) dedicated to innovative scientific research, societal progress, environmental advances, and technological applications.",
    scope:
      "Social Sciences (miscellaneous), Arts and Humanities, Education, Engineering (miscellaneous), Medicine (miscellaneous), Environmental Sciences, Business, Management and Accounting, etc.",
    frequency: "Quarterly",
  },
  {
    slug: "journal-of-intelligent-decision-making-and-information-science",
    title: "Journal of Intelligent Decision Making and Information Science",
    heroAccentWord: "Decision",
    badge: "SCOPUS Q1",
    issn: "e-ISSN: 3079-0875",
    indexing: "Scopus Q1",
    citeScore: "3.4 (CiteScore 2026)",
    description:
      "Leading peer-reviewed journal indexed in Scopus (Q1) with a CiteScore of 3.4 (2026), advancing computational intelligence, information science, and algorithmic decision modeling.",
    scope:
      "Engineering, Computer Science: Artificial Intelligence, Computer Science: Information Systems, Decision Sciences: Information Systems and Management, Decision Sciences: Management Science and Operations Research.",
    frequency: "Quarterly",
  },
  {
    slug: "adolescencia-e-saude",
    title: "Adolescencia e Saude",
    heroAccentWord: "Saude",
    badge: "SCOPUS · PUBMED",
    issn: "ISSN: 1679-9941 | e-ISSN: 2177-5281",
    indexing: "Scopus, PubMed, Google Scholar",
    description:
      "Prestigious peer-reviewed medical publication indexed in Scopus, PubMed, and Google Scholar, advancing clinical pediatrics, perinatology, child development, and multidisciplinary healthcare.",
    scope:
      "Medicine: Pediatrics, Perinatology and Child Health and Medical Related All Domain.",
    frequency: "Quarterly",
  },
];

// ─────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────
export const FAQ_DATA: FaqItem[] = [
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
