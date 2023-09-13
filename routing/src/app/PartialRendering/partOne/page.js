"use client";
import { useEffect } from "react";

export default function PartOne() {
  useEffect(() => {
    console.log("1");
  }, []);
  return (
    <>
      Part1
    </>
  );
}
