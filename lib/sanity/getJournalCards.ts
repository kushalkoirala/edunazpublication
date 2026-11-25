import { client } from './client'
import { ALL_JOURNALS_QUERY, JOURNAL_CARDS_QUERY, JOURNAL_BY_SLUG_QUERY } from './queries'
import { SanityJournalCard } from './types'

export async function getJournalCards(): Promise<SanityJournalCard[]> {
  try {
    const data = await client.fetch<SanityJournalCard[]>(
      JOURNAL_CARDS_QUERY,
      {},
      {
        next: {
          revalidate: 10,
          tags: ['journalCard'],
        },
      }
    )
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Failed to fetch journal cards from Sanity:', error)
    return []
  }
}

export async function getAllJournals(): Promise<SanityJournalCard[]> {
  try {
    const data = await client.fetch<SanityJournalCard[]>(
      ALL_JOURNALS_QUERY,
      {},
      {
        next: {
          revalidate: 10,
          tags: ['journalCard'],
        },
      }
    )
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error('Failed to fetch all journals from Sanity:', error)
    return []
  }
}

export async function getSanityJournalBySlug(slug: string): Promise<SanityJournalCard | null> {
  try {
    const data = await client.fetch<SanityJournalCard | null>(
      JOURNAL_BY_SLUG_QUERY,
      { slug },
      {
        next: {
          revalidate: 10,
          tags: ['journalCard'],
        },
      }
    )
    return data || null
  } catch (error) {
    console.error(`Failed to fetch journal (${slug}) from Sanity:`, error)
    return null
  }
}
