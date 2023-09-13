import Link from "next/link";
import Photo from "../../photo";
import photos from "../../photos.js";
export default function PhotoPage({ params: { id } }) {
  const photo = photos.find((p) => p.id === id);
  return (
    <div
      style={{
        height:'90vh',
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Photo photo={photo} />
      <h2>{photo.title}</h2>

      <Link href={'./'}>back to photo</Link>
    </div>
  );
}
