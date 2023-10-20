import { Link } from "react-router-dom";

const HeaderLinks = (props) => {
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
              <details className="header__menu-details">
                <summary className="header__menu-summary">
                  <p className="header__menu-upper">Starting Pokemons</p>
                </summary>
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
              </details>
            </li>
            <li className="header__menu-link">
              <details className="header__menu-details">
                <summary className="header__menu-summary">
                  <p className="header__menu-upper">Starting Pokemons</p>
                </summary>
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
              </details>
            </li>
            <li className="header__menu-link">
              <details className="header__menu-details">
                <summary className="header__menu-summary">
                  <p className="header__menu-upper">Starting Pokemons</p>
                </summary>
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
              </details>
            </li>
            <li className="header__menu-link">
              <details className="header__menu-details">
                <summary className="header__menu-summary">
                  <p className="header__menu-upper">Starting Pokemons</p>
                </summary>
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
              </details>
            </li>
            <li className="header__menu-link">
              <details className="header__menu-details">
                <summary className="header__menu-summary">
                  <p className="header__menu-upper">Starting Pokemons</p>
                </summary>
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
              </details>
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

export default HeaderLinks;
