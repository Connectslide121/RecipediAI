import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import title from "../images/title.png";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/daietpedia">
        <img src={logo} alt="logo" className="navbar-image" />
      </NavLink>
      <NavLink to="/daietpedia/home">
        <img src={title} alt="title" className="navbar-image" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="daietpedia/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="daietpedia/about">About</NavLink>
        </li>
        <li>
          <NavLink to="daietpedia/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="daietpedia/login" className="login">
            Login / Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
