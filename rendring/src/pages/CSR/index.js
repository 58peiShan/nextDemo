import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Link from "next/link";
const a = format(new Date(), "'Today is a' eeee");
export default function Client() {
  const [character, setCharacter] = useState("");
  // const router = useRouter()
  // console.log(router);
  useEffect(() => {
    let fetchData = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/1`);
      const character = await res.json();
      setCharacter(character);
    };
    fetchData();
  }, []);

  return (
    <>
    <Link href={'./SSG'}>SSG</Link>
    <Link href={'./SSR'}> SSR</Link>
      <h2>CSR</h2>
      <p>{a}</p>
      資料:
      {character ? (
        <>
          <ul>
            <li>id:{character.id}</li>
            <li>{character.name}</li>
            <li>{character.status}</li>
            <li>{character.species}</li>
            <li>{character.gender}</li>
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
