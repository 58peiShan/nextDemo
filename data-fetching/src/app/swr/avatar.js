'use client'
import Image from "next/image"
import { useUser } from "./useUser"

export default function Avatar({id}) {
    const { user, isError, isLoading } = useUser(id)
    if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>
  return <Image alt="img" width={50} height={50} src={user.character.image} />
}