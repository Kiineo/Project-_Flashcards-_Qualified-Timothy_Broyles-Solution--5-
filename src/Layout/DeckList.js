import React, { useEffect, useState, Fragment } from "react";

import {
  Link,
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import StudyCardsMain from "../Study/StudyCardsMain";
import CreateDeck from "../CreateDeck/CreateDeck";
import Deck from "./Deck";

function DeckList({ Decks }) {
  const list = Decks.map((deck) => <Deck deckId={deck.id} deck={deck} />);
  const studyList = Decks.map((deck) => (
    <StudyCardsMain deckId={deck.id} deck={deck} />
  ));
  //  let studyListRoute = emptyArr.map((deck) =>
  //   <Router>
  //   <Switch>
  //   </Switch>
  //   </Router>)

  return (
    <React.Fragment>
      <main className="container">
        <NavLink to={`/decks/new`}>
          <button> + Create Deck </button>
        </NavLink>
        <section className="row">{list}</section>
        {/* <section className="row">{studyList}</section> */}
      </main>
    </React.Fragment>
  );
}

export default DeckList;
