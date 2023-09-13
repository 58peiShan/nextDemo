import Image from "next/image";
export default async function Role(props) {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${props.id}`,{cache:'no-cache'});
    const character = await res.json();
  return (
    <>
      {character && (
        <div key={character.id}>
          {character.image && (
            <Image
              src={character.image}
              alt="character's profile"
              width={100}
              height={100}
            />
          )}
        </div>
      )}
    </>
  );
}
