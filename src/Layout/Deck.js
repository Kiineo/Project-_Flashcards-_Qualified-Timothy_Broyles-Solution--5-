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
import { deleteDeck } from "../utils/api";
import DeckProfileMain from "../DeckProfile/DeckProfileMain";
import StudyCardsMain from "../Study/StudyCardsMain";
/*
  TODO: Change the link below to go to the user route, using the user's ID.
  /users/:userId
*/

export const Deck = ({ deck, deckId }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  function deleteHandler() {
    let confirmationMessage = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (confirmationMessage) {
      deleteDeck(deckId).then((response) => {
        history.go(0);
      });
    }
  }

  return (
    <article>
      <div class="card" style={{ width: 1000 }}>
      <h5 class="card-title">
          <p>{deck.name}</p>
        </h5>
        <div class="card-body">
        <p>{deck.description}</p>
        <p>Number of cards </p>
        </div>
        <NavLink to={`/decks/${deckId}/study`}>
          <button> Study </button>
        </NavLink>
        <NavLink to={`/decks/${deckId}`}>
          <button> View </button>
        </NavLink>
        <button onClick={deleteHandler}>Delete</button>

        <Switch>
          <Route path={`${url}/${deckId}`}>
            <DeckProfileMain deck={deck} />
          </Route>
          <Route path={`/decks/${deckId}/study`}>
            <StudyCardsMain deckId={deckId} deck={deck} />
          </Route>
        </Switch>
      </div>
    </article>
  );
};

export default Deck;
