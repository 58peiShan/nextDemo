import Link from "next/link";
import styles from "../page.module.css";
export default function Layout(props) {
  //並行路由+攔截路由
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <p>
          <Link href={"./"}>Back</Link>
        </p>
        <h1>Parallel Routes & Intercepting Routes</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        {props.modal}
        {props.children}
      </div>
    </div>
  );
}
