import IconSlide from "./IconSlide";
function IconSlides(props) {
  const imgSrc = {
    attack: "./resources/png/mainPage/slideCards/attackSlide.png",
    abilities: "./resources/png/mainPage/slideCards/sprites.png",
    sprites: "./resources/png/mainPage/slideCards/abilities.png",
  };
  return (
    <article className="iconSlides">
      <h2 className="iconSlides__title">Features</h2>
      <div className="iconSlides__container">
        <IconSlide
          title="Attacks"
          desc="Detailed list of damage, HP and others"
          imgSrc={imgSrc.attack}
        />
        <IconSlide
          title="Abilities"
          desc="Specialized for each Pokémon"
          imgSrc={imgSrc.abilities}
        />
        <IconSlide
          title="Sprites"
          desc="Gallery of sprites from different game versions"
          imgSrc={imgSrc.sprites}
        />
      </div>
    </article>
  );
}
export default IconSlides;
