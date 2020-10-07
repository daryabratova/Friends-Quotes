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
    <div className="layout">
      <div className="quote">
        <span className="quote__text">
          {quote.quote} 
          <p className="quote__text-character">{quote.character}</p>
        </span>
          <img className="quote__image" src={characterImage} alt="character"></img>
      </div>
      <div className="next-quote">
      <button className="next-quote__button"
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
