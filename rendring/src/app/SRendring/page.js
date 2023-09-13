import {  format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
export default async function Page() {
  console.log('%cStatic Rendering in Server Component','color: orange');
  const a = format(new Date(), "'Today is a' eeee")
  const isServerComponent = (typeof window==='undefined')?true:false
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${process.env.API_KEY}`
  );

  const character = await res.json();
  return (
      <>
      {/* <Link href={"./SRendring/Client"}>Client component</Link> */}
      <h1>{isServerComponent?'Server Component':'Client Component'}</h1>
      -更細粒度的server side rendring
      <h2>靜態渲染(default)</h2>
      {/* <Image alt={'img'} width={300} height={224} src={'https://images.prismic.io/webscopeio/d4d44c1e-898b-491c-8ccc-a0d7b522f615_rsc-granularity.png?auto=compress,format'} /> */}
      <p>{a}</p>
      資料:
      <ul>
        <li>id:{character.id}</li>
        <li>{character.name}</li>
        <li>{character.status}</li>
        <li>{character.species}</li>
        <li>{character.gender}</li>
      </ul>

      </>
    )
  }
  