import React, { useEffect, useState, Fragment } from "react";

import {
  Link,
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { readDeck } from "../utils/api";
import Header from "../Layout/Header";

function EditDeck({ header, initialFormData, submitHandler }) {
  const history = useHistory();
  const { deckId } = useParams();
  const { url } = useRouteMatch();

  // const [Cards, setCards] = useState([]);
  // const [Title, setTitle] = useState([]);
  // const [Description, setDescription] = useState([]);

  useEffect(() => {
    readDeck(deckId).then((response) => {
      // setTitle(response.name);
      // setDescription(response.description);
      // setCards(response.cards);
      // console.log(Cards);
      setFormData(response);
    });
  }, []);
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
    submitHandler(formData).then(() => history.push("/"));
    setFormData({ ...initialFormData });
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
            <li className="breadcrumb-item">
              <a href={`/decks/${deckId}`}>{formData.name}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
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
      </form>
    </React.Fragment>
  );
}

export default EditDeck;
