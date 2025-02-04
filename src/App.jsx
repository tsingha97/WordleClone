import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import { validWords, getRandomWord } from "./data/wordList";

const App = () => {
  const [solution, setSolution] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]); // Array of submitted guesses
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState("");
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'won', 'lost'

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameStatus !== "playing") return; // Stop input if game over

      const { key } = event;
      if (key === "Enter") {
        submitGuess();
      } else if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, gameStatus]);

  const submitGuess = () => {
    if (currentGuess.length !== 5) {
      setMessage("Please enter a 5-letter word.");
      return;
    }

    // Validate the word. If invalid, display a message and clear the row.
    if (!validWords.includes(currentGuess)) {
      setMessage("Invalid word. Try again.");
      setCurrentGuess("");
      return;
    }

    // Valid guess: update the guesses array, clear the current guess, and remove any message.
    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess("");
    setMessage("");

    if (currentGuess === solution) {
      setGameStatus("won");
      setMessage("Congratulations! You win!");
    } else if (newGuesses.length === 6) {
      setGameStatus("lost");
      setMessage(`Game Over! The word was ${solution}.`);
    }
  };

  const startNewGame = () => {
    setSolution(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("playing");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Wordle Clone</h1>
      <Grid guesses={guesses} currentGuess={currentGuess} solution={solution} />
      {message && <p className="mt-4 text-lg text-gray-700">{message}</p>}
      {gameStatus !== "playing" && (
        <button
          onClick={startNewGame}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          New Game
        </button>
      )}
      <p className="mt-2 text-sm text-gray-500">
        Type your guess and press Enter.
      </p>
    </div>
  );
};

export default App;
