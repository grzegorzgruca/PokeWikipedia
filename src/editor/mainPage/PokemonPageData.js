import PokemonDataHeader from "./header/PokemonDataHeader";
import PokemonMain from "./mainContent/PokemonMain";
import IconSlides from "./iconSlides/IconSlides";
import ChoiceBillboard from "./choiceBillboard/ChoiceBillboard";
import Preview from "./preview/Preview";
import AskForm from "./askForm/AskForm";

function PokemonPageData(params) {
  return (
    <div>
      <div className="background">
        <PokemonDataHeader />
        <PokemonMain />
      </div>
      <IconSlides />
      <ChoiceBillboard />
      <Preview />
      <AskForm />
    </div>
  );
}
export default PokemonPageData;
