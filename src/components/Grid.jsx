import React from "react";
import GuessRow from "./GuessRow";

const Grid = ({ guesses, currentGuess, solution, maxAttempts = 6 }) => {
  const rows = [];

  for (let i = 0; i < maxAttempts; i++) {
    if (i < guesses.length) {
      // Final, submitted guesses: show color feedback.
      rows.push(
        <GuessRow
          key={i}
          guess={guesses[i]}
          solution={solution}
          submitted={true}
        />
      );
    } else if (i === guesses.length) {
      // Current guess row: not submitted, so no color feedback.
      rows.push(
        <GuessRow
          key={i}
          guess={currentGuess}
          solution={solution}
          submitted={false}
        />
      );
    } else {
      // Empty rows for remaining attempts.
      rows.push(
        <GuessRow key={i} guess="" solution={solution} submitted={false} />
      );
    }
  }

  return <div className="space-y-2">{rows}</div>;
};

export default Grid;
