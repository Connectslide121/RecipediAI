// import axios from "axios";

export async function GetRecipeByDishType(dishType) {
  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&dishType=${dishType}&random=true&app_id=63572ae8&app_key=80bdf734c856159f004aca67212196ba`
    );
    const data = await response.json();

    return data.hits[0].recipe;
  } catch (error) {
    console.log(error);
  }
}

export async function GetRecipesByQuery(query) {
  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&${query}&random=true&app_id=63572ae8&app_key=80bdf734c856159f004aca67212196ba`
    );
    const data = await response.json();

    return data.hits;
  } catch (error) {
    console.log(error);
  }

  // const API_KEY = "80bdf734c856159f004aca67212196ba";
  // const response = await axios.get(`https://api.edamam.com/api/recipes/v2/`, {
  //   data: {
  //     type: "public",
  //     Authorization: `Bearer ${API_KEY}`,
  //     app_id: "63572ae8",
  //     q: query
  //   }
  // });

  // console.log(response);
}
