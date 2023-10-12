import PokemonDataHeader from "./PokemonDataHeader";
import PokemonDataIntroduction from "./PokemonDataIntroduction";

function PokemonPageData(params) {
  return (
    <div className="container">
      <PokemonDataHeader />
      <PokemonDataIntroduction />
    </div>
  );
}
export default PokemonPageData;
