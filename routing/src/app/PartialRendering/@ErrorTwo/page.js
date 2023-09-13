// 'use client'
// import { useEffect } from "react";
export default function ErrorTwo() {
  // console.log(2);
  // useEffect(()=>{
    console.log(new Date().getMinutes());
    if (new Date().getMinutes()%2!==0) {
      throw new Error('w')
    }

  // },[])
  return <>ErrorTwo</>;
}
