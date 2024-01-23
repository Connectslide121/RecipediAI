import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import Root from "./pages/Root";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/error-page";
import Sidebar from "./components/Sidebar";
import TodaysMenu from "./pages/TodaysMenu";
import Explore from "./pages/Explore";
import Assistant from "./pages/Assistant";
import Favorites from "./pages/Favorites";
import Preferences from "./pages/Preferences";
import AccountSettings from "./pages/AccountSettings";
import Searh from "./pages/Search";
import SearchResult from "./pages/SearchResult";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as todaysMenyLoader } from "./pages/TodaysMenu";
import { action as sidebarAction } from "./components/Sidebar";
import { loader as searchResultLoader } from "./pages/SearchResult";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

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
            path: "daietpedia/todays-menu",
            element: <TodaysMenu />,
            errorElement: <ErrorPage />,
            loader: todaysMenyLoader
          },
          {
            path: "daietpedia/explore",
            element: <Explore />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/search",
            element: <Searh />,
            errorElement: <ErrorPage />
          },
          {
            path: "daietpedia/search-result/:query",
            element: <SearchResult />,
            loader: searchResultLoader,
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
