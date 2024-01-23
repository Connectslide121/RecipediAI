import React from "react";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  redirect,
  useNavigation
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faUser,
  faUtensils,
  faEarthAmericas,
  faStar,
  faAsterisk,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebarStyles.css";

export async function action({ request }) {
  const formData = await request.formData();
  const query = Object.fromEntries(formData);
  return redirect(`daietpedia/search-result/${query.query}`);
}

export default function Sidebar() {
  const navigation = useNavigation();
  return (
    <>
      <section className="main-content-container">
        <div
          className={
            navigation.state === "loading" ? "loading sidebar" : "sidebar"
          }
        >
          <Form method="post">
            <input name="query" type="text" placeholder="Quick search" />
          </Form>
          <ul>
            <li>
              <NavLink to="daietpedia/todays-menu">
                <span>
                  <FontAwesomeIcon icon={faUtensils} />
                </span>
                <p>Today's menu</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="daietpedia/explore">
                <span>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </span>
                <p>Explore</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="daietpedia/search">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
                </span>
                <p>Search</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="daietpedia/assistant">
                <span>
                  <FontAwesomeIcon icon={faRobot} />
                </span>
                <p className="beta">dAIet assistant</p>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="daietpedia/favorites">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <p>Favorites</p>
              </NavLink>
              <NavLink to="daietpedia/preferences">
                <span>
                  <FontAwesomeIcon icon={faAsterisk} />
                </span>
                <p>Preferences</p>
              </NavLink>
            </li>
            <li>
              <Link to="daietpedia/account-settings">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <p>Account settings</p>
              </Link>
            </li>
          </ul>
          <h5>
            Recipes by{" "}
            <span>
              <a href="https://www.edamam.com/" target="blank">
                Edamam API
              </a>
            </span>
          </h5>
        </div>
        <main
          className={
            navigation.state === "loading"
              ? "loading main-container"
              : "main-container"
          }
        >
          <Outlet />
        </main>
      </section>
    </>
  );
}
