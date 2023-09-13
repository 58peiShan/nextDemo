"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
const isServerComponent = typeof window === "undefined" ? true : false;
const a = format(new Date(), "'Today is a' eeee");
console.log('%cDynamic Rendering in Client Component','color: orange');

export default function Client() {
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
      {/* 這會報錯因為客戶端跟sever端字不一樣 */}
      <h1>{isServerComponent ? "Server Component" : "Client Component"}</h1>
      <h2>Next.js 使用術語“動態預渲染”來代替 SSR</h2>
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
