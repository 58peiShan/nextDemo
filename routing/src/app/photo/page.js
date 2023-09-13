import Image from "next/image";
import Link from "next/link.js";
import photos from "../photos.js";
export default function Page() {
  return (
      <ul style={{ textAlign: "center",paddingBottom:'50px' }}>
        {photos.map(({ id, src }) => {
          return (
            <Link key={id} href={"./photo/" + id}>
              <Image width={130} height={130} src={src} alt="img" />
            </Link>
          );
        })}
      </ul>
  );
}
