import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./editor/errors/ErrorPage";
import PokemonNamesData from "./editor/api/PokemonNamesData";
import PokemonPageData from "./editor/mainPage/PokemonPageData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pokemon/:pokemonID",
        element: <PokemonPageData />,
      },
    ],
    loader: PokemonNamesData,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
