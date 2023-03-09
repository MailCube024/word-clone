import React from "react";
import { range } from "../../utils";
import { MAX_LENGTH_WORDS } from "../../constants";

function Guess({ guess }) {
  const characters = [...guess];

  const getCell = (index, char = "") => (
    <span key={index} className="cell">
      {char}
    </span>
  );

  const getBlankCells = () => {
    return range(0, MAX_LENGTH_WORDS).map((num) => getCell(num));
  };

  return characters.length > 1
    ? characters.map((c, index) => getCell(index, c))
    : getBlankCells();
}

export default Guess;
