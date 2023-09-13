import Link from "next/link";
import styles from "../page.module.css";
export default async function Layout({ children }) {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <p>
          <Link href={"./"}>Back</Link>
        </p>
        <h1>Loading UI and Streaming</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        {children}
        </div>
    </div>
  );
}
