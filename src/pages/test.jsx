import { Form, redirect } from "react-router-dom";

export async function action({ request }) {
  console.log("request: ", request);
  const formData = new FormData(request.body);
  console.log("formData: ", formData);
  const input = Object.fromEntries(formData);
  console.log("query: ", input);
  const query = input.query || "random";
  const dishType = input.dishType || "";
  const mealType = input.mealType || "";
  const cuisineType = input.cuisineType || "";
  const diet = input.diet || "";
  const health = input.health || "";

  const checkboxes = formData.getAll("health");

  console.log("checkboxes: ", checkboxes);

  const queryParams = new URLSearchParams();
  queryParams.append("q", query);

  if (checkboxes.dishType.length > 0) {
    checkboxes.dishType.forEach((value) => {
      queryParams.append("dishType", value);
    });
  }

  if (checkboxes.mealType.length > 0) {
    checkboxes.mealType.forEach((value) => {
      queryParams.append("mealType", value);
    });
  }

  if (checkboxes.cuisineType.length > 0) {
    checkboxes.cuisineType.forEach((value) => {
      queryParams.append("cuisineType", value);
    });
  }

  if (checkboxes.diet.length > 0) {
    checkboxes.diet.forEach((value) => {
      queryParams.append("diet", value);
    });
  }

  if (checkboxes.health.length > 0) {
    checkboxes.health.forEach((value) => {
      queryParams.append("health", value);
    });
  }

  console.log("queryParams: ", queryParams);

  if (
    query === "" &&
    dishType === "" &&
    mealType === "" &&
    cuisineType === "" &&
    diet === "" &&
    health === ""
  )
    return redirect(`../daietpedia/search/result/q=random`);

  return redirect(`../daietpedia/search/result/?${queryParams}`);
}
