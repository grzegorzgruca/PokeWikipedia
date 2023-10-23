import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./editor/errors/ErrorPage";
import PokemonNamesData from "./editor/api/PokemonNamesData";
import PokemonPage from "./editor/pokemonPage/PokemonPage";
import PokemonPageData from "./editor/mainPage/PokemonPageData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <PokemonPageData /> },
      {
        path: "pokemon/:pokemonID",
        element: <PokemonPage />,
        loader: PokemonNamesData,
      },
    ],
    loader: () => PokemonNamesData(),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
