import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import * as nutrition from "nutrition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import TooltipIcon from "../components/TooltipIcon";
import "../styles/nutritionStyles.css";

export default function Nutrition() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [eng, setEng] = useState(false);
  const [age, setAge] = useState(0);
  const [woman, setWoman] = useState(true);
  const [exerciseType, setExerciseType] = useState("No");

  const [bmi, setBmi] = useState();
  const [bmiClass, setBmiClass] = useState();
  const [bmr, setBmr] = useState();
  const [dailyCalories, setDailyCalories] = useState();

  useEffect(() => {
    const opts = {
      weight: Number(weight),
      height: parseFloat(height),
      eng: eng
    };
    const value = nutrition.bmi(opts);
    setBmi(value);
  }, [weight, height, eng]);

  useEffect(() => {
    const value = nutrition.bmiClass(bmi);
    setBmiClass(value);
  }, [bmi]);

  useEffect(() => {
    let opts = {};

    if (eng === true) {
      opts = {
        weight: Number(weight * 0.45359237), //***** MUST BE IN S.I. *// CONVERT IF "eng === true"
        height: parseFloat(height * 0.0254), //***** MUST BE IN S.I. *// CONVERT IF "eng === true"
        age: Number(age),
        woman: woman
      };
    }

    if (eng === false) {
      opts = {
        weight: Number(weight),
        height: parseFloat(height),
        age: Number(age),
        woman: woman
      };
    }

    const value = nutrition.bmr(opts);
    setBmr(value);
  }, [weight, height, age, woman, eng]);

  useEffect(() => {
    const opts = {
      bmr: bmr,
      exerciseType: exerciseType
    };
    const value = nutrition.dailyCalories(opts);
    setDailyCalories(value);
  }, [bmr, exerciseType]);

  return (
    <section>
      <Header />
      <h3>Nutrition</h3>
      <div className="nutrition-page-wrapper">
        <div className="nutrition-form-wrapper">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="nutrition-line-wrapper">
              <label htmlFor="height">Height:</label>
              <input
                name="height"
                id="height"
                type="number"
                step=".01"
                required
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="nutrition-line-wrapper">
              <label htmlFor="weight">Weight:</label>
              <input
                name="weight"
                id="weight"
                type="number"
                step=".1"
                required
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="nutrition-line-wrapper">
              <label htmlFor="eng">Units:</label>
              <select name="eng" id="eng" onChange={() => setEng(!eng)}>
                <option value="false">m - kg</option>
                <option value="true">in - lb</option>
              </select>
            </div>

            <div className="nutrition-line-wrapper">
              <label htmlFor="age">Age:</label>
              <input
                name="age"
                id="age"
                type="number"
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="nutrition-line-wrapper">
              <label htmlFor="woman">Sex:</label>
              <select name="woman" id="woman" onChange={() => setWoman(!woman)}>
                <option value="true">Woman</option>
                <option value="false">Man</option>
              </select>
            </div>

            <div className="nutrition-line-wrapper">
              <label htmlFor="exerciseType">Exercise:</label>
              <select
                name="exerciseType"
                id="exerciseType"
                onChange={(e) => setExerciseType(e.target.value)}
              >
                <option value="No">Little to no exercise</option>
                <option value="Light">1-3 days per week</option>
                <option value="Moderate">3-5 days per week</option>
                <option value="Heavy">6-7 days per week</option>
                <option value="Full">twice per day</option>
              </select>
            </div>
          </form>
        </div>
        <div className="nutrition-results">
          <div className="nutrition-result-line">
            <TooltipIcon
              icon={<FontAwesomeIcon icon={faCircleQuestion} />}
              text="BMI (Body Mass Index) is a measurement of body fat based on height and weight that applies to both men and women. It can be used to indicate if you are overweight, obese, underweight or normal."
            />
            <h4>BMI</h4>
            <p>{bmi}</p>
          </div>
          <div className="nutrition-result-line">
            <TooltipIcon
              icon={<FontAwesomeIcon icon={faCircleQuestion} />}
              text="Returns the class from Body Mass Index value. Possible results are: Underweight, Normal, Overweight, Obese Class 1, Obese Class 2, Morbid Obesity"
            />
            <h4>BMI CLASS</h4>
            <p>{bmiClass}</p>
          </div>
          <div className="nutrition-result-line">
            <TooltipIcon
              icon={<FontAwesomeIcon icon={faCircleQuestion} />}
              text="BMR (Basal Metabolic Rate) is the amount of energy expended while at rest in a neutrally temperate environment."
            />
            <h4>BMR</h4>
            <p>{bmr}</p>
          </div>
          <div className="nutrition-result-line">
            <TooltipIcon
              icon={<FontAwesomeIcon icon={faCircleQuestion} />}
              text="An estimation of individual's daily kilocalorie requirements based on a basal metabolic rate (BMR) using the Harris–Benedict equation"
            />
            <h4>DAILY CALORIES</h4>
            <p>{dailyCalories}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
