"use client";
import { useState } from "react";
import Link from "next/link";
export default function Layout(props) {
  const [a, setA] = useState(1);
  return (
    <>
    {props.children}
      <Link href={"./"}>click me</Link>
      <Link href={"/SRendring"}>click me</Link>
      <button onClick={() => setA(a + 1)}>++</button>
      <p>{a}</p>

    </>
  );
}
