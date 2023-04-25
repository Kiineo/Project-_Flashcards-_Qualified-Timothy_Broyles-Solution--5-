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

function AddCard({ header, initialFormData, submitHandler }) {
  const history = useHistory();
  const { deckId } = useParams();
  const { url } = useRouteMatch();

  const [Cards, setCards] = useState([]);
  const [Title, setTitle] = useState([]);
  const [Description, setDescription] = useState([]);

  useEffect(() => {
    readDeck(deckId).then((response) => {
      setTitle(response.name);
      setDescription(response.description);
      setCards(response.cards);
      console.log(Cards);
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
    submitHandler(deckId, formData);
    setFormData({ ...initialFormData });
    history.push(`/decks/${deckId}`);
  }
  return (
    <React.Fragment>
      <Header />
      <form onSubmit={handleFormSubmit}>
        <h3>{header}</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href={`/decks/${deckId}`}>{Title}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
        <label htmlFor="front">front</label>
        <input
          type="text"
          name="front"
          id="front"
          value={formData.front}
          onChange={handleInput}
        />
        <label htmlFor="back">back</label>
        <textarea
          type="text"
          name="back"
          id="back"
          value={formData.back}
          onChange={handleInput}
        />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
}

export default AddCard;
