import Board from "./components/board";
import Keyboard from "./components/keyboard";
import { useState } from "react";
import { getRandomPokemon } from "./words";

function App() {
  const [answer, setAnswer] = useState(getRandomPokemon);
  const [guesses, setGuesses] = useState([]);
  const [currGuess, setCurrGuess] = useState(" ");

  console.log("answer is: ", answer);
  return (
    <div>
      <Board />
      <Keyboard />
    </div>
  );
}

export default App;
