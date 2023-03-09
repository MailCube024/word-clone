import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const onSubmitGuess = (guess) => {
    const nextGuesses = [
      ...guesses,
      {
        guess: guess,
        id: crypto.randomUUID(),
      },
    ];
    setGuesses(nextGuesses);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput submitGuess={onSubmitGuess} />
    </>
  );

  // return <>Put a game here!</>;
}

export default Game;
