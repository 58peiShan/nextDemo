import Link from "next/link";
import styles from "../page.module.css";
export default function Layout({children}) {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <p>
          <Link href={"./"}>Back</Link>
        </p>
        <h1>Route Handlers</h1>
      </div>
      <div style={{ textAlign: "center" }}>
      {children}
      </div>
    </div>
  );
}
