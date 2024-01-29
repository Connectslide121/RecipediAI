import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

export default function UnderConstruction() {
  return (
    <section id="under-construction">
      <FontAwesomeIcon icon={faPersonDigging} />
      <h1>Oops!</h1>
      <p>Sorry, this page is still under construction.</p>
    </section>
  );
}
