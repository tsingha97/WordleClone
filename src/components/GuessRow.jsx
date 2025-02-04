import React from "react";

const evaluateGuess = (guess, solution) => {
  const result = [];
  const solutionLetters = solution.split("");
  const guessLetters = guess.split("");

  // First pass: mark greens and count letters for yellows.
  const letterCount = {};
  solutionLetters.forEach((letter, i) => {
    if (guessLetters[i] === letter) {
      result.push({ letter, status: "green" });
    } else {
      result.push({ letter: guessLetters[i] || "", status: "default" });
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  });

  // Second pass: mark yellows and grays.
  result.forEach((entry, i) => {
    if (entry.status === "default") {
      if (
        entry.letter &&
        solution.includes(entry.letter) &&
        letterCount[entry.letter] > 0
      ) {
        result[i].status = "yellow";
        letterCount[entry.letter]--;
      } else {
        result[i].status = "gray";
      }
    }
  });

  return result;
};

const GuessRow = ({ guess, solution, submitted }) => {
  let evaluated;

  if (submitted && guess) {
    // If submitted, evaluate and show color feedback.
    evaluated = evaluateGuess(guess, solution);
  } else {
    // If not submitted, display letters as typed without evaluation.
    const letters = guess.split("");
    evaluated = [];
    for (let i = 0; i < 5; i++) {
      evaluated.push({ letter: letters[i] || "", status: "empty" });
    }
  }

  // Mapping status to Tailwind classes.
  const statusClasses = {
    green: "bg-green-500 border-green-500 text-white",
    yellow: "bg-yellow-500 border-yellow-500 text-white",
    gray: "bg-gray-500 border-gray-500 text-white",
    empty: "border-gray-300",
  };

  return (
    <div className="grid grid-cols-5 gap-1">
      {evaluated.map((entry, index) => (
        <div
          key={index}
          className={`w-12 h-12 md:w-16 md:h-16 border-2 flex items-center justify-center text-2xl font-bold ${
            statusClasses[entry.status]
          }`}
        >
          {entry.letter}
        </div>
      ))}
    </div>
  );
};

export default GuessRow;
