import React, { useState, useEffect } from "react";

import { charactersImages } from "../../data/charactersImages";

import { cn } from "../../helpers/classname";

import { Loader } from "../../components/Loader";

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

  useEffect(getNextQuote, []);

  if (quote === null) {
    return <Loader />;
  }

  const characterImage = charactersImages[quote.character];

  return (
    <div>
      <div className={quoteClassName("layout")}>
        <div className={quoteClassName("text")}>
          "{quote.quote}"
          <div className={quoteClassName("character")}>- {quote.character}</div>
        </div>
        <img
          className={quoteClassName("character-image")}
          src={characterImage}
          alt="character"
        />
      </div>
      <div className={nextClassName("button-layout")}>
        <button className={nextClassName("button")} onClick={getNextQuote}>
          Next quote
        </button>
      </div>
    </div>
  );
};
