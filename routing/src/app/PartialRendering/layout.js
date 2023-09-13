"use client";
import Link from "next/link";
import styles from "../page.module.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Layout(props) {
  useEffect(() => {
    console.log("render");
  }, []);
  const pathname = usePathname()
  const isAuth = false
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <p>
          <Link href={"./"}>Back</Link>
        </p>
        <h1>Partial Rendering</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link
          href={"/PartialRendering/partOne"}
          className={
            pathname === "/PartialRendering/partOne"
              ? "text-pink"
              : "text-black"
          }
        >
          partOne
        </Link>
        <br />
        <Link
          href={"/PartialRendering/partTwo"}
          className={
            pathname === "/PartialRendering/partTwo"
              ? "text-pink"
              : "text-black"
          }
        >
          partTwo
        </Link>
        <hr style={{width:"100vw"}}/>
        {isAuth===true?props.ErrorOne:props.ErrorTwo}
        
      </div>
    </div>
  );
}
