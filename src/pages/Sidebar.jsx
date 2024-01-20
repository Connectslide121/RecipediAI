import React from "react";
import { Form, Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Form>
          <input type="text" placeholder="Search recipes" />
        </Form>
        <ul>
          <li>
            <Link to="daietpedia/home">Home</Link>
          </li>
          <li>
            <Link to="daietpedia/home">About</Link>
          </li>
          <li>
            <Link to="daietpedia/home">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
}
