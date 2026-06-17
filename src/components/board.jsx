import Tile from "./tile";

function buildRows(guesses, currentGuess) {
  const rows = [...guesses]; //past guesses

  if (rows.length < 6) {
    const currentRow = currentGuess.split("").map((letter) => ({
      letter,
      status: "",
    }));

    while (currentRow < 5) {
      currentRow.push({
        letter: "",
        status: "empty",
      });
    }

    rows.push(currentRow);
  }

  while (rows.length < 6) {
    rows.push(
      Array.from({ length: 5 }, () => ({
        letter: "",
        status: "empty",
      })),
    );
  }

  return rows;
}

function Board({ guesses, currentGuess }) {
  const rows = buildRows(guesses, currentGuess);

  return (
    <div className="board">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((tile, tileIndex) => (
            <Tile key={tileIndex} letter={tile.letter} status={tile.status} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
