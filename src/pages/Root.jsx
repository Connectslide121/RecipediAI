import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import title from "../images/title.png";

export default function Root() {
  return (
    <div className="container">
      <nav>
        <img src={logo} alt="logo" />
        <img src={title} alt="title" />
        <ul>
          <li>
            <Link to="daietpedia/home">Home</Link>
          </li>
          <li>
            <Link to="daietpedia/home">About</Link>
          </li>
          <li>
            <Link to="daietpedia/home">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <p>Copyright &copy; 2024 Jon Mendizabal</p>
      </footer>
    </div>
  );
}
