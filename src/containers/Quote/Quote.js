import React, { useState, useEffect } from "react";
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

  return (
    <div className="">
      {quote.quote} ({quote.character})
      <button
        onClick={() => {
          getNextQuote();
        }}
      >
        Next
      </button>
    </div>
  );
};
