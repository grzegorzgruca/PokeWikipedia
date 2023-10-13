import PokemonDataHeader from "./header/PokemonDataHeader";
import PokemonMain from "./mainContent/PokemonMain";

function PokemonPageData(params) {
  return (
    <div className="container">
      <PokemonDataHeader />
      <PokemonMain />
    </div>
  );
}
export default PokemonPageData;
