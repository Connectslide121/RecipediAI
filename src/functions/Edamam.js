import axios from "axios";

export async function GetRecipeByDishType(dishType) {
  const response = await axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&dishType=${dishType}&random=true&app_id=63572ae8&app_key=80bdf734c856159f004aca67212196ba`
    )
    .catch(function (error) {
      alert("Error fetching recipes by dish type");
      console.error("Error fetching recipes by dish type", error);
    });
  return response.data.hits[0].recipe;
}

export async function GetRecipesByQuery(query) {
  const response = await axios
    .get(
      `https://api.edamam.com/api/recipes/v2/?type=public&${query}&random=true&app_id=63572ae8&app_key=80bdf734c856159f004aca67212196ba`
    )
    .catch(function (error) {
      alert("Error fetching recipes by query");
      console.error("Error fetching recipes by query", error);
    });
  return response.data.hits;
}
