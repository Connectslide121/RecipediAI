import React from "react";
import Header from "../components/Header";
import "../styles/homeStyles.css";
import AIssistant from "../images/AIssistant.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <Header />
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
        <Link to="" className="grid-item grid-item-3 grid-item--2x1">
          3
        </Link>
        <Link to="" className="grid-item grid-item-4 grid-item--1x2">
          4
        </Link>
        <Link to="" className="grid-item grid-item-5">
          5
        </Link>
        <Link to="" className="grid-item grid-item-6 grid-item--1x2">
          6
        </Link>
        <Link to="" className="grid-item grid-item-7">
          7
        </Link>
        <Link to="" className="grid-item grid-item-8">
          8
        </Link>
        <Link to="" className="grid-item grid-item-9 grid-item--1x2">
          9
        </Link>
        <Link to="" className="grid-item grid-item-10">
          10
        </Link>
        <Link to="" className="grid-item  grid-item-11 grid-item--2x1">
          11
        </Link>
        <Link to="" className="grid-item grid-item-12">
          12
        </Link>
      </div>
    </section>
  );
}
