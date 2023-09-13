import Image from "next/image";

//生成靜態參數-靜態生成路由(build time先生路由)
// export async function generateStaticParams() {
//   const res = await fetch('https://rickandmortyapi.com/api/character/?status=alive').then((res) => res.json())
//  const characters = await res.results
//   return characters.map((character) => (
//    {id:character.id}
//   )).toString()
// }
export default async function CharacterItem({params}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const character =await res.json();
  // const res = await fetch(
  //   `http://localhost:3000/routeHandlers/${params.id}`
  // ).then(res=>res.json());
  // const character =await res.character;
  //+...
  return (
    <div style={{ textAlign: "center" }}>
      <p>{params.id}</p><br/>
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

          <h1>{character.name}</h1>
          <p>species：{character.species}</p>
        </div>
      )}
    </div>
  );
}
