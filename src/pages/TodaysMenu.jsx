import React from "react";
import { GetRecipeByDishType } from "../functions/Edamam";
import RecipeCard from "../components/RecipeCard";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const starter = await GetRecipeByDishType("starter");
    const mainCourse = await GetRecipeByDishType("main_course");
    const dessert = await GetRecipeByDishType("desserts");
    const recipes = [starter, mainCourse, dessert];
    return { recipes };
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

export default function TodaysMenu() {
  const { recipes } = useLoaderData();

  return (
    <section>
      <h1>Today's Menu</h1>
      <RecipeCard Recipe={recipes[0]} />
      <RecipeCard Recipe={recipes[1]} />
      <RecipeCard Recipe={recipes[2]} />
    </section>
  );
}
