import React from "react";
import { Form, Link, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faUser,
  faUtensils,
  faEarthAmericas,
  faStar,
  faAsterisk
} from "@fortawesome/free-solid-svg-icons";
export default function Sidebar() {
  return (
    <>
      <div className="main-content-container">
        <div className="sidebar">
          <Form>
            <input type="text" placeholder="Search recipes" />
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
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
