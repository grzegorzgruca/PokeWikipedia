import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editor from "./editor/editor";
import NotFound from "./editor/404/notFound";

function data() {
  return { 2: 4 };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "pokemon/:pokemonID",
        element: <Contact />,
      },
    ],
    loader: data,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);

function Error() {
  return (
    <>
      <p>ERROR 404 NIE DZIALA</p>
    </>
  );
}
function Contact() {
  return (
    <>
      <p>PIKATCHU</p>
    </>
  );
}
