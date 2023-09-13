import Link from "next/link";
export const metadata = {
  title: '動態路由',
}
 
export default async function RickMorty() {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/?status=alive").then((res) => res.json());
  const character = res.results;
  return (
    <div style={{ textAlign: "center" }}>
      {character.map((character) => (
        <div key={character.id}>
          <h3 style={{ margin: "5px" }}> 
            <Link href={"./character/" + character.id}>{character.name}</Link>
          
          </h3>
        </div>
      ))}
    </div>
  );
}
