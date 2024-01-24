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
        <div
          className="recipe-card-dishtype"
          style={{
            backgroundColor: props.Recipe.dishType.includes(
              "starter",
              "salad",
              "side dish"
            )
              ? "#66b659"
              : props.Recipe.dishType.includes(
                  "main course",
                  "pasta",
                  "egg",
                  "pizza"
                )
              ? "#e8324a"
              : props.Recipe.dishType.includes("desserts")
              ? "#f8b03b"
              : props.Recipe.dishType.includes("soup", "seafood")
              ? "#3a5ca7"
              : props.Recipe.dishType.includes(
                  "bread",
                  "biscuits and cookies",
                  "cereals",
                  "pancake",
                  "pastry",
                  "pies and tarts"
                )
              ? "#7e4a2a"
              : "purple"
          }}
        >
          <p>{props.Recipe.dishType.join(" / ")}</p>
        </div>
        <div className="recipe-card-info-wrapper">
          <div className="recipe-card-image">
            <img src={props.Recipe.image} alt="recipe" />
          </div>
          <div className="recipe-card-overview">
            <h3 className="recipe-card-title">{props.Recipe.label}</h3>
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
          <div className="recipe-card-ingredients">
            {props.Recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
          <div className="recipe-card-tags">
            {props.Recipe.healthLabels.map((label, index) => (
              <p key={index}>{label}</p>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
