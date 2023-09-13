import Link from "next/link";
export default function Home() {

  return (
    <>
    {/* multiple rootlayout */}
      <p> 多個root layout</p>
      <h1>Home</h1>
    {/* Linking & Navigating=>pre-fetch */}
      <Link href={"/marketingOne"}>To marketing(會reload)</Link>
      <br />
      <Link prefetch={true} href={"/cart"}>
        To cart
      </Link> <br />
    {/* loading UI */}
      <Link prefetch={true} href={"/loadingUI"}>
      loading UI
      </Link>
    </>
  );
}
