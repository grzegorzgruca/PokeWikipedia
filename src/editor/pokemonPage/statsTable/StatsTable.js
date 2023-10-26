function StatsTable(props) {
  let { pokemonData } = props.data;
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
            <td className="statsTable__head-cell">
              <p>Value</p>
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
