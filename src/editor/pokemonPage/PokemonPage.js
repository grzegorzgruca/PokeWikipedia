import ShortenedInfo from "./shortenedInfo/ShortenedInfo";
import MainInfo from "./shortenedInfo/MainInfo";
import LoadingData from "./loadingData/LoadingData";
import pokeApiFetch from "../api/PokeApiFetch";
import { useEffect, useState } from "react";
import StatsTable from "./statsTable/StatsTable";

function PokemonDataPage(props) {
  const [data, setData] = useState();
  useEffect(() => {
    Promise.all([
      pokeApiFetch("pikachu", "textData"),
      pokeApiFetch("pikachu", "pokemonData"),
    ]).then((res) => setData({ textData: res[0], pokemonData: res[1] }));
  }, []);

  return (
    <>
      <main>
        {!data ? (
          <LoadingData />
        ) : (
          <>
            <ShortenedInfo data={data} />
            <MainInfo data={data} />
            <StatsTable data={data} />
          </>
        )}
      </main>
    </>
  );
}
export default PokemonDataPage;
