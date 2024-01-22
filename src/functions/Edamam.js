export async function GetRandomStarter() {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=""&dishType=starter&app_id=63572ae8&app_key=80bdf734c856159f004aca67212196ba`;
  const response = await fetch(url);
  const data = await response.json();

  const randomRecipe =
    data.hits[Math.floor(Math.random() * data.hits.length)].recipe;
  return randomRecipe;
}
export async function GetRandomMainCourse() {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=""&dishType=main_course&app_id=63572ae8&app_key=80bdf734c856159f004aca67212196ba`;
  const response = await fetch(url);
  const data = await response.json();

  const randomRecipe =
    data.hits[Math.floor(Math.random() * data.hits.length)].recipe;
  return randomRecipe;
}
export async function GetRandomDessert() {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=""&dishType=desserts&app_id=63572ae8&app_key=80bdf734c856159f004aca67212196ba`;
  const response = await fetch(url);
  const data = await response.json();

  const randomRecipe =
    data.hits[Math.floor(Math.random() * data.hits.length)].recipe;
  return randomRecipe;
}
