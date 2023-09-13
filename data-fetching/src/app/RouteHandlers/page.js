"use client";
import { useState } from "react";
export default function Page() {
  const [a, setA] = useState("");
  return (
    <>
      <h1>Fetching Data on the Client with Route Handlers</h1>
      <button
        onClick={() =>
          fetch("http://127.0.0.1:3000/myApi/1")
            .then((res) => res.json())
            .then((res) => setA(res.character))
        }
      >
        get Name
      </button>
      <p>{a !== "" && a.name}</p>
    </>
  );
}
