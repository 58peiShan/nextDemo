import Link from "next/link";
export default async function Layout({ children }) {
  return (
    <div >
      <div >
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
