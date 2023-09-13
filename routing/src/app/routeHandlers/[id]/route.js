//import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
export async function GET(request, { params }) {
  //可以不要caching, Opting out of caching
  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get('id')
  const id = params.id
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'test':'rr'
    },
  })
  const character = await res.json()
 //console.log(headers());
  return NextResponse.json({ character })
  // redirect('https://nextjs.org/')
}