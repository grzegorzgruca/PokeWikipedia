function PokeApi(params) {
  return (
    <article className="pokeApi">
      <h2 className="pokeApi__title">Created by PokeAPI!</h2>
      <section className="pokeApi__slides-container">
        <PokeApiSlide
          number="1"
          title="lorem"
          desc="loreml oremlore mlorem lsssssss ssssssssssss sssssssssssss ssssss ssssor emlor emlorem"
        />
        <PokeApiSlide
          number="2"
          title="lorem"
          desc="loreml oremlore mlorem lsssssss ssssssssssss sssssssssssss ssssss ssssor emlor emlorem"
        />
        <PokeApiSlide
          number="3"
          title="lorem"
          desc="loreml oremlore mlorem lsssssss ssssssssssss sssssssssssss ssssss ssssor emlor emlorem"
        />
      </section>
    </article>
  );
}
function PokeApiSlide(props) {
  return (
    <section className="pokeApiSlide__container">
      <div className="pokeApiSlide__top">
        <span>{props.title}</span>
      </div>
      <div className="pokeApiSlide__down">
        <span>{props.desc}</span>
      </div>
      <span className="pokeApiSlide__number">{props.number}</span>
    </section>
  );
}
export default PokeApi;
