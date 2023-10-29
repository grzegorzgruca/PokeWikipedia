function Preview(params) {
  return (
    <article className="preview">
      <img
        alt="preview screen"
        src=".\resources\png\screen.png"
        className="preview__img"
      ></img>
      <section className="preview__text-container">
        <h2 className="preview__title">Find every pokemon!</h2>
        <p className="preview__description">
          Our website serves as your ideal companion in your Pokémon journey. We
          understand that knowledge is power, and that's why we've harnessed the
          power of PokeAPI to offer you the most up-to-date and reliable data on
          all Pokémon species. With a vast database at your fingertips, you can
          search for any Pokémon by name and instantly access details about
          their abilities, stats and more.
        </p>
      </section>
    </article>
  );
}
export default Preview;
