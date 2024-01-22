import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import title from "../images/title.png";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="">
        <img src={logo} alt="logo" className="navbar-image" />
      </NavLink>
      <NavLink to="">
        <img src={title} alt="title" className="navbar-image" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="daietpedia/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="daietpedia/home">About</NavLink>
        </li>
        <li>
          <NavLink to="daietpedia/home">Contact</NavLink>
        </li>
        <li>
          <NavLink to="daietpedia/home" className="login">
            Login / Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
