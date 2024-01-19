import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import logo from "../images/logo.jpg";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="logo-wrapper">
          <img src={logo} alt="" />
        </div>
        <Link to="/main" className="start-button">
          Get started
        </Link>
      </header>
    </>
  );
}
