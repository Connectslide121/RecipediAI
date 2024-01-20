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

export default function Start() {
  return (
    <>
      <section className="home-container">
        <div className="home-left">
          <header>
            <img className="home-logo" src={logo} alt="" />
            <img className="home-title" src={title} alt="" />{" "}
          </header>
          <div>
            <p>
              Explore a variety of recipes by indicating your preferred
              ingredients, cuisine, and more.
              <br />
              Dealing with allergies? Planning a special dinner? Pregnant?{" "}
              <br />
              Tailor your culinary experience with our unique recipe platform.
              Simply let our AI know your preferences, and unlock a world of
              personalized recipes designed just for you.
            </p>
            <Link to="./home">Get started</Link>
          </div>
        </div>
        <div className="home-right">
          <div className="top">
            <img src={food1} alt="food" />
            <img src={food2} alt="food" />
            <img src={food3} alt="food" />
            <img src={food4} alt="food" />
            <img src={food5} alt="food" />
            <img src={food6} alt="food" />
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
