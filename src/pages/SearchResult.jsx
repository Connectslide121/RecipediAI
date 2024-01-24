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
  const query = params.query;
  console.log("recipes: ", recipes);
  return (
    <section>
      <Header text="Search results" />
      <h2 className="search-results-query">
        Search results for: <span>{query}</span>
      </h2>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeCard Recipe={recipe.recipe} />)
      ) : (
        <p className="no-result">No recipes found</p>
      )}
    </section>
  );
}
