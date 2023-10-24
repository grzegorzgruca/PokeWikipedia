function ShortenedInfo(props) {
  let { textData, pokemonData } = props.data;
  let artImg = pokemonData.sprites.other["official-artwork"]["front_default"];
  let type = pokemonData.types[0].type.name;
  let typeSrc = `./resources/png/pokemonPage/icons/${type}.svg`;
  let color = textData.color.name;

  function capitalFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <article className="shortenedInfo">
      <section className="shortenedInfo__basic">
        <h2 className="shortenedInfo__basic-title">
          {capitalFirstLetter(textData.name)}
        </h2>
        <div className="shortenedInfo__basic-type-container">
          <span className="shortenedInfo__basic-type">
            Type: {capitalFirstLetter(type)}
          </span>
          <img
            className="shortenedInfo__basic-type-icon"
            alt="Pokemon type icon"
            src={typeSrc}
          />
        </div>
        <img
          alt="Orginal pokemon icon"
          className="shortenedInfo__img"
          src={artImg}
        />
      </section>
    </article>
  );
}
export default ShortenedInfo;
