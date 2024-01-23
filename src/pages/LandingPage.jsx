import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import title from "../images/title.png";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpeg";
import food6 from "../images/food6.webp";
import food7 from "../images/food7.jpg";
import food8 from "../images/food8.webp";
import food9 from "../images/food9.jpg";
import food10 from "../images/food10.webp";
import food11 from "../images/food11.webp";
import food12 from "../images/food12.jpg";
import "../styles/landingPageStyles.css";

export default function LandingPage() {
  return (
    <>
      <section className="start-container">
        <div className="start-left">
          <header>
            <img className="start-logo" src={logo} alt="" />
            <img className="start-title" src={title} alt="" />{" "}
          </header>
          <div>
            <p>
              Recipes tailored to your preferences. Simply tell our AIssistant
              what you need.
            </p>

            <Link to="./home" className="start-button">
              Get started
            </Link>
            <h5>
              Recipes by{" "}
              <span>
                <a href="https://www.edamam.com/" target="blank">
                  Edamam API
                </a>
              </span>
            </h5>
          </div>
        </div>
        <div className="start-right">
          <div className="top">
            <img src={food1} alt="food" />
            <img src={food2} alt="food" />
            <img src={food3} alt="food" />
            <img src={food4} alt="food" />
            <img src={food6} alt="food" />
            <img src={food5} alt="food" />
          </div>
          <div className="bottom">
            <img src={food7} alt="food" />
            <img src={food8} alt="food" />
            <img src={food9} alt="food" />
            <img src={food10} alt="food" />
            <img src={food11} alt="food" />
            <img src={food12} alt="food" />
          </div>
        </div>
      </section>
    </>
  );
}
