import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faKitchenSet,
  faFlag,
  faUsers,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import "../styles/recipeCardStyles.css";
import TooltipIconArray from "./TooltipIconArray";

export default function RecipeCard(props) {
  return (
    props.Recipe && (
      <div className="recipe-card">
        <div
          className="recipe-card-dishtype"
          style={
            props.Recipe.dishType && {
              backgroundColor: props.Recipe.dishType.includes("starter")
                ? "#66b659"
                : props.Recipe.dishType.includes("salad")
                ? "#66b659"
                : props.Recipe.dishType.includes("side dish")
                ? "#66b659"
                : props.Recipe.dishType.includes("main course")
                ? "#e8324a"
                : props.Recipe.dishType.includes("pasta")
                ? "#e8324a"
                : props.Recipe.dishType.includes("pizza")
                ? "#e8324a"
                : props.Recipe.dishType.includes("egg")
                ? "#f8b03b"
                : props.Recipe.dishType.includes("sandwiches")
                ? "#f8b03b"
                : props.Recipe.dishType.includes("desserts")
                ? "#f8b03b"
                : props.Recipe.dishType.includes("soup")
                ? "#3a5ca7"
                : props.Recipe.dishType.includes("seafood")
                ? "#3a5ca7"
                : props.Recipe.dishType.includes("bread")
                ? "#7e4a2a"
                : props.Recipe.dishType.includes("biscuits and cookies")
                ? "#7e4a2a"
                : props.Recipe.dishType.includes("cereals")
                ? "#7e4a2a"
                : props.Recipe.dishType.includes("pancake")
                ? "#7e4a2a"
                : props.Recipe.dishType.includes("pastry")
                ? "#7e4a2a"
                : props.Recipe.dishType.includes("pies and tarts")
                ? "#7e4a2a"
                : "purple"
            }
          }
        >
          {props.Recipe.dishType && <p>{props.Recipe.dishType.join(" / ")}</p>}
        </div>
        <div className="recipe-card-info-wrapper">
          <div className="recipe-card-image">
            <img src={props.Recipe.image} alt="recipe" />
          </div>
          <div className="recipe-card-overview">
            <h3 className="recipe-card-title">{props.Recipe.label}</h3>
            <div className="recipe-card-cuisine-type">
              {props.Recipe.cuisineType &&
                props.Recipe.cuisineType.map((cuisine, index) => (
                  <p key={index}>
                    <FontAwesomeIcon
                      className="recipe-card-icon"
                      icon={faFlag}
                    />
                    {cuisine[0].toUpperCase() + cuisine.substring(1)}
                  </p>
                ))}
            </div>
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
          <div className="health-tooltip-icon">
            <TooltipIconArray
              array={props.Recipe.healthLabels}
              icon={<FontAwesomeIcon icon={faCircleInfo} />}
            />
          </div>
        </div>
      </div>
    )
  );
}
