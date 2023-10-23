import PokemonDataHeader from "../globalComponents/header/PokemonDataHeader";
import PokemonMain from "./mainContent/PokemonMain";
import IconSlides from "./iconSlides/IconSlides";
import ChoiceBillboard from "./choiceBillboard/ChoiceBillboard";
import Preview from "./preview/Preview";
import AskForm from "./askForm/AskForm";
import PokeApi from "./pokeAPI/PokeApi";
import Footer from "../globalComponents/footer/Footer";

function PokemonPageData(params) {
  return (
    <div>
      <div className="background">
        <PokemonMain />
      </div>

      <IconSlides />
      <ChoiceBillboard />
      <Preview />
      <AskForm />
      <PokeApi />
    </div>
  );
}
export default PokemonPageData;
