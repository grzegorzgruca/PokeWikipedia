import { useEffect, useRef, useState } from "react";
import HeaderLinks from "./PokemonDataHeaderLinks";
import { useLocation, useRouteLoaderData, Link } from "react-router-dom";

function PokemonDataHeader(props) {
  let [isOpen, setIsOpen] = useState(true);
  const ref = useRef();
  const data = useRouteLoaderData("root");
  const location = useLocation();

  const handleBurger = (event, ref, setIsOpen, isOpen) => {
    setIsOpen(!isOpen);
    isOpen
      ? ref.classList.add("header__menu--open")
      : ref.classList.remove("header__menu--open");
  };
  const changeTheme = () => {
    setTheme();
  };
  const setTheme = () => {
    if (window.scrollY > 20) {
      document
        .getElementsByClassName("header")[0]
        .setAttribute(
          "style",
          `background-color: ${
            location.pathname === "/"
              ? data.mainColor.changed
              : data.pokemonColor.changed
          }`
        );
    } else {
      document
        .getElementsByClassName("header")[0]
        .setAttribute(
          "style",
          `background-color: ${
            location.pathname === "/"
              ? data.mainColor.main
              : data.pokemonColor.main
          }`
        );
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", changeTheme);
    return () => {
      document.removeEventListener("scroll", changeTheme);
    };
  });
  useEffect(() => {
    console.log("ffd");
    setTheme();
  }, [setTheme]);

  return (
    <header className="header">
      <div className="header__left-side">
        <img
          className="header__logo"
          alt="logo"
          src=".\resources\png\mainPage\pikachu.png"
        />
        <Link className="header__logo-link" to="/">
          <p>PokeWikipedia</p>
        </Link>
        <HeaderLinks
          handle={handleBurger}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          isPc={false}
          reference={ref}
        />
      </div>

      <div className="header__right-side">
        <HeaderLinks
          handle={handleBurger}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          isPc={true}
        />
        <div
          onClick={(e) => {
            handleBurger(e, ref.current, setIsOpen, isOpen);
          }}
          className="header__burger"
        >
          <span className="header__burder-1 header__burger-el" />
          <span className="header__burder-2 header__burger-el" />
          <span className="header__burder-3 header__burger-el" />
        </div>
      </div>
    </header>
  );
}

export default PokemonDataHeader;
