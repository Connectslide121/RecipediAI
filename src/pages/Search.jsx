import React from "react";
import "../styles/searchStyles.css";
import { Form, Outlet, redirect } from "react-router-dom";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEgg,
  faCarrot,
  faCoffee,
  faUtensilSpoon,
  faIceCream,
  faCocktail,
  faUtensils,
  faBacon,
  faCookie,
  faBrush
} from "@fortawesome/free-solid-svg-icons";
import PresetButton from "../components/PresetButton";

export async function action({ request }) {
  const formData = await request.formData();
  const input = Object.fromEntries(formData);
  console.log("query: ", input);

  if (
    input.query === "" &&
    input.dishType === "" &&
    input.mealType === "" &&
    input.cuisineType === "" &&
    input.diet === "" &&
    input.health === ""
  ) {
    return redirect(`../daietpedia/search-result/random`);
  }

  // const query = `${input.query}${
  //   input.dishType && `&dishType=${input.dishType}`
  // }${input.mealType && `&mealType=${input.mealType}`}${
  //   input.cuisineType && `&cuisineType=${input.cuisineType}`
  // }${input.diet && `&diet=${input.diet}`}${
  //   input.health && `&health=${input.health}`
  // }`;

  return redirect(
    `../daietpedia/search/result/` +
      (input.query ? `q=${input.query}` : "") +
      (input.dishType ? `&dishType=${input.dishType}` : "") +
      (input.mealType ? `&mealType=${input.mealType}` : "") +
      (input.cuisineType ? `&cuisineType=${input.cuisineType}` : "") +
      (input.diet ? `&diet=${input.diet}` : "") +
      (input.health ? `&health=${input.health}` : "")
  );
}

