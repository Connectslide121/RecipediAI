export async function GetRecipeByDishType(dishType) {
  try {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&dishType=${dishType}&random=true&app_id=63572ae8&app_key=80bdf734c856159f004aca67212196ba`;
    const response = await fetch(url);
    const data = await response.json();

    const randomRecipe =
      data.hits[Math.floor(Math.random() * data.hits.length)].recipe;
    return randomRecipe;
  } catch (error) {
    console.log(error);
  }
}
