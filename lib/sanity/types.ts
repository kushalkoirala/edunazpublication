export interface SanityJournalCard {
  _id: string
  slug?: string
  isFeaturedOnHome?: boolean
  journalNumber?: string
  journalName: string
  journalCategory?: string
  subjectArea?: string
  subtitle?: string
  indexingInfo?: string
  issn?: string
  eIssn?: string
  frequency?: string
  citeScore?: string
  snip?: string
  sjr?: string
  description?: string
  publisher?: string
  indexedIn?: string
  websiteUrl?: string
  submitButtonText?: string
  detailsButtonText?: string
  displayOrder?: number
}
