import React from "react";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) => (
        <p className="guess" key={id}>
          <Guess guess={guess} answer={answer} />
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
