import Board from "./components/board";
import Keyboard from "./components/keyboard";
import { useState, useEffect } from "react";
import { getRandomPokemon } from "./words";
import { checkGuess, getLetterStatuses } from "./utils.js";

function App() {
  const [answer, setAnswer] = useState(getRandomPokemon);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const lastGuess = guesses[guesses.length - 1];
  const hasWon = lastGuess?.every((tile) => tile.status === "correct");
  const hasLost = !hasWon && guesses.length === 6;
  const letterStatuses = getLetterStatuses(guesses);

  function handleKey(key) {
    if (hasWon || hasLost) return;
    if (key === "Enter") {
      if (currentGuess.length !== 5) return;

      const result = checkGuess(currentGuess, answer);
      setGuesses((prev) => [...prev, result]);
      setCurrentGuess("");
    } else if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(key)) {
      setCurrentGuess((prev) => {
        if (prev.length >= 5) return prev;
        return prev + key.toLowerCase();
      });
    }
  }

  useEffect(() => {
    function onKeyDown(e) {
      handleKey(e.key);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentGuess, guesses]);

  console.log("answer is: ", answer);
  return (
    <div>
      {hasWon && <div className="message">You won!</div>}
      {hasLost && (
        <div className="message">
          You lost! The pokemon was {answer.toUpperCase()}
        </div>
      )}
      <Board guesses={guesses} currentGuess={currentGuess} />
      <Keyboard onKey={handleKey} letterStatuses={letterStatuses} />
    </div>
  );
}

export default App;
