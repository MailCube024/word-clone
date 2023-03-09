import React, { useState } from "react";

const GuessInput = ({ submitGuess }) => {
  const [guess, setGuess] = useState("");

  const capitalize = (str) => str.toUpperCase();

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        submitGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        type="text"
        value={guess}
        onChange={(evt) => {
          setGuess(capitalize(evt.target.value));
        }}
      />
    </form>
  );
};

export default GuessInput;
