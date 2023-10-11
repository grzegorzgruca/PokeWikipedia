import { Outlet, useLoaderData, useLocation } from "react-router-dom";

function App(params) {
  const data = useLoaderData();
  console.log(useLocation());
  return (
    <>
      <>
        <p>strona główna</p>
        <Outlet />
        {useLocation().pathname}
      </>
    </>
  );
}

export default App;
