
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }
  const API_KEY = process.env.BREVO_API_KEY
  const LIST_ID = process.env.BREVO_LIST_ID // numeric string
  if (!API_KEY || !LIST_ID) return NextResponse.json({ ok: true, mock: true })

  const resp = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'api-key': API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, listIds: [Number(LIST_ID)], updateEnabled: true })
  })
  if (!resp.ok) return NextResponse.json({ error: 'Brevo error' }, { status: 500 })
  return NextResponse.json({ ok: true })
}
