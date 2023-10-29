function PokeApi(params) {
  return (
    <article className="pokeApi">
      <h2 className="pokeApi__title">Created with PokeAPI!</h2>
      <section className="pokeApi__slides-container">
        <PokeApiSlide
          number="1"
          title="Find What You're Looking For"
          desc="Our advanced search system will help you locate any Pokémon you desire. Enter the name or number of the Pokémon, and we will provide you with all available information."
        />
        <PokeApiSlide
          number="2"
          title="Dive Deep into Pokémon Data"
          desc="Whether you're a Pokémon enthusiast or a die-hard Pokémon game fan, our website is your gateway to deeper insights into your beloved Pokémon and tools to excel in your gameplay."
        />
        <PokeApiSlide
          number="3"
          title="Your Trusted Pokémon Resource"
          desc="Count on us as your trusted Pokémon resource, powered by the reliable API. Our website offering accurate information sourced directly from PokeAPI for a seamless search experience"
        />
      </section>
    </article>
  );
}
function PokeApiSlide(props) {
  return (
    <section className="pokeApiSlide__container">
      <div className="pokeApiSlide__top">
        <span className="pokeApiSlide__text">{props.title}</span>
      </div>
      <div className="pokeApiSlide__down">
        <span className="pokeApiSlide__text">{props.desc}</span>
      </div>
      <span className="pokeApiSlide__number">{props.number}</span>
    </section>
  );
}
export default PokeApi;
