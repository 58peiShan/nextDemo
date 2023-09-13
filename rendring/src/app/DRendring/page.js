import { cookies } from 'next/headers'
import Link from 'next/link';
export default async function Page() {
  const cookieStore = cookies()
  const id = cookieStore.get('id')
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();
  console.log('%cDynamic Rendering in Server Component','color: orange');

    return (
      <>
      <Link href={"/DRendring/Client"}>Client component</Link>
      <h1>Server Component</h1>
      <h2>Dynamic Rendering</h2>
      routes are rendered for each user at request time.
      <p>Next.js 使用術語“動態預渲染”來代替 SSR</p>
      資料:
      <ul>
      <li>{character.id}</li>
      <li>{character.name}</li>
    
      </ul>
      </>
      
    )
  }
