import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/error-page";
import Sidebar from "./components/Sidebar";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import Favorites from "./pages/Favorites";
import Preferences from "./pages/Preferences";
import AccountSettings from "./pages/AccountSettings";
import Searh from "./pages/Search";
import SearchResult from "./pages/SearchResult";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as MenuLoader } from "./pages/Menu";
import { action as sidebarAction } from "./components/Sidebar";
import { loader as searchResultLoader } from "./pages/SearchResult";
import { action as searchAction } from "./pages/Search";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Nutrition from "./pages/Nutrition";

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
        path: "/",
        element: <Sidebar />,
        errorElement: <ErrorPage />,
        action: sidebarAction,
        children: [
          {
            path: "daietpedia/home",
            element: <Home />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/menu",
            element: <Menu />,
            errorElement: <ErrorPage />,
            loader: MenuLoader
          },
          {
            path: "daietpedia/search",
            element: <Searh />,
            errorElement: <ErrorPage />,
            action: searchAction,
            children: [
              {
                path: "result/:query",
                element: <SearchResult />,
                loader: searchResultLoader,
                errorElement: <ErrorPage />
              }
            ]
          },
          {
            path: "daietpedia/assistant",
            element: <Assistant />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/nutrition",
            element: <Nutrition />,
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
            path: "daietpedia/account",
            element: <AccountSettings />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/about",
            element: <About />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/contact",
            element: <Contact />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/login",
            element: <Login />,
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
