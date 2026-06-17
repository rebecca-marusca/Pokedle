import Board from "./components/board";
import Keyboard from "./components/keyboard";
import { useState, useEffect } from "react";
import { getRandomPokemon } from "./words";

function App() {
  const [answer, setAnswer] = useState(getRandomPokemon);
  const [guesses, setGuesses] = useState([
    [
      { letter: "c", status: "correct" },
      { letter: "r", status: "absent" },
      { letter: "a", status: "present" },
      { letter: "n", status: "absent" },
      { letter: "e", status: "correct" },
    ],
  ]);
  const [currentGuess, setCurrentGuess] = useState("slate");

  function handleKey(key) {
    if (key === "Enter") {
      if (currentGuess.length !== 5) return;

      const newRow = currentGuess.split("").map((letter) => ({
        letter,
        status: "",
      }));

      setGuesses((prev) => [...prev, newRow]);
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
      <Board guesses={guesses} currentGuess={currentGuess} />
      <Keyboard onKey={handleKey} />
    </div>
  );
}

export default App;
