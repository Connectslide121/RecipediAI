import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function RecipeCard(props) {
  return (
    props.Recipe && (
      <div className="recipe-card">
        <div className="recipe-card-image">
          <img src={props.Recipe.image} alt="recipe" />
        </div>
        <div className="recipe-card-info">
          <h3>{props.Recipe.label}</h3>
          <a href={props.Recipe.url}>Link to source</a>
          <p>
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
            {props.Recipe.totalTime}
          </p>
          <p>
            <span>
              <i className="fas fa-user-friends"></i>
            </span>
            {props.servings}
          </p>
        </div>
      </div>
    )
  );
}
