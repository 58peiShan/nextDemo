
async function getCharacterList(species){
  const data = species
  const res = await fetch(`https://rickandmortyapi.com/api/character/?species=${data}&length=5`,{cache:'no-cache'}).then((res) => res.json());
  return  res.results;
}
async function Species() {
  const character = await getCharacterList('Human')
  return (<>
    <div style={{ textAlign: "center" }}>
    {character.map((character) => (
      <div key={character.id}>
        <h3 style={{ margin: "5px" }}>
            {character.name} 
        </h3>
      </div>
    ))}
  </div>
  </>
  );
}
export default Species