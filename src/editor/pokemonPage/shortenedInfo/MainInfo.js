function MainInfo(props) {
  let { textData, pokemonData } = props.data;
  let artImg = pokemonData.sprites.other["official-artwork"]["front_default"];
  let type = pokemonData.types[0].type.name;
  let typeSrc = `./resources/png/pokemonPage/icons/${type}.svg`;
  let color = textData.color.name;
  console.log(textData);
  return (
    <article className="mainInfo">
      <div className="shortenedInfo__basic-text">
        {textData.flavor_text_entries.slice(0, 40).map((el, index) => {
          if (
            el.language.name === "en" &&
            el.flavor_text !==
              textData.flavor_text_entries[index + 1].flavor_text
          ) {
            return (
              <span className="">{el.flavor_text.replace(/\x0C/g, " ")}</span>
            );
          }
        })}
      </div>
      <div className="shortenedInfo__basic-text">
        {pokemonData.stats.map((el, index) => {
          return (
            <>
              <p>Type: {el.stat.name}</p>
              <p>Number: {el.base_stat}</p>
            </>
          );
        })}
      </div>
    </article>
  );
}
export default MainInfo;
