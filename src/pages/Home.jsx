import React from "react";
import "../styles/homeStyles.css";
import AIssistant from "../images/AIssistant.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section>
      <div className="grid-container">
        <Link
          to="/daietpedia/assistant"
          className="grid-item grid-item--2x2 grid-item-1"
        >
          <img src={AIssistant} alt="" />
          <div>
            <h2>
              TRY OUR NEW D<span>AI</span>ET ASSISTANT
            </h2>
            <h1>Food And Nutrition Assistant Chatbot leveraging OpenAI</h1>
            <h5>by Edamam</h5>
          </div>
        </Link>
        <Link
          to="/daietpedia/search/result/&cuisineType=asian"
          className="grid-item grid-item-2"
        >
          <h2>
            A TASTE OF <span>ASIA</span>
          </h2>
        </Link>
        <Link
          to="/daietpedia/search/result/&dishType=alcohol%20cocktail"
          className="grid-item grid-item-3 grid-item--2x1"
        >
          <h2>
            PARTY <span>NIGHT</span>
          </h2>
        </Link>
        <Link
          to="/daietpedia/search/result/&dishType=drinks&health=alcohol-free"
          className="grid-item grid-item-4 grid-item--1x2"
        >
          <h2>
            ALCOHOL-FREE <span>DRINKS</span>
          </h2>
        </Link>
        <Link to="/daietpedia/search" className="grid-item grid-item-5">
          <h2>
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            SEARCH
          </h2>
          <h5> Use our advanced search tools to find exactly what you want</h5>
        </Link>
        <Link
          to="/daietpedia/search/result/&dishType=biscuits%20and%20cookies"
          className="grid-item grid-item-6 grid-item--1x2"
        >
          <h2>
            <span>SWEETEN</span> YOUR DAY
          </h2>
        </Link>
        <Link
          to="/daietpedia/search/result/&health=vegan"
          className="grid-item grid-item-7"
        >
          <h2>
            ARE YOU <span>VEGAN</span>?
          </h2>
        </Link>
        <Link
          to="/daietpedia/search/result/q=pizza"
          className="grid-item grid-item-8"
        >
          <h2>
            WANT SOME <span>PIZZA</span>?
          </h2>
        </Link>
        <Link
          to="/daietpedia/search/result/q=paella"
          className="grid-item grid-item-9 grid-item--1x2"
        >
          <h2>
            HOW ABOUT A <span>PAELLA</span>?
          </h2>
        </Link>
        <Link
          to="/daietpedia/search/result/&dishType=sandwiches"
          className="grid-item grid-item-10"
        >
          <h2>
            ON THE <span>GO</span>
          </h2>
        </Link>
        <Link
          to="/daietpedia/nutrition"
          className="grid-item  grid-item-11 grid-item--2x1"
        >
          <h2>
            <span>
              <FontAwesomeIcon icon={faHeartPulse} />
            </span>
            NUTRITION
          </h2>
          <h5>
            Use our nutrition calculator and learn about your current physical
            state
          </h5>
        </Link>
        <Link
          to="/daietpedia/search/result/q=party%20cake"
          className="grid-item grid-item-12"
        >
          <h2>
            PARTY <span>CAKE</span>
          </h2>
        </Link>
      </div>
    </section>
  );
}
