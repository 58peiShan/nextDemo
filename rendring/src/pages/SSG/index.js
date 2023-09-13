import Link from "next/link"
export default function Page({character}) {
  return (
    <>
    <Link href={'./CSR'}>CSR </Link>
    <Link href={'./SSR'}> SSR</Link>
    <h2>SSG Static Side Generator</h2>
    資料:
    <ul>
    {character.map((character) => (
      <li key={character.id}>
        <Link href={`./SSG/${character.id}`}><h3>{character.name}</h3></Link>
      </li>
      ))}
    </ul>
    </>
    
  )
}
// Those functions get called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://rickandmortyapi.com/api/character/?status=alive').then(res=>res.json())
  const character = res.results
  const amount = character.length
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      character,amount
    },
  }
}
