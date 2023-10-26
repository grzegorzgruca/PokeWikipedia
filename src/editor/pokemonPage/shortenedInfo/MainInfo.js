import { distance } from "fastest-levenshtein";

function MainInfo(props) {
  let { textData, pokemonData } = props.data;
  let type = pokemonData.types[0].type.name;

  function filterArrayBySimilars(arr1, arr2) {
    for (let x = 0; x < arr1.length; x++) {
      let distanceIndex = distance(arr1[x].flavor_text, arr2.flavor_text);
      if (distanceIndex < 95) {
        return false;
      }
      return true;
    }
  }

  return (
    <article className="mainInfo">
      <div className="mainInfo__container">
        <h2 className="mainInfo__title">Pokedex Descriptions</h2>
        {textData.flavor_text_entries.slice(0, 40).map((el, index) => {
          if (
            el.language.name === "en" &&
            el.flavor_text !== textData.flavor_text_entries[0].flavor_text
          ) {
            let isSimilar = filterArrayBySimilars(
              textData.flavor_text_entries.slice(0, 40),
              el
            );
            return (
              isSimilar && (
                <span key={index} className="mainInfo__text">
                  {/\.\s/.test(el.flavor_text)
                    ? el.flavor_text.replace(/\x0C/g, " ")
                    : el.flavor_text.replace(/\x0C/g, " ").replace(/\./g, ". ")}
                </span>
              )
            );
          }
        })}
      </div>
    </article>
  );
}
export default MainInfo;
