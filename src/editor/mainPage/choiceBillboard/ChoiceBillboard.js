import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";

function ChoiceBillboard(params) {
  useEffect(() => {
    let scroll = new SmoothScroll('a[href*="#"]');
  });
  return (
    <article className="billboard">
      <h2 className="billboard__title">
        Choose from over a thousands Pokemons!
      </h2>
      <span className="billboard__desc">
        Advanced data for every creature regardless region or publication date.
      </span>

      <a href="#search">
        <img
          className="billboard__icon"
          alt="arrow icon"
          src="./resources/png/mainPage/arrow.png"
        />
      </a>
    </article>
  );
}
export default ChoiceBillboard;
