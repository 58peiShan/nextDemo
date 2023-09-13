import Image from "next/image"
export default async function Photo({photo}) {
    return(
        await photo&&<Image width={255} height={265} src={photo.src} alt="photo"/>
    )
}