import { distance } from "fastest-levenshtein";

function MainInfo(props) {
  let { textData, pokemonData } = props.data;
  let type = pokemonData.types[0].type.name;

  return (
    <article className="mainInfo">
      <div className="mainInfo__container">
        <h2 className="mainInfo__title">Pokedex Descriptions</h2>
        {textData.flavor_text_entries.slice(0, 2).map((el, index) => {
          if (
            el.language.name === "en" &&
            el.flavor_text !==
              textData.flavor_text_entries[index + 1].flavor_text
          ) {
            return (
              <span key={index} className="mainInfo__text">
                {/\.\s/.test(el.flavor_text)
                  ? el.flavor_text.replace(/\x0C/g, " ").replace("é", "É")
                  : el.flavor_text
                      .replace(/\x0C/g, " ")
                      .replace(/\./g, ". ")
                      .replace("é", "É")}
              </span>
            );
          }
        })}
      </div>
    </article>
  );
}
export default MainInfo;
