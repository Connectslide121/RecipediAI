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
  const recipe = props.Recipe;

  return (
    recipe && (
      <div className="recipe-card">
        <div
          className="recipe-card-dishtype"
          style={
            recipe.dishType && {
              backgroundColor: recipe.dishType.includes("starter")
                ? "#66b659"
                : recipe.dishType.includes("salad")
                ? "#66b659"
                : recipe.dishType.includes("side dish")
                ? "#66b659"
                : recipe.dishType.includes("main course")
                ? "#e8324a"
                : recipe.dishType.includes("pasta")
                ? "#e8324a"
                : recipe.dishType.includes("pizza")
                ? "#e8324a"
                : recipe.dishType.includes("egg")
                ? "#f8b03b"
                : recipe.dishType.includes("sandwiches")
                ? "#f8b03b"
                : recipe.dishType.includes("desserts")
                ? "#f8b03b"
                : recipe.dishType.includes("soup")
                ? "#3a5ca7"
                : recipe.dishType.includes("seafood")
                ? "#3a5ca7"
                : recipe.dishType.includes("bread")
                ? "#7e4a2a"
                : recipe.dishType.includes("biscuits and cookies")
                ? "#7e4a2a"
                : recipe.dishType.includes("cereals")
                ? "#7e4a2a"
                : recipe.dishType.includes("pancake")
                ? "#7e4a2a"
                : recipe.dishType.includes("pastry")
                ? "#7e4a2a"
                : recipe.dishType.includes("pies and tarts")
                ? "#7e4a2a"
                : "purple"
            }
          }
        >
          {recipe.dishType && <p>{recipe.dishType.join(" / ")}</p>}
        </div>
        <div className="recipe-card-info-wrapper">
          <div className="recipe-card-image">
            <img src={recipe.image} alt="recipe" />
          </div>
          <div className="recipe-card-overview">
            <h3 className="recipe-card-title">{recipe.label}</h3>
            <div className="recipe-card-cuisine-type">
              {recipe.cuisineType &&
                recipe.cuisineType.map((cuisine, index) => (
                  <p key={index}>
                    <FontAwesomeIcon
                      className="recipe-card-icon"
                      icon={faFlag}
                    />
                    {cuisine[0].toUpperCase() + cuisine.substring(1)}
                  </p>
                ))}
            </div>
            {recipe.totalTime !== 0 && (
              <p>
                <FontAwesomeIcon className="recipe-card-icon" icon={faClock} />
                {recipe.totalTime} mins
              </p>
            )}
            <p>
              <FontAwesomeIcon className="recipe-card-icon" icon={faUsers} />
              {recipe.yield}
            </p>
            <a href={recipe.url} target="_blank" rel="noreferrer">
              <span>
                <FontAwesomeIcon icon={faKitchenSet} />
              </span>
              Recipe
            </a>
          </div>
          <div className="recipe-card-ingredients">
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
          <div className="health-tooltip-icon">
            <TooltipIconArray
              array={recipe.healthLabels}
              icon={<FontAwesomeIcon icon={faCircleInfo} />}
            />
          </div>
        </div>
      </div>
    )
  );
}
