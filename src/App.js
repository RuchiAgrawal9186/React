import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import ErrorPage from "./Components/ErrorPage";
import RestaurentDetailsPage from "./Components/RestaurentDetailsPage";

// React element = object => when we render its to DOM then its become html

// JSX - we can write react without JSX

// react functional components

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurentDetailsPage/>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
