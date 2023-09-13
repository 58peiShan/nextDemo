"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
const isServerComponent = typeof window === "undefined" ? true : false;
const a = format(new Date(), "'Today is a' eeee");
export default function Client() {
  console.log('%cStatic Rendering in Client Component','color: orange');
  const [character, setCharacter] = useState("");
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
      <Link href={"./"}>Server component</Link>
      <h1>{isServerComponent ? "Server Component" : "Client Component"}</h1>
      {/* 這裡會報錯因為客戶端跟sever端UI不一樣 */}
      <h2>靜態渲染(default)</h2>
      <p>{a}</p>
      {/* <button onClick={()=>{}}>fetch</button> */}
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
