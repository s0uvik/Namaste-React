import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

import About from "./src/pages/About";
import Error from "./src/pages/Error";
import Contact from "./src/pages/Contact";

import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./src/pages/ResturantMenu";

import UserContext from "./src/utils/context";

const Grocery = lazy(() => import("./src/components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("Souvik")
  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}} >
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routing} />);
