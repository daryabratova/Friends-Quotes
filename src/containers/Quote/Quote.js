import React, { useState, useEffect } from "react";
import { charactersImages } from "../../data/charactersImages";
import "./Quote.scss";

export const Quote = () => {
  const [quote, setQuote] = useState(null);

  const getNextQuote = () => {
    fetch("https://friends-quotes-api.herokuapp.com/quotes/random")
      .then((response) => response.json())
      .then((body) => {
        setQuote(body);
      });
  };

  useEffect(() => {
    getNextQuote();
  }, []);

  if (quote === null) {
    return <div>Loading...</div>;
  }

  const characterImage = charactersImages[quote.character];

  return (
    <div className="">
      {quote.quote} ({quote.character})
      <img src={characterImage} alt="character"></img>
      <button
        onClick={() => {
          getNextQuote();
        }}
      >
        Next quote
      </button>
    </div>
  );
};
