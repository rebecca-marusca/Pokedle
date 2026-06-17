function Keyboard({ onKey }) {
  const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const row3 = ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"];

  function renderKey(key) {
    const isSpecial = key === "Enter" || key === "Backspace";

    return (
      <button
        key={key}
        className={`key ${isSpecial ? "key--wide" : ""}`}
        onClick={() => onKey(key)}
      >
        {key === "Backspace" ? "⌫" : key.toUpperCase()}
      </button>
    );
  }

  return (
    <div className="keyboard">
      <div className="keyboard-row">{row1.map(renderKey)}</div>
      <div className="keyboard-row">{row2.map(renderKey)}</div>
      <div className="keyboard-row">{row3.map(renderKey)}</div>
    </div>
  );
}

export default Keyboard;
