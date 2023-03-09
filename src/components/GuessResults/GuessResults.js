import React from "react";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) => (
        <p className="guess" key={id}>
          <Guess guess={guess} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
