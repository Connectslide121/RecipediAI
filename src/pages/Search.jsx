import React from "react";
import "../styles/searchStyles.css";
import { Form } from "react-router-dom";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Searh() {
  return (
    <section>
      <Header text="Search" />
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
            <div>
              <label htmlFor="dishType">Dish type: </label>
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
            <div>
              <label htmlFor="mealType">Meal type</label>
              <select name="mealType" id="mealType">
                <option value=""></option>
                <option value="breakfast">Breakfast</option>
                <option value="brunch">Brunch</option>
                <option value="lunch/dinner">Lunch/Dinner</option>
                <option value="snack">Snack</option>
                <option value="teatime">Teatime</option>
              </select>
            </div>
            <div>
              <label htmlFor="diet">Diet</label>
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
            <div>
              <label htmlFor="health">Health</label>
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
            <button type="submit">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              Search
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
}
