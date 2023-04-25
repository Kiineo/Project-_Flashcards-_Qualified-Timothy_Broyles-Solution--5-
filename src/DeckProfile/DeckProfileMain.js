import React, { Fragment, useEffect, useState } from "react";

import {
  Link,
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Header from "../Layout/Header";
import { readDeck } from "../utils/api/index";
import { deleteCard } from "../utils/api/index";
import { deleteDeck } from "../utils/api/index";

export const StudyCardsMain = (Decks) => {
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

  function deleteCardHandler(cardId) {
    console.log("cardId", cardId);
    let confirmationMessage = window.confirm(
      "Delete this card? You will not be able to recover it."
    );
    if (confirmationMessage) {
      deleteCard(cardId).then((response) => {
        history.push(`${url}`);
      });
    } else {
      history.push(`${url}`);
    }
  }

  function deleteDeckHandler() {
    let confirmationMessage = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (confirmationMessage) {
      deleteDeck(deckId).then((response) => {
        history.push("/");
      });
    }
  }

  function editHandler() {}
  function studyHandler() {}
  function addDeckHandler() {}

  const cardForm = Cards.map((v, idx) => {
    let cardId = v.id;
    let Card = (
      <React.Fragment>
        <div class="card" style={{ width: 1000 }}>
          <div class="row">
            <div class="column card-body">{v.front}</div>
            <div class="column card-body">{v.back}</div>
          </div>
        </div>
        <NavLink to={`/decks/${deckId}/cards/${cardId}/edit`}>
          <button class> Edit </button>
        </NavLink>
        <button onClick={() => deleteCardHandler(cardId)}>Delete</button>
      </React.Fragment>
    );
    return Card;
  });

  return (
    <Fragment>
      <Header />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {Title}
          </li>
        </ol>
      </nav>
      <h1>{Title}</h1>
      <h3>{Description}</h3>
      <NavLink to={`/decks/${deckId}/edit`}>
        <button> Edit </button>
      </NavLink>
      <NavLink to={`/decks/${deckId}/study`}>
        <button> Study </button>
      </NavLink>
      <NavLink to={`/decks/${deckId}/cards/new`}>
        <button> + Add Cards </button>
      </NavLink>
      <button onClick={deleteDeckHandler}>Delete</button>
      <h1>Cards</h1>
      {cardForm}
    </Fragment>
  );
};

export default StudyCardsMain;
