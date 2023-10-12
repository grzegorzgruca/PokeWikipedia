const HeaderLinks = (props) => {
  return (
    <>
      {props.isPc ? (
        <ul className="header__links-elements header__right--pc">
          <li className="header__right-link">Starting Pokemons</li>
          <li className="header__right-link">Icons</li>
          <li className="header__right-link">Home</li>
          <li className="header__right-link">Home</li>
          <li className="header__right-link">Home</li>
        </ul>
      ) : (
        <div ref={props.reference} className="header__menu-container">
          <ul className="header__links-elements header__menu">
            <li className="header__menu-link">Starting Pokemons</li>
            <li className="header__menu-link">Icons</li>
            <li className="header__menu-link">Home</li>
            <li className="header__menu-link">Home</li>
            <li className="header__menu-link">Home</li>
          </ul>
          <button
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
