import { useEffect, useRef, useState } from "react";
import HeaderLinks from "./PokemonDataHeaderLinks";

function PokemonDataHeader(params) {
  let [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const handleBurger = (event, ref, setIsOpen, isOpen) => {
    setIsOpen(!isOpen);
    isOpen
      ? ref.classList.add("header__menu--open")
      : ref.classList.remove("header__menu--open");
  };

  return (
    <header className="header">
      <div className="header__left-side">
        <img
          className="header__logo"
          alt="logo"
          src="./pikatchu.png"
          height="auto"
          width="30px"
        />
        <p>PokeWikipedia</p>
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
