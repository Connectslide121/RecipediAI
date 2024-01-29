import React from "react";
import { useLoaderData } from "react-router-dom";
import { GetRecipesByQuery } from "../functions/Edamam";
import RecipeCard from "../components/RecipeCard";
import Header from "../components/Header";

export async function loader({ params }) {
  const recipes = await GetRecipesByQuery(params.query);
  return { recipes, params };
}

export default function SearchResult() {
  const { recipes } = useLoaderData();
  const { params } = useLoaderData();

  const paramsArray = params.query.replace(/^&/, "").split("&");
  const healthIndex = paramsArray.findIndex((param) =>
    param.startsWith("health=")
  );
  const healthParams =
    healthIndex !== -1 ? paramsArray.slice(0, healthIndex + 1) : paramsArray;

  const otherParams =
    healthIndex !== -1
      ? paramsArray.slice(healthIndex + 1).map((param) => param.split("&"))
      : [];

  const otherParamsString = otherParams.reduce((acc, param, index) => {
    if (index > 0) {
      acc += ", ";
    }
    acc += param.join(", ");
    return acc;
  }, "");

  const lastElement = healthParams[healthParams.length - 1];
  const updatedLastElement = `${lastElement}, ${otherParamsString}`;
  healthParams[healthParams.length - 1] = updatedLastElement;

  console.log(healthParams);

  const paramsObject = {};
  healthParams.forEach((param) => {
    let [key, value] = param.split("=");

    switch (key) {
      case "q":
        key = "Query";
        break;

      case "dishType":
        key = "Dish type";
        break;

      case "mealType":
        key = "Meal type";
        break;

      case "cuisineType":
        key = "Cuisine type";
        break;

      case "diet":
        key = "Diet";
        break;

      case "health":
        key = "Health";
        break;

      default:
        break;
    }

    paramsObject[key] = value;
  });

  return (
    <section>
      <h3 className="search-results-query">
        Search criteria:{" "}
        <span>
          {Object.entries(paramsObject).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </span>
      </h3>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <RecipeCard key={index} Recipe={recipe.recipe} />
        ))
      ) : (
        <p className="no-result">No recipes found</p>
      )}
    </section>
  );
}
