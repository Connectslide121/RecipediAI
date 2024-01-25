import React, { useState } from "react";
import Header from "../components/Header";
import * as nutrition from "nutrition";
import { Form } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const input = Object.fromEntries(formData);
  console.log(input);
  return loader(input);
}

export async function loader(input) {
  console.log(input);
  const bmiOpts = {
    weight: "80",
    height: 1.75,
    eng: input.eng
  };
  const bmi = nutrition.bmi(bmiOpts);
  const bmiClass = nutrition.bmiClass(bmi);
  const bmr = nutrition.bmr(input.weight, input.height, input.age, input.woman);
  const dailyCalories = nutrition.dailyCalories(bmr, input.exerciseType);

  const nutritionData = bmi + bmiClass + bmr + dailyCalories;

  console.log(bmi);
  return nutritionData;
}

export default function Nutrition() {
  const [bmi, setBmi] = useState("");
  const [bmiClass, setBmiClass] = useState("");
  const [bmr, setBmr] = useState("");
  const [dailyCalories, setDailyCalories] = useState("");

  return (
    <section>
      <Header />
      <h3>Nutrition</h3>
      <div className="nutrition-form-wrapper">
        <Form method="post">
          <label htmlFor="height">Height:</label>
          <input name="height" id="height" type="number" step=".01" required />
          <label htmlFor="weight">Weight:</label>
          <input name="weight" id="weight" type="number" step=".1" required />
          <label htmlFor="eng">Units:</label>
          <select name="eng" id="eng">
            <option value="false">m - kg</option>
            <option value="true">in - lb</option>
          </select>
          <label htmlFor="age">Age:</label>
          <input name="age" id="age" type="number" required />
          <label htmlFor="woman">Sex:</label>
          <select name="woman" id="woman">
            <option value="true">Woman</option>
            <option value="false">Man</option>
          </select>
          <label htmlFor="exerciseType">Exercise:</label>
          <select name="exerciseType" id="exerciseType">
            <option value="No">Little to no exercise</option>
            <option value="Light">1-3 days per week</option>
            <option value="Moderate">3-5 days per week</option>
            <option value="Heavy">6-7 days per week</option>
            <option value="Full">twice per day</option>
          </select>
          <button type="submit">Calculate</button>
        </Form>
      </div>
      <div className="">
        <h4>BMI</h4>
        <p>{bmi}</p>
        <h4>BMI CLASS</h4>
        <p>{bmiClass}</p>
        <h4>BMR</h4>
        <p>{bmr}</p>
        <h4>DAILY CALORIES</h4>
        <p>{dailyCalories}</p>
      </div>
    </section>
  );
}
