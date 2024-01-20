import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles.css";
import Root from "./pages/Root";
import Start from "./pages/Start";
import Home from "./pages/Home";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "daietpedia/",
        element: <Start />,
        errorElement: <ErrorPage />
      },
      {
        path: "daietpedia/home",
        element: <Home />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
