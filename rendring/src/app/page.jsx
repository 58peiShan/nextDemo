import UcantC from "./_private/page";
import Link from "next/link";
export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>next rendring demo</h1>
      <div>
        <Link href={"./CSR"}>CSR</Link>
      </div>
      <div>
        <Link href={"./SSR"}>SSR</Link>
      </div>
      <div>
        <Link href={"./SSG"}>SSG</Link>
      </div>

      <p>--app router--</p>
      <div>
        <Link href={"./SRendring"}>Static rendring</Link>
      </div>
      <div>
        <Link href={"./DRendring"}>Dynamic rendring</Link>
      </div>
      {/* <UcantC/> */}
    </div>
  );
}
