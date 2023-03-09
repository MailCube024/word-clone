import React from "react";

function GuessList({ guesses }) {
  return (
    <div>
      {guesses.map(({ id, guess }) => (
        <p className="guess" key={id}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
