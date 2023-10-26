function StatsTable(props) {
  let { textData, pokemonData } = props.data;
  let artImg = pokemonData.sprites.other["official-artwork"]["front_default"];
  let type = pokemonData.types[0].type.name;
  let typeSrc = `./resources/png/pokemonPage/icons/${type}.svg`;
  let color = textData.color.name;
  console.log(pokemonData);
  function capitalFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <article className="statsTable-container">
      <table cellSpacing="0" className="statsTable">
        <thead className="statsTable__head">
          <tr className="statsTable__head-row">
            <td className="statsTable__head-cell">
              <p>Type</p>
            </td>
            <td>
              <p>Number</p>
            </td>
          </tr>
        </thead>
        <tbody className="statsTable__body">
          {pokemonData.stats.map((el, index) => {
            return (
              <tr className="statsTable__row" key={index}>
                <td className="statsTable__cell">
                  <span className="statsTable__text">
                    {capitalFirstLetter(el.stat.name)}
                  </span>
                </td>
                <td className="statsTable__cell">
                  <span>{el.base_stat}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
}

export default StatsTable;
