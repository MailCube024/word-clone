import React from "react";
import { range } from "../../utils";
import { MAX_LENGTH_WORDS } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const getBlankCells = () => {
    return range(0, MAX_LENGTH_WORDS).map((num) => (
      <span key={num} className="cell"></span>
    ));
  };

  if (!guess) return getBlankCells();

  const result = checkGuess(guess, answer);

  return (
    <>
      {result.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
