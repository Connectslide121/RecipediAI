import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faKitchenSet,
  faFlag,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import "../styles/recipeCardStyles.css";

export default function RecipeCard(props) {
  return (
    props.Recipe && (
      <div className="recipe-card">
        <div className="recipe-card-image">
          <img src={props.Recipe.image} alt="recipe" />
        </div>
        <div className="recipe-card-info">
          <div className="recipe-card-info-left">
            <h3>{props.Recipe.label}</h3>
            <p>
              <FontAwesomeIcon className="recipe-card-icon" icon={faFlag} />
              {props.Recipe.cuisineType
                .map(
                  (cuisine) => cuisine[0].toUpperCase() + cuisine.substring(1)
                )
                .join(", ")}
            </p>
            {props.Recipe.totalTime !== 0 && (
              <p>
                <FontAwesomeIcon className="recipe-card-icon" icon={faClock} />
                {props.Recipe.totalTime} mins
              </p>
            )}
            <p>
              <FontAwesomeIcon className="recipe-card-icon" icon={faUsers} />
              {props.Recipe.yield}
            </p>
            <a href={props.Recipe.url} target="_blank" rel="noreferrer">
              <span>
                <FontAwesomeIcon icon={faKitchenSet} />
              </span>
              Recipe
            </a>
          </div>
          <div className="recipe-card-info-middle">
            {props.Recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
          <div className="recipe-card-info-right">
            {props.Recipe.healthLabels.map((label, index) => (
              <p key={index}>{label}</p>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
