import Board from "./components/board";
import Keyboard from "./components/keyboard";
import { useState } from "react";
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

  console.log("answer is: ", answer);
  return (
    <div>
      <Board guesses={guesses} currentGuess={currentGuess} />
      <Keyboard />
    </div>
  );
}

export default App;
