import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map((num) => {
      return { guess: "", id: num };
    })
  );

  const [attempt, setAttempt] = useState(0);

  const onSubmitGuess = (guess) => {
    if (attempt >= NUM_OF_GUESSES_ALLOWED) return;

    const nextGuesses = [...guesses];
    nextGuesses[attempt].guess = guess;
    setGuesses(nextGuesses);
    setAttempt(attempt + 1);
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
