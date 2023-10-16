import PokemonDataHeader from "./header/PokemonDataHeader";
import PokemonMain from "./mainContent/PokemonMain";
import IconSlides from "./iconSlides/IconSlides";

function PokemonPageData(params) {
  return (
    <div className="container">
      <PokemonDataHeader />
      <PokemonMain />
      <IconSlides />
    </div>
  );
}
export default PokemonPageData;
