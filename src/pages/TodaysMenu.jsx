import React from "react";
import { GetRecipeByDishType } from "../functions/Edamam";
import RecipeCard from "../components/RecipeCard";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const starter = await GetRecipeByDishType("starter");
    const mainCourse = await GetRecipeByDishType("main_course");
    const dessert = await GetRecipeByDishType("desserts");
    return { starter, mainCourse, dessert };
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

export default function TodaysMenu() {
  const { starter, mainCourse, dessert } = useLoaderData();
  return (
    <div>
      <h1>Today's Menu</h1>
      <RecipeCard Recipe={starter} />
      <RecipeCard Recipe={mainCourse} />
      <RecipeCard Recipe={dessert} />
    </div>
  );
}
