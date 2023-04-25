import React, { useEffect, useState, Fragment } from "react";

import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Header from "../Layout/Header";

function CreateDeck({ header, initialFormData, submitHandler }) {
  const history = useHistory()
  const [formData, setFormData] = useState(initialFormData);
  function handleInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    // using the prop to pass the information back to the App component
    submitHandler(formData);
    setFormData({ ...initialFormData });
    history.push("/")
  }

  return (
    <React.Fragment>
      <Header />
      <form onSubmit={handleFormSubmit}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
        <h3>{header}</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInput}
        />
        <label htmlFor="Description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleInput}
        />
        <input type="submit" />
        <NavLink to={`/`}>
          <button> Cancel </button>
        </NavLink>
      </form>
    </React.Fragment>
  );
}

export default CreateDeck;
