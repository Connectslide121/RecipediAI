import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { GetRecipesByQuery } from "../functions/Edamam";
import RecipeCard from "../components/RecipeCard";
import { ParamsSplitter } from "../functions/ParamsSplitter";

export async function loader({ params }) {
  const recipes = await GetRecipesByQuery(params.query);
  return { recipes, params };
}

export default function SearchResult() {
  const { recipes } = useLoaderData();
  const { params } = useLoaderData();

  const paramsObject = ParamsSplitter(params);

  const searchCriteria = {};
  paramsObject.forEach((param) => {
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

    searchCriteria[key] = value;
  });

  useEffect(() => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  }, [recipes]);

  return (
    <section>
      <h3 className="search-results-query">
        Search criteria:{" "}
        <span>
          {Object.entries(searchCriteria).map(([key, value]) => (
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
