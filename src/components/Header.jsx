import React from "react";

export default function Header(props) {
  return (
    <div className="header-wrapper">
      <h1>{props.text}</h1>
    </div>
  );
}
