import React, { useEffect, useState, Fragment } from "react";

import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { readDeck } from "../utils/api";
import Header from "../Layout/Header";

function EditCardMain({ header, initialFormData, submitHandler }) {
  const history = useHistory();
  const { deckId } = useParams();
  const { cardId } = useParams();
  const { url } = useRouteMatch();

  const [Cards, setCards] = useState([]);
  const [Title, setTitle] = useState([]);
  const [Description, setDescription] = useState([]);

  useEffect(() => {
    readDeck(deckId).then((response) => {
      setTitle(response.name);
      setDescription(response.description);
      setCards(response.cards);
      console.log(response.cards[cardId]);
      setFormData(response.cards[cardId]);
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
    // console.log("hello")
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
              {`Edit Card ${cardId}`}
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

export default EditCardMain;
