import React from "react";

export default function PresetButton(props) {
  console.log();
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById("dishType").value = props.dishType;
        document.getElementById("mealType").value = props.mealType;
        document.getElementById("cuisineType").value = props.cuisineType;
        document.getElementById("diet").value = props.diet;
        Array.from(document.getElementsByClassName("checkbox")).forEach(
          (checkbox) => {
            checkbox.checked = false;
          }
        );
        props.health &&
          (document.getElementById(props.health.toString()).checked = true);
      }}
    >
      <span>{props.icon}</span>
      {props.text}
    </button>
  );
}
