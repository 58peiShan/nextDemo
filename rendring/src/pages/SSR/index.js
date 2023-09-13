import Link from "next/link"
import Image from "next/image"
export default function Page({character,amount}) {
  return (
    <>
    <Link href={'./CSR'}>CSR </Link>
    <Link href={'./SSG'}> SSG</Link>
    <h2>SSR Server Side Rending</h2>
    (動態預渲染)
    {/* <Image height={285} width={300} src={'https://images.prismic.io/webscopeio/94927789-d662-41b4-bc5c-f4793b3fb4b9_ssr-granularity.png?auto=compress,format'} alt={'img'}/> */}
    <Image height={439} width={549} src={'https://images.prismic.io/webscopeio/dcdc39ab-0148-4c18-8889-2ef3a9e80d5b_ssr-time-chart.png?auto=compress,format'} alt={'img'}/>
    資料:
    <ul>
    {character.map((character) => (
      <li key={character.id}>
        <h3>{character.name}</h3>
      </li>
      ))}
    </ul>
    </>
    
  )
}
// Those functions get called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://rickandmortyapi.com/api/character/?status=alive').then(res=>res.json())
  const character = res.results
  const amount = character.length
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      character,
      amount
    },
  }
}
