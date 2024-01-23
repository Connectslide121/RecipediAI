import React from "react";
import "../styles/searchStyles.css";
import { Form } from "react-router-dom";
import Header from "../components/Header";

export default function Searh() {
  return (
    <section>
      <Header text="Search" />
      <p>Search by any (or many) of the fields below:</p>
      <div className="search-form-wrapper">
        <Form method="post">
          <input name="query" type="text" className="search-input" />
        </Form>
      </div>
    </section>
  );
}
