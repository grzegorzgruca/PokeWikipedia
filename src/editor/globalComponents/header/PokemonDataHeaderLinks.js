import { useState } from "react";
import { Link } from "react-router-dom";
import setFirstCapital from "../globalFunctions/setFirstCapital";

const HeaderLinks = (props) => {
  const [open, setOpen] = useState([false, false, false, false]);
  const pokemonData = [
    {
      category: "Kanto",
      links: ["ivysaur", "venusaur", "charmander", "charmeleon", "charizard"],
    },
    {
      category: "Hoenn",
      links: ["treecko", "grovyle", "sceptile", "torchic", "combusken"],
    },
    {
      category: "Johto",
      links: ["chikorita", "bayleef", "meganium", "cyndaquil", "quilava"],
    },
    {
      category: "Sinnoh",
      links: ["turtwig", "grotle", "torterra", "chimchar"],
    },
    {
      category: "Unova",
      links: ["snivy", "servine", "serperior", "tepig", "pignite"],
    },
  ];

  return (
    <>
      {props.isPc ? (
        <ul className="header__links-elements header__right--pc">
          {pokemonData.map((e, indexCategory) => {
            let last;
            if (indexCategory === pokemonData.length - 1) {
              last = "header__right-list-last";
            }
            return (
              <li key={indexCategory} className="header__right-link-container">
                <div className="header__right-link">{e.category}</div>
                <section className={`header__right-list ${last}`}>
                  {pokemonData[indexCategory].links.map((el, index) => {
                    return (
                      <Link
                        key={index}
                        className={`header__right-list-link`}
                        to={`pokemon/${el}`}
                      >
                        {setFirstCapital(el)}
                      </Link>
                    );
                  })}
                </section>
              </li>
            );
          })}
        </ul>
      ) : (
        <div ref={props.reference} className="header__menu-container">
          <ul className="header__links-elements header__menu">
            {pokemonData.map((el, index) => {
              return (
                <PhoneLinks
                  handle={props.handle}
                  setIsOpen={props.setIsOpen}
                  isOpen={props.isOpen}
                  reference={props.reference}
                  key={index}
                  links={el.links}
                  number={index}
                  setOpen={setOpen}
                  open={open}
                  category={el.category}
                />
              );
            })}
          </ul>
          <button
            type="button"
            onClick={(e) => {
              props.handle(
                e,
                props.reference.current,
                props.setIsOpen,
                props.isOpen
              );
            }}
            className="header__menu-btn"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

function PhoneLinks(props) {
  let openArray = new Array(3);
  openArray = openArray.fill(false);
  openArray[props.number] = true;
  return (
    <>
      <section className="header__menu-section-container">
        <div
          onClick={() => {
            props.setOpen(openArray);
          }}
          className="header__menu-title-container"
        >
          <p className="header__menu-upper">{props.category}</p>
        </div>
        {props.open[props.number] ? (
          <>
            {props.links.map((e, index) => {
              return (
                <li
                  onClick={() => {
                    props.setOpen([0, 0, 0, 0]);
                    props.handle(
                      e,
                      props.reference.current,
                      props.setIsOpen,
                      props.isOpen
                    );
                  }}
                  key={index}
                  className="header__menu-link-container"
                >
                  <Link
                    key={index}
                    className="header__menu-link-component"
                    to={`pokemon/${props.links[index]}`}
                  >
                    {setFirstCapital(props.links[index])}
                  </Link>
                </li>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default HeaderLinks;