export default function Searh() {
  return (
    <>
      <section>
        <Header />
        <h3>Search</h3>
        <div className="search-page-wrapper">
          <div className="search-form-wrapper">
            <p>Fill any (or many) of the fields below:</p>
            <Form method="post">
              <input
                name="query"
                id="query"
                type="text"
                className="search-input"
              />
              <div className="search-line-wrapper">
                <label htmlFor="dishType">Dish type:</label>
                <select name="dishType" id="dishType">
                  <option value=""></option>
                  <option value="starter">Starter</option>
                  <option value="main course">Main course</option>
                  <option value="desserts">Desserts</option>
                  <option value="drinks">Drinks</option>
                  <option value="alcohol cocktail">Alcohol cocktail</option>
                  <option value="biscuits and cookies">
                    Biscuits and cookies
                  </option>
                  <option value="bread">Bread</option>
                  <option value="cereals">Cereals</option>
                  <option value="condiments and sauces">
                    Condiments and sauces
                  </option>
                  <option value="egg">Egg</option>
                  <option value="ice cream and custard">
                    Ice cream and custard
                  </option>
                  <option value="pancake">Pancake</option>
                  <option value="pasta">Pasta</option>
                  <option value="pastry">Pastry</option>
                  <option value="pies and tarts">Pies and tarts</option>
                  <option value="pizza">Pizza</option>
                  <option value="preps">Preps</option>
                  <option value="preserve">Preserve</option>
                  <option value="salad">Salad</option>
                  <option value="sandwiches">Sandwiches</option>
                  <option value="seafood">Seafood</option>
                  <option value="side dish">Side dish</option>
                  <option value="soup">Soup</option>
                  <option value="special occasions">Special occasions</option>
                  <option value="sweets">Sweets</option>
                </select>
              </div>
              <div className="search-line-wrapper">
                <label htmlFor="mealType">Meal type:</label>
                <select name="mealType" id="mealType">
                  <option value=""></option>
                  <option value="breakfast">Breakfast</option>
                  <option value="brunch">Brunch</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                  <option value="teatime">Teatime</option>
                </select>
              </div>
              <div className="search-line-wrapper">
                <label htmlFor="cuisineType">Cuisine type:</label>
                <select name="cuisineType" id="cuisineType">
                  <option value=""></option>
                  <option value="american">American</option>
                  <option value="asian">Asian</option>
                  <option value="british">British</option>
                  <option value="caribbean">Caribbean</option>
                  <option value="central europe">Central European</option>
                  <option value="chinese">Chinese</option>
                  <option value="eastern europe">Eastern European</option>
                  <option value="french">French</option>
                  <option value="greek">Greek</option>
                  <option value="indian">Indian</option>
                  <option value="italian">Italian</option>
                  <option value="japanese">Japanese</option>
                  <option value="korean">Korean</option>
                  <option value="kosher">Kosher</option>
                  <option value="mediterranean">Mediterranean</option>
                  <option value="mexican">Mexican</option>
                  <option value="middle eastern">Middle Eastern</option>
                  <option value="nordic">Nordic</option>
                  <option value="south american">South American</option>
                  <option value="south east asian">South East Asian</option>
                  <option value="world">World</option>
                </select>
              </div>
              <div className="search-line-wrapper">
                <label htmlFor="diet">Diet:</label>
                <select name="diet" id="diet">
                  <option value=""></option>
                  <option value="balanced">Balanced</option>
                  <option value="high-fiber">High fiber</option>
                  <option value="high-protein">High protein</option>
                  <option value="low-carb">Low carb</option>
                  <option value="low-fat">Low fat</option>
                  <option value="low-sodium">Low sodium</option>
                </select>
              </div>
              <div className="search-line-wrapper">
                <label htmlFor="health">Health:</label>
                <select name="health" id="health">
                  <option value=""></option>
                  <option value="alcohol-cocktail">Alcohol cocktail</option>
                  <option value="alcohol-free">Alcohol free</option>
                  <option value="celery-free">Celery free</option>
                  <option value="crustacean-free">Crustacean free</option>
                  <option value="dairy-free">Dairy free</option>
                  <option value="DASH">
                    DASH- Dietary Approaches to Stop Hypertension
                  </option>
                  <option value="egg-free">Egg free</option>
                  <option value="fish-free">Fish free</option>
                  <option value="fodmap-free">Fodmap free</option>
                  <option value="gluten-free">Gluten free</option>
                  <option value="immuno-supportive">Immuno supportive</option>
                  <option value="keto-friendly">Keto friendly</option>
                  <option value="kidney-friendly">Kidney friendly</option>
                  <option value="kosher">Kosher</option>
                  <option value="low-potassium">Low potassium</option>
                  <option value="low-sugar">Low sugar</option>
                  <option value="lupine-free">Lupine free</option>
                  <option value="Mediterranean">Mediterranean</option>
                  <option value="mollusk-free">Mollusk free</option>
                  <option value="mustard-free">Mustard free</option>
                  <option value="No-oil-added">No oil added</option>
                  <option value="paleo">Paleo</option>
                  <option value="peanut-free">Peanut free</option>
                  <option value="pescatarian">Pescatarian</option>
                  <option value="pork-free">Pork free</option>
                  <option value="red-meat-free">Red meat free</option>
                  <option value="sesame-free">Sesame free</option>
                  <option value="shellfish-free">Shellfish free</option>
                  <option value="soy-free">Soy free</option>
                  <option value="sugar-conscious">Sugar conscious</option>
                  <option value="sulfite-free">Sulfite free</option>
                  <option value="tree-nut-free">Tree-nut free</option>
                  <option value="vegan">Vegan</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="wheat-free">Wheat free</option>
                </select>
              </div>
              <div className="search-buttons">
                <PresetButton
                  text="Clear"
                  icon={<FontAwesomeIcon icon={faBrush} />}
                />
                <button type="submit">
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  Search
                </button>
              </div>
            </Form>
          </div>
          <div className="preset-buttons">
            <PresetButton
              mealType="breakfast"
              cuisineType="french"
              diet="low-carb"
              text="Low-carb French breakfast"
              icon={<FontAwesomeIcon icon={faBacon} />}
            />
            <PresetButton
              mealType="lunch"
              health="vegan"
              text="Vegan lunch"
              icon={<FontAwesomeIcon icon={faCarrot} />}
            />
            <PresetButton
              dishType="main course"
              diet="high-protein"
              text="High-protein main course"
              icon={<FontAwesomeIcon icon={faUtensilSpoon} />}
            />
            <PresetButton
              dishType="desserts"
              health="gluten-free"
              text="Gluten-free dessert"
              icon={<FontAwesomeIcon icon={faIceCream} />}
            />
            <PresetButton
              dishType="drinks"
              health="alcohol-free"
              text="Alcohol free drink"
              icon={<FontAwesomeIcon icon={faCocktail} />}
            />
            <PresetButton
              dishType="special occasions"
              mealType="dinner"
              diet="balanced"
              text="Special dinner (balanced)"
              icon={<FontAwesomeIcon icon={faUtensils} />}
            />
            <PresetButton
              mealType="breakfast"
              health="vegetarian"
              text="Vegetarian breakfast"
              icon={<FontAwesomeIcon icon={faCoffee} />}
            />
            <PresetButton
              dishType="biscuits and cookies"
              diet="low-fat"
              text="Low-fat cookies"
              icon={<FontAwesomeIcon icon={faCookie} />}
            />
            <PresetButton
              dishType="pancake"
              mealType="breakfast"
              diet="high-fiber"
              text="High-fiber breakfast pancakes"
              icon={<FontAwesomeIcon icon={faEgg} />}
            />
            <PresetButton
              dishType="drinks"
              health="sugar-conscious"
              text="Sugar conscious drinks"
              icon={<FontAwesomeIcon icon={faCocktail} />}
            />
          </div>
        </div>
      </section>
    </>
  );
}
