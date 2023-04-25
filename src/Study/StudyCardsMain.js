import React, { Fragment, useEffect, useState } from "react";

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
import { readDeck } from "../utils/api/index";

export const StudyCardsMain = (Decks) => {
  const history = useHistory();
  // const [visable, setVisable] = useState(true);

  const [currentCardIdx, setCurrentCardIdx] = useState(0);

  function clickHandler() {
    if (currentCardIdx <= Cards.length) {
      setCurrentCardIdx(currentCardIdx + 1);
    } else {
      if (
        window.confirm(
          "Restart cards? Click 'cancel' to return to the home page"
        )
      ) {
        setCurrentCardIdx(currentCardIdx - Cards.length);
      } else {
        history.push("/");
      }
    }
  }

  const { deckId } = useParams();
  const { url } = useRouteMatch();

  const [Cards, setCards] = useState([]);
  const [Title, setTitle] = useState([]);
  const [CurrentDeck, setCurrentDeck] = useState([]);

  useEffect(() => {
    readDeck(deckId).then((response) => {
      setTitle(response.name);
      setCards(response.cards);
      setCurrentDeck(response.deckId);
      console.log(Cards);
    });
  }, []);

  //   use the readDeck function somehow
  //   reqires flip button
  //   reqires next button
  //   access cards within the specific deck and show them using readDeck
  let collectionOfCards = [];

  const cardForm = Cards.map((v, idx) => {
    let frontCard = (
      <div>
        <div class="card" style={{ width: 1000 }}>
          <h5 class="card-title">
            {" "}
            Card {idx + 1} of {Cards.length}
          </h5>
          <div class="card-body">{v.front}</div>
        </div>
        <button onClick={clickHandler}>Flip</button>
      </div>
    );
    let backCard = (
      <div>
        <div class="card" style={{ width: 1000 }}>
          <h5 class="card-title">
            {" "}
            Card {idx + 1} of {Cards.length}
          </h5>
          <div class="card-body">{v.back}</div>
        </div>
        <button onClick={clickHandler}>Next</button>
      </div>
    );
    collectionOfCards.push(frontCard);
    collectionOfCards.push(backCard);
  });

  return (
    <Fragment>
      <Header />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{Title}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
      <h1>Study:{Title}</h1>
      <div>{collectionOfCards[currentCardIdx]}</div>

      {cardForm}
    </Fragment>
  );
};

export default StudyCardsMain;
