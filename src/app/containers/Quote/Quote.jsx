import React, { useState, useEffect } from "react";
import { charactersImages } from "../../data/charactersImages";

import { cn } from "../../helpers/classname";

import "./Quote.scss";

const quoteClassName = cn("quote");
const nextClassName = cn("next");

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
    <div>
      <div className={quoteClassName("layout")}>
        <span className={quoteClassName("text")}>
          "{quote.quote}"
          <p className={quoteClassName("character")}>- {quote.character}</p>
        </span>
        <img
          className={quoteClassName("character-image")}
          src={characterImage}
          alt="character"
        />
      </div>
      <div className={nextClassName("button-layout")}>
        <button
          className={nextClassName("button")}
          onClick={() => {
            getNextQuote();
          }}
        >
          Next quote
        </button>
      </div>
    </div>
  );
};
