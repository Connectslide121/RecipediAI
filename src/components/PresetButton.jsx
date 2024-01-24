import React from "react";

export default function PresetButton(props) {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById("dishType").value = props.dishType;
        document.getElementById("mealType").value = props.mealType;
        document.getElementById("diet").value = props.diet;
        document.getElementById("health").value = props.health;
      }}
    >
      <span>{props.icon}</span>
      {props.text}
    </button>
  );
}
