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
  websiteUrl?: string;
  snip?: string;
  sjr?: string;
  publisher?: string;
  indexedIn?: string;
  note?: string;
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
    slug: "acta-biomedica",
    title: "Acta Biomedica",
    heroAccentWord: "Biomedica",
    badge: "SCOPUS Q3",
    issn: "ISSN: 0392-4203 | e-ISSN: 2531-6745",
    indexing: "Scopus Q3 · CiteScore 2.8 (2025)",
    citeScore: "2.8 (68th centile, 2025)",
    description:
      "Peer-reviewed medical journal indexed in Scopus (Q3) with a CiteScore of 2.8 (2025), covering clinical and surgical aspects of medicine. Published 6 issues per year, indexed in Scopus, EMBASE, Europe PMC, BIOSIS, Portico, and Google Scholar.",
    scope: "Clinical and Surgical Aspects of Medicine",
    frequency: "6 issues / year",
    websiteUrl: "https://mattioli1885journals.com/index.php/actabiomedica",
  },
  {
    slug: "studies-in-english-language-and-education",
    title: "Studies in English Language and Education (SiELE)",
    heroAccentWord: "Education",
    badge: "SCOPUS Q1",
    issn: "",
    indexing: "Scopus Q1",
    description:
      "Leading peer-reviewed journal indexed in Scopus (Q1) dedicated to advancing research in English language learning, linguistics, and educational methodology across global academic contexts.",
    scope: "English Language, Linguistics and Education",
    frequency: "Quarterly",
    websiteUrl: "https://jurnal.usk.ac.id/SiELE",
  },
  {
    slug: "3l-language-linguistics-literature",
    title: "3L: Language, Linguistics, Literature – The Southeast Asian Journal of English Language Studies",
    heroAccentWord: "Literature",
    badge: "SCOPUS Q1",
    issn: "",
    indexing: "Scopus Q1",
    description:
      "Distinguished peer-reviewed journal indexed in Scopus (Q1) focusing on language, linguistics, and literature research with a Southeast Asian perspective and global scholarly engagement.",
    scope: "Language, Linguistics and Literature",
    frequency: "Quarterly",
    websiteUrl: "https://ejournals.ukm.my/3l/index",
  },
  {
    slug: "ssrg-ijeee",
    title: "SSRG International Journal of Electrical and Electronics Engineering (IJEEE)",
    heroAccentWord: "Electronics",
    badge: "SCOPUS",
    issn: "e-ISSN: 2348-8379",
    indexing: "Scopus",
    description:
      "Peer-reviewed international journal indexed in Scopus, covering research in electrical engineering, electronics, power systems, control systems, signal processing, and related fields.",
    scope: "Electrical and Electronics Engineering",
    frequency: "12 issues / year",
    publisher: "Seventh Sense Research Group",
    websiteUrl: "https://www.internationaljournalssrg.org/IJEEE/index.html",
  },
  {
    slug: "ssrg-ijce",
    title: "SSRG International Journal of Civil Engineering (IJCE)",
    heroAccentWord: "Civil",
    badge: "SCOPUS Q2",
    issn: "e-ISSN: 2348-8352",
    indexing: "Scopus Q2",
    description:
      "Peer-reviewed international journal indexed in Scopus (Q2) covering research across all major disciplines of civil engineering including structural, geotechnical, transportation, environmental, and construction engineering.",
    scope: "Civil Engineering",
    frequency: "12 issues / year",
    publisher: "Seventh Sense Research Group",
    websiteUrl: "https://www.internationaljournalssrg.org/IJCE/index.html",
  },
  {
    slug: "indian-journal-of-finance",
    title: "Indian Journal of Finance",
    heroAccentWord: "Finance",
    badge: "SCOPUS Q2",
    issn: "ISSN: 0973-8711",
    indexing: "Scopus Q2",
    citeScore: "2.8 (2025)",
    snip: "0.565",
    sjr: "0.283",
    description:
      "Leading peer-reviewed journal indexed in Scopus (Q2) with a CiteScore of 2.8 (2025), dedicated to advancing research in finance, capital markets, banking, investment, and financial economics across Indian and global contexts.",
    scope: "Finance and Markets",
    frequency: "Monthly",
    publisher: "Associated Management Consultants Pvt. Ltd.",
    indexedIn: "Scopus, UGC-CARE Group II, Google Scholar, J-Gate, NISCAIR, Crossref",
    websiteUrl: "https://www.indianjournaloffinance.co.in/",
  },
  {
    slug: "prabandhan-indian-journal-of-management",
    title: "Prabandhan: Indian Journal of Management",
    heroAccentWord: "Management",
    badge: "SCOPUS Q3",
    issn: "ISSN: 0975-2854",
    indexing: "Scopus Q3",
    citeScore: "3.5 (2025)",
    snip: "0.672",
    sjr: "0.310",
    description:
      "Distinguished peer-reviewed journal indexed in Scopus with a CiteScore of 3.5 (2025), publishing original research in management, human resource management, organizational behavior, international business, and corporate governance.",
    scope: "Management, Human Resource Management, Organizational Behavior, International Business and Corporate Governance",
    frequency: "Monthly",
    publisher: "Associated Management Consultants Pvt. Ltd.",
    indexedIn: "Scopus, UGC-CARE Group II, Google Scholar, J-Gate, NISCAIR, Crossref, Cabell's Journalytics",
    websiteUrl: "https://www.indianjournalofmanagement.com/",
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
