export interface StageWeekActivity {
  badge: string;
  title: string;
  description: string;
  activities: string[];
  deliverables: string[];
}

export interface ApexStage {
  id: string;
  slug: string;
  stageNumber: string;
  month: string;
  title: string;
  shortDescription: string;
  duration: string;
  typeBadge: string;
  typeIcon: "guidance" | "development" | "submission";
  image: string;
  focusAreas: string[];
  overview: string;
  weeks: StageWeekActivity[];
  outcomes: string[];
  toolsUsed: string[];
}

export const APEX_STAGES: ApexStage[] = [
  {
    id: "stage-1",
    slug: "stage-1",
    stageNumber: "Stage 01",
    month: "Month 1",
    title: "Assessment & Strategy Development",
    shortDescription:
      "Build a strong research foundation with expert assessment, detailed review, and a personalized publication strategy.",
    duration: "Weeks 1 – 4",
    typeBadge: "1-on-1 Guidance",
    typeIcon: "guidance",
    image: "/images/apex-scope.jpg",
    focusAreas: [
      "Initial consultation & diagnostic assessment",
      "Manuscript review and quality evaluation",
      "Identify methodological strengths & gaps",
      "Personalized publication strategy document",
    ],
    overview:
      "Stage 01 establishes the intellectual and methodological foundation of your publication journey. Through structured one-on-one diagnostic sessions with our program mentor, your current draft undergoes exhaustive scientific evaluation to identify structural bottlenecks, empirical strengths, and strategic journal targets.",
    weeks: [
      {
        badge: "Weeks 1–2",
        title: "Initial Consultation & Diagnostic Assessment",
        description:
          "Comprehensive diagnostic manuscript review and one-on-one consultation with our program mentor to evaluate empirical rigor and publication objectives.",
        activities: [
          "One-on-one consultation to understand research background, empirical dataset, and publication goals.",
          "Exhaustive diagnostic manuscript review assessing conceptual framing, literature depth, and structural soundness.",
          "Evaluation of methodology rigor, sample validity, and empirical design robustness.",
          "Identification of manuscript strengths, vulnerabilities, and priority developmental interventions.",
        ],
        deliverables: [
          "Diagnostic Quality Assessment Report",
          "Methodological Soundness & Gap Analysis Matrix",
          "Personalized Publication Strategy Document",
        ],
      },
      {
        badge: "Weeks 3–4",
        title: "Manuscript Refinement Planning & Software Scheduling",
        description:
          "Formulating prioritized revision roadmaps, establishing narrative cohesion, and scheduling technical figure training sessions.",
        activities: [
          "Detailed structural feedback focusing on narrative cohesion, clarity, and scholarly tone.",
          "Prioritized roadmap established for content revisions, empirical refinements, and statistical validation.",
          "Personalized SigmaPlot and CorelDRAW technical training scheduled to address specific figure requirements.",
          "Preliminary journal scope alignment based on manuscript profile and indexing targets.",
        ],
        deliverables: [
          "Prioritized Content Revision Roadmap",
          "Technical Software Training Schedule (SigmaPlot / CorelDRAW)",
          "Preliminary Journal Target Alignment Brief",
        ],
      },
    ],
    outcomes: [
      "Clear diagnosis of all manuscript strengths, vulnerabilities, and revision priorities.",
      "Customized publication strategy aligned with your institutional or career milestones.",
      "Structured schedule for statistical and technical figure optimization training.",
      "Clear positioning framework to maximize editorial review readiness.",
    ],
    toolsUsed: [
      "Diagnostic Assessment Framework",
      "Empirical Validity Matrix",
      "Citation Index Screening",
      "SigmaPlot Preparation Toolset",
    ],
  },
  {
    id: "stage-2",
    slug: "stage-2",
    stageNumber: "Stage 02",
    month: "Month 2",
    title: "Manuscript Preparation & Journal Selection",
    shortDescription:
      "Develop a high-quality manuscript, refine its structure and presentation, and identify the most suitable target journal.",
    duration: "Weeks 5 – 8",
    typeBadge: "Manuscript Development",
    typeIcon: "development",
    image: "/images/apex-included.jpg",
    focusAreas: [
      "Detailed manuscript development & refinement",
      "Data visualization & figure optimization",
      "Language enhancement & academic polishing",
      "Journal selection & pre-submission packaging",
    ],
    overview:
      "Stage 02 is the intensive development and technical refinement phase of APEX. Here, your manuscript is elevated to international publication standards through rigorous language polishing, hands-on scientific figure generation in SigmaPlot and CorelDRAW, and evidence-based targeting of reputable subscription journals that charge zero author APCs.",
    weeks: [
      {
        badge: "Weeks 5–6",
        title: "Intensive Manuscript Development & Graphic Optimization",
        description:
          "Hands-on technical figure generation, rigorous linguistic refinement, and compliance formatting.",
        activities: [
          "Implementation of detailed feedback, methodological refinements, and structural revisions.",
          "Hands-on SigmaPlot sessions: statistical plotting, curve fitting, and high-DPI figure optimization.",
          "CorelDRAW training: technical schematics, process flowcharts, and graphical abstracts.",
          "Line-by-line academic language enhancement, syntax polishing, and tone refinement.",
          "Verification of citation style and bibliography formatting (APA, IEEE, Harvard, Vancouver, Chicago).",
        ],
        deliverables: [
          "Linguistically polished and structurally revised manuscript draft",
          "Publication-ready high-resolution figures (300+ DPI, print & online compliant)",
          "Standardized bibliography and reference citation verification",
        ],
      },
      {
        badge: "Weeks 7–8",
        title: "Strategic Journal Selection & Pre-Submission Packaging",
        description:
          "Evidence-based journal matching targeting subscription-based zero-APC journals, and complete author package drafting.",
        activities: [
          "Evidence-based journal matching aligned with manuscript scope, methodology, and citation impact.",
          "Verification of Scopus, Web of Science (SCI/SCIE/SSCI), and UGC CARE indexing status.",
          "Identification of reputable subscription-model journals charging ₹0 / $0 author APCs.",
          "Compliance check against target journal's specific Author Guidelines, word counts, and formatting rules.",
          "Drafting of tailored, persuasive Cover Letter to the Editor-in-Chief.",
          "Drafting of required Author Statements, Contribution Disclosures, and blinded manuscripts.",
        ],
        deliverables: [
          "Subscription Journal Recommendation Dossier (Zero APC)",
          "Customized Editor-in-Chief Cover Letter",
          "Complete Pre-Submission Package (Main manuscript, Blinded copy, Title page, Declarations)",
        ],
      },
    ],
    outcomes: [
      "A submission-ready, linguistically polished manuscript meeting international standards.",
      "Publication-grade scientific figures and schematics rendered in professional software.",
      "Clear journal target selection with verified Scopus / Web of Science indexing and ₹0 APC.",
      "Complete author documentation package including tailored editor cover letter.",
    ],
    toolsUsed: [
      "SigmaPlot 14+ Statistical Graphics",
      "CorelDRAW Technical Suite",
      "Journal Citation Reports (JCR) & CiteScore Analytics",
      "Turnitin Similarity Verification",
    ],
  },
  {
    id: "stage-3",
    slug: "stage-3",
    stageNumber: "Stage 03",
    month: "Month 3",
    title: "Submission & Post-Submission Navigation",
    shortDescription:
      "Get complete support for journal submission, tracking, peer-review responses, and revision to achieve successful acceptance.",
    duration: "Weeks 9 – 12",
    typeBadge: "Submission Support",
    typeIcon: "submission",
    image: "/images/apex-scope.jpg",
    focusAreas: [
      "Guidance for formal manuscript submission",
      "Metadata entry & technical troubleshooting",
      "Confirmation and tracking of submission",
      "Peer-review preparation & revision guidance",
    ],
    overview:
      "Stage 03 navigates the crucial submission portals and peer-review lifecycle. From live portal submission to interpreting reviewer critiques and drafting point-by-point rebuttal letters, our mentors support you every step of the way until final editorial acceptance.",
    weeks: [
      {
        badge: "Weeks 9–10",
        title: "Formal Manuscript Submission",
        description:
          "Hands-on navigation through online editorial platforms, metadata input, and technical verification.",
        activities: [
          "Direct step-by-step guidance through online journal submission portals (Editorial Manager, ScholarOne, OJS, etc.).",
          "Selection of search-optimized keywords, classifications, and subject categories.",
          "Upload and verification of blinded manuscripts, high-res figures, and supplementary datasets.",
          "Inspection of publisher-generated PDF proof to ensure zero typographical or formatting artifacts.",
          "Confirmation, documentation, and archival of submission receipt and tracking credentials.",
        ],
        deliverables: [
          "Successful Submission Confirmation & Tracking Archive",
          "Editorial Milestone & Turnaround Timeline Tracker",
        ],
      },
      {
        badge: "Weeks 11–12",
        title: "Post-Submission Navigation & Peer-Review Preparation",
        description:
          "Expert guidance in handling reviewer remarks, formulating rebuttal letters, and managing revision rounds.",
        activities: [
          "Interpretation of initial editorial communications and desk-review decisions.",
          "Critical analysis of peer reviewers' feedback and structural categorization of remarks.",
          "Formulation of a persuasive, respectful, point-by-point rebuttal strategy.",
          "Guidance on additional data presentation, conceptual defenses, or methodological clarifications.",
          "Ongoing support across revision cycles through to final editorial acceptance.",
        ],
        deliverables: [
          "Peer-Review Decision Analysis & Revision Roadmap",
          "Point-by-Point Author Rebuttal Letter Documentation",
          "Final Acceptance & Proofreading Checklist",
        ],
      },
    ],
    outcomes: [
      "Error-free formal submission through verified online editorial portals.",
      "Comprehensive tracking and timeline management during peer review.",
      "High-impact point-by-point rebuttal letters that effectively address reviewer critiques.",
      "End-to-end guidance reducing revision cycles and accelerating acceptance.",
    ],
    toolsUsed: [
      "Editorial Manager / ScholarOne / OJS Portals",
      "Peer Review Rebuttal Framework",
      "Proofreading & Galley Proof Tools",
      "Submission Archive & Tracking Dashboard",
    ],
  },
];

export function getApexStageBySlug(slug: string): ApexStage | undefined {
  const normalized = slug.toLowerCase().trim();
  return APEX_STAGES.find(
    (s) =>
      s.slug === normalized ||
      s.id === normalized ||
      normalized === `stage-${s.stageNumber.replace(/\D/g, "")}` ||
      normalized === `stage-${parseInt(s.stageNumber.replace(/\D/g, ""), 10)}` ||
      normalized === s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  );
}

