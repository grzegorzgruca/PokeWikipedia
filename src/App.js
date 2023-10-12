import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import PokemonPageData from "./editor/mainPage/PokemonPageData";

function App(params) {
  const data = useLoaderData();
  return <PokemonPageData />;
}

export default App;
