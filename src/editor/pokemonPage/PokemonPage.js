import ShortenedInfo from "./shortenedInfo/ShortenedInfo";
import MainInfo from "./shortenedInfo/MainInfo";
import pokeApiFetch from "../globalComponents/api/PokeApiFetch";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StatsTable from "./statsTable/StatsTable";
import LoadingPage from "./LoadingPage";

function PokemonDataPage(props) {
  const [data, setData] = useState();
  const location = useLocation();
  let pokemonPath =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  useEffect(() => {
    Promise.all([
      pokeApiFetch(pokemonPath, "textData"),
      pokeApiFetch(pokemonPath, "pokemonData"),
    ]).then((res) => setData({ textData: res[0], pokemonData: res[1] }));
  }, [location, pokemonPath]);

  return (
    <>
      <main className="main__pokemon">
        {!data ? (
          <LoadingPage />
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
