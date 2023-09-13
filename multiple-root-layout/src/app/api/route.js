//import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
export async function GET(request, { params }) {
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')
  const id = params.id
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'test':'rr'
    },
  })
  const character = await res.json()
  return NextResponse.json({ character })
  // redirect('https://nextjs.org/')
}