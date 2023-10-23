async function PokemonNamesData(params) {
  // const response = await fetch(
  //   "https://pokeapi.co/api/v2/pokemon?limit=2000"
  // ).then((res) => res.json());
  // console.log(response.results[500]);
  let data = {
    mainColor: {
      main: "transparent",
      changed: "#0D1321",
    },
    pokemonColor: {
      main: "#001441",
      changed: "#050e23",
    },
  };
  return data;
}
export default PokemonNamesData;
