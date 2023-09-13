import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
export default function CharacterItem({ character }) {
  const router = useRouter()
  const APIKey = process.env.apiKey
  //fallback: true
  if (router.isFallback) {
    return <div><h1>Loading...</h1></div>
  }
  
  return (
    <div style={{ textAlign: "center" }}>
      {character && (
        <div key={character.id}>
          {character.image && (
            <Image
              src={character.image}
              alt="character's profile"
              width={100}
              height={100}
            
            />
          )}

          <h1 onClick={()=>alert(11)}>{character.name}</h1>
          <p>species：{character.species}</p>
          {APIKey}
        </div>
      )}
      <a href={"/SSG"}>Back</a>
    </div>
  );
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character = await res.json();
  if(!character){
  return{
    notFound:true
  }
}
  // Pass post data to the page via props
  return { props: { character },revalidate: 77, };
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/1,2,4"
  )
  const posts = await res.json()
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  //We'll pre-render only these paths at build time.
  //{ fallback: false } means other routes should 404.
  //{ fallback:true} means you can use ifFallback to decide 
  //"blocking"
  //page's UI before get props&render 
  return { paths, fallback:true};
}
//Application error: a client-side exception has occurred (see the browser console for more information).