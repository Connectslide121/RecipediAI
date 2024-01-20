import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles.css";
import Root from "./pages/Root";
import Start from "./pages/Start";
import ErrorPage from "./error-page";
import Sidebar from "./pages/Sidebar";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "daietpedia/",
        element: <Start />,
        errorElement: <ErrorPage />
      },
      {
        element: <Sidebar />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "daietpedia/home",
            element: "",
            errorElement: <ErrorPage />
          }
        ]
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
