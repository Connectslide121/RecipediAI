import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function RecipeRecommendation(props) {
  let path;

  if (props.bmiClass === "Underweight") {
    path = "/daietpedia/search/result/&diet=high-protein";
  } else if (props.bmiClass === "Normal") {
    path = "/daietpedia/search/result/&diet=balanced";
  } else if (props.bmiClass === "Overweight") {
    path = "/daietpedia/search/result/&diet=low-fat";
  } else if (props.bmiClass === "Obese Class 1") {
    path = "/daietpedia/search/result/&diet=low-fat";
  } else if (props.bmiClass === "Obese Class 2") {
    path = "/daietpedia/search/result/&diet=low-fat";
  } else if (props.bmiClass === "Morbid Obesity") {
    path = "/daietpedia/search/result/&diet=low-fat";
  }

  return (
    <Link to={path} className="recipe-recommendation-button">
      <span>
        <FontAwesomeIcon icon={faHeartPulse} />
      </span>
      Recipes
    </Link>
  );
}
