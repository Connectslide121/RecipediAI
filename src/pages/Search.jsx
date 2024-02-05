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
  const regularKeys = ["query", "dishType", "mealType", "cuisineType", "diet"];
  const checkboxKeys = Object.keys(input).filter(
    (key) => !regularKeys.includes(key)
  );
  const checkboxKeyString =
    checkboxKeys.length > 0 ? `${checkboxKeys.join("&")}` : "";
  console.log("checkboxKeyString: ", checkboxKeyString);

  if (
    input.query === "" &&
    input.dishType === "" &&
    input.mealType === "" &&
    input.cuisineType === "" &&
    input.diet === "" &&
    checkboxKeyString === ""
  ) {
    return redirect(`../daietpedia/search/result/q=random`);
  }

  return redirect(
    `../daietpedia/search/result/` +
      (input.query ? `q=${input.query}` : "") +
      (input.dishType ? `&dishType=${input.dishType}` : "") +
      (input.mealType ? `&mealType=${input.mealType}` : "") +
      (input.cuisineType ? `&cuisineType=${input.cuisineType}` : "") +
      (input.diet ? `&diet=${input.diet}` : "") +
      (checkboxKeyString !== "" ? `&health=${checkboxKeyString}` : "")
  );
}

export default function Searh() {
  const healthLabels = [
    "alcohol-cocktail",
    "alcohol-free",
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "DASH",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "immuno-supportive",
    "keto-friendly",
    "kidney-friendly",
    "kosher",
    "low-potassium",
    "low-sugar",
    "lupine-free",
    "Mediterranean",
    "mollusk-free",
    "mustard-free",
    "No-oil-added",
    "paleo",
    "peanut-free",
    "pescatarian",
    "pork-free",
    "red-meat-free",
    "sesame-free",
    "shellfish-free",
    "soy-free",
    "sugar-conscious",
    "sulfite-free",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free"
  ];

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
                  <option value="pies and tarts">Pies and tarts</option>
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
              <details name="details" id="details">
                <summary
                  name="summary"
                  id="summary"
                  className="dropdown-button"
                >
                  Health preferences, allergens...
                </summary>
                {
                  <div className="dropdown-content">
                    {healthLabels.map((healthLabel, index) => (
                      <label name="checkbox" id="checkbox" key={index}>
                        <input
                          className="checkbox"
                          name={healthLabel}
                          id={healthLabel}
                          value={healthLabel}
                          type="checkbox"
                          // checked={selectedOptions.includes(option)}
                          // onChange={handleCheckboxChange}
                        />
                        {healthLabel.replace(/-/g, " ")}{" "}
                      </label>
                    ))}
                  </div>
                }
              </details>
              <div className="search-buttons">
                <PresetButton
                  className="search-buttons-button"
                  text="Clear"
                  icon={<FontAwesomeIcon icon={faBrush} />}
                />
                <button className="search-buttons-button" type="submit">
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
      <Outlet />
    </>
  );
}
