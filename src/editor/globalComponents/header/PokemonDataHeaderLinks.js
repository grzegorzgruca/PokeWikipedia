import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderLinks = (props) => {
  const [open, setOpen] = useState([false, false, false, false]);

  return (
    <>
      {props.isPc ? (
        <ul className="header__links-elements header__right--pc">
          <li className="header__right-link-container">
            <div className="header__right-link">Starting Pokemons</div>
            <section className="header__right-list">
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
            </section>
          </li>
          <li className="header__right-link-container">
            <div className="header__right-link">Most Popular</div>
            <section className="header__right-list">
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
            </section>
          </li>
          <li className="header__right-link-container">
            <div className="header__right-link">Legendaries</div>
            <section className="header__right-list">
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
            </section>{" "}
          </li>
          <li className="header__right-link-container">
            <div className="header__right-link">Starting Pokemons</div>
            <section className="header__right-list">
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
            </section>
          </li>
          <li className="header__right-link-container">
            <div className="header__right-link">Starting Pokemons</div>
            <section className="header__right-list header__right-list-last">
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
              <Link className="header__right-list-link" to={`pokemon/pikatchu`}>
                Pikatchu
              </Link>
            </section>
          </li>
        </ul>
      ) : (
        <div ref={props.reference} className="header__menu-container">
          <ul className="header__links-elements header__menu">
            <li className="header__menu-link">
              <PhoneLinks number={0} setOpen={setOpen} open={open} />
            </li>
            <li className="header__menu-link">
              <PhoneLinks number={1} setOpen={setOpen} open={open} />
            </li>
            <li className="header__menu-link">
              <PhoneLinks number={2} setOpen={setOpen} open={open} />
            </li>
            <li className="header__menu-link">
              <PhoneLinks number={3} setOpen={setOpen} open={open} />
            </li>
            <li className="header__menu-link">
              <PhoneLinks number={4} setOpen={setOpen} open={open} />
            </li>
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
          <p className="header__menu-upper">Starting Pokemons</p>
        </div>
        {props.open[props.number] ? (
          <>
            <Link
              className="header__menu-link-component"
              to={`pokemon/pikatchu`}
            >
              Pikatchu
            </Link>
            <Link
              className="header__menu-link-component"
              to={`pokemon/pikatchu`}
            >
              Pikatchu
            </Link>
            <Link
              className="header__menu-link-component"
              to={`pokemon/pikatchu`}
            >
              Pikatchu
            </Link>
            <Link
              className="header__menu-link-component"
              to={`pokemon/pikatchu`}
            >
              Pikatchu
            </Link>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default HeaderLinks;
