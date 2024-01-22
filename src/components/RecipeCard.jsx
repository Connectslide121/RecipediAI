import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faKitchenSet,
  faFlag
} from "@fortawesome/free-solid-svg-icons";
import "../recipeCardStyles.css";

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
            <p>
              <FontAwesomeIcon className="recipe-card-icon" icon={faClock} />
              {props.Recipe.totalTime} mins
            </p>
            <a href={props.Recipe.url} target="_blank" rel="noreferrer">
              <span>
                <FontAwesomeIcon icon={faKitchenSet} />
              </span>
              Recipe
            </a>
          </div>
          <div className="recipe-card-info-right">
            {props.Recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
          <div className="recipe-card-preview">
            <iframe
              title="preview"
              src={props.Recipe.url}
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    )
  );
}
