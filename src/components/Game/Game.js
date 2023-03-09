import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

const GAME_STATE = {
  InProgress: "inprogress",
  Happy: "happy",
  Sad: "sad",
};

function Game() {
  const [guesses, setGuesses] = useState(
    range(0, NUM_OF_GUESSES_ALLOWED).map((num) => {
      return { guess: "", id: num };
    })
  );

  const [attempt, setAttempt] = useState(0);

  const [gameState, setGameState] = useState(GAME_STATE.InProgress);

  const onSubmitGuess = (guess) => {
    if (attempt >= NUM_OF_GUESSES_ALLOWED) return;

    const nextGuesses = [...guesses];
    nextGuesses[attempt].guess = guess;
    setGuesses(nextGuesses);

    updateGameState(guess);
  };

  const updateGameState = (guess) => {
    setAttempt(attempt + 1);
    const result = checkGuess(guess, answer);

    if (result.every((r) => r.status === "correct"))
      setGameState(GAME_STATE.Happy);
    else if (attempt + 1 === NUM_OF_GUESSES_ALLOWED)
      setGameState(GAME_STATE.Sad);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        submitGuess={onSubmitGuess}
        canSubmitGuess={gameState === GAME_STATE.InProgress}
      />
      {gameState === GAME_STATE.Happy && <HappyBanner attempts={attempt} />}
      {gameState === GAME_STATE.Sad && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
