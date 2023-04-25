import React, { useEffect, useState, Fragment } from "react";

import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import DeckProfileMain from "../DeckProfile/DeckProfileMain";
import StudyCardsMain from "../Study/StudyCardsMain";
/*
  TODO: Change the link below to go to the user route, using the user's ID.
  /users/:userId
*/
function deleteHandler() {}

export const Card = ({ cardId, card }) => {
  const [Cards, setCards] = useState([]);
  const { url } = useRouteMatch();

  return (
    //   <article>

    //     <div>

    //       <h3>
    //         <p>{card.name}</p>

    //       </h3>
    //               <p>{card.description}</p>
    //        <p>Number of cards </p>
    //       <NavLink to={`/decks/${cardId}/study`}>
    //   <button> Study </button>
    // </NavLink>
    //   <NavLink to={`/decks/${cardId}`}>
    //   <button> View </button>
    // </NavLink>
    //       <button onClick={deleteHandler}>
    //   Delete
    // </button>

    // <Switch>
    //           <Route path={`${url}/${deckId}`}>
    //             <DeckProfileMain deckId ={deckId} />
    //           </Route>
    //             <Route path={`${url}${deckId}/study`}>
    //             <StudyCardsMain deckId ={deckId} />
    //           </Route>

    //           </Switch>

    //     </div>
    //   </article>
    <p>"card"</p>
  );
};

export default Card;
