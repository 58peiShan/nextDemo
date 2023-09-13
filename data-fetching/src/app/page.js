import Link from "next/link";
export default function Home() {
  return (
    <>
      <div>
        <Link href={"./serverFetch"}>
          Fetching Data on the Server with fetch
        </Link>
      </div>
      <div>
        <Link href={"./server3rdParty"}>
          Fetching data on the Server with third-party libraries
        </Link>
      </div>
      <div>
        <Link href={"./RouteHandlers"}>
        Fetching Data on the Client with Route Handlers
        </Link>
      </div>
      <div>
        <Link href={"./swr"}>
        SWR
        </Link>
      </div>
    </>
  );
}
