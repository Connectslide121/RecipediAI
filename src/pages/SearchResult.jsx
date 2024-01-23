import React from "react";
import { useLoaderData } from "react-router-dom";
import { GetRecipesByQuery } from "../functions/Edamam";
import RecipeCard from "../components/RecipeCard";

export async function loader({ params }) {
  const recipes = await GetRecipesByQuery(params.query);
  console.log("recipes: ", recipes);
  return { recipes };
}

export default function SearchResult() {
  const { recipes } = useLoaderData();
  console.log("recipes: ", recipes);
  return (
    <section>
      <h1>Search Result</h1>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeCard Recipe={recipe.recipe} />)
      ) : (
        <p>No recipes found</p>
      )}
    </section>
  );
}
