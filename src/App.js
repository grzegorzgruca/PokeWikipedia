import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import PokemonDataHeader from "./editor/globalComponents/header/PokemonDataHeader";
import Footer from "./editor/globalComponents/footer/Footer";
import { useEffect } from "react";

function App(params) {
  return (
    <>
      <PokemonDataHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
