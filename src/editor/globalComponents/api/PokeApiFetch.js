async function pokeApiFetch(pokemonName, type) {
  let data, response;
  switch (type) {
    case "textData":
      response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
      );
      data = await response.json();
      return data;
    case "pokemonData":
      response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      data = await response.json();
      return data;
    default:
      break;
  }
}
export default pokeApiFetch;
