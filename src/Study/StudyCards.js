import React, { Fragment } from "react";
import readDeck from "../utils/api/index.js";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function StudyCards() {
  //   reqires flip button
  //   reqires next button
  //   access cards within the specific deck and show them using readDeck

  return (
    <Fragment>
      <p>This is a study element</p>
    </Fragment>
  );
}

export default StudyCards;
