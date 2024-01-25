import React from "react";
import { useLoaderData } from "react-router-dom";
import { GetRecipesByQuery } from "../functions/Edamam";
import RecipeCard from "../components/RecipeCard";
import Header from "../components/Header";

export async function loader({ params }) {
  console.log("params: ", params);
  const recipes = await GetRecipesByQuery(params.query);
  console.log("recipes: ", recipes);
  return { recipes, params };
}

export default function SearchResult() {
  const { recipes } = useLoaderData();
  const { params } = useLoaderData();

  const paramsArray = params.query.replace(/^&/, "").split("&");
  const paramsObject = {};
  paramsArray.forEach((param) => {
    let [key, value] = param.split("=");

    switch (key) {
      case "q":
        key = "Query";
        break;

      case "cuisineType":
        key = "Cuisine type";
        break;

      case "mealType":
        key = "Meal type";
        break;

      case "health":
        key = "Health";
        break;

      case "diet":
        key = "Diet";
        break;

      case "dishType":
        key = "Dish type";
        break;

      default:
        break;
    }

    paramsObject[key] = value;
  });

  console.log("paramsObject: ", paramsObject);

  return (
    <section>
      <Header />
      <h3 className="search-results-query">
        Search criteria:{" "}
        <span>
          {Object.entries(paramsObject).map(([key, value]) => (
            <p>
              {key}: {value}
            </p>
          ))}
        </span>
      </h3>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeCard Recipe={recipe.recipe} />)
      ) : (
        <p className="no-result">No recipes found</p>
      )}
    </section>
  );
}
