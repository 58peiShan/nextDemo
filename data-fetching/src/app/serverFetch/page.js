export default async function Page() {
  // On the server, with fetch
  const data = await fetch("https://rickandmortyapi.com/api/character").then(
    (res) => res.json()
  );
  const character = await data.results;
  return (
    <main>
      <h1>Fetching Data on the Server with fetch</h1>
      {character.map((c) => (
        <div key={c.id}>{c.name}</div>
      ))}
    </main>
  );
}
