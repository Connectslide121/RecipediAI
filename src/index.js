import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles.css";
import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./error-page";
import Sidebar from "./components/Sidebar";
import TodaysMenu from "./pages/TodaysMenu";
import Explore from "./pages/Explore";
import Assistant from "./pages/Assistant";
import Favorites from "./pages/Favorites";
import Preferences from "./pages/Preferences";
import AccountSettings from "./pages/AccountSettings";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "daietpedia/",
        element: <LandingPage />,
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
          },
          {
            path: "daietpedia/todays-menu",
            element: <TodaysMenu />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/explore",
            element: <Explore />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/assistant",
            element: <Assistant />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/favorites",
            element: <Favorites />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/preferences",
            element: <Preferences />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/account-settings",
            element: <AccountSettings />,
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
