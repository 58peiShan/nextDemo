import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`, {
    headers: {
      "Content-Type": "application/json",
      test: "rr",
    },
  });
  const character = await res.json();
  return NextResponse.json({ character });
}
