import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./DeckList";

function Layout({ Decks }) {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        {/* Create Deck Button */}
        {/* Render the deck componet */}
        <DeckList Decks={Decks} />
        <NotFound />
      </div>
    </React.Fragment>
  );
}

export default Layout;
