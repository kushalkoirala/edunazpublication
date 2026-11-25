import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret')
    const webhookSecret = process.env.SANITY_REVALIDATE_SECRET

    // Optional shared secret check if configured
    if (webhookSecret && secret !== webhookSecret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate the journalCard tag and homepage path
    revalidateTag('journalCard', { expire: 0 })
    revalidatePath('/', 'page')

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Journal cards revalidated successfully',
    })
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json(
      { revalidated: false, error: errorMessage },
      { status: 500 }
    )
  }
}
